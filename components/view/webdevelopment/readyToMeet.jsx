"use client";

import { useState, useRef } from "react";
import Container from "@/components/box/container";
import {
  InputInvisibleLabel,
  InputSelect,
  InputWithLabel,
} from "@/components/form/inputv2";
import Heading from "@/components/text/heading";
import { ButtonLightBlue } from "@/components/button/button";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { countryCodes } from "../contactus/country";

export default function ReadyToMeet() {
  const t = useTranslations("Form");
  const emailRef = useRef(null);

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
    <div className="bg-eve-white py-12">
      <Container className="grid grid-cols-1 md:grid-cols-2 items-center gap-3">
        <div>
          <Heading
            variant="h2"
            className="font-bold text-btn-primary w-full max-w-sm"
          >
            {t.rich("title", {
              span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
              br: () => <br />,
            })}
          </Heading>
          {/* <p className="mt-2.5 text-eve-gray">{`Couldn't find what you were looking for?`}</p> */}
        </div>
        <div>
          <form
            ref={emailRef}
            onSubmit={handleSubmit}
            className="bg-btn-white rounded-2xl p-3 lg:p-7 space-y-4"
          >
            <InputWithLabel
              name="name"
              required={true}
              placeholder="Your fullname"
              label={t("input.name")}
              type="text"
            ></InputWithLabel>
            <InputWithLabel
              name="email"
              required={true}
              placeholder="Email address"
              label={t("input.email")}
              type="email"
            ></InputWithLabel>
            <div className="flex flex-col lg:flex-row lg:space-x-5">
              <div className="w-full lg:w-2/4">
                <InputSelect
                  label={t("input.phone")}
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
              <div className="w-full lg:w-2/4">
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
              label={t("input.company")}
              type="text"
            ></InputWithLabel>
            <InputSelect label={t("input.projectbudget")} name="plan_budget">
              <option value="" defaultValue>
                Select Your Budget
              </option>
              <option value={t("input.nominal.<3")}>
                {t("input.nominal.<3")}
              </option>
              <option value={t("input.nominal.3-7")}>
                {t("input.nominal.3-7")}
              </option>
              <option value={t("input.nominal.7-12")}>
                {t("input.nominal.7-12")}
              </option>
              <option value={t("input.nominal.12-20")}>
                {t("input.nominal.12-20")}
              </option>
              <option value={t("input.nominal.>20")}>
                {t("input.nominal.>20")}
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
              <ButtonLightBlue
                type="submit"
                disabled={loading}
                className="px-5"
              >
                {loading ? "Please wait.." : "Submit"}
              </ButtonLightBlue>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
