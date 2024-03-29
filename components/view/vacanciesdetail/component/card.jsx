import { GetBadgeEmployementType } from "../../career/recentpositions";
import { LuMapPin, LuClock, LuBook } from "react-icons/lu";
import { ButtonLightBlue } from "@/components/button/button";
import Image from "next/image";
import moment from "moment";

export default function CardDetailVacancies({
  image,
  employementType,
  jobTitle,
  placementType,
  placementLocation,
  experienceNeeded,
  action,
  department,
  createdAt,
  deadline,
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
              <h1 className="font-bold text-btn-primary capitalize text-2xl lg:text-3xl">
                {jobTitle}
              </h1>
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
                <p>{department}</p>
              </div>
              <div className="flex space-x-2 items-center text-eve-gray">
                <LuClock></LuClock>
                <p className="capitalize">
                  {experienceNeeded} Years Experience
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="flex flex-row lg:flex-col space-x-5 lg:space-x-0 lg:items-end">
              <small className="text-eve-gray">
                Posted {deadline ? moment(createdAt).fromNow() : "1 day ago"}
              </small>
              <small className="text-eve-gray">
                Deadline: {moment(deadline).format("LL")}
              </small>
            </div>
            <div className="mt-5 flex justify-center lg:justify-end">
              <ButtonLightBlue onClick={action}>Apply This job</ButtonLightBlue>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
