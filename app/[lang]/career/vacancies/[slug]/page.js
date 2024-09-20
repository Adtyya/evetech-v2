import DetailVacanciesTop from "@/components/view/vacanciesdetail/detail";
import OtherVacancies from "@/components/view/vacanciesdetail/othervacancies";
import api from "@/utils/axios";
import { unstable_setRequestLocale } from "next-intl/server";

async function getDetailVacancies(slug) {
  const res = await api.get(`/career/read/${slug}`);
  return res?.data || null;
}

async function getOtherVacancies(slug) {
  const res = await api.get(
    `/career/available?exclude=${slug}&page=1&perPage=3`
  );
  return res?.data || null;
}

export const dynamic = "force-dynamic";
export const revalidate = 840000;

export async function generateStaticParams() {
  const vacancies = await api.get("/career/available");

  return vacancies.data?.docs?.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }) {
  const detailVacancies = await getDetailVacancies(params.slug);

  return {
    metadataBase: new URL("https://evetechsolution.com/"),
    alternates: {
      canonical: `/${params.lang ?? "en"}/career/vacancies/${detailVacancies?.slug}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    title: `Evetech Solution - ${detailVacancies?.title}`,
    description: detailVacancies?.metaDescription,
    openGraph: {
      images:
        detailVacancies?.image ??
        "/images/career/sample.jpg",
    },
  };
}

export default async function DetailVacancies({ params }) {
  const detailVacancies = await getDetailVacancies(params.slug);
  const othervacancies = await getOtherVacancies(params.slug);
  unstable_setRequestLocale(params.lang || null);

  return (
    <>
      <div className="h-16 lg:h-32"></div>
      <DetailVacanciesTop content={detailVacancies} />
      <OtherVacancies listOther={othervacancies?.docs || []} />
    </>
  );
}
