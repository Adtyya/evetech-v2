import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { KeyFeatures as Content } from "./content";
import Image from "next/image";

export default function KeyFeatures() {
  return (
    <Container>
      <Heading
        variant="h3"
        className="text-btn-primary font-bold text-center md:text-start"
      >
        <span className="text-btn-blue">Key features</span> of Evetech Solutions
      </Heading>
      <p className="mt-2.5 text-eve-gray text-center md:text-start">
        Our client send us bunch of smilies with our services and we love them
      </p>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Content.map((item, index) => {
          return (
            <div key={index} className="grid grid-cols-4">
              <div id="logo" className="col-span-1 flex justify-center">
                <div className="h-14 lg:h-16 w-14 lg:w-16 rounded-full relative">
                  <Image
                    alt={item.name}
                    src={item.image}
                    fill
                    quality={100}
                    fetchPriority="low"
                    className="object-contain"
                  />
                </div>
              </div>
              <div id="logo" className="col-span-3">
                <Heading
                  variant="h4"
                  className="text-eve-key-features font-bold"
                >
                  {item.name}
                </Heading>
                <p className="mt-1.5 text-eve-key-features">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
