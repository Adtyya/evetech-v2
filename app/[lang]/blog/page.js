import BlogList from "@/components/view/blog/BlogList";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import api from "@/utils/axios";
import { Suspense } from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getLatestsAndFeatures() {
  const res = await api.get(
    "/blog/available?page=1&perPage=45"
  );
  return res.data;
}

async function getTops() {
  const res = await api.get(
    "/blog/available-top?page=1&perPage=3"
  );
  return res.data;
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.blog" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/blog",
    },
  };
}

export default async function BlogPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);

  const featuresAndLatest = await getLatestsAndFeatures();
  const topPosts = await getTops();

  return (
    <>
      <Suspense fallback={<></>}>
        <BlogList
          latestPosts={featuresAndLatest.docs?.slice(5) || []}
          metaInfoLatestPosts={featuresAndLatest.meta || null}
          featuresPosts={featuresAndLatest.docs?.slice(0, 5) || []}
          topPosts={topPosts?.docs || []}
        />
      </Suspense>
    </>
  );
}
