import Hero from "@/components/view/career/hero";
import RecentOpenPosition from "@/components/view/listvacancies/recentopen";
import api from "@/utils/axios";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

async function getAllVacancies(position, location, workModel, page) {
  const queryParams = [
    position !== ""
      ? `department=${encodeURIComponent(position)}`
      : null,
    location !== ""
      ? `location=${encodeURIComponent(location)}`
      : null,
    workModel !== ""
      ? `workModel=${encodeURIComponent(workModel)}`
      : null,
  ]
    .filter(Boolean)
    .join("&");

  const searchQuery = queryParams ? `&${queryParams}` : "";

  const res = await api.get(
    `/career/available?${searchQuery}&page=${page}&perPage=25`
  );
  return res.data;
}

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({
    locale,
    namespace: "Metadata.listvacancies",
  });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/career/list-vacancies",
    },
  };
}

export default async function ListVacanciesPage({
  params: { lang },
  searchParams,
}) {
  const list = await getAllVacancies(
    searchParams?.position ?? "",
    searchParams?.location ?? "",
    searchParams?.workModel ?? "",
    searchParams.page ?? 1
  );

  unstable_setRequestLocale(lang);

  return (
    <>
      <Hero />
      <RecentOpenPosition
        listVacancies={list?.docs ?? []}
        paginationInfo={{
          totalDocs: list?.totalDocs || 0,
          page: list?.page || 1,
          pageCount: list?.totalPages || 0,
        }}
      />
    </>
  );
}
