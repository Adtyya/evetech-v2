"use client";

import Container from "@/components/box/container";
import { InputSearch } from "@/components/form/inputv2";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { Tag } from "../portfolio/listProjects";
import moment from "moment";

export default function BlogList({
  latestPosts = [],
  featuresPosts = [],
  topPosts = [],
}) {
  console.log(latestPosts);

  return (
    <Container className="py-12">
      <div className="h-32"></div>
      <div>
        <Heading variant="h2" className="text-btn-primary font-bold capitalize">
          <span className="text-btn-blue">Explore</span> <br /> our latest
          update
        </Heading>
        <div className="flex flex-col items-start md:flex-row justify-start md:justify-between md:items-center mt-4 space-y-3 md:space-y-0">
          <p className="text-btn-primary">
            Stay informed and inspired with our bite-sized articles
          </p>
          <div className="w-full max-w-sm">
            <InputSearch />
          </div>
        </div>
      </div>
      <div className="mt-7 border-b-2 border-b-eve-white">
        <Heading variant="h3" className="text-btn-primary font-bold">
          Features Blog
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-5 py-7">
          <div className="hidden md:block md:col-span-8">
            {featuresPosts.slice(0, 1).map((item, idx) => {
              return (
                <HighlightedCard
                  key={idx}
                  image={item?.attributes?.cover?.data?.attributes?.url}
                  title={item?.attributes?.title}
                  subtitle={item?.attributes?.description}
                  tag={item?.attributes?.tags?.data?.map((item) => {
                    return {
                      name: item?.attributes?.name || "",
                    };
                  })}
                  createdAt={item?.attributes?.createdAt}
                ></HighlightedCard>
              );
            })}
          </div>
          <div className="hidden md:col-span-4 gap-5 md:grid grid-cols-1 w-full h-max">
            {featuresPosts.slice(1).map((item, idx) => {
              return (
                <SimpleCard
                  key={idx}
                  image={item?.attributes?.cover?.data?.attributes?.url}
                  title={item?.attributes?.title}
                  subtitle={item?.attributes?.description}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-1 gap-5 md:hidden">
            {featuresPosts.map((item, idx) => {
              return (
                <HighlightedCard
                  key={idx}
                  image={item?.attributes?.cover?.data?.attributes?.url}
                  title={item?.attributes?.title}
                  subtitle={item?.attributes?.description}
                  tag={item?.attributes?.tags?.data?.map((item) => {
                    return {
                      name: item?.attributes?.name || "",
                    };
                  })}
                  createdAt={item?.attributes?.createdAt}
                ></HighlightedCard>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-7 border-b-2 border-b-eve-white">
        <Heading variant="h3" className="text-btn-primary font-bold">
          Top Blog
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7 gap-5">
          {topPosts.map((item, idx) => {
            return (
              <HighlightedCard
                key={idx}
                image={item?.attributes?.cover?.data?.attributes?.url}
                title={item?.attributes?.title}
                subtitle={item?.attributes?.description}
                tag={item?.attributes?.tags?.data?.map((item) => {
                  return {
                    name: item?.attributes?.name || "",
                  };
                })}
                createdAt={item?.attributes?.createdAt}
              ></HighlightedCard>
            );
          })}
        </div>
      </div>
      <div className="mt-7 border-b-2 border-b-eve-white">
        <Heading variant="h3" className="text-btn-primary font-bold">
          Latest Post
        </Heading>
        <div className="grid grid-cols-1 py-7 gap-5">
          {latestPosts.map((item, idx) => {
            return (
              <HighlightedCard
                key={idx}
                image={item?.attributes?.cover?.data?.attributes?.url}
                title={item?.attributes?.title}
                subtitle={item?.attributes?.description}
                tag={item?.attributes?.tags?.data?.map((item) => {
                  return {
                    name: item?.attributes?.name || "",
                  };
                })}
                createdAt={item?.attributes?.createdAt}
                twoColumns
              ></HighlightedCard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

function SimpleCard({ image = " ", title = " ", subtitle = "" }) {
  return (
    <div className="grid grid-cols-12 gap-5 cursor-pointer">
      <div className="col-span-5">
        <div className="h-32 w-full relative rounded-2xl overflow-hidden">
          <Image
            alt="sample"
            src={image}
            fill
            className="object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100 group-hover:scale-105 duration-300"
            quality={100}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
          />
        </div>
      </div>
      <div className="col-span-7 grid-cols-1 gap-3 items-center">
        <h4 className="text-xl font-bold text-btn-primary line-clamp-2">
          {title}
        </h4>
        <p className="text-btn-primary line-clamp-3">{subtitle}</p>
      </div>
    </div>
  );
}

export function HighlightedCard({
  image = "",
  tag = [],
  title = "",
  subtitle = "",
  twoColumns = false,
  createdAt = "",
}) {
  return (
    <div className="w-full h-full group cursor-pointer">
      <div
        className={`grid grid-cols-1 ${
          twoColumns ? "md:grid-cols-12" : "md:grid-cols-1"
        } gap-5 items-center`}
      >
        <div
          className={`${
            twoColumns ? "md:col-span-4" : ""
          } col-auto w-full h-52 ${
            twoColumns ? "md:h-64" : "md:h-80"
          } relative rounded-2xl overflow-hidden`}
        >
          <Image
            alt="sample"
            src={image}
            fill
            className="object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100 group-hover:scale-105 duration-300"
            quality={100}
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
          />
        </div>
        <div
          className={`${twoColumns ? "md:col-span-8" : ""} col-auto space-y-3`}
        >
          <div className="flex max-h-14 h-full overflow-auto scrollbar-thin scrollbar-thumb-btn-primary">
            {tag.map((item, indx) => {
              return (
                <div key={indx} className="pr-3 mb-2">
                  <Tag>{item.name}</Tag>
                </div>
              );
            })}
          </div>
          <div className="space-y-2.5">
            <h2 className="text-btn-primary text-2xl md:text-3xl font-bold relative line-clamp-2">
              {title}
              {/* <span className="relative z-10">{title}</span> */}
              {/* <span className="absolute w-0 group-hover:w-full duration-500 h-1 bg-btn-primary left-0 bottom-0"></span> */}
            </h2>
            <p className="line-clamp-4 text-btn-primary group-hover:font-semibold duration-300">
              {subtitle}
            </p>
            <p className="text-btn-primary text-sm">
              {moment(createdAt).format("LL")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
