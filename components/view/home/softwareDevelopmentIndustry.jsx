import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { SoftwareDev } from "./content";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ButtonLightBlue } from "@/components/button/button";

export default function SoftwareDevelopmentIndustry() {
  const t = useTranslations("HomePage.section7");

  return (
    <Container>
      <Heading variant="h3" className="text-btn-primary font-bold capitalize">
        {t.rich("title", {
          br: () => <br />,
          span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
        })}
      </Heading>
      <p className="mt-2.5 text-eve-gray">{t("subtitle")}</p>
      <div className="columns-1 md:columns-3 my-10">
        {SoftwareDev.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full ${
                item.heigh === "full" ? "md:h-masonryFull" : "md:h-96"
              } relative rounded-2xl h-96 overflow-hidden mb-5 group break-inside-avoid`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 duration-300 brightness-90"
              />
              {/* <div className="absolute top-1/2 z-10 flex items-end pb-4 justify-center w-full h-1/2">
                <div className="bg-eve-black/30 group-hover:bg-eve-black duration-300 backdrop-blur-sm mx-5 p-5 rounded-2xl w-full">
                  <Heading
                    variant="h4"
                    className="text-eve-white font-semibold"
                  >
                    {t(`${index + 1}.title`)}
                  </Heading>
                  <p className="mt-1.5 text-btn-white font-extralight">
                    {t(`${index + 1}.subtitle`)}
                  </p>
                </div>
              </div> */}
              <div
                className="absolute bottom-0 w-full h-1/2 group-hover:h-full p-5"
                style={{
                  background:
                    "linear-gradient(0deg, #09101D 25%, rgba(41, 72, 131, 0) 100%)",
                }}
              >
                <div className="flex flex-col items-start group-hover:justify-center justify-end h-full">
                  <Heading
                    variant="h4"
                    className="text-eve-white font-semibold"
                  >
                    {t(`${index + 1}.title`)}
                  </Heading>
                  <div className="hidden group-hover:block">
                    <p className="mt-1.5 text-btn-white font-extralight">
                      {t(`${index + 1}.subtitle`)}
                    </p>
                    <div className="mt-3">
                      <Link href="/portfolio">
                        <ButtonLightBlue>Lihat Portofolio</ButtonLightBlue>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
