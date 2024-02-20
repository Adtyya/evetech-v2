/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import Container from "@/components/box/container";
import Image from "next/image";
import HeroImage from "@/public/images/home/hero-home.jpg";
import Heading from "@/components/text/heading";
import TextTransition, { presets } from "react-text-transition";
import { ButtonLightBlue, ButtonWhite } from "@/components/button/button";
import { HiOutlineChevronDown } from "react-icons/hi";

const TEXTS = ["Software", "Web App", "Mobile App"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="h-screen w-full relative">
      <Image
        src={HeroImage}
        alt="hero"
        fill
        sizes="(max-width: 768px) 100vw, 1000px"
        priority
        className="object-cover brightness-50"
      />
      <Container className="w-full h-full relative z-10">
        <div className="flex flex-col items-start justify-center h-full w-full relative overflow-hidden">
          <div data-aos="fade-up">
            <Heading variant="h1" className="invisible fixed">
              Custom Software, Web App, Mobile App Development
            </Heading>
            <Heading variant="h5" className="font-bold text-white">
              <span>
                Custom{" "}
                <TextTransition
                  className="text-eve-light-blue"
                  inline
                  springConfig={presets.wobbly}
                >
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>{" "}
              </span>
              <br /> Development
            </Heading>
            <p className="text-lg text-white mt-8">
              Professional WebApps Development <br /> Services to expand your
              Business to <br />
              engage the Global Market
            </p>
            <div className="mt-8 flex space-x-5">
              <ButtonLightBlue>{`Let's talk`}</ButtonLightBlue>
              <ButtonWhite>View Portofolio</ButtonWhite>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="hidden lg:mt-20 mx-auto lg:mx-0 bg-eve-low-gray rounded-full backdrop-blur-sm w-max px-7 py-3 lg:grid grid-cols-2"
          >
            <div>
              <img src="/images/home/testimony.png" alt="testimony" />
            </div>
            <div className="text-white">
              <p>100+ Positive</p>
              <p>Review from Them</p>
            </div>
          </div>
          <div className="absolute bottom-20 w-full h-max block mx-auto lg:hidden">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className=" lg:mt-20 mx-auto lg:mx-0 bg-eve-low-gray rounded-full backdrop-blur-sm w-max px-7 py-3 grid grid-cols-2"
            >
              <div>
                <img src="/images/home/testimony.png" alt="testimony" />
              </div>
              <div className="text-white">
                <p>100+ Positive</p>
                <p>Review from Them</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 flex items-center justify-center lg:hidden w-full">
            <div className="w-12 h-12 rounded-full bg-eve-low-gray backdrop-blur-sm flex items-center justify-center text-xl text-white font-bold">
              <button>
                <HiOutlineChevronDown />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
