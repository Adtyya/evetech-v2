import BlogList from "@/components/view/blog/BlogList";
import { unstable_setRequestLocale } from "next-intl/server";
import api from "@/utils/axios";
import { Suspense } from "react";

export const revalidate = 84000;

async function getLatestsAndFeatures() {
  const res = await api.get(
    "/posts?populate=*&sort=createdAt:desc&pagination[page]=1&pagination[pageSize]=30"
  );
  return res.data;
}

async function getTops() {
  const res = await api.get(
    "/posts?populate=*&sort=views:desc&pagination[page]=1&pagination[pageSize]=3"
  );
  return res.data;
}

export default async function BlogPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);

  const featuresAndLatest = await getLatestsAndFeatures();
  const topPosts = await getTops();

  return (
    <>
      <Suspense fallback={<></>}>
        <BlogList
          latestPosts={featuresAndLatest.data?.slice(5) || []}
          metaInfoLatestPosts={featuresAndLatest.meta || null}
          featuresPosts={featuresAndLatest.data?.slice(0, 5) || []}
          topPosts={topPosts?.data || []}
        ></BlogList>
      </Suspense>
    </>
  );
}
