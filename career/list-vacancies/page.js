import Hero from "@/components/view/career/hero";
import RecentOpenPosition from "@/components/view/listvacancies/recentopen";
import api from "@/utils/axios";

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

export const revalidate = 3600;

export default async function ListVacanciesPage({ _, searchParams }) {
  const list = await getAllVacancies(
    searchParams?.position ?? "",
    searchParams?.location ?? "",
    searchParams?.workModel ?? "",
    searchParams.page ?? 1
  );

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
