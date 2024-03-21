"use client";

import Container from "../box/container";
import { ButtonPrimary } from "../button/button";
import Input from "../form/input";
import Heading from "../text/heading";
import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const socialIcon = [
  {
    path: "/images/footer/social/Instagram.svg",
  },
  {
    path: "/images/footer/social/Facebook.svg",
  },
  {
    path: "/images/footer/social/Twitter.svg",
  },
  {
    path: "/images/footer/social/Github.svg",
  },
];

const menu = [
  {
    name: "Quick Links",
    path: [
      {
        name: "About us",
        path: "/about-us",
      },
      {
        name: "Contact",
        path: "/contact-us",
      },
      {
        name: "News & blogs",
        path: "/",
      },
      {
        name: "Career",
        path: "/",
      },
    ],
  },
  {
    name: "Services",
    path: [
      {
        name: "web app development",
        path: "/service/web-app-development",
      },
      {
        name: "mobile app development",
        path: "/service/mobile-app-development",
      },
      {
        name: "web development",
        path: "/service/web-development",
      },
      {
        name: "news web development",
        path: "/service/news-web-development",
      },
    ],
  },
];

export const officeLocation = [
  {
    country: "Indonesia",
    location: [
      {
        city: "Solo",
        address:
          "Royal Regency, Dusun 1, Gedangan, Solo Baru, Kota Surakarta, Jawa Tengah 57552",
      },
      {
        city: "Jakarta",
        address: "Soon",
      },
    ],
  },
  {
    country: "Malaysia",
    location: [
      {
        city: "Kuala Lumpur",
        address:
          "BO1-A-9, Menara 2, KL Eco City, 3, Jln Bangsar, 59200 Kuala Lumpur WP",
      },
    ],
  },
  {
    country: "France",
    location: [
      {
        city: "Paris",
        address: "32-34 Avenue Kleber, Paris, 75116, FRA",
      },
    ],
  },
];

export default function Footer() {
  const emailRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_xxf1b9a", "template_50w7zkl", emailRef.current, {
        publicKey: "3kSW9aA1DfoKULfx_",
      })
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
        },
        (err) => {
          console.warn("Error", err);
          alert("An error occured");
        }
      );
  };

  const t = useTranslations("SpecialOffer");

  return (
    <div>
      <div className="w-full h-full bg-btn-white py-8">
        <Container>
          <div className="space-y-5">
            <Heading variant="h3" className="font-bold text-btn-primary">
              {t("title")}
            </Heading>
            <p className="text-eve-gray">
              {t.rich("subtitle", {
                br: () => <br />,
              })}
            </p>
            <form ref={emailRef} onSubmit={handleSubmit}>
              <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 items-center space-x-4 relative">
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email to signup for get special offer"
                />

                <div className="absolute -z-0">
                  <Input
                    type="hidden"
                    value="New potential customer !"
                    name="title"
                  />
                  <Input
                    type="hidden"
                    value="Someone need special offer"
                    name="subject"
                  />
                </div>
                <ButtonPrimary
                  className="whitespace-nowrap px-5 py-2"
                  disabled={loading}
                >
                  {loading ? "Please Wait..." : "Get Special Offer"}
                </ButtonPrimary>
              </div>
              {success ? (
                <p className="text-eve-green flex space-x-1 items-center justify-center md:justify-normal mt-1.5">
                  <CiCircleCheck />
                  <span>The form was sent successfully</span>
                </p>
              ) : null}
            </form>
          </div>
        </Container>
      </div>
      <footer className="w-full h-full relative">
        <div className="bg-gradient-footer absolute z-10 w-full h-full"></div>
        <Image
          src="/images/footer/footer.jfif"
          fill
          className="object-cover"
          alt="footer-bg"
        />
        <Container className="w-full h-full relative z-20 py-7 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className="col-auto md:col-span-3">
              <div className="w-28 h-28 relative">
                <Image
                  alt="eve-footer"
                  src="/images/footer/eve-footer.png"
                  className="object-contain"
                  fill
                />
              </div>
              <div className="mt-4 space-y-1.5">
                <p className="text-white text-lg font-medium">
                  Ready To Collaborate With Evetech?
                </p>
                <p className="text-white font-light">
                  You have ideas, we have software solution, time to join
                  forces.
                </p>
                <div className="space-y-1.5 py-4">
                  <p className="font-semibold text-eve-p-latest-project">
                    Reach Us
                  </p>
                  <a
                    className="flex items-center space-x-2.5 text-white"
                    href="mailto:Marketing@evetechsolution.com"
                  >
                    <object
                      data="/images/footer/social/gmail.svg"
                      type="image/svg+xml"
                      height={22}
                      width={22}
                    ></object>
                    <p>Marketing@evetechsolution.com</p>
                  </a>
                  <a
                    className="flex items-center space-x-2.5 text-white"
                    href="https://api.whatsapp.com/send/?phone=628995226188"
                    target="_blank"
                  >
                    <object
                      data="/images/footer/social/whatsapp.svg"
                      type="image/svg+xml"
                      height={22}
                      width={22}
                    ></object>
                    <p>+62 8995-226-188</p>
                  </a>
                </div>
                <div className="flex space-x-4 pt-4">
                  {socialIcon.map((item, idx) => {
                    return (
                      <button
                        key={idx}
                        className="w-9 h-9 rounded-full bg-eve-footer-btn outline outline-1 outline-white flex items-center justify-center"
                      >
                        <Image
                          src={item.path}
                          width={22}
                          height={22}
                          alt="social-icon"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-auto md:col-span-9">
              <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-5 lg:gap-y-0">
                <div className="col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-1">
                  {menu.map((item, indx) => {
                    return (
                      <div
                        key={indx}
                        className="space-y-2.5 col-auto lg:col-span-3 mb-3.5"
                      >
                        <p className="font-semibold text-eve-p-latest-project">
                          {item.name}
                        </p>
                        {item.path.map((a, b) => {
                          return (
                            <Link key={b} href={a.path}>
                              <p className="font-medium text-white capitalize my-2">
                                {a.name}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-2.5 col-span-2 lg:col-span-9">
                  <p className="font-semibold text-eve-p-latest-project">
                    Our Offices
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {officeLocation.map((item, idx) => {
                      return (
                        <div key={idx}>
                          <p className="text-lg font-medium text-white">
                            {item.country}
                          </p>
                          {item.location.map((location, id) => {
                            return (
                              <div
                                key={id}
                                className="w-full grid grid-cols-12 item-start"
                              >
                                <div className="col-span-1 lg:col-span-2 mt-2">
                                  <Image
                                    alt="location"
                                    src="/images/footer/location.svg"
                                    height={18}
                                    width={18}
                                  />
                                </div>
                                <div className="col-span-11 lg:col-span-10">
                                  <p className="text-white my-1.5 font-medium">
                                    {location.city}
                                  </p>
                                  <p className="text-white font-light">
                                    {location.address}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-btn-primary mt-7 mb-4"></div>
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <p>&copy; 2023 Evetech Solution. All right reserved</p>
            <div className="flex flex-wrap items-center justify-center mt-3 md:mt-0">
              <button className="mr-5">Term of Service</button>
              <button className="mr-5">Policy Service</button>
              <button className="mr-5">Cookie Police</button>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
