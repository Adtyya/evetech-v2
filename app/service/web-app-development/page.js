import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Hero from "@/components/view/webappdevelopment/hero";
import Portofolio from "@/components/view/webappdevelopment/portofolio";
import ReadyToMeet from "@/components/view/webappdevelopment/readyToMeet";

export default function WebAppDevelopment() {
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
