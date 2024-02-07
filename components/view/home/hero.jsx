import Container from "@/components/box/container";
import Image from "next/image";
import HeroImage from "@/public/images/home/hero-home.jpg";

export default function Hero() {
  return (
    <div className="h-screen w-full relative">
      <Image
        src={HeroImage}
        alt="hero"
        fill
        className="object-cover brightness-50"
      />
      <Container>
        <div className="flex items-center justify-center">a</div>
      </Container>
    </div>
  );
}
