"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { OurAgile as content } from "./content";

export default function OurAgile() {
  return (
    <div className="py-12">
      <Container>
        <Heading
          variant="h2"
          className="text-btn-primary font-bold text-center"
        >
          Our Agile Development
          <span className="text-btn-blue">Tested 100s</span> Of Projects
        </Heading>
        <div className="flex items-center justify-center">
          <p className="mt-1.5 text-eve-gray text-center w-full max-w-2xl">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus.
          </p>
        </div>
      </Container>
      {/* Scroll ke kanan/horizontal sampai habis/akhir section lalu scroll akan kembali menjadi vertical */}
      <HorizontalScroll>
        {content.map((a, i) => {
          return (
            <Card
              key={i}
              title={a.name}
              description={a.description}
              image={a.image}
              isEven={i % 2 === 0}
              indexNumber={i + 1}
            ></Card>
          );
        })}
      </HorizontalScroll>
    </div>
  );
}

function Card({ title, image, description, isEven, indexNumber }) {
  return (
    <div
      className={`h-4/5 w-80 ${
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <div ref={container} className="relative h-[160vh]">
      <div className="sticky top-0 flex h-[78vh] overflow-hidden pt-20">
        <motion.div
          style={{ x }}
          className="flex gap-7 w-full h-full items-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
