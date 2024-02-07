"use client";

import Hero from "./hero";
import ProvideService from "./provideService";
import { useEffect } from "react";
import Aos from "aos";

export default function WrapWithAOS() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Hero></Hero>
      <ProvideService></ProvideService>
    </>
  );
}
