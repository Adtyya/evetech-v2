import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { QualityDrivenContent } from "./content";

export default function QualityDriven() {
  return (
    <div className="w-full h-full bg-white py-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 w-full h-full gap-10">
        <div>
          <div className="lg:sticky lg:top-[12rem]">
            <Heading variant="h2" className="font-bold text-btn-primary">
              Quality-driven{" "}
              <span className="text-btn-blue capitalize">
                custom software development
              </span>
            </Heading>
            <p className="text-eve-gray mt-1.5">
              We provide a variety of digital solutions that include responsive
              website design, app development, digital marketing strategist, and
              more.
            </p>
          </div>
        </div>
        <div className="space-y-5">
          {QualityDrivenContent.map((item, idx) => {
            return (
              <CardQualityDriven
                key={idx}
                title={item.title}
                content={item.content}
                isEven={item.id % 2 !== 0}
              ></CardQualityDriven>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function CardQualityDriven({ title, content, isEven }) {
  return (
    <div
      className={`grid grid-cols-12 gap-3 ${
        isEven ? "bg-eve-white" : "bg-btn-white"
      } py-5 pr-5 rounded-2xl lg:sticky lg:top-[12rem] w-full h-max`}
    >
      <div className="col-span-2 flex justify-center">
        <div className="w-8 h-8 rounded-full bg-white"></div>
      </div>
      <div className="col-span-10">
        <h3 className="text-btn-primary font-semibold text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="mt-1.5 text-eve-gray">{content}</p>
      </div>
    </div>
  );
}
