import api from "@/utils/axios";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(req) {
  const urls = await api.get("/posts");
  return getServerSideSitemap(
    urls.data?.data?.map((item) => {
      return {
        loc: `https://evetechsolution.com/blog/read/${item?.attributes?.slug}`,
        lastmod: item?.attributes?.updatedAt,
        priority: 1,
        changefreq: "weekly",
      };
    })
  );
}
