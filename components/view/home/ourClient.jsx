import Heading from "@/components/text/heading";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function OurClient() {
  const t = useTranslations("OurClient");

  return (
    <div className="bg-eve-white py-12">
      <div className="flex items-center justify-center mb-5">
        <Heading variant={"h3"} className="text-btn-primary font-semibold">
          {t("title")}
        </Heading>
      </div>
      <Marquee direction="left">
        {Array.from({ length: 14 }).map((_, idx) => {
          return (
            <div key={idx} className="w-52 h-28 relative">
              <Image
                src={`/images/home/client/${idx + 1}.png`}
                alt="test"
                fill
                className="object-contain px-5"
                quality={100}
                fetchPriority="low"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
