import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import ImageContent from "@/public/images/aboutus/steven.png";
import { useTranslations } from "next-intl";

export default function FounderStory() {
  const t = useTranslations("AboutUs.section3");

  return (
    <Container className="pt-24 md:pt-32 pb-12 md:py-12">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-3/4 bg-eve-white px-5 pb-5 pt-36 lg:py-10 lg:pl-10 lg:pr-36 space-y-5 rounded-2xl">
          <Heading variant="h3" className="text-btn-primary font-bold">
            Our Founder <span className="text-btn-blue">Story</span>
          </Heading>
          <p className="text-eve-gray">
            {t.rich("content", {
              br: () => <br />,
              b: (val) => <b>{val}</b>,
            })}
          </p>
        </div>
        <div className="w-full lg:w-1/4 relative flex justify-center lg:justify-start items-center">
          <div className="h-52 lg:h-4/5 w-52 lg:w-[calc(24rem+10px)] absolute -mt-12 lg:mt-0 lg:-left-20">
            <div className="w-full h-full relative bg-btn-white border-2 border-border-gray rounded-2xl">
              <Image
                src={ImageContent}
                alt="content"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
