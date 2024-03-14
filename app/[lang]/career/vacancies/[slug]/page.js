import DetailVacanciesTop from "@/components/view/vacanciesdetail/detail";
import OtherVacancies from "@/components/view/vacanciesdetail/othervacancies";
import api from "@/utils/axios";

async function getDetailVacancies(slug) {
  const res = await api.get(`/careers?populate=*&filters[slug][$eq]=${slug}`);
  return res.data?.data[0] || {};
}

export const revalidate = 360000;

export async function generateMetadata({ params }) {
  const detailVacancies = await getDetailVacancies(params.slug);

  return {
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

  return (
    <>
      <div className="h-32"></div>
      <DetailVacanciesTop content={detailVacancies}></DetailVacanciesTop>
      <OtherVacancies></OtherVacancies>
    </>
  );
}
