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
          <BlogCardHighlighted
            title="Educational Tech"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                deleniti reiciendis necessitatibus alias ut, quisquam officia
                dicta iusto provident itaque eos vitae minus unde nemo laborum
                soluta adipisci veritatis et aut dolorem illum odit molestias
                vero perferendis. Illum quaerat quasi saepe nam, eum asperiores,
                vero nulla ratione recusandae animi quo."
            date="12 October 2023"
            image="/images/home/blog/blog.jfif"
          ></BlogCardHighlighted>
          <div className="grid grid-cols-1 lg:grid-grid-cols-2 gap-5 items-start">
            <BlogCardList
              title="Educational Tech"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                deleniti reiciendis necessitatibus alias ut, quisquam officia
                dicta iusto provident itaque eos vitae minus unde nemo laborum
                soluta adipisci veritatis et aut dolorem illum odit molestias
                vero perferendis. Illum quaerat quasi saepe nam, eum asperiores,
                vero nulla ratione recusandae animi quo."
              date="12 October 2023"
              image="/images/home/blog/blog.jfif"
            ></BlogCardList>
            <BlogCardList
              title="Educational Tech"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                deleniti reiciendis necessitatibus alias ut, quisquam officia
                dicta iusto provident itaque eos vitae minus unde nemo laborum
                soluta adipisci veritatis et aut dolorem illum odit molestias
                vero perferendis. Illum quaerat quasi saepe nam, eum asperiores,
                vero nulla ratione recusandae animi quo."
              date="12 October 2023"
              image="/images/home/blog/blog.jfif"
            ></BlogCardList>
          </div>
        </div>
      </Container>
    </div>
  );
}

function BlogCardHighlighted({ image, title, description, date }) {
  return (
    <div className="group cursor-pointer">
      <div className="hidden lg:block h-72 w-full relative duration-300">
        <div className="w-full h-full bg-eve-white rounded-2xl"></div>
        <Image
          src={image}
          fill
          alt="sample"
          className="object-cover group-hover:-rotate-3 rounded-2xl duration-300 ease-out"
        />
      </div>
      <div className="hidden lg:block my-2.5 group-hover:translate-y-4 duration-300 space-y-2.5">
        <b className="text-btn-primary">{date}</b>
        <Heading variant="h4" className="text-btn-primary font-bold">
          {title}
        </Heading>
        <p className="text-eve-gray line-clamp-2">{description}</p>
        <button className="text-btn-blue">Read More ...</button>
      </div>
      <div className="grid lg:hidden grid-cols-12 items-center gap-5 group cursor-pointer">
        <div className="h-36 lg:h-48 col-span-5 w-full relative">
          <div className="w-full h-full bg-eve-white rounded-2xl"></div>
          <Image
            src={image}
            fill
            alt="sample"
            className="object-cover group-hover:-rotate-3 rounded-2xl duration-300 ease-out"
          />
        </div>
        <div className="col-span-7 group-hover:translate-x-1.5 duration-300">
          <div className="duration-300 space-y-2.5">
            <b className="text-btn-primary">{date}</b>
            <Heading variant="h4" className="text-btn-primary font-bold">
              {title}
            </Heading>
            <p className="text-eve-gray line-clamp-2">{description}</p>
            <button className="text-btn-blue">Read More ...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogCardList({ image, title, description, date }) {
  return (
    <div className="grid grid-cols-12 items-center gap-5 group cursor-pointer">
      <div className="h-36 lg:h-48 col-span-5 w-full relative">
        <div className="w-full h-full bg-eve-white rounded-2xl"></div>
        <Image
          src={image}
          fill
          alt="sample"
          className="object-cover group-hover:-rotate-3 rounded-2xl duration-300 ease-out"
        />
      </div>
      <div className="col-span-7 group-hover:translate-x-1.5 duration-300">
        <div className="duration-300 space-y-2.5">
          <b className="text-btn-primary">{date}</b>
          <Heading variant="h4" className="text-btn-primary font-bold">
            {title}
          </Heading>
          <p className="text-eve-gray line-clamp-2">{description}</p>
          <button className="text-btn-blue">Read More ...</button>
        </div>
      </div>
    </div>
  );
}
