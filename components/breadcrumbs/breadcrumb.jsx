import React from "react";
import Link from "next/link";

export default function BreadCrumbs({ pathList }) {
  return (
    <>
      {/* <!-- Component: Elevated basic breadcrumb --> */}
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap h-14 list-none items-stretch gap-2">
          {pathList.map((item, index) => {
            return (
              <li
                className={`${
                  index === pathList.length - 1
                    ? "flex flex-1 items-center gap-2"
                    : index === pathList.length - 2
                    ? "flex items-center gap-2"
                    : " items-center gap-2 flex"
                }`}
                key={index}
              >
                {item.path ? (
                  <Link
                    href={item.path}
                    className={`${
                      index === pathList.length - 1
                        ? "pointer-events-none items-center gap-1 text-slate-500 font-medium truncate-mobile"
                        : "flex items-center gap-1 text-slate-700 transition-colors hover:text-e-primary font-medium truncate-mobile"
                    }`}
                  >
                    {item.pathName}
                  </Link>
                ) : (
                  <button type="button">
                    <p
                      className={`${
                        index === pathList.length - 1
                          ? "pointer-events-none max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-500 cursor-pointer font-medium"
                          : "flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors cursor-pointer hover:text-e-primary font-medium"
                      }`}
                    >
                      {item.pathName}
                    </p>
                  </button>
                )}
                {index !== pathList.length - 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 flex-none stroke-slate-700 transition-transform rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    aria-labelledby={`aria-title-0${index} aria-description-0${index}`}
                    role="graphics-symbol"
                  >
                    <title id={`title-0${index}`}>Arrow</title>
                    <desc id={`description-0${index}`}>
                      Arrow icon that points to the next page in big screen
                      resolution sizes and previous page in small screen
                      resolution sizes.
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {/* <!-- End Elevated basic breadcrumb --> */}
    </>
  );
}
