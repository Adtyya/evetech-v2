import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Marquee from "react-fast-marquee";
import { PorfotolioList } from "./content";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Portofolio() {
  const t = useTranslations("MobileAppDev.section2");

  return (
    <div className="py-16">
      <Container className="flex items-center justify-center flex-col mb-10">
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          {t("title")}
        </Heading>
        <p className="mt-2.5 text-center text-eve-gray w-full max-w-lg">
          {t("subtitle")}
        </p>
      </Container>
      <Marquee direction="right" speed={50}>
        {PorfotolioList.map((item, index) => {
          return (
            <CardProduct
              key={index}
              title={item.title}
              image={item.image}
              category={item.category}
            ></CardProduct>
          );
        })}
      </Marquee>
      <div className="py-10"></div>
      <Marquee direction="left" speed={50}>
        {PorfotolioList.map((item, index) => {
          return (
            <CardProduct
              key={index}
              title={item.title}
              image={item.image}
              category={item.category}
            ></CardProduct>
          );
        })}
      </Marquee>
    </div>
  );
}

function CardProduct({ title, image, category }) {
  return (
    <div className="bg-eve-white rounded-3xl w-96 mx-8 overflow-hidden">
      <div className="p-5 w-full">
        <Heading
          variant="h4"
          className="font-bold text-btn-primary text-center"
        >
          {title}
        </Heading>
        <p className="text-eve-gray text-center">{category}</p>
      </div>
      <div className="h-80">
        <div className="h-96 w-full px-3 relative">
          <Image
            fill
            className="object-contain px-3 -mt-12"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
