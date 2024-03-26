"use client";
import Container from "@/components/box/container";

const listDummy = [
  {
    videoPath: "/videos/projects/Downton.webm",
    title: "Downtown Dinner",
    category: "POS Restaurant",
    subtitle:
      "Downtowndinner.id is a landing page regarding restaurant information, menus, contacts to online orders (delivery orders) so that customers who want to order food for take away do not need to come directly to the restaurant.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/d.png",
  },
  {
    videoPath: "/videos/projects/Pelangi.webm",
    title: "Pelangi Laundry",
    category: "Laundry Pick-Up Delivery",
    subtitle:
      "Pelangi Laundry provides online laundry services, where customers do not need to come to the laundry outlet in person. Customers only need to access the Pelangi Laundry website to use laundry services, which later Pelangi Laundry employees will go to the customer's location according to the location data that has been input by the customer before.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/p.png",
  },
  {
    videoPath: "/videos/projects/Sanwoo.webm",
    title: "Sanwoo",
    category: "Web Company Profile",
    subtitle:
      "sanwooelectronics.com displays cooler and freezer products along with details that will make it easier for Sanwoo Electronics to reach its customers. This website also contains contact details for Sanwoo Electronics which can make it easier for customers.",
    tag: [{ name: "Web Development" }],
    rtl: true,
    twoColumns: false,
    thumbnail: "/images/videofallback/s.png",
  },
  {
    videoPath: "/videos/projects/Juragan.webm",
    title: "Juragan Material",
    category: "E-Commerce",
    subtitle:
      "Juragan Material website is used to integrate all company resources, such as customer data, sales order data, purchase order management, and business monitoring through a dashboard.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/j.png",
  },
  {
    videoPath: "/videos/projects/Everest.webm",
    title: "Everest",
    category: "POS Restaurant",
    subtitle:
      "Juragan Material website is used to integrate all company resources, such as customer data, sales order data, purchase order management, and business monitoring through a dashboard.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: false,
    thumbnail: "/images/videofallback/e.svg",
  },
  {
    videoPath: "/videos/projects/Educare.webm",
    title: "Educare",
    category: "Mobile App",
    subtitle:
      "Juragan Material website is used to integrate all company resources, such as customer data, sales order data, purchase order management, and business monitoring through a dashboard.",
    tag: [{ name: "Mobile App" }],
    rtl: false,
    twoColumns: false,
    thumbnail: "/images/videofallback/Educare.svg",
  },
  {
    videoPath: "/videos/projects/Serafix.webm",
    title: "Serafix",
    category: "POS System",
    subtitle:
      "Juragan Material website is used to integrate all company resources, such as customer data, sales order data, purchase order management, and business monitoring through a dashboard.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: true,
    twoColumns: true,
    thumbnail: "/images/videofallback/Serafix.svg",
  },
  {
    videoPath: "/videos/projects/Glamori.webm",
    title: "Glamori",
    category: "POS System",
    subtitle:
      "Juragan Material website is used to integrate all company resources, such as customer data, sales order data, purchase order management, and business monitoring through a dashboard.",
    tag: [{ name: "Web Development" }, { name: "Web Application" }],
    rtl: false,
    twoColumns: true,
    thumbnail: "/images/videofallback/Serafix.svg",
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
