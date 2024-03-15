"use client";

import { useState, useMemo } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { ButtonPrimary, ButtonWhite } from "@/components/button/button";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { TehcnologyStack } from "./content";
import { useTranslations } from "next-intl";

const categories = ["popular", "mobile", "front-end", "backend", "database"];

export default function TechnologySet() {
  const t = useTranslations("HomePage.section8");
  const [selectedCategories, setSelectedCategories] = useState(categories[0]);

  function handleChangeCategories(name) {
    setSelectedCategories(name);
  }

  const filteredStack = useMemo(() => {
    return TehcnologyStack.filter((item) =>
      item.category.includes(selectedCategories)
    );
  }, [selectedCategories]);

  return (
    <div className="py-16">
      <Container className="bg-eve-white px-8 py-7 rounded-2xl">
        <Heading variant="h3" className="text-btn-primary font-bold">
          {t.rich("title", {
            span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
          })}
        </Heading>
        <p className="mt-1.5 text-eve-gray">{t("subtitle")}</p>
        <div className="flex space-x-5 overflow-x-auto mt-7">
          {categories.map((item, idx) => {
            return item === selectedCategories ? (
              <ButtonPrimary className="capitalize whitespace-nowrap" key={idx}>
                {item}
              </ButtonPrimary>
            ) : (
              <ButtonWhite
                key={idx}
                onClick={() => handleChangeCategories(item)}
                className="capitalize whitespace-nowrap"
              >
                {item}
              </ButtonWhite>
            );
          })}
        </div>
        <div className="w-full h-full mt-7">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
          >
            {filteredStack.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <div className="bg-white h-full w-full p-7 rounded-2xl flex items-center justify-center flex-col">
                    <div className="w-full h-12 relative">
                      <Image
                        src={item.image}
                        alt="test"
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                    <p className="mt-2.5">{item.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
