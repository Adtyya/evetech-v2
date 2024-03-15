import BePartOfSomethingBig from "@/components/view/aboutus/bepartofsomething";
import FounderStory from "@/components/view/aboutus/founderstory";
import Hero from "@/components/view/aboutus/hero";
// import OurTeam from "@/components/view/aboutus/ourteam";
import ProvideService from "@/components/view/aboutus/provideservice";
import OurClient from "@/components/view/home/ourClient";
import { unstable_setRequestLocale } from "next-intl/server";

export default function AboutUsPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <FounderStory></FounderStory>
      {/* <OurTeam></OurTeam> */}
      <OurClient></OurClient>
      <BePartOfSomethingBig></BePartOfSomethingBig>
    </>
  );
}
