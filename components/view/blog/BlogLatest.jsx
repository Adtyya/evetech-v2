"use client";

import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import api from "@/utils/axios";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { Tag } from "../portfolio/listProjects";

export default function BlogLatest({
  latestPosts = [],
  totalPages = 1,
  currentPage = 1,
  hasPrevPage = false,
  hasNextPage = true,
}) {

  // Create pagination buttons with dots
  const generatePaginationButtons = () => {
    const buttons = [];
    const range = 2; // Number of pages to show on either side of the current page

    // Helper function to add page button
    const addPageButton = (pageNum) => (
      <Link
        key={pageNum}
        href={`/blog/page/${pageNum}`}
      >
        <button
          className={`px-3 py-1 mx-1 ${pageNum === currentPage
            ? "bg-blue-500 text-white rounded-lg"
            : "bg-gray-300 text-black hover:bg-gray-400 rounded-lg"
            }`}
          disabled={pageNum === currentPage}
        >
          {pageNum}
        </button>
      </Link>
    );

    // Add first page button
    buttons.push(addPageButton(1));

    // Add ellipsis if there's a gap after first page
    if (currentPage - range > 2) {
      buttons.push(<span key="dots-start" className="px-1">...</span>);
    }

    // Add page buttons around the current page
    for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPages - 1, currentPage + range); i++) {
      buttons.push(addPageButton(i));
    }

    // Add ellipsis if there's a gap before last page
    if (currentPage + range < totalPages - 1) {
      buttons.push(<span key="dots-end" className="px-1">...</span>);
    }

    // Add last page button if not already included
    if (totalPages > 1) {
      buttons.push(addPageButton(totalPages));
    }

    return buttons;
  };

  function incrementView(id) {
    try {
      api.patch(`/blog/inc-view/${id}`);
    } catch (error) {
      throw new Error("An error occurred while updating the view count.");
    }
  }

  return (
    <Container className="py-12">
      <div className="h-16 lg:h-32"></div>

      <div className="mt-7 border-b-2 border-b-eve-white">
        <Heading variant="h3" className="text-btn-primary font-bold">
          Latest Post
        </Heading>

        {/* Blog Posts List */}
        <div className="grid grid-cols-1 py-7 gap-5">
          {latestPosts.map((item, idx) => {
            return (
              <div key={idx} onClick={() => incrementView(item?._id)}>
                <Link href={`/blog/read/${item?.slug}`}>
                  <HighlightedCard
                    key={idx}
                    image={item?.image}
                    title={item?.title}
                    subtitle={item?.spoiler}
                    tag={item?.category?.map((field) => {
                      return {
                        name: field || "",
                      };
                    })}
                    createdAt={item?.date}
                    twoColumns
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        <div className="flex flex-wrap gap-1 justify-center mb-3">
          <Link href={`/blog/page/${currentPage - 1}`}>
            <button
              disabled={!hasPrevPage}
              className={`px-3 py-1 mx-1 rounded-lg ${hasPrevPage ? "bg-gray-300 hover:bg-gray-400 text-black" : "bg-gray-200 text-gray-400"
                }`}
            >
              Prev
            </button>
          </Link>

          {/* Page Number Buttons */}
          {generatePaginationButtons()}

          <Link href={`/blog/page/${currentPage + 1}`}>
            <button
              disabled={!hasNextPage}
              className={`px-3 py-1 mx-1 rounded-lg ${hasNextPage ? "bg-gray-300 hover:bg-gray-400 text-black" : "bg-gray-200 text-gray-400"
                }`}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </Container>
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
        className={`grid grid-cols-1 ${twoColumns ? "md:grid-cols-12" : "md:grid-cols-1"
          } gap-5 items-center`}
      >
        <div
          className={`${twoColumns ? "md:col-span-4" : ""
            } col-auto w-full h-52 ${twoColumns ? "md:h-64" : "md:h-80"
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
        <div className={`${twoColumns ? "md:col-span-8" : ""} col-auto space-y-3`}>
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
            </h2>
            <p className="line-clamp-4 text-btn-primary group-hover:font-semibold">
              {subtitle}
            </p>
          </div>
          <p className="line-clamp-1 text-btn-primary text-sm font-medium">
            {moment(createdAt).format("LL")}
          </p>
        </div>
      </div>
    </div>
  );
}