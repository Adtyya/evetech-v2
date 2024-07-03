import Hero from "@/components/view/career/hero";
import OurValues from "@/components/view/career/ourvalues";
import RecentPositions from "@/components/view/career/recentpositions";
import RecruitmentProcess from "@/components/view/career/recruitmentprocess";
import api from "@/utils/axios";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import { Suspense } from "react";

async function getRecentVacancies() {
  const res = await api.get(
    "/careers?populate=*&sort=createdAt:asc&pagination[page]=1&pagination[pageSize]=3"
  );
  return res.data;
}

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.career" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/career",
    },
  };
}

export default async function CareerPage({ params: { lang } }) {
  const { data } = await getRecentVacancies();
  unstable_setRequestLocale(lang);

  return (
    <>
      <Hero></Hero>
      <OurValues></OurValues>
      <RecruitmentProcess></RecruitmentProcess>
      <Suspense key={data} fallback={<div>Loading Recent Open Positions</div>}>
        <RecentPositions listVacancies={data ?? []}></RecentPositions>
      </Suspense>
    </>
  );
}
