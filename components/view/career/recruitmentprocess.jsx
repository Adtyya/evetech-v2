import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { ButtonPrimary } from "@/components/button/button";
import { recruitmentprocess as content } from "./content";
import { CardQualityDriven } from "../home/qualityDriven";

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
