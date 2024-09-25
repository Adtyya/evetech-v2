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

export const BASE_URL = "https://evetechsolution.com/";

export default function Read({ detailPost, otherPosts }) {
  const locale = useLocale();

  return (
    <Container className="py-12">
      <div className="h-16 lg:h-32"></div>
      <Link href="/blog">
        <ButtonWhite>Back</ButtonWhite>
      </Link>
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
          {detailPost?.title}
        </h1>
        <p className="text-eve-gray">{moment(detailPost?.date).format("LL")}</p>
        <div className="w-full h-60 md:h-96 relative rounded-2xl overflow-hidden shadow-blog">
          <Image
            alt="sample"
            src={detailPost?.image}
            fill
            data-loaded="false"
            onLoad={(event) => {
              event.currentTarget.setAttribute("data-loaded", "true");
            }}
            className="object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100"
          />
        </div>
      </div>
      <div className="mb-7 grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-auto md:col-span-1">
          {detailPost?.chapters?.length >= 1 ? (
            <>
              <Heading variant="h4" className="text-btn-primary font-bold">
                Chapters
              </Heading>
              <div className="my-3.5 space-y-3.5">
                {detailPost?.chapters?.map((chap, id) => {
                  return <ChapterButton key={id}>{chap.name}</ChapterButton>;
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
        <div className="col-auto md:col-span-3 text-justify">
          <Markdown
            components={{
              h1: ({ children }) => (
                <HeadingId level="h1">{children}</HeadingId>
              ),
              h2: ({ children }) => (
                <HeadingId level="h2">{children}</HeadingId>
              ),
              h3: ({ children }) => (
                <HeadingId level="h3">{children}</HeadingId>
              ),
              h4: ({ children }) => (
                <HeadingId level="h4">{children}</HeadingId>
              ),
              h5: ({ children }) => (
                <HeadingId level="h5">{children}</HeadingId>
              ),
              a: MarkDownLink,
              img: ConvertToNextImage,
            }}
            rehypePlugins={[rehypeRaw]}
            className="prose lg:prose-lg prose-a:text-btn-blue"
          >
            {locale === "en" &&
            detailPost?.contentEN &&
            detailPost?.contentEN !== ""
              ? detailPost?.contentEN
              : detailPost?.content}
          </Markdown>
        </div>
      </div>
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          You May also like
        </Heading>
        <div className="my-7 grid grid-cols-1 md:grid-cols-3 gap-7">
          {otherPosts.map((item, idx) => {
            return (
              <div key={idx}>
                <Link href={`/blog/read/${item?.slug}`}>
                  <HighlightedCard
                    image={item?.image}
                    title={item?.title}
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

function ChapterButton({ children }) {
  return (
    <Link
      className="flex items-center space-x-2"
      href={`#${slugify(children)}`}
    >
      <div className="h-16 !w-0.5 bg-btn-blue"></div>
      <p className="text-btn-primary text-start font-bold line-clamp-2 w-full">
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
