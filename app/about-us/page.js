import FounderStory from "@/components/view/aboutus/founderstory";
import Hero from "@/components/view/aboutus/hero";
import OurTeam from "@/components/view/aboutus/ourteam";
import ProvideService from "@/components/view/aboutus/provideservice";
import OurClient from "@/components/view/home/ourClient";

export default function AboutUsPage() {
  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <FounderStory></FounderStory>
      <OurTeam></OurTeam>
      <OurClient></OurClient>
    </>
  );
}
