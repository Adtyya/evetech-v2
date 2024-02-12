"use client";

import Hero from "./hero";
import ProvideService from "./provideService";
import { useEffect } from "react";
import Aos from "aos";
import TimeToMakeChange from "./timeToMakeChange";

export default function WrapWithAOS() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
      <TimeToMakeChange></TimeToMakeChange>
    </>
  );
}
