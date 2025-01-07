import api from "@/utils/axios";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(req) {
  const allPosts = [];
  let page = 1;
  let pageSize = 100;
  let hasMore = true;

  while (hasMore) {
    const response = await api.get(`/blog/available?lang=en`, {
      params: {
        page: page,
        perPage: pageSize,
      },
    });

    const data = response?.data?.docs;
    allPosts.push(...data);

    hasMore = data.length === pageSize;
    page++;
  }

  const sitemapEntries = allPosts.flatMap((item) => [
    {
      loc: `https://evetechsolution.com/id/blog/read/${
        item?.slug || item?.slugEN
      }`,
      lastmod: item?.date,
      priority: 1,
      changefreq: "daily",
    },
    {
      loc: `https://evetechsolution.com/en/blog/read/${
        item?.slug || item?.slugEN
      }`,
      lastmod: item?.date,
      priority: 1,
      changefreq: "daily",
    },
  ]);

  const sitemap = getServerSideSitemap(sitemapEntries);

  sitemap.headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  };

  return sitemap;
}
