"use client";

import Hero from "./hero";
import ProvideService from "./provideService";
import { useEffect } from "react";
import Aos from "aos";
import TimeToMakeChange from "./timeToMakeChange";
import QualityDriven from "./qualityDriven";
import OurProducts from "./ourProducts";
import KeyFeatures from "./keyFeatures";
import SoftwareDevelopmentIndustry from "./softwareDevelopmentIndustry";
import OurClient from "./ourClient";
import TechnologySet from "./technologySet";
import OurLatestProjects from "./ourLatestProject";
import Blog from "./blog";

export default function WrapWithAOS() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <TimeToMakeChange></TimeToMakeChange>
      <QualityDriven></QualityDriven>
      <OurProducts></OurProducts>
      <KeyFeatures></KeyFeatures>
      <SoftwareDevelopmentIndustry></SoftwareDevelopmentIndustry>
      <OurClient></OurClient>
      <TechnologySet></TechnologySet>
      <OurLatestProjects></OurLatestProjects>
      <Blog></Blog>
    </>
  );
}
