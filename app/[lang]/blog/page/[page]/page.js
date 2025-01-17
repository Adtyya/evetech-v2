import { unstable_setRequestLocale } from "next-intl/server";
import BlogLatest from "@/components/view/blog/BlogLatest";
import api from "@/utils/axios";
import { notFound } from "next/navigation";

async function getPosts(page, lang) {
  const res = await api.get(`/blog/available?page=${page}&perPage=10${lang === "en" ? "&lang=en" : ""}`);
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

export default async function BlogPage({ params: { lang, page } }) {
  unstable_setRequestLocale(lang || null);
  const currentPage = page ? parseInt(page, 10) : 1;

  const postsData = await getPosts(currentPage, lang);
  if (!postsData || postsData.docs.length === 0) {
    return notFound();
  }

  return (
    <BlogLatest
      latestPosts={postsData.docs}
      totalPages={postsData.totalPages}
      currentPage={postsData.page}
      hasPrevPage={postsData.hasPrevPage}
      hasNextPage={postsData.hasNextPage}
    />
  );
}
