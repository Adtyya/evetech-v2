import Page from "@/components/view/blog/Page";
import { unstable_setRequestLocale } from "next-intl/server";
import api from "@/utils/axios";
import { notFound } from "next/navigation";

async function getPosts(page) {
  const res = await api.get(`/blog/available?page=${page}&perPage=10`);
  return res?.data || notFound();
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata({ params }) {
  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/blog/page/${params.page}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    title: `Blog - Page ${params.page} - Evetech Solution`,
    description: "Read our latest blog posts at Evetech Solution.",
  };
}

export default async function BlogPage({ params: { page } }) {
  const currentPage = page ? parseInt(page, 10) : 1;

  const postsData = await getPosts(currentPage);
  if (!postsData || postsData.docs.length === 0) {
    return notFound();
  }

  return (
    <Page 
    latestPosts={postsData.docs}
    totalPages={postsData.totalPages}
    currentPage={postsData.page}
    hasPrevPage={postsData.hasPrevPage}
    hasNextPage={postsData.hasNextPage}
    />
  );
}
