"use client";

import { useEffect, useState, useTransition } from "react";
import Container from "@/components/box/container";
import { InputSearch } from "@/components/form/inputv2";
import Heading from "@/components/text/heading";
import Image from "next/image";
import { Tag } from "../portfolio/listProjects";
import moment from "moment";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/utils/axios";
import Link from "next/link";
import { ButtonPrimary } from "@/components/button/button";

export default function Page({
    latestPosts = [],
    totalPages = 1,
    currentPage = 1,
    hasPrevPage = false,
    hasNextPage = true,
  }) {
    const router = useRouter();
  
    // Helper function to handle page changes
    const goToPage = (pageNumber) => {
      router.push(`/blog/page/${pageNumber}`);
    };
  
    // Create pagination buttons with dots
    const generatePaginationButtons = () => {
        const buttons = [];
        const range = 2; // Number of pages to show on either side of the current page
    
        // Helper function to add page button
        const addPageButton = (pageNum) => (
          <button
            key={pageNum}
            className={`px-3 py-1 mx-1 ${
              pageNum === currentPage
                ? "bg-blue-500 text-white rounded-lg"
                : "bg-gray-300 text-black hover:bg-gray-400 rounded-lg"
            }`}
            onClick={() => goToPage(pageNum)}
          >
            {pageNum}
          </button>
        );
    
        // Add first page button
        buttons.push(addPageButton(1));
    
        // Add ellipsis if there's a gap after first page
        if (currentPage - range > 2) {
          buttons.push(<span key="dots-start" className="px-2">...</span>);
        }
    
        // Add page buttons around the current page
        for (let i = Math.max(2, currentPage - range); i <= Math.min(totalPages - 1, currentPage + range); i++) {
          buttons.push(addPageButton(i));
        }
    
        // Add ellipsis if there's a gap before last page
        if (currentPage + range < totalPages - 1) {
          buttons.push(<span key="dots-end" className="px-2">...</span>);
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
          <div className="flex justify-center mb-3">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={!hasPrevPage}
              className={`px-3 py-1 mx-1 rounded-lg ${
                hasPrevPage ? "bg-gray-300 hover:bg-gray-400 text-black" : "bg-gray-200 text-gray-400"
              }`}
            >
              Prev
            </button>
  
            {/* Page Number Buttons */}
            {generatePaginationButtons()}
  
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={!hasNextPage}
              className={`px-3 py-1 mx-1 rounded-lg ${
                hasNextPage ? "bg-gray-300 hover:bg-gray-400 text-black" : "bg-gray-200 text-gray-400"
              }`}
            >
              Next
            </button>
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