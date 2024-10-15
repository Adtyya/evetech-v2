"use client";
import Container from "@/components/box/container";
import { useTranslations } from "next-intl";

const listDummy = [
  {
    id: 1,
    videoPath: "/videos/projects/Downton.webm",
    title: "Downtown Dinner",
    category: "POS Restaurant",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/d.png",
  },
  {
    id: 2,
    videoPath: "/videos/projects/Pelangi.webm",
    title: "Pelangi Laundry",
    category: "Laundry Pick-Up Delivery",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/p.png",
  },
  {
    id: 3,
    videoPath: "/videos/projects/Sanwoo.webm",
    title: "Sanwoo",
    category: "Web Company Profile",
    tag: [{ name: "Web Development" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/s.png",
  },
  {
    id: 4,
    videoPath: "/videos/projects/Juragan.webm",
    title: "Juragan Material",
    category: "E-Commerce",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/j.png",
  },
  {
    id: 5,
    videoPath: "/videos/projects/Ribka.webm",
    title: "Ribka",
    category: "ERP System",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-Ribka.png",
  },
  {
    id: 6,
    videoPath: "/videos/projects/Educare.webm",
    title: "Educare",
    category: "Mobile App",
    tag: [{ name: "Mobile App" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-Educare.png",
  },
  {
    id: 7,
    videoPath: "/videos/projects/Serafix.webm",
    title: "Serafix",
    category: "ERP System",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/serafix.png",
  },
  {
    id: 8,
    videoPath: "/videos/projects/Glamori.webm",
    title: "Glamori",
    category: "POS System",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-Glamori.png",
  },
  {
    id: 9,
    videoPath: "/videos/projects/Manunggal.webm",
    title: "Manunggal",
    category: "ERP System",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-Manunggal.png",
  },
  {
    id: 10,
    videoPath: "/videos/projects/Homeez.webm",
    title: "Homeez",
    category: "Web Application",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/Thumb-Homeez.png",
  },
  {
    id: 11,
    videoPath: "/videos/projects/Scfx.webm",
    title: "SC-FX",
    category: "Web Application",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-SCFX.png",
  },
  {
    id: 12,
    videoPath: "/videos/projects/Evewash.webm",
    title: "Evewash",
    category: "Laundry Pick-Up Delivery",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/Thumb-Evewash.png",
  },
  {
    id: 13,
    videoPath: "/videos/projects/Kansee.webm",
    title: "Kansee",
    category: "E-Commerce",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/Thumb-Kansee.png",
  },
  {
    id: 14,
    videoPath: "/videos/projects/Tumurun.webm",
    title: "Tumurun",
    category: "Online Booking",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/Thumb-Tumurun.png",
  },
];

export default function ListProjects() {
  const t = useTranslations("Portfolio");

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
                subtitle={t(`${index + 1}.subtitle`)}
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

export function Tag({ children }) {
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
      className={`grid grid-cols-1 ${twoColumns ? "md:grid-cols-12" : ""
        } gap-7 items-center`}
    >
      <div
        className={`col-auto ${twoColumns ? "md:col-span-8" : ""
          } bg-eve-white h-64 md:h-80`}
      >
        <video
          className="w-full h-full cursor-pointer"
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
        className={`col-auto ${twoColumns ? "md:col-span-4" : ""} space-y-1.5 ${rtl ? "md:order-last" : "md:order-first"
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
