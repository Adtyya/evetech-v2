/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Portfolio");

  return (
    <div className="h-screen w-full relative">
      <Image
        src="/images/portofolio/hero-portofolio.png"
        alt="hero"
        fill
        // sizes="(max-width: 768px) 100vw, 1000px"
        priority
        className="object-cover brightness-50"
      />
      <Container className="w-full h-full relative z-10">
        <div className="flex flex-col items-start justify-center h-full w-full relative overflow-hidden">
          <div
          //   data-aos="fade-up"
          >
            <Heading
              variant="h1"
              className="font-bold text-white max-w-4xl w-full !leading-snug"
            >
              {t("title")}
              {/* {t.rich("title", {
                span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
                br: () => <br />,
              })} */}
            </Heading>
            <p className="text-lg text-white mt-8 max-w-xl">
              {/* {t.rich("subtitle", {
                br: () => <br />,
              })} */}
              {t("subtitle")}
            </p>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-delay="150"
            className="hidden lg:mt-20 mx-auto lg:mx-0 bg-eve-low-gray rounded-full backdrop-blur-sm w-max px-4 py-1.5 lg:grid grid-cols-2"
          >
            <div>
              <img src="/images/home/testimony.png" alt="testimony" />
            </div>
            <div className="text-white bg-cyan flex flex-col justify-center">
              <p>{t("countreview")}</p>
              <p>{t("fromthem")}</p>
            </div>
          </div>
          <div className="absolute bottom-20 w-full h-max block mx-auto lg:hidden">
            <div
              //   data-aos="fade-up"
              //   data-aos-delay="150"
              className=" lg:mt-20 mx-auto lg:mx-0 bg-eve-low-gray rounded-full backdrop-blur-sm w-max px-5 py-3 grid grid-cols-2"
            >
              <div>
                <img src="/images/home/testimony.png" alt="testimony" />
              </div>
              <div className="text-white">
                <p>{t("countreview")}</p>
                <p>{t("fromthem")}</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 flex items-center justify-center lg:hidden w-full">
            <div className="w-12 h-12 rounded-full bg-eve-low-gray backdrop-blur-sm flex items-center justify-center text-xl text-white font-bold">
              <button>
                <HiOutlineChevronDown />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
