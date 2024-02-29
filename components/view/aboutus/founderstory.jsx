import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import ImageContent from "@/public/images/aboutus/steven.png";

export default function FounderStory() {
  return (
    <Container className="pt-24 md:pt-32 pb-12 md:py-12">
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="w-full lg:w-3/4 bg-eve-white px-5 pb-5 pt-36 lg:py-10 lg:pl-10 lg:pr-36 space-y-5 rounded-2xl">
          <Heading variant="h3" className="text-btn-primary font-bold">
            Our Founder <span className="text-btn-blue">Story</span>
          </Heading>
          <p className="text-eve-gray">
            Evetech Solution bangga memiliki Steven Sophian Putra sebagai
            Pendiri dan CEO. Seorang pemimpin berdedikasi dan berpengalaman di
            bidang Teknologi Informasi, Steven, lulusan IT dan programmer ulung,
            mengintegrasikan pengetahuannya dengan teknologi modern. Keahliannya
            membuatnya selalu up to date dan inovatif, menyajikan solusi
            mutakhir untuk klien. Keunikan Steven bukan hanya pada keahliannya
            sebagai programmer, tetapi juga pada kemampuan luar biasa dalam
            memecahkan masalah.
          </p>
          <p className="text-eve-gray">
            Dengan kecerdasan dan analisis tajam, ia membimbing perusahaan
            memberikan solusi efektif dan efisien. Dengan visi jelas tentang
            masa depan teknologi, Steven menjadi pionir membawa perusahaan ke
            tingkat keunggulan yang lebih tinggi. Dedikasinya pada inovasi,
            kualitas, dan kepuasan klien menjadi pilar kesuksesan perusahaan di
            bawah kepemimpinannya. Steven adalah sosok yang menginspirasi,
            memimpin perusahaan menuju masa depan cerah, dan kontribusinya
            menjadi kunci keberhasilan perusahaan.
          </p>
        </div>
        <div className="w-full lg:w-1/4 relative flex justify-center lg:justify-start items-center">
          <div className="h-52 lg:h-4/5 w-52 lg:w-[calc(24rem+10px)] absolute -mt-12 lg:mt-0 lg:-left-20">
            <div className="w-full h-full relative bg-btn-white border-2 border-border-gray rounded-2xl">
              <Image
                src={ImageContent}
                alt="content"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
