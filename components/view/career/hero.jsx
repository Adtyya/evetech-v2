/* eslint-disable @next/next/no-img-element */
"use client";

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
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Hero() {
  const searchParams = useSearchParams();
  const locale = useLocale();
  const router = useRouter();
  const [position, setPosition] = useState(searchParams.get("position") ?? "");
  const [location, setLocation] = useState(searchParams.get("location") ?? "");
  const [workModel, setWorkModel] = useState(
    searchParams.get("workModel") ?? ""
  );

  function handleSearch(event) {
    event.preventDefault();
    router.push(
      `/career/list-vacancies?position=${position}&location=${location}&workModel=${workModel}`
    );
  }

  return (
    <div className="h-screen w-full relative">
      <Image
        src="/images/career/hero-career.jpg"
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
              <form
                onSubmit={handleSearch}
                className="flex flex-col md:flex-row w-full items-center gap-5"
              >
                <div className="w-full md:w-3/6">
                  <InputWithIcon
                    icon={<TbSearch />}
                    placeholder="Type your profession"
                    onChange={(event) => setPosition(event.target.value)}
                    defaultValue={position}
                  >
                    <option value="">All Department</option>
                    <option value="IT Engineer">IT Engineer</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Designer">Designer</option>
                  </InputWithIcon>
                </div>
                <div className="w-full md:w-3/6">
                  <InputWithIcon
                    icon={<TbMapPinSearch />}
                    placeholder="Location"
                    onChange={(event) => setLocation(event.target.value)}
                    defaultValue={location}
                  >
                    <option value="">All Location</option>
                    <option value="Solo">Solo - Indonesia</option>
                    <option value="Jakarta">Jakarta - Indonesia</option>
                    <option value="Malaysia">Kuala Lumpur - Malaysia</option>
                  </InputWithIcon>
                </div>
                <div className="w-full md:w-3/6">
                  <InputWithIcon
                    icon={<TbDeviceImacSearch />}
                    placeholder="Type Job"
                    onChange={(event) => setWorkModel(event.target.value)}
                    defaultValue={workModel}
                  >
                    <option value="">All Work Model</option>
                    <option value="onsite">Onsite</option>
                    <option value="hybrid">Hybdrid</option>
                    <option value="remote">Remote</option>
                  </InputWithIcon>
                </div>
                <div className="w-full md:w-max flex items-center justify-center">
                  <ButtonLightBlue type="submit" className="w-full">
                    Search
                  </ButtonLightBlue>
                </div>
              </form>
              <Link href="/career/list-vacancies" lang={locale}>
                <button className="text-white flex items-center justify-center space-x-3 mt-3.5">
                  <span>View all open roles</span>{" "}
                  <span>
                    <TbArrowNarrowRight />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
