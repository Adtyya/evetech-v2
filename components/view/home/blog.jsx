import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";

export default function Blog() {
  return (
    <div className="my-10 py-10">
      <Container>
        <Heading variant="h2" className="text-btn-primary font-bold">
          <span className="text-btn-blue">Evetech</span> Blog
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
          <div className="group cursor-pointer">
            <div className="h-72 w-full relative duration-300">
              <div className="w-full h-full bg-eve-white rounded-2xl"></div>
              <Image
                src={"/images/home/blog/blog.jfif"}
                fill
                alt="sample"
                className="object-cover group-hover:-rotate-3 rounded-2xl duration-300 ease-out"
              />
            </div>
            <div className="my-2.5 group-hover:translate-y-4 duration-300 space-y-2.5">
              <b className="text-btn-primary">12 October 2023</b>
              <Heading variant="h4" className="text-btn-primary font-bold">
                Educational Tech
              </Heading>
              <p className="text-eve-gray line-clamp-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                deleniti reiciendis necessitatibus alias ut, quisquam officia
                dicta iusto provident itaque eos vitae minus unde nemo laborum
                soluta adipisci veritatis et aut dolorem illum odit molestias
                vero perferendis. Illum quaerat quasi saepe nam, eum asperiores,
                vero nulla ratione recusandae animi quo.
              </p>
              <button className="text-btn-blue">Read More ...</button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-grid-cols-2 gap-5 items-start">
            <div className="grid grid-cols-12 items-center">
              <div className="h-40 col-span-4 w-full relative">
                <Image
                  src={"/images/home/blog/blog.jfif"}
                  fill
                  alt="sample"
                  className="object-cover group-hover:-rotate-3 rounded-2xl duration-300 ease-out"
                />
              </div>
              <div className="col-span-8">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio minima explicabo quisquam, fugiat unde error voluptates
                  dolorum mollitia, molestias laboriosam, consequatur ea quaerat
                  suscipit harum exercitationem enim rerum a necessitatibus
                  animi vero repellat incidunt. Rerum ipsa, ratione reiciendis
                  qui id soluta deleniti eum reprehenderit dolor, nobis non,
                  iste quam veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
