import api from "@/utils/axios";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(req) {
  const allPosts = [];
  let page = 1;
  let pageSize = 100; // Adjust this based on your API's max page size
  let hasMore = true;

  while (hasMore) {
    const response = await api.get(`/blog/available`, {
      params: {
        page: page,
        perPage: pageSize,
      },
    });

    const data = response?.data?.docs;
    allPosts.push(...data);

    // Check if there are more pages
    hasMore = data.length === pageSize;
    page++;
  }

  console.log("Has more:", hasMore);

  const sitemap = getServerSideSitemap(
    allPosts.map((item) => ({
      loc: `https://evetechsolution.com/blog/read/${item?.slug}`,
      lastmod: item?.date,
      priority: 1,
      changefreq: "daily",
    }))
  );

  sitemap.headers = {
    "Cache-Control": "no-cache, no-store, must-revalidate",
  };

  return sitemap;
}
