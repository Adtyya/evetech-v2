import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { CMSFeatures as content } from "./content";
import { useTranslations } from "next-intl";

export default function CMSFeatures() {
  const t = useTranslations("NewsDev.section4");

  return (
    <Container className="py-12">
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold">
          {t.rich("title", {
            span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
          })}
        </Heading>
        <p className="text-eve-gray mt-1.5">{t("subtitle")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        {content.map((item, indx) => {
          const n = indx + 1;
          return (
            <div
              key={indx}
              className={`w-full h-52 relative group items-center flex ${
                n < 4 ? "border-t-2 border-b-2" : "border-b-2"
              } border-btn-white`}
            >
              <Heading variant="h4" className="text-btn-primary">
                {t(`${n}`)}
              </Heading>
              <div className="absolute w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
                <div className="w-full h-full relative bg-white z-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    quality={100}
                    className={`object-contain ${
                      n % 2 === 0 ? "rotate-3" : "-rotate-3"
                    } scale-100 group-hover:scale-125 duration-500`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
