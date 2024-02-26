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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {content.map((item, indx) => {
          return (
            <div
              key={indx}
              className="w-full h-52 relative overflow-hidden group items-center flex"
            >
              <Heading variant="h4" className="text-btn-primary">
                {item.title}
              </Heading>
              <div className="absolute bottom-0 right-0 translate-y-full group-hover:translate-y-0 duration-300 w-full h-full">
                <div className="w-full h-full relative bg-eve-white">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
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
