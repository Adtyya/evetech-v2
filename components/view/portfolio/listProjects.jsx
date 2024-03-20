"use client";
import Container from "@/components/box/container";

const listDummy = [
  {
    videoPath: "/videos/projects/Downton.webm",
    title: "Downtown Dinner",
    category: "Category",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis, dolorum debitis ratione voluptatibus voluptate veniam dicta aut error commodi?",
    tag: [{ name: "Development web" }, { name: "Mobile App" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/d.png",
  },
  {
    videoPath: "/videos/projects/Pelangi.webm",
    title: "Pelangi Laundry",
    category: "Category",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis, dolorum debitis ratione voluptatibus voluptate veniam dicta aut error commodi?",
    tag: [{ name: "Development web" }, { name: "Mobile App" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/p.png",
  },
  {
    videoPath: "/videos/projects/Sanwoo.webm",
    title: "Sanwoo",
    category: "Category",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis, dolorum debitis ratione voluptatibus voluptate veniam dicta aut error commodi?",
    tag: [{ name: "Development web" }, { name: "Mobile App" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/s.png",
  },
  {
    videoPath: "/videos/projects/Juragan.webm",
    title: "Juragan Material",
    category: "Category",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae omnis, dolorum debitis ratione voluptatibus voluptate veniam dicta aut error commodi?",
    tag: [{ name: "Development web" }, { name: "Mobile App" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/j.png",
  },
];

export default function ListProjects() {
  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {listDummy.map((item, index) => {
          const className = item.twoColumns ? "md:col-span-2" : "md:col-auto";
          return (
            <div key={index} className={`col-auto ${className}`}>
              <Card
                videoPath={item.videoPath}
                title={item.title}
                category={item.category}
                subtitle={item.subtitle}
                tag={item.tag}
                rtl={item.rtl}
                twoColumns={item.twoColumns}
                thumbnail={item.thumbnail}
              ></Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

function Tag({ children }) {
  return (
    <button className="bg-eve-white px-5 py-2 rounded-full w-max">
      <p className="text-sm text-btn-primary capitalize">{children}</p>
    </button>
  );
}

function Card({
  videoPath = "",
  title = "",
  category = "",
  subtitle = "",
  tag = [],
  rtl = true,
  twoColumns = true,
  thumbnail = "",
}) {
  return (
    <div
      className={`grid grid-cols-1 ${
        twoColumns ? "md:grid-cols-12" : ""
      } gap-7 items-center`}
    >
      <div
        className={`col-auto ${
          twoColumns ? "md:col-span-8" : ""
        } bg-eve-white h-64 md:h-80`}
      >
        <video
          className="w-full h-full"
          controls={false}
          preload="meta"
          autoPlay={false}
          muted
          loop
          controlsList="nofullscreen nodownload noremoteplayback"
          poster={thumbnail}
          onClick={(event) => event.target.play()}
        >
          <source src={videoPath} type="video/webm"></source>
        </video>
      </div>
      <div
        className={`col-auto ${twoColumns ? "md:col-span-4" : ""} space-y-1.5 ${
          rtl ? "md:order-last" : "md:order-first"
        }`}
      >
        <h3 className="text-2xl lg:text-3xl text-btn-primary font-semibold capitalize">
          {title}
        </h3>
        <p className="text-eve-input font-light">{category}</p>
        <p className="text-btn-primary">{subtitle}</p>
        <div className="flex gap-3.5 flex-wrap">
          {tag?.map((item, index) => {
            return <Tag key={index}>{item?.name}</Tag>;
          })}
        </div>
      </div>
    </div>
  );
}
