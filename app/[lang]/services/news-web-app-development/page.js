import FAQ from "@/components/view/global/FAQ";
import OurClient from "@/components/view/home/ourClient";
import CMSFeatures from "@/components/view/newsdevelopment/featuresCMS";
import FeaturesWeOffer from "@/components/view/newsdevelopment/featuresWeOffer";
import Hero from "@/components/view/newsdevelopment/hero";
// import OurLatestProjects from "@/components/view/newsdevelopment/ourLatestProject";
import OurLatestProjects from "@/components/view/home/ourLatestProject";
import WhyChooseUs from "@/components/view/newsdevelopment/whyChooseUs";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.news" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default function NewsPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Hero></Hero>
      <WhyChooseUs></WhyChooseUs>
      <OurLatestProjects></OurLatestProjects>
      <FeaturesWeOffer></FeaturesWeOffer>
      <CMSFeatures></CMSFeatures>
      <OurClient></OurClient>
      <FAQ></FAQ>
    </>
  );
}
