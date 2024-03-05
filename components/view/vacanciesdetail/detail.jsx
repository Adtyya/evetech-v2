"use client";

import Container from "@/components/box/container";
import Image from "next/image";
import Heading from "@/components/text/heading";
import { GetBadgeEmployementType } from "../career/recentpositions";
import { LuMapPin, LuClock, LuBook } from "react-icons/lu";
import { ButtonLightBlue } from "@/components/button/button";
import CardDetailVacancies from "./component/card";

export default function DetailVacanciesTop() {
  return (
    <Container className="py-12">
      <CardDetailVacancies
        image={"/images/career/sample.jfif"}
        jobTitle={"UI Designer"}
        employementType={"internship"}
        placementType={"onsite"}
        placementLocation={"surakarta"}
        experienceNeeded={"1+ years experience"}
      />
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-auto md:col-span-8">left side</div>
        <div className="col-auto md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
