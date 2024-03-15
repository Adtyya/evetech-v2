import DetailVacanciesTop from "@/components/view/vacanciesdetail/detail";
import OtherVacancies from "@/components/view/vacanciesdetail/othervacancies";
import api from "@/utils/axios";
import { unstable_setRequestLocale } from "next-intl/server";

async function getDetailVacancies(slug) {
  const res = await api.get(`/careers?populate=*&filters[slug][$eq]=${slug}`);
  return res.data?.data[0] || null;
}

async function getOtherVacancies(slug) {
  const res = await api.get(
    `/careers?populate=*&filters[slug][$ne]=${slug}&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=3`
  );
  return res.data?.data || null;
}

export const dynamic = "force-dynamic";
export const revalidate = 360000;

export async function generateStaticParams() {
  const vacancies = await api.get("/careers");

  return vacancies.data?.data?.map((a) => ({
    slug: a.attributes.slug,
  }));
}

export async function generateMetadata({ params }) {
  const detailVacancies = await getDetailVacancies(params.slug);

  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/${params.lang ?? "en"}/career/vacancies/${
        detailVacancies?.attributes?.slug
      }`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    title: `Evetech Solution - ${detailVacancies?.attributes?.title}`,
    description: detailVacancies?.attributes?.metaDescription,
    openGraph: {
      images:
        detailVacancies?.attributes?.cover?.data?.attributes?.url ??
        "/images/career/sample.jfif",
    },
  };
}

export default async function DetailVacancies({ params }) {
  const detailVacancies = await getDetailVacancies(params.slug);
  const othervacancies = await getOtherVacancies(params.slug);
  unstable_setRequestLocale(params.lang || null);

  return (
    <>
      <div className="h-32"></div>
      <DetailVacanciesTop content={detailVacancies}></DetailVacanciesTop>
      <OtherVacancies listOther={othervacancies ?? []}></OtherVacancies>
    </>
  );
}
