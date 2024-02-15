"use client";

import { useRef } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

export default function OurLatestProjects() {
  const sliderRef = useRef(null);

  return (
    <Container>
      <div className="flex-col lg:flex lg:flex-row items-center lg:justify-between">
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          Check out our <br />{" "}
          <span className="text-btn-blue">latest projects</span>
        </Heading>
        <p className="text-eve-gray w-full max-w-sm mt-1.5 lg:mt-0">
          From cutting-edge designs to groundbreaking solutions, our lastest
          works showcase the forefront of innovations.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 mt-10 mb-7 gap-8">
        <div className="w-full relative col-auto lg:col-span-8">
          <Swiper
            centeredSlides
            loop
            effect="coverflow"
            coverflowEffect={{
              rotate: 1,
              stretch: 50,
              depth: 100,
              modifier: 1.5,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[EffectCoverflow]}
            onSwiper={(val) => (sliderRef.current = val)}
          >
            {Array.from({ length: 5 }).map((_, id) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    className={`w-full h-72 relative bg-eve-white duration-300 rounded-2xl`}
                  >
                    <Image
                      src="/images/home/latest-project/preview.png"
                      fill
                      className="object-contain p-5"
                      alt="test"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full col-auto lg:col-span-4">aa</div>
      </div>
    </Container>
  );
}
