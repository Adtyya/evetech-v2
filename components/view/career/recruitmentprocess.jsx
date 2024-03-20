import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { ButtonPrimary } from "@/components/button/button";
import Link from "next/link";
import { recruitmentprocess as content } from "./content";

export default function RecruitmentProcess() {
  return (
    <div className="w-full h-full bg-white py-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-10">
        <div>
          <div className="lg:sticky lg:top-[12rem]">
            <Heading
              variant="h3"
              className="font-bold text-btn-primary capitalize"
            >
              Our Recruitment{" "}
              <span className="text-btn-blue capitalize">Process</span>
            </Heading>
            <p className="text-eve-gray mt-3.5">
              {`We value your and our time. That's why we strive to make
              everything as efficient as possible. You can become part of the
              Rocketech team in just a few simple steps.`}
            </p>
          </div>
        </div>
        <div className="space-y-5">
          {content.map((item, idx) => {
            return (
              <CardQualityDriven
                key={idx}
                title={item.title}
                content={item.subtitle}
                isEven={item.id % 2 !== 0}
                icon={item.image}
                index={idx + 1}
              ></CardQualityDriven>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function CardQualityDriven({ title, content, icon, isEven, index }) {
  return (
    <div
      className={`grid grid-cols-12 gap-3 ${
        isEven ? "bg-eve-white" : "bg-btn-white"
      } py-5 pr-5 rounded-2xl lg:sticky w-full h-max`}
      style={{ top: `${11 + index}rem` }}
    >
      <div className="col-span-2 flex justify-center items-start">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <div className="col-span-10">
        <h3 className="text-btn-primary font-semibold text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="mt-1.5 text-eve-gray">{content}</p>
      </div>
    </div>
  );
}
