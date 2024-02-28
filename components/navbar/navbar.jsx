/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "./logo";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { ButtonPrimary, ButtonWhite } from "../button/button";
import { usePathname } from "next/navigation";

const navList = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/",
  },
  {
    name: "Services",
    path: "#",
    subPath: [
      {
        name: "Web App Development",
        path: "/service/web-app-development",
      },
      {
        name: "Web Development",
        path: "/service/web-development",
      },
      {
        name: "Mobile App Development",
        path: "/service/mobile-app-development",
      },
      {
        name: "News Website Development",
        path: "/service/news-web-development",
      },
    ],
  },
  {
    name: "Portofolio",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Career",
    path: "/",
  },
];

export default function NavbarEvetech() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showed, setShowed] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    pathname === "/contact-us" ? setIsScrolled(true) : setIsScrolled(false);
    const handleScroll = () => {
      pathname !== "/contact-us" && setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <nav className="w-full fixed top-0 z-50">
      <div className={`bg-eve-black relative ${showed ? "block" : "hidden"}  `}>
        <div className="flex items-center justify-between py-1.5 px-5">
          <button className="text-white" onClick={() => setShowed(false)}>
            <FiX />
          </button>
          <p className="text-white">
            Get your special discount{" "}
            <span className="text-eve-blue font-semibold">Here!</span>
          </p>
          <div></div>
        </div>
      </div>

      <header
        className={`${
          isScrolled ? "bg-eve-white" : "bg-transparent"
        } duration-300`}
      >
        <div className="relative mx-auto w-full max-w-7xl px-5">
          <nav
            aria-label="main navigation"
            className="flex h-[4.3rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              {/* <Logo /> */}
              <Image
                src="/images/navbar/logo.png"
                alt="logo"
                fetchPriority="high"
                width={60}
                height={50}
              />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain px-8 ${
                isScrolled ? "bg-eve-white/90" : "bg-eve-gray/90"
              } backdrop-blur-sm lg:backdrop-blur-none pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {navList.map((item, id) => {
                return item.name !== "Services" ? (
                  <li key={id} role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      className={`flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer ${
                        isScrolled ? "text-eve-gray" : "text-white"
                      } duration-300`}
                      href={item.path}
                      onClick={() => setIsToggleOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ) : (
                  <li key={id} role="none" className="flex items-stretch">
                    <div
                      role="menuitem"
                      aria-haspopup="false"
                      className={`flex lg:items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer ${
                        isScrolled ? "text-eve-gray" : "text-white"
                      } duration-300 group relative flex-col lg:flex-row items-start`}
                    >
                      <span>{item.name}</span>
                      <div className="pl-2 grid lg:hidden grid-cols-1 gap-y-4">
                        {item.subPath.map((a, b) => {
                          return (
                            <Link
                              href={a.path}
                              key={b}
                              onClick={() => setIsToggleOpen(false)}
                            >
                              {a.name}
                            </Link>
                          );
                        })}
                      </div>
                      <div
                        className={`w-max hidden lg:grid grid-cols-1 gap-y-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-200 absolute top-full h-max  bg-eve-white border border-border-gray ${
                          isScrolled ? "rounded-b-lg" : "rounded-lg"
                        } text-eve-gray p-3`}
                      >
                        {item.subPath.map((a, b) => {
                          return (
                            <Link href={a.path} key={b}>
                              {a.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0 space-x-3">
              <ButtonWhite className="flex items-center space-x-3">
                <img
                  src="/images/navbar/indonesia.png"
                  alt="flag"
                  loading="lazy"
                />
                <span>ID</span>
              </ButtonWhite>
              <ButtonPrimary>Get Started!</ButtonPrimary>
            </div>
          </nav>
        </div>
      </header>
    </nav>
  );
}
