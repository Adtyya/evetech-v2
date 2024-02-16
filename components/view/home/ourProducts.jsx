import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Marquee from "react-fast-marquee";
import { ProductList } from "./content";
import Image from "next/image";

const imagePath = [
  "/images/home/products/1.svg",
  "/images/home/products/2.svg",
  "/images/home/products/3.svg",
  "/images/home/products/4.svg",
];

export default function OurProducts() {
  return (
    <div className="py-16">
      <Container className="flex items-center justify-center flex-col mb-10">
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          Our Digital agency <span className="text-btn-blue">Product</span>
        </Heading>
        <p className="mt-2.5 text-center text-eve-gray">
          We provide a variety of digital solutions that include <br />{" "}
          responsive website design, app development, digital <br /> marketing
          strategist, and more.
        </p>
      </Container>
      <Marquee direction="right" speed={50}>
        {ProductList.slice(0, 4).map((item, index) => {
          return (
            <CardProduct
              key={index}
              title={item.name}
              image={item.image}
            ></CardProduct>
          );
        })}
      </Marquee>
      <div className="py-10"></div>
      <Marquee direction="left" speed={50}>
        {ProductList.slice(4).map((item, index) => {
          return (
            <CardProduct
              key={index}
              title={item.name}
              image={item.image}
            ></CardProduct>
          );
        })}
      </Marquee>
    </div>
  );
}

function CardProduct({ title, image }) {
  return (
    <div className="bg-eve-white rounded-3xl w-full max-w-96 mx-8 overflow-hidden">
      <div className="space-y-4 p-5">
        <Heading variant="h4" className="font-bold text-btn-primary">
          {title}
        </Heading>
        <p className="text-eve-gray line-clamp-2">
          Developing mobile applications that are easy to use aids various
          start-ups and businesses in reshaping the mobile user experience
        </p>
        <div className="flex space-x-3.5">
          {imagePath.map((i, idx) => {
            return (
              <button key={idx}>
                <object
                  data={i}
                  type="image/svg+xml"
                  width={28}
                  height={28}
                ></object>
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-40">
        <div className="h-96 w-full px-3 relative">
          <Image
            fill
            className="object-contain px-3 -mt-12"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
      </div>
      {/* <div className="absolute bottom-0 w-full h-full">
      </div> */}
    </div>
  );
}
