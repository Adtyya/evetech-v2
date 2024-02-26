import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { CMSFeatures as content } from "./content";

export default function CMSFeatures() {
  return (
    <Container className="py-12">
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold">
          Fitur Content{" "}
          <span className="text-btn-blue">Management System (CMS)</span> Kami
        </Heading>
        <p className="text-eve-gray mt-1.5">
          Evetech Solution menyediakan jasa pembuatan website berita profesional
          dengan CMS terbaik. kami menggunakan CMS yang mudah digunakan dan
          dikelola, sehingga anda dapat dengan mudah mengedit konten dan
          mengelola website berita anda tanpa bantuan teknisi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
        {content.map((item, indx) => {
          const n = indx + 1;
          return (
            <div
              key={indx}
              className={`w-full h-52 relative group items-center flex ${
                n < 4 ? "border-t-2 border-b-2" : "border-b-2"
              } border-btn-white`}
            >
              <Heading variant="h4" className="text-btn-primary">
                {item.title}
              </Heading>
              <div className="absolute w-full h-full invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
                <div className="w-full h-full relative bg-eve-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-contain ${
                      n % 2 === 0 ? "rotate-3" : "-rotate-3"
                    } scale-100 group-hover:scale-105 duration-500`}
                  />
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="w-full h-52 bg-red-500 relative overflow-hidden group">
          Halo
          <div className="absolute bottom-0 right-0 translate-x-full group-hover:translate-x-0 duration-300 w-full h-full bg-cyan-500">
            a
          </div>
        </div>
        <div className="w-full h-52 bg-red-500 relative overflow-hidden group">
          Halo
          <div className="absolute bottom-0 right-0 -translate-y-full group-hover:translate-y-0 duration-300 w-full h-full bg-cyan-500">
            a
          </div>
        </div>
        <div className="w-full h-52 bg-red-500">Halo</div>
        <div className="w-full h-52 bg-red-500">Halo</div>
        <div className="w-full h-52 bg-red-500">Halo</div> */}
      </div>
    </Container>
  );
}
