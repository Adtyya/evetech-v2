import CMSFeatures from "@/components/view/newsdevelopment/featuresCMS";
import FeaturesWeOffer from "@/components/view/newsdevelopment/featuresWeOffer";
import Hero from "@/components/view/newsdevelopment/hero";
import OurLatestProjects from "@/components/view/newsdevelopment/ourLatestProject";
import WhyChooseUs from "@/components/view/newsdevelopment/whyChooseUs";

export default function NewsPage() {
  return (
    <>
      <Hero></Hero>
      <WhyChooseUs></WhyChooseUs>
      <OurLatestProjects></OurLatestProjects>
      <FeaturesWeOffer></FeaturesWeOffer>
      <CMSFeatures></CMSFeatures>
    </>
  );
}
