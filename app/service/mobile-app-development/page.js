import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Hero from "@/components/view/mobileappdevelopment/hero";
import Portofolio from "@/components/view/mobileappdevelopment/portofolio";
import ReadyToMeet from "@/components/view/mobileappdevelopment/readyToMeet";

export default function MobileAppDevelopment() {
  return (
    <>
      <Hero></Hero>
      <Portofolio></Portofolio>
      <SoftwareDevelopmentIndustry></SoftwareDevelopmentIndustry>
      <ReadyToMeet></ReadyToMeet>
      <FAQ></FAQ>
    </>
  );
}
