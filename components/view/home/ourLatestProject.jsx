"use client";

import { useRef, useState, useEffect } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow } from "swiper/modules";
import { OurLatestProject } from "./content";
import autoAnimate from "@formkit/auto-animate";
import { useTranslations } from "next-intl";
import { ButtonPrimary } from "@/components/button/button";
import Link from "next/link";

export default function OurLatestProjects() {
  const t = useTranslations("HomePage.section9");
  const sliderRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <Container id="latest-projects" className="py-5">
      <div className="flex-col lg:flex lg:flex-row items-center lg:justify-between">
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          {t.rich("title", {
            span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
            br: () => <br></br>,
          })}
        </Heading>
        <p className="text-eve-gray w-full max-w-sm mt-1.5 lg:mt-0">
          {t("subtitle")}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-10 mb-7 gap-8">
        <div className="w-full relative col-auto lg:col-span-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={(event) => {
              setActive(event.activeIndex);
            }}
            onSwiper={(val) => (sliderRef.current = val)}
          >
            {OurLatestProject.map((item, id) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    className={`w-full h-64 lg:h-96 relative bg-eve-white duration-300 rounded-2xl overflow-hidden`}
                  >
                    <video
                      className="w-full h-full"
                      controls={false}
                      preload="meta"
                      autoPlay
                      muted
                      loop
                      controlsList="nofullscreen nodownload noremoteplayback"
                    >
                      <source src={item.video} type="video/webm"></source>
                    </video>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex items-center justify-center mt-5 space-x-3.5">
            {Array.from({ length: OurLatestProject.length }).map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={`${
                    idx === active ? "bg-eve-dot" : "bg-border-gray"
                  } duration-300 w-2 h-2 rounded-full`}
                  onClick={() => {
                    sliderRef.current?.slideTo(idx);
                    setActive(idx);
                  }}
                ></button>
              );
            })}
          </div>
        </div>
        <div className="w-full col-auto lg:col-span-4">
          {OurLatestProject.map((item, idx) => {
            return (
              <Card
                title={t(`${idx + 1}.title`)}
                description={t(`${idx + 1}.subtitle`)}
                onClick={() => {
                  setActive(idx);
                  sliderRef.current?.slideTo(idx);
                }}
                key={idx}
                active={idx === active}
              ></Card>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/portfolio">
          <ButtonPrimary className="px-8">View More</ButtonPrimary>
        </Link>
      </div>
    </Container>
  );
}

function Card({ title, description, onClick, active }) {
  const content = useRef(null);

  useEffect(() => {
    active && autoAnimate(content.current);
  }, [active]);

  return (
    <div
      id="parent"
      ref={content}
      className={`p-5 ${
        active ? "bg-eve-white rounded-2xl" : "bg-transparent"
      } duration-300 cursor-pointer`}
      onClick={() => onClick()}
    >
      <Heading
        variant="h4"
        className={`font-bold ${
          active ? "text-btn-blue" : "text-btn-primary"
        } duration-300`}
      >
        {title}
      </Heading>
      {active && (
        <p className={`mt-1.5 text-eve-p-latest-project text-sm`}>
          {description}
        </p>
      )}
    </div>
  );
}
