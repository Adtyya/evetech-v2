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
    `/blog/available?exclude=${slug}&page=1&perPage=3${lang === "en" ? "&lang=en" : ""}`
  );
  return res?.data || null;
}

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export async function generateMetadata({ params }) {
  const detailPost = await getDetailPost(params.slug);

  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/${params.lang ?? "en"}/blog/read/${
        detailPost?.slug
      }`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    title: `${detailPost?.title} - Evetech Solution`,
    description: detailPost?.spoiler,
    openGraph: {
      images:
        detailPost?.image ??
        "/images/career/sample.jpg",
    },
  };
}

export default async function ReadBlog({ params: { lang, slug } }) {
  unstable_setRequestLocale(lang || null);

  const detailPost = await getDetailPost(slug);
  const otherPosts = await getOtherPost(slug, lang);

  return <Read detailPost={detailPost} otherPosts={otherPosts?.docs} />;
}
