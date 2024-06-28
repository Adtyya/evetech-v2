import Read from "@/components/view/blog/Read";
import { unstable_setRequestLocale } from "next-intl/server";
import api from "@/utils/axios";

async function getDetailPost(slug) {
  const res = await api.get(`/posts?populate=*&filters[slug][$eq]=${slug}`);
  return res.data?.data[0] || null;
}

async function getOtherPost(slug) {
  const res = await api.get(
    `/posts?populate=*&filters[slug][$ne]=${slug}&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=3`
  );
  return res.data?.data || null;
}

export const dynamic = "force-dynamic";
export const revalidate = 840000;

export async function generateMetadata({ params }) {
  const detailPost = await getDetailPost(params.slug);

  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/${params.lang ?? "en"}/blog/read/${
        detailPost?.attributes?.slug
      }`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    title: `${detailPost?.attributes?.title} - Evetech Solution`,
    description: detailPost?.attributes?.description ,
    openGraph: {
      images:
        detailPost?.attributes?.cover?.data?.attributes?.url ??
        "/images/career/sample.jfif",
    },
  };
}

export default async function ReadBlog({ params: { lang, slug } }) {
  unstable_setRequestLocale(lang || null);

  const detailPost = await getDetailPost(slug);
  const otherPosts = await getOtherPost(slug);

  return <Read detailPost={detailPost} otherPosts={otherPosts} />;
}
