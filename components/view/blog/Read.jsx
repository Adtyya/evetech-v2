"use client";

import Container from "@/components/box/container";
import { ButtonLightBlue, ButtonWhite } from "@/components/button/button";
import { Tag } from "../portfolio/listProjects";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { HighlightedCard } from "./BlogList";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { SocialButton } from "../vacanciesdetail/detail";
import moment from "moment";
import { slugify } from "@/utils/slugify";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { useLocale } from "next-intl";
import Breadcrumb from "@/components/breadcrumbs/breadcrumb";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { useRef, useState, useEffect } from "react";

export const BASE_URL = "https://evetechsolution.com/";

export default function Read({ detailPost, otherPosts }) {
  const locale = useLocale();
  const contentRef = useRef(null);

  const [headings, setHeadings] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState(null);

  useEffect(() => {
    if (contentRef.current) {
      const headingElements = contentRef.current.querySelectorAll("h1, h2, h3");

      const headingList = Array.from(headingElements).map((heading) => ({
        id: heading.id,
        text: heading.textContent || "Untitled",
        level: Number(heading.tagName.charAt(1)),
      }));

      setHeadings(headingList);
    }
  }, [detailPost.content, detailPost?.contentEn]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll("h1, h2, h3");

        let closestHeading = null;
        let minDistance = Infinity;

        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          if (distance < minDistance && heading.id) {
            minDistance = distance;
            closestHeading = heading;
          }
        });

        if (closestHeading) {
          setActiveHeadingId(closestHeading.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container className="py-12">
      <div className="h-16 lg:h-32"></div>
      <div className="flex flex-col md:flex-row gap-5 items-start md:items-center">
        <Link href="/blog">
          <ButtonWhite>Back</ButtonWhite>
        </Link>
        <div className="flex items-center w-full md:w-fit justify-center">
          <Breadcrumb
            pathList={[
              { pathName: "Blog", path: "/blog" },
              { pathName: detailPost.category?.toString(), path: "/blog" },
              {
                pathName: detailPost?.title,
                path: `/blog/read/${detailPost?.slug}`,
              },
            ]}
          />
        </div>
      </div>

      <div className="my-3 md:my-7 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-auto hidden md:block md:col-span-1">
          <div className="relative w-full h-full">
            <div className="sticky top-28">
              {headings.length >= 1 ? (
                <>
                  <Heading variant="h4" className="text-btn-primary font-bold">
                    {locale === "en" ? "Chapters" : "Daftar Isi"}
                  </Heading>
                  <div className="my-3.5 space-y-1.5 w-full h-full max-h-96 overflow-auto">
                    {headings?.map((chap, id) => {
                      return (
                        <ChapterButton
                          key={id}
                          href={chap.id}
                          active={activeHeadingId === chap.id}
                          level={chap.level}
                          onClick={() => setActiveHeadingId(chap.id)}
                        >
                          {chap.text}
                        </ChapterButton>
                      );
                    })}
                  </div>
                </>
              ) : null}

              <div className="border-t border-t-eve-white">
                <small className="text-eve-key-features font-bold">
                  Share Article
                </small>
                <div className="flex items-start justify-start space-x-2.5 mt-1.5">
                  <FacebookShareButton
                    title={
                      locale === "en" && detailPost?.titleEN
                        ? detailPost?.titleEN
                        : detailPost?.title
                    }
                    description={
                      locale === "en" &&
                      detailPost?.spoilerEN &&
                      detailPost?.spoilerEN !== ""
                        ? detailPost?.spoilerEN
                        : detailPost?.spoiler
                    }
                    url={`${BASE_URL}/blog/read/${detailPost?.slug}`}
                  >
                    {/* <SocialButton
                  path="/images/career/social/Instagram.svg"
                  alt="instagram"
                /> */}
                    <SocialButton
                      path="/images/career/social/Facebook.svg"
                      alt="Facebook"
                    />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title={detailPost?.title}
                    description={
                      locale === "en" &&
                      detailPost?.spoilerEN &&
                      detailPost?.spoilerEN !== ""
                        ? detailPost?.spoilerEN
                        : detailPost?.spoiler
                    }
                    url={`${BASE_URL}/blog/read/${detailPost?.slug}`}
                  >
                    <SocialButton
                      path="/images/career/social/Twitter.svg"
                      alt="Twitter"
                    />
                  </TwitterShareButton>
                  {/* <SocialButton
                path="/images/career/social/Github.svg"
                alt="Github"
              /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto md:col-span-3">
          <div className="my-7 flex items-center justify-center flex-col space-y-7">
            <div className="flex flex-wrap items-center justify-center">
              {detailPost?.category?.map((field, i) => {
                return (
                  <div key={i} className="mr-2 mb-2">
                    <Tag>{field}</Tag>
                  </div>
                );
              })}
            </div>
            <h1 className="text-btn-primary font-bold text-center text-3xl md:text-4xl lg:text-5xl max-w-4xl">
              {locale === "en" && detailPost?.titleEN
                ? detailPost?.titleEN
                : detailPost?.title}
            </h1>
            <p className="text-eve-gray">
              {moment(detailPost?.date).format("LL")}
            </p>
            <div className="w-full h-60 md:h-96 aspect-video relative rounded-2xl overflow-hidden shadow-blog">
              <Image
                alt={
                  locale === "en" && detailPost?.titleEN
                    ? detailPost?.titleEN
                    : detailPost?.title
                }
                src={detailPost?.image}
                fill
                data-loaded="false"
                onLoad={(event) => {
                  event.currentTarget.setAttribute("data-loaded", "true");
                }}
                className="object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100"
              />
            </div>
            <div className="border-t border-t-eve-white block md:hidden">
              <small className="text-eve-key-features font-bold">
                Share Article
              </small>
              <div className="flex items-start justify-start space-x-2.5 mt-1.5">
                <FacebookShareButton
                  title={
                    locale === "en" && detailPost?.titleEN
                      ? detailPost?.titleEN
                      : detailPost?.title
                  }
                  description={
                    locale === "en" &&
                    detailPost?.spoilerEN &&
                    detailPost?.spoilerEN !== ""
                      ? detailPost?.spoilerEN
                      : detailPost?.spoiler
                  }
                  url={`${BASE_URL}/blog/read/${detailPost?.slug}`}
                >
                  {/* <SocialButton
                  path="/images/career/social/Instagram.svg"
                  alt="instagram"
                /> */}
                  <SocialButton
                    path="/images/career/social/Facebook.svg"
                    alt="Facebook"
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  title={detailPost?.title}
                  description={
                    locale === "en" &&
                    detailPost?.spoilerEN &&
                    detailPost?.spoilerEN !== ""
                      ? detailPost?.spoilerEN
                      : detailPost?.spoiler
                  }
                  url={`${BASE_URL}/blog/read/${detailPost?.slug}`}
                >
                  <SocialButton
                    path="/images/career/social/Twitter.svg"
                    alt="Twitter"
                  />
                </TwitterShareButton>
                {/* <SocialButton
                path="/images/career/social/Github.svg"
                alt="Github"
              /> */}
              </div>
            </div>
          </div>
          <div ref={contentRef}>
            <Markdown
              components={{
                a: MarkDownLink,
                img: ConvertToNextImage,
              }}
              rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
              className="prose lg:prose-lg prose-a:text-btn-blue text-justify !max-w-none"
            >
              {locale === "en" &&
              detailPost?.contentEN &&
              detailPost?.contentEN !== ""
                ? detailPost?.contentEN
                : detailPost?.content}
            </Markdown>
          </div>
        </div>
      </div>
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          {locale === "en" ? "You May also like" : "Kamu mungkin juga suka"}
        </Heading>
        <div className="my-7 grid grid-cols-1 md:grid-cols-3 gap-7">
          {otherPosts.map((item, idx) => {
            return (
              <div key={idx}>
                <Link
                  href={`/blog/read/${
                    locale === "en" ? item?.slugEN : item?.slug
                  }`}
                >
                  <HighlightedCard
                    image={item?.image}
                    title={locale === "en" ? item?.titleEN : item?.title}
                    subtitle={
                      locale === "en" &&
                      item?.spoilerEN &&
                      item?.spoilerEN !== ""
                        ? item?.spoilerEN
                        : item?.spoiler
                    }
                    tag={item?.category?.map((field) => {
                      return {
                        name: field || "",
                      };
                    })}
                    createdAt={item?.date}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className="w-full mt-10 flex justify-center">
          <Link href="/blog/page/1">
            <ButtonLightBlue>View More</ButtonLightBlue>
          </Link>
        </div>
      </div>
    </Container>
  );
}

function ChapterButton({ href, active, level, children }) {
  return (
    <Link className="flex items-center space-x-2" href={`#${href}`}>
      <div
        className={`h-12 w-1 ${active ? "bg-btn-blue" : "bg-transparent"}`}
      ></div>
      <p
        style={{ marginLeft: `${(level - 1) * 15}px` }}
        className={`${
          active ? "text-btn-blue" : "text-btn-primary"
        } text-start text-sm font-bold line-clamp-2 w-full`}
      >
        {children}
      </p>
    </Link>
  );
}

function HeadingId({ level, children }) {
  const Tag = level || "h1";
  return <Tag id={slugify(children)}>{children}</Tag>;
}

function MarkDownLink({ href, children, ...props }) {
  return (
    <a
      href={href}
      target={props?.target || "_self"}
      rel={props?.rel || "nofollow"}
    >
      {children}
    </a>
  );
}

function ConvertToNextImage(props) {
  return (
    <Image
      src={props.src}
      alt={props?.alt}
      width={0}
      height={0}
      sizes="100vw"
      className="object-cover w-full h-auto"
      loading="lazy"
    />
  );
}
