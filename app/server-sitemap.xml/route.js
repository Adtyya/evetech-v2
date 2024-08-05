import api from "@/utils/axios";
import { getServerSideSitemap } from "next-sitemap";

export async function GET(req) {
  // const urls = await api.get("/posts?sort=createdAt:desc");
  // return getServerSideSitemap(
  //   urls.data?.data?.map((item) => {
  //     return {
  //       loc: `https://evetechsolution.com/blog/read/${item?.attributes?.slug}`,
  //       lastmod: item?.attributes?.updatedAt,
  //       priority: 1,
  //       changefreq: "daily",
  //     };
  //   })
  // );
  
  const allPosts = [];
  let page = 1;
  let pageSize = 100; // Adjust this based on your API's max page size
  let hasMore = true;

  while (hasMore) {
    const response = await api.get(`/posts`, {
      params: {
        sort: 'createdAt:desc',
        pagination: {
          page: page,
          pageSize: pageSize
        }
      }
    });
    
    const data = response.data?.data;
    allPosts.push(...data);
    
    // Check if there are more pages
    hasMore = data.length === pageSize;
    page++;
  }

  return getServerSideSitemap(
    allPosts.map((item) => {
      return {
        loc: `https://evetechsolution.com/blog/read/${item?.attributes?.slug}`,
        lastmod: item?.attributes?.updatedAt,
        priority: 1,
        changefreq: "daily",
      };
    })
  );
}
