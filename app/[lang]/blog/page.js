import BlogList from "@/components/view/blog/BlogList";
import { unstable_setRequestLocale } from "next-intl/server";
import api from "@/utils/axios";

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
      <BlogList
        latestPosts={featuresAndLatest}
        featuresPosts={featuresAndLatest.data?.slice(1, 5) || []}
        topPosts={topPosts?.data || []}
      ></BlogList>
    </>
  );
}
