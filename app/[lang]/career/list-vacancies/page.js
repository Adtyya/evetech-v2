import Hero from "@/components/view/career/hero";
import RecentOpenPosition from "@/components/view/listvacancies/recentopen";
import api from "@/utils/axios";

async function getAllVacancies() {
  const res = await api.get(
    "/careers?populate=*&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=25"
  );
  return res.data;
}

export const revalidate = 3600;

export default async function ListVacanciesPage() {
  const { data } = await getAllVacancies();

  return (
    <>
      <Hero></Hero>
      <RecentOpenPosition listVacancies={data}></RecentOpenPosition>
    </>
  );
}
