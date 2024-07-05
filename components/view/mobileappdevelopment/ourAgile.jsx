"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { OurAgile as content } from "./content";
import { useTranslations } from "next-intl";

export default function OurAgile() {
  const t = useTranslations("MobileAppDev.section3");

  return (
    <div className="py-12">
      <Container>
        <div className="sticky hidden lg:block top-[10rem]">
          <Heading
            variant="h2"
            className="text-btn-primary font-bold text-center"
          >
            {t("title")}
          </Heading>
          <div className="flex items-center justify-center">
            <p className="mt-1.5 text-eve-gray text-center w-full max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="lg:hidden block">
          <Heading
            variant="h2"
            className="text-btn-primary font-bold text-center"
          >
            {t("title")}
          </Heading>
          <div className="flex items-center justify-center">
            <p className="mt-1.5 text-eve-gray text-center w-full max-w-2xl">
              {t("subtitle")}
            </p>
          </div>
        </div>
        <div className="columns-1 md:columns-2 lg:hidden pt-5">
          {content.map((a, i) => {
            return (
              <Card
                key={i}
                title={t(`${i + 1}.title`)}
                description={t(`${i + 1}.subtitle`)}
                image={a.image}
                isEven={i % 2 === 0}
                indexNumber={i + 1}
              ></Card>
            );
          })}
        </div>

        <div className="w-full h-full hidden lg:block">
          <HorizontalScroll>
            {content.map((a, i) => {
              return (
                <Card
                  key={i}
                  title={t(`${i + 1}.title`)}
                  description={t(`${i + 1}.subtitle`)}
                  image={a.image}
                  isEven={i % 2 === 0}
                  indexNumber={i + 1}
                ></Card>
              );
            })}
          </HorizontalScroll>
        </div>
      </Container>
    </div>
  );
}

function Card({ title, image, description, isEven, indexNumber }) {
  return (
    <div
      className={`h-max lg:h-4/5 my-4 lg:my-0 w-full lg:w-80 ${
        isEven ? "bg-eve-white" : "bg-btn-white"
      } rounded-2xl flex-shrink-0`}
    >
      <div className="grid grid-cols-1 p-3">
        <div className="w-full h-20 relative">
          <Image src={image} alt="test" fill className="object-contain" />
        </div>
        <div className="space-y-2.5">
          <p className="text-btn-blue font-bold text-lg">Step {indexNumber}</p>
          <Heading variant="h4" className="text-btn-primary font-bold">
            {title}
          </Heading>
          <p className="text-eve-gray text-base w-full">{description}</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalScroll({ children }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-99%"]);

  return (
    <div ref={container} className="relative h-[150vh]">
      <div className="sticky top-[15rem] flex h-[78vh] overflow-hidden pt-20">
        <motion.div style={{ x }} className="flex gap-7 h-full items-center">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
