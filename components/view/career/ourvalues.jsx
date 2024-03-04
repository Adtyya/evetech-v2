import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { ourValues as content } from "./content";

export default function OurValues() {
  return (
    <Container className="py-12">
      <div className="text-center">
        <Heading variant="h2" className="text-btn-primary font-bold">
          Our <span className="text-btn-blue">Values</span>
        </Heading>
        <p className="text-eve-gray mt-1.5">
          {` In our actions and decisions, we adhere to common values. We are
          confident that people can achieve better results together only if they
          have shared views on what is "good" or "bad".`}
        </p>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-5">
        {content.map((i, idx) => {
          return (
            <Card
              title={i.title}
              subtitle={i.subtitle}
              icon={i.image}
              key={idx}
            />
          );
        })}
      </div>
    </Container>
  );
}

function Card({ title, icon, subtitle }) {
  return (
    <div className="text-center space-y-4">
      <div className="w-full h-14 relative">
        <Image fill alt={title} src={icon} className="object-contain" />
      </div>
      <Heading variant="h3" className="text-btn-primary font-semibold h-10">
        {title}
      </Heading>
      <p className="text-btn-primary">{subtitle}</p>
    </div>
  );
}
