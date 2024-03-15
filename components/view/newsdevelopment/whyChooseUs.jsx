import Container from "@/components/box/container";
import Image from "next/image";
import ContentImage from "@/public/images/newsdevelopment/whyChoose/whychoose.png";
import Heading from "@/components/text/heading";
import { ButtonPrimary } from "@/components/button/button";
import { WhyChooseUs as content } from "./content";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("NewsDev.section2");

  return (
    <Container className="py-12">
      <div className="w-full h-96 relative">
        <Image
          fill
          src={ContentImage}
          alt="portal-illustration"
          className="object-contain"
        />
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mt-7 gap-5 items-center"
        id="why choose our service"
      >
        <div>
          <Heading
            variant="h2"
            className="capitalize text-btn-primary font-bold"
          >
            {t.rich("title", {
              br: () => <br />,
              span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
            })}
          </Heading>
          <p className="my-3.5 text-eve-gray w-full max-w-sm">
            {t("subtitle")}
          </p>
          <ButtonPrimary className="px-7 capitalize">{t("talk")}</ButtonPrimary>
        </div>
        <div className="space-y-5 hidden lg:block">
          {content.slice(0, 2).map((itm, idx) => {
            return (
              <Card
                title={t(`${itm.id}.title`)}
                subtitle={t(`${itm.id}.subtitle`)}
                image={itm.image}
                key={idx}
              ></Card>
            );
          })}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden mt-5 gap-5">
        {content.map((itm, idx) => {
          return (
            <Card
              title={t(`${itm.id}.title`)}
              subtitle={t(`${itm.id}.subtitle`)}
              image={itm.image}
              key={idx}
            ></Card>
          );
        })}
      </div>
      <div className="hidden lg:grid lg:grid-cols-4 gap-5 mt-5">
        {content.slice(2).map((i, idx) => {
          return (
            <Card
              title={i.title}
              subtitle={i.subtitle}
              image={i.image}
              key={idx}
              fixedHeight
            ></Card>
          );
        })}
      </div>
    </Container>
  );
}

function Card({ image, title, subtitle, fixedHeight = false }) {
  return (
    <div
      className={`bg-eve-white space-y-2.5 p-5 rounded-2xl w-full ${
        fixedHeight ? "h-64" : "h-max"
      }`}
    >
      <div className="w-10 h-10 relative">
        <Image alt={title} src={image} fill className="object-contain" />
      </div>
      <Heading variant="h4" className="text-btn-primary font-bold">
        {title}
      </Heading>
      <p className="text-eve-gray">{subtitle}</p>
    </div>
  );
}
