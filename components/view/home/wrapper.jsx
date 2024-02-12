"use client";

import Hero from "./hero";
import ProvideService from "./provideService";
import { useEffect } from "react";
import Aos from "aos";
import TimeToMakeChange from "./timeToMakeChange";
import QualityDriven from "./qualityDriven";
import OurProducts from "./ourProducts";

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
    </>
  );
}
