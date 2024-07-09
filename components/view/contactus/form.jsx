"use client";

import { useState, useRef } from "react";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import {
  InputWithLabel,
  InputInvisibleLabel,
  InputSelect,
} from "@/components/form/inputv2";
import { ButtonLightBlue, ButtonWhatsApp } from "@/components/button/button";
import { officeLocation } from "@/components/footer/footer";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { countryCodes } from "./country";

export default function ContactUsForm() {
  const emailRef = useRef(null);
  const t = useTranslations("ContactUs");

  const [countryCode, setCountryCode] = useState("62");
  const [userNumber, setUserNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_xxf1b9a", "template_aij7504", emailRef.current, {
        publicKey: "3kSW9aA1DfoKULfx_",
      })
      .then(
        () => {
          alert("Form sent. We will contact you soon!");
          setLoading(false);
        },
        (err) => {
          console.warn("Error", err);
          alert("An error occured");
        }
      );
  };

  return (
    <>
      <div className="h-16 lg:h-32"></div>
      <Container>
        <div>
          <Heading
            variant="h2"
            className="text-btn-primary font-bold capitalize"
          >
            {t.rich("title", {
              br: () => <br></br>,
              span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
            })}
          </Heading>
          <p className="text-eve-gray mt-1.5">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 items-center md:grid-cols-2 my-14 gap-5">
          <FormLeftSide></FormLeftSide>
          <div className="order-first lg:order-last">
            <form
              ref={emailRef}
              onSubmit={handleSubmit}
              className="bg-btn-white rounded-2xl p-3 lg:p-7 space-y-4"
            >
              <div className="py-5 text-center">
                <Heading variant="h3" className="text-btn-primary font-bold">
                  {t("form.title")}
                </Heading>
                <p className="mt-1.5 text-eve-gray">{t("form.subtitle")}</p>
              </div>
              <InputWithLabel
                name="name"
                required={true}
                placeholder="Your fullname"
                label={t("form.input.name")}
                type="text"
              ></InputWithLabel>
              <InputWithLabel
                name="email"
                required={true}
                placeholder="Email address"
                label={t("form.input.email")}
                type="email"
              ></InputWithLabel>
              <div className="flex space-x-5">
                <div className="w-2/4">
                  <InputSelect
                    label={t("form.input.phone")}
                    onChange={(even) => setCountryCode(even.target.value)}
                    required={false}
                  >
                    {countryCodes.map((item, index) => {
                      return (
                        <option key={index} value={item.code}>
                          +{item.code} - {item.name}
                        </option>
                      );
                    })}
                  </InputSelect>
                </div>
                <div className="w-2/4">
                  <InputInvisibleLabel
                    placeholder="xxxxxxxx"
                    onChange={(event) => setUserNumber(event.target.value)}
                  ></InputInvisibleLabel>
                </div>
              </div>
              <InputWithLabel
                name="bussiness_name"
                required={true}
                placeholder="Your company name"
                label={t("form.input.company")}
                type="text"
              ></InputWithLabel>
              <InputSelect
                label={t("form.input.projectbudget")}
                name="plan_budget"
              >
                <option value="" defaultValue>
                  Select Your Budget
                </option>
                <option value={t("form.input.nominal.<3")}>
                  {t("form.input.nominal.<3")}
                </option>
                <option value={t("form.input.nominal.3-7")}>
                  {t("form.input.nominal.3-7")}
                </option>
                <option value={t("form.input.nominal.7-12")}>
                  {t("form.input.nominal.7-12")}
                </option>
                <option value={t("form.input.nominal.12-20")}>
                  {t("form.input.nominal.12-20")}
                </option>
                <option value={t("form.input.nominal.>20")}>
                  {t("form.input.nominal.>20")}
                </option>
              </InputSelect>
              <div className="absolute -z-10">
                <InputInvisibleLabel
                  type="hidden"
                  name="phone_number"
                  value={`${countryCode.concat(userNumber)}`}
                />
              </div>
              <div className="flex items-center justify-center w-full pt-3">
                <ButtonLightBlue type="submit" disabled={loading}>
                  {loading ? "Please wait..." : "Submit"}
                </ButtonLightBlue>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

function FormLeftSide() {
  const t = useTranslations("ContactUs");

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 gap-5">
        {/* <div className="order-last lg:order-first space-y-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.762135792769!2d110.79308907574776!3d-7.6008453751225495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15ea9357f0ff%3A0x3f19000078705279!2sEvetech%20Solution!5e0!3m2!1sid!2sid!4v1709105712667!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className="rounded-2xl w-full h-96"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-eve-key-features font-bold text-xl">Our Offices</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {officeLocation.map((item, idx) => {
              return (
                <div key={idx}>
                  <p className="text-lg font-bold text-btn-primary">
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
                            src="/images/footer/location-dark.svg"
                            height={18}
                            width={18}
                          />
                        </div>
                        <div className="col-span-11 lg:col-span-10">
                          <p className="text-btn-primary my-1.5 font-bold">
                            {location.city}
                          </p>
                          <p className="text-btn-primary">{location.address}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div> */}
        <div>
          <Heading
            variant="h3"
            className="font-bold capitalize text-btn-primary"
          >
            Talk to our <br />
            <span className="text-btn-blue">Product Analytics Expert</span>
          </Heading>
          <p className="text-eve-gray">
            Have questions about pricing, plans, or growthly? Fill out form and
            our product analytics expert will be in touch directly.
          </p>
        </div>
        <div className="bg-eve-white rounded-2xl p-5 space-y-3.5">
          <Heading
            variant="h4"
            className="text-btn-primary font-bold capitalize"
          >
            {t.rich("rtm", {
              span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
            })}
          </Heading>
          {/* <p className="text-eve-gray">
            Have questions about pricing, plans, or growthly? Fill out form and
            our product analytics expert will be in touch directly.
          </p> */}
          <ButtonWhatsApp></ButtonWhatsApp>
        </div>
      </div>
    </div>
  );
}
