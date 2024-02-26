/* eslint-disable @next/next/no-img-element */
import Container from "@/components/box/container";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { ButtonLightBlue } from "@/components/button/button";

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="/images/mobiledevelopment/hero-mobiledev.jfif"
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
              <span className="text-btn-blue">Mobile App</span> <br />{" "}
              Development
            </Heading>
            <p className="text-lg text-white mt-8">
              Gunakan Web application sebagai sarana inovatif untuk
              mengembangkan <br /> bisnismu. Transformasi digital melalui
              pengembangan website aplikasi. <br /> Menghadirkan solusi terkini
              dengan keahlian teknologi untuk transformasi digital yang unggul
            </p>
            <div className="mt-8 flex space-x-5">
              <ButtonLightBlue>Konsultasi Gratis Sekarang</ButtonLightBlue>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
