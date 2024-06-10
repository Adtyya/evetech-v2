import Hero from "@/components/view/career/hero";
import RecentOpenPosition from "@/components/view/listvacancies/recentopen";
import api from "@/utils/axios";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

async function getAllVacancies(position, location, workModel, page) {
  const queryParams = [
    position !== ""
      ? `filters[department][$eq]=${encodeURIComponent(position)}`
      : null,
    location !== ""
      ? `filters[location][$eq]=${encodeURIComponent(location)}`
      : null,
    workModel !== ""
      ? `filters[workModel][$eq]=${encodeURIComponent(workModel)}`
      : null,
  ]
    .filter(Boolean)
    .join("&");

  const searchQuery = queryParams ? `&${queryParams}` : "";

  const res = await api.get(
    `/careers?${searchQuery}&populate=*&sort=createdAt:asc&pagination[page]=${page}&pagination[pageSize]=25`
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
      <Hero></Hero>
      <RecentOpenPosition
        listVacancies={list?.data ?? []}
        paginationInfo={list?.meta?.pagination}
      ></RecentOpenPosition>
    </>
  );
}
