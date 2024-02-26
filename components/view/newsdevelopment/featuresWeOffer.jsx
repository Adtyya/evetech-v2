import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import FeatureWeOffer from "@/public/images/newsdevelopment/feature.png";
import Image from "next/image";

export default function FeaturesWeOffer() {
  return (
    <Container className="py-12">
      <Heading className="text-btn-primary font-bold capitalize" variant="h3">
        <span className="text-btn-blue">fitur</span> yang kami tawarkan
      </Heading>
      <p className="mt-1.5 text-eve-gray">
        Ada beberapa alasan mengapa menggunakan jasa pembuatan website portal
        berita dari Evetech Solution. di antaranya:
      </p>
      <div className="w-full h-48 lg:h-72 relative mt-7">
        <Image
          src={FeatureWeOffer}
          alt="feature we offer"
          fill
          className="object-contain"
        />
      </div>
    </Container>
  );
}
