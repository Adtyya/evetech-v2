"use client";

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

export default function ContactUsForm() {
  return (
    <>
      <div className="h-32"></div>
      <Container>
        <div>
          <Heading
            variant="h2"
            className="text-btn-primary font-bold capitalize"
          >
            Talk <br></br>
            <span className="text-btn-blue">product analytics expert</span>
          </Heading>
          <p className="text-eve-gray mt-1.5">
            Have questions about pricing, plans, or growthly? Fill out form and
            our product analytics expert will be in touch directly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 my-14 gap-5">
          <FormLeftSide></FormLeftSide>
          <div className="order-first lg:order-last">
            <form className="bg-btn-white rounded-2xl p-3 lg:p-7 space-y-4">
              <div className="py-5 text-center">
                <Heading variant="h3" className="text-btn-primary font-bold">
                  Let Us Know You First
                </Heading>
                <p className="mt-1.5 text-eve-gray">{`Fill out the form and we’ll be in touch shortly.`}</p>
              </div>
              <InputWithLabel
                name="fullname"
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
                  <InputSelect label="Nomor telpon" required={false}>
                    <option value="id">+62</option>
                    <option value="id">+62</option>
                    <option value="id">+62</option>
                  </InputSelect>
                </div>
                <div className="w-3/4">
                  <InputInvisibleLabel placeholder="xxxxxxxx"></InputInvisibleLabel>
                </div>
              </div>
              <InputWithLabel
                name="companyname"
                required={true}
                placeholder="Your company name"
                label="nama perusahaan"
                type="text"
              ></InputWithLabel>
              <InputSelect label="Anggaran Proyek">
                <option value="" defaultValue>
                  Select Your Budget
                </option>
                <option value="< $ 3000">{`< $ 3000`}</option>
                <option value="$ 3000 - $ 7000">{`$ 3000 - $ 7000`}</option>
                <option value="$ 7000 - $ 12000">{`$ 7000 - $ 12000`}</option>
                <option value="$ 12000 - $ 20000">{`$ 12000 - $ 20000`}</option>
                <option value="> $ 20000">{`> $ 20000`}</option>
              </InputSelect>
              <div className="flex items-center justify-center w-full pt-3">
                <ButtonLightBlue type="submit">Submit</ButtonLightBlue>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

function FormLeftSide() {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 gap-5">
        <div className="order-last lg:order-first space-y-5">
          <p className="text-eve-key-features font-bold text-xl">Our Office</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.762135792769!2d110.79308907574776!3d-7.6008453751225495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a15ea9357f0ff%3A0x3f19000078705279!2sEvetech%20Solution!5e0!3m2!1sid!2sid!4v1709105712667!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            className="rounded-2xl w-full h-96"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
        </div>
        <div className="bg-eve-white rounded-2xl p-5 space-y-3.5">
          <Heading
            variant="h3"
            className="text-btn-primary font-bold capitalize"
          >
            Siap bertemu{" "}
            <span className="text-btn-blue">dan diskusikan kebutuhanmu?</span>
          </Heading>
          <p className="text-eve-gray">
            Have questions about pricing, plans, or growthly? Fill out form and
            our product analytics expert will be in touch directly.
          </p>
          <ButtonWhatsApp></ButtonWhatsApp>
        </div>
      </div>
    </div>
  );
}