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

export default function ReadyToMeet() {
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
            Siap bertemu dan diskusikan{" "}
            <span className="text-eve-blue">kebutuhanmu?</span>
          </Heading>
          <p className="mt-2.5 text-eve-gray">{`Couldn't find what you were looking for?`}</p>
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
              label="Fullname"
              type="text"
            ></InputWithLabel>
            <InputWithLabel
              name="email"
              required={true}
              placeholder="Email address"
              label="email address"
              type="email"
            ></InputWithLabel>
            <div className="flex space-x-5">
              <div className="w-1/4">
                <InputSelect
                  label="Nomor telpon"
                  onChange={(even) => setCountryCode(even.target.value)}
                  required={false}
                >
                  <option value="62">+62</option>
                  <option value="60">+60</option>
                  <option value="65">+65</option>
                </InputSelect>
              </div>
              <div className="w-3/4">
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
              label="nama perusahaan"
              type="text"
            ></InputWithLabel>
            <InputSelect label="Anggaran Proyek" name="plan_budget">
              <option value="" defaultValue>
                Select Your Budget
              </option>
              <option value="< $ 3000">{`< $ 3000`}</option>
              <option value="$ 3000 - $ 7000">{`$ 3000 - $ 7000`}</option>
              <option value="$ 7000 - $ 12000">{`$ 7000 - $ 12000`}</option>
              <option value="$ 12000 - $ 20000">{`$ 12000 - $ 20000`}</option>
              <option value="> $ 20000">{`> $ 20000`}</option>
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
