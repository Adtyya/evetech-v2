import Hero from "@/components/view/career/hero";
import OurValues from "@/components/view/career/ourvalues";
import RecentPositions from "@/components/view/career/recentpositions";
import RecruitmentProcess from "@/components/view/career/recruitmentprocess";
import api from "@/utils/axios";

async function getRecentVacancies() {
  const res = await api.get(
    "/careers?populate=*&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=3"
  );
  return res.data;
}

export const revalidate = 3600;

export default async function CareerPage() {
  const { data } = await getRecentVacancies();

  return (
    <>
      <Hero></Hero>
      <OurValues></OurValues>
      <RecruitmentProcess></RecruitmentProcess>
      <RecentPositions listVacancies={data ?? []}></RecentPositions>
    </>
  );
}
