import Heading from "@/components/text/heading";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function OurClient() {
  return (
    <div className="bg-eve-white py-12">
      <div className="flex items-center justify-center mb-5">
        <Heading variant={"h4"} className="text-btn-primary font-semibold">
          Our Client
        </Heading>
      </div>
      <Marquee direction="left">
        {Array.from({ length: 7 }).map((_, idx) => {
          return (
            <div key={idx} className="w-52 h-28 relative">
              <Image
                src={`/images/home/client/${idx + 1}.png`}
                alt="test"
                fill
                className="object-contain"
                quality={100}
                fetchPriority="low"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
