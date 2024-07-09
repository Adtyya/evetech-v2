import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { ButtonPrimary } from "@/components/button/button";
import Link from "next/link";
import { content } from "./content";
import { useTranslations } from "next-intl";
import { CardQualityDriven } from "../home/qualityDriven";

export default function BePartOfSomethingBig() {
  const t = useTranslations("AboutUs.section4");

  return (
    <div className="w-full h-full bg-white py-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-10">
        <div>
          <div className="lg:sticky lg:top-[12rem]">
            <Heading
              variant="h3"
              className="font-bold text-btn-primary capitalize"
            >
              {t.rich("title", {
                span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
              })}
            </Heading>
            <p className="text-eve-gray mt-3.5">
              {t.rich("subtitle", {
                br: () => <br />,
              })}
            </p>
            <Link href="/contact-us">
              <ButtonPrimary className="mt-3.5 px-7">{t("talk")}</ButtonPrimary>
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          {content.map((item, idx) => {
            const id = idx + 1;
            return (
              <CardQualityDriven
                key={idx}
                title={t(`${idx + 1}.title`)}
                content={t(`${idx + 1}.subtitle`)}
                isEven={id % 2 !== 0}
                icon={item.icon}
                index={idx + 1}
              ></CardQualityDriven>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
