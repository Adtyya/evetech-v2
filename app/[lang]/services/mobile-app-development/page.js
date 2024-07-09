import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Hero from "@/components/view/mobileappdevelopment/hero";
import OurAgile from "@/components/view/mobileappdevelopment/ourAgile";
import Portofolio from "@/components/view/mobileappdevelopment/portofolio";
import ReadyToMeet from "@/components/view/webdevelopment/readyToMeet";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.mobile" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/services/mobile-app-development",
    },
  };
}

export default function MobileAppDevelopment({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Hero></Hero>
      <Portofolio></Portofolio>
      {/* <OurAgile></OurAgile> */}
      <SoftwareDevelopmentIndustry></SoftwareDevelopmentIndustry>
      <ReadyToMeet></ReadyToMeet>
      <FAQ></FAQ>
    </>
  );
}
