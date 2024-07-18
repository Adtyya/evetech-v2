import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Booster from "@/components/view/webappdevelopment/booster";
import Hero from "@/components/view/webdevelopment/hero";
import Portofolio from "@/components/view/webdevelopment/portofolio";
import ReadyToMeet from "@/components/view/webdevelopment/readyToMeet";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.webdev" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/services/web-development",
    },
  };
}

export default function WebDevelopment({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Hero></Hero>
      <Portofolio></Portofolio>
      <SoftwareDevelopmentIndustry></SoftwareDevelopmentIndustry>
      <ReadyToMeet></ReadyToMeet>
      <FAQ></FAQ>
      <Booster></Booster>
    </>
  );
}
