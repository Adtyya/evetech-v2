import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { SoftwareDev } from "./content";
import Image from "next/image";

export default function SoftwareDevelopmentIndustry() {
  return (
    <Container>
      <Heading variant="h3" className="text-btn-primary font-bold">
        Software <br />
        <span className="text-btn-blue">Development industry</span>
      </Heading>
      <p className="mt-2.5 text-eve-gray">
        We outshine at delivering the best software development services as per
        the customers’ requirements, be it small size companies in their
        beginning phase or mid-size businesses looking for growth or large
        organizations actively making efforts to expand.
      </p>
      <div className="columns-1 md:columns-3 my-10">
        {SoftwareDev.map((item, index) => {
          return (
            <div
              key={index}
              className={`w-full ${
                item.heigh === "full" ? "md:h-masonryFull" : "md:h-96"
              } relative rounded-2xl h-96 overflow-hidden mb-5`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-1/2 z-10 flex items-end pb-4 justify-center w-full h-1/2">
                <div className="bg-eve-key-features-bg backdrop-blur-sm mx-5 p-5 rounded-2xl w-full">
                  <Heading
                    variant="h4"
                    className="text-eve-white font-semibold"
                  >
                    {item.name}
                  </Heading>
                  <p className="mt-1.5 text-btn-white font-extralight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
