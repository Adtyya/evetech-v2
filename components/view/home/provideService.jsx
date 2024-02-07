"use client";

import Container from "@/components/box/container";
import Image from "next/image";
import ProvideBG from "@/public/images/home/provide-bg.jpg";
import Heading from "@/components/text/heading";
import { ButtonPrimary } from "@/components/button/button";
import CountUp from "react-countup";

const stat = [
  {
    number: "106",
    sub: "clients",
  },
  {
    number: "102",
    sub: "reviews",
  },
  {
    number: "2",
    sub: "Years of experience",
  },
];

export default function ProvideService() {
  return (
    <Container className="my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div
          className="h-96 relative rounded-3xl overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src={ProvideBG}
            alt="provide"
            fill
            className="object-cover"
            quality={100}
            fetchPriority="low"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <div data-aos="fade-up" data-aos-delay="200">
            <Heading variant="h2" className="font-bold text-btn-primary">
              We Are Ready To Prove the{" "}
              <span className="text-btn-blue">Best Service</span>
            </Heading>
          </div>
          <p
            className="mt-5 font-light text-eve-gray"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Our commitment to exelence drive us to go above and beyond, ensuring
            every interaction with us is a seamless jurney.
          </p>
          <div
            className="flex items-center justify-start w-full mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ButtonPrimary>{`Let's talk`}</ButtonPrimary>
          </div>
          <div
            className="flex items-center justify-start w-full mt-8"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="grid grid-cols-3 gap-3">
              {stat.map((item, id) => {
                return (
                  <div key={id}>
                    <Heading
                      variant="h3"
                      className="font-bold text-btn-primary"
                    >
                      <CountUp
                        end={item.number}
                        suffix="+"
                        enableScrollSpy
                      ></CountUp>
                    </Heading>
                    <p className="font-light text-eve-gray">{item.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
