import BePartOfSomethingBig from "@/components/view/aboutus/bepartofsomething";
import FindMore from "@/components/view/aboutus/findMore";
import FounderStory from "@/components/view/aboutus/founderstory";
import Hero from "@/components/view/aboutus/hero";
// import OurTeam from "@/components/view/aboutus/ourteam";
import ProvideService from "@/components/view/aboutus/provideservice";
import OurClient from "@/components/view/home/ourClient";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.about" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/about-us",
    },
  };
}

export default function AboutUsPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <FindMore></FindMore>
      <FounderStory></FounderStory>
      {/* <OurTeam></OurTeam> */}
      <OurClient></OurClient>
      <BePartOfSomethingBig></BePartOfSomethingBig>
    </>
  );
}
