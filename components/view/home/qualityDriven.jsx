import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { QualityDrivenContent } from "./content";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function QualityDriven() {
  const t = useTranslations("HomePage.section4");

  return (
    <div className="w-full h-full bg-white py-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-10">
        <div>
          <div className="lg:sticky lg:top-[12rem]">
            <Heading variant="h2" className="font-bold text-btn-primary">
              {t.rich("title", {
                span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
              })}
            </Heading>
            <p className="text-eve-gray mt-1.5">{t("subtitle")}</p>
          </div>
        </div>
        <div className="space-y-5">
          {QualityDrivenContent.map((item, idx) => {
            return (
              <CardQualityDriven
                key={idx}
                title={t(`${idx + 1}.title`)}
                content={t(`${idx + 1}.subtitle`)}
                isEven={item.id % 2 !== 0}
                icon={item.path}
                index={idx + 1}
              ></CardQualityDriven>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

export function CardQualityDriven({ title, content, icon, isEven, index }) {
  return (
    <div
      className={`grid grid-cols-12 gap-3 ${
        isEven ? "bg-eve-white" : "bg-btn-white"
      } py-5 pr-5 rounded-2xl lg:sticky w-full h-max border border-[#DADEE3]`}
      style={{
        top: `${11 + index}rem`,
        boxShadow: "0px 8px 8px 0px #0000000A",
      }}
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
