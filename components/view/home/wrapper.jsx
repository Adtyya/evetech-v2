"use client";

import Hero from "./hero";
import ProvideService from "./provideService";
import { useEffect } from "react";
import Aos from "aos";
import TimeToMakeChange from "./timeToMakeChange";
import QualityDriven from "./qualityDriven";

export default function WrapWithAOS() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <TimeToMakeChange></TimeToMakeChange>
      <QualityDriven></QualityDriven>
      {/* <div className="h-screen"></div> */}
    </>
  );
}
