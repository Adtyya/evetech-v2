import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { KeyFeatures as Content } from "./content";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function KeyFeatures() {
  const t = useTranslations("HomePage.section6");

  return (
    <Container className="py-12">
      <Heading
        variant="h3"
        className="text-btn-primary font-bold text-center md:text-start"
      >
        {t.rich("title", {
          span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
        })}
      </Heading>
      <p className="mt-2.5 text-eve-gray text-center md:text-start">
        {t("subtitle")}
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Content.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-4">
              <div id="logo" className="col-span-1 flex justify-center">
                <div className="h-14 lg:h-16 w-14 lg:w-16 rounded-full relative">
                  <Image
                    alt={item.name}
                    src={item.image}
                    fill
                    quality={100}
                    fetchPriority="low"
                    className="object-contain"
                  />
                </div>
              </div>
              <div id="logo" className="col-span-3">
                <Heading
                  variant="h4"
                  className="text-eve-key-features font-bold"
                >
                  {t(`${index + 1}.title`)}
                </Heading>
                <p className="mt-1.5 text-eve-key-features">
                  {t(`${index + 1}.subtitle`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
