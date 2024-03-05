import { GetBadgeEmployementType } from "../../career/recentpositions";
import { LuMapPin, LuClock, LuBook } from "react-icons/lu";
import { ButtonLightBlue } from "@/components/button/button";
import Image from "next/image";
import Heading from "@/components/text/heading";

export default function CardDetailVacancies({
  image,
  employementType,
  jobTitle,
  placementType,
  placementLocation,
  experienceNeeded,
}) {
  return (
    <div className="w-full h-max bg-eve-white rounded-2xl overflow-hidden">
      <div className="w-full h-48 md:h-52 lg:h-72 relative">
        <Image
          alt="sample"
          src={image}
          fill
          data-loaded="false"
          onLoad={(event) => {
            event.currentTarget.setAttribute("data-loaded", "true");
          }}
          quality={100}
          className="object-cover data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-100"
        />
      </div>
      <div className="p-5 md:p-7">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-3/4">
            <div className="flex space-x-3 items-center justify-start">
              <Heading
                variant="h4"
                className="font-bold text-btn-primary capitalize"
              >
                {jobTitle}
              </Heading>
              <GetBadgeEmployementType type={employementType} />
            </div>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-1.5 md:space-y-0 my-2.5">
              <div className="flex space-x-2 items-center text-eve-gray">
                <LuMapPin></LuMapPin>
                <p className="capitalize">
                  {placementType} - {placementLocation}
                </p>
              </div>
              <div className="flex space-x-2 items-center text-eve-gray">
                <LuBook></LuBook>
                <p>Department</p>
              </div>
              <div className="flex space-x-2 items-center text-eve-gray">
                <LuClock></LuClock>
                <p className="capitalize">{experienceNeeded}</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="flex flex-row lg:flex-col space-x-5 lg:space-x-0 lg:items-end">
              <small className="text-eve-gray">Posted 1 day ago</small>
              <small className="text-eve-gray">
                Deadline: 24 Desember 2023
              </small>
            </div>
            <div className="mt-5 flex justify-center lg:justify-end">
              <ButtonLightBlue>Apply This job</ButtonLightBlue>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
