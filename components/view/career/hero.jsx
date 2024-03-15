/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { InputWithIcon } from "@/components/form/inputv2";
import {
  TbSearch,
  TbMapPinSearch,
  TbDeviceImacSearch,
  TbArrowNarrowRight,
} from "react-icons/tb";
import { ButtonLightBlue } from "@/components/button/button";

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/images/career/hero-career.jfif"
        alt="hero"
        fill
        priority
        className="object-cover brightness-50"
      />
      <Container className="w-full h-full relative z-10">
        <div className="flex flex-col items-start justify-center h-full w-full relative overflow-hidden">
          <div
          //   data-aos="fade-up"
          >
            <Heading
              variant="h1"
              className="font-bold text-white max-w-2xl w-full"
            >
              Work With us from <span className="text-btn-blue">anywhere</span>
            </Heading>
            <p className="text-lg text-white mt-8">
              We change the approach to IT product development and build a new
              culture where the team and founders create a history of a
              successful digital product. Together.
            </p>
            <div className="mt-8 w-full bg-eve-glass/20 backdrop-blur-sm p-5 border border-1 border-white/10 rounded-2xl">
              <div className="flex flex-col md:flex-row w-full items-center gap-5">
                <div className="w-3/6">
                  <InputWithIcon
                    icon={<TbSearch />}
                    placeholder="Type your profession"
                  />
                </div>
                <div className="w-3/6">
                  <InputWithIcon
                    icon={<TbMapPinSearch />}
                    placeholder="Location"
                  />
                </div>
                <div className="w-3/6">
                  <InputWithIcon
                    icon={<TbDeviceImacSearch />}
                    placeholder="Type Job"
                  />
                </div>
                <div className="w-full md:w-max flex items-center justify-center">
                  <ButtonLightBlue className="w-full">Search</ButtonLightBlue>
                </div>
              </div>
              <button className="text-white flex items-center justify-center space-x-3 mt-3.5">
                <span>View all open roles</span>{" "}
                <span>
                  <TbArrowNarrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
