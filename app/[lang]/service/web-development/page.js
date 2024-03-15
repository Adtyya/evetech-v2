import FAQ from "@/components/view/global/FAQ";
import SoftwareDevelopmentIndustry from "@/components/view/home/softwareDevelopmentIndustry";
import Hero from "@/components/view/webdevelopment/hero";
import Portofolio from "@/components/view/webdevelopment/portofolio";
import ReadyToMeet from "@/components/view/webdevelopment/readyToMeet";

export default function WebDevelopment() {
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
