"use client";

import Container from "@/components/box/container";
import { ButtonWhite } from "@/components/button/button";
import { Tag } from "../portfolio/listProjects";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { HighlightedCard } from "./BlogList";

export default function Read() {
  return (
    <Container className="py-12">
      <div className="h-32"></div>
      <ButtonWhite>Back</ButtonWhite>
      <div className="my-7 flex items-center justify-center flex-col space-y-7">
        <div className="flex space-x-3 flex-wrap">
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
          <Tag>Tag</Tag>
        </div>
        <h1 className="text-btn-primary font-bold text-center text-3xl md:text-4xl lg:text-5xl max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>
        <p className="text-eve-gray">24 Desember 2025</p>
        <div className="w-full h-60 md:h-96 relative rounded-2xl overflow-hidden shadow-blog">
          <Image
            alt="sample"
            src="/images/portofolio/hero-portofolio.png"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="mb-7">Content Goes here</div>
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          You May also like
        </Heading>
        <div className="my-7 grid grid-cols-1 md:grid-cols-3 gap-7">
          {Array.from({ length: 3 }).map((_, i) => {
            return (
              <HighlightedCard
                key={i}
                image="/images/portofolio/hero-portofolio.png"
                title="Lorem ipsum dolor sit amet."
                subtitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At harum et veritatis sapiente facilis modi dicta earum. Exercitationem excepturi similique repudiandae recusandae totam explicabo maxime dolorum eos odio, assumenda, nostrum debitis iste consequuntur quidem mollitia corporis at ipsum omnis porro."
                tag={[{ name: "Test" }, { name: "testtt" }]}
              ></HighlightedCard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
