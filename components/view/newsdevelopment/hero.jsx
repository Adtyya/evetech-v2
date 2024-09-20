/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { ButtonLightBlue } from "@/components/button/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("NewsDev.section1");

  return (
    <div className="h-screen w-full relative">
      <Image
        src="/images/newsdevelopment/hero-news.jpg"
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
              className="font-bold text-white max-w-2xl w-full !leading-snug"
            >
              {t.rich("title", {
                br: () => <br />,
                span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
              })}
            </Heading>
            <p className="text-lg text-white mt-8">
              {t.rich("subtitle", {
                br: () => <br />,
              })}
            </p>
            <div className="mt-8 flex space-x-5">
              <Link href="/contact-us">
                <ButtonLightBlue>{t("consultation")}</ButtonLightBlue>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
