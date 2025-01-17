import Read from "@/components/view/blog/Read";
import { unstable_setRequestLocale } from "next-intl/server";
import api from "@/utils/axios";
import { notFound } from "next/navigation";

async function getDetailPost(slug) {
  const res = await api.get(`/blog/read/${slug}`);
  return res?.data || notFound();
}

async function getOtherPost(slug, lang) {
  const res = await api.get(
    `/blog/available?exclude=${slug}&page=1&perPage=3${
      lang === "en" ? "&lang=en" : ""
    }`
  );
  return res?.data || null;
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata({ params }) {
  const detailPost = await getDetailPost(params.slug, params.lang);
  const isEnglish = params.lang === "en";

  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/${params.lang}/blog/read/${
        isEnglish ? detailPost?.slugEN || detailPost?.slug : detailPost?.slug
      }`,
      languages: {
        en: `/en`,
        id: `/id`,
      },
    },
    title: `${
      isEnglish ? detailPost?.titleEN || detailPost.title : detailPost?.title
    }`,
    description: isEnglish
      ? detailPost?.spoilerEN || detailPost.spoiler
      : detailPost?.spoiler,
    openGraph: {
      images: detailPost?.image ?? "/images/career/sample.jpg",
    },
  };
}

export default async function ReadBlog({ params: { lang, slug } }) {
  unstable_setRequestLocale(lang || null);

  const detailPost = await getDetailPost(slug);
  const otherPosts = await getOtherPost(slug, lang);

  return <Read detailPost={detailPost} otherPosts={otherPosts?.docs} />;
}
