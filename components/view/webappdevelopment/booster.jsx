"use client";

import { useState } from "react";
import Container from "@/components/box/container";
import Markdown from "react-markdown";
import {
  SEOBoosterEN,
  SEOBoosterENM,
  SEOBoosterIDM,
  SEOBoosterID,
} from "./content";
import { useLocale } from "next-intl";

export default function Booster() {
  const locale = useLocale();
  const [show, setShow] = useState(false);

  return (
    <Container className="py-12">
      <Markdown className="prose lg:prose-lg w-full max-w-full ">
        {locale === "en" ? SEOBoosterEN : SEOBoosterID}
      </Markdown>
      {!show ? (
        <p
          className="text-eve-blue font-semibold cursor-pointer"
          onClick={() => setShow(true)}
        >
          {locale === "en" ? "See more..." : "Lihat selengkapnya..."}
        </p>
      ) : (
        <br />
      )}
      <Markdown
        className={`${
          show ? "block" : "hidden"
        } prose lg:prose-lg w-full max-w-full`}
      >
        {locale === "en" ? SEOBoosterENM : SEOBoosterIDM}
      </Markdown>
    </Container>
  );
}
