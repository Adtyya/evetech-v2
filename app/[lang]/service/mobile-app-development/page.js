import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Hero from "@/components/view/mobileappdevelopment/hero";
import OurAgile from "@/components/view/mobileappdevelopment/ourAgile";
import Portofolio from "@/components/view/mobileappdevelopment/portofolio";
import ReadyToMeet from "@/components/view/webdevelopment/readyToMeet";

export default function MobileAppDevelopment() {
  return (
    <>
      <Hero></Hero>
      <Portofolio></Portofolio>
      <OurAgile></OurAgile>
      <SoftwareDevelopmentIndustry></SoftwareDevelopmentIndustry>
      <ReadyToMeet></ReadyToMeet>
      <FAQ></FAQ>
    </>
  );
}
