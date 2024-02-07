/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { ButtonPrimary, ButtonWhite } from "../button/button";

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
    path: "/",
  },
  {
    name: "Portofolio",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
];

export default function NavbarEvetech() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed top-0 z-10">
      <div className="bg-eve-black">
        <div className="flex items-center justify-center py-1.5">
          <p className="text-white">
            Get your special discount{" "}
            <span className="text-eve-blue font-semibold">Here!</span>
          </p>
        </div>
      </div>

      <header className="bg-white">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <Logo />
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
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              {navList.map((item, id) => {
                return (
                  <li key={id} role="none" className="flex items-stretch">
                    <a
                      role="menuitem"
                      aria-haspopup="false"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8 cursor-pointer"
                    >
                      <span>{item.name}</span>
                    </a>
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
