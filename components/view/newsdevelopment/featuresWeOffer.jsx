import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import FeatureWeOffer from "@/public/images/newsdevelopment/feature.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeaturesWeOffer() {
  const t = useTranslations("NewsDev.section3");

  return (
    <Container className="py-12">
      <Heading className="text-btn-primary font-bold capitalize" variant="h3">
        {t.rich("title", {
          span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
        })}
      </Heading>
      <p className="mt-1.5 text-eve-gray">{t("subtitle")}</p>
      <div className="w-full h-48 lg:h-72 relative mt-7">
        <Image
          src={FeatureWeOffer}
          alt="feature we offer"
          fill
          className="object-contain"
        />
      </div>
    </Container>
  );
}
