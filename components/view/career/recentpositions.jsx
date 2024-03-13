import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { LuMapPin, LuClock, LuBook } from "react-icons/lu";
import Link from "next/link";
import moment from "moment";

export default function RecentPositions({ listVacancies = [] }) {
  return (
    <Container className="py-12">
      <div>
        <Heading variant="h3" className="text-btn-primary font-bold capitalize">
          Recent <span className="text-btn-blue">open positions</span>
        </Heading>
        <p className="text-eve-gray mt-1.5">
          Find out how you could contribute
        </p>
      </div>
      <div className="mt-8 space-y-5">
        {listVacancies.map((item, idx) => {
          return (
            <CardPosition
              key={idx}
              title={item?.attributes?.title}
              employementType={item?.attributes?.workType}
              placementType={item?.attributes?.onsite ? "Onsite" : "Remote"}
              placementLocation={item?.attributes?.location}
              experienceNeeded={`${item?.attributes?.experienceInYears} Years Experience`}
              department={item?.attributes?.department}
              createdAt={item?.attributes?.createdAt}
              deadline={item?.attributes?.endDate}
            ></CardPosition>
          );
        })}
      </div>
    </Container>
  );
}

export const GetBadgeEmployementType = ({ type }) => {
  return (
    <div
      className={`${
        type === "internship"
          ? "bg-eve-internship text-eve-internshipText"
          : type === "part time"
          ? "bg-eve-partTime text-eve-partTimeText"
          : type === "fulltime"
          ? "bg-eve-fullTime text-eve-fullTimeText"
          : null
      } capitalize px-4 py-1.5 rounded-full`}
    >
      {type}
    </div>
  );
};

export function CardPosition({
  title,
  employementType,
  placementType,
  placementLocation,
  experienceNeeded,
  department,
  createdAt,
  deadline,
}) {
  return (
    <Link href="/">
      <div className="bg-eve-white rounded-2xl p-5 md:p-7 drop-shadow-md">
        <div id="head" className="flex items-center justify-between">
          <Heading
            variant="h4"
            className="font-bold text-btn-primary capitalize"
          >
            {title}
          </Heading>
          <div>
            <GetBadgeEmployementType type={employementType} />
          </div>
        </div>
        <div className="w-full lg:w-2/4 flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-1.5 md:space-y-0 my-2.5">
          <div className="flex space-x-2 items-center text-eve-gray">
            <LuMapPin></LuMapPin>
            <p className="capitalize">
              {placementType} - {placementLocation}
            </p>
          </div>
          <div className="flex space-x-2 items-center text-eve-gray">
            <LuBook></LuBook>
            <p>{department || "Department"}</p>
          </div>
          <div className="flex space-x-2 items-center text-eve-gray">
            <LuClock></LuClock>
            <p className="capitalize">{experienceNeeded}</p>
          </div>
        </div>
        <div className="flex space-x-5">
          <small className="text-eve-gray">
            Posted {deadline ? moment(createdAt).fromNow() : "1 day ago"}
          </small>
          <small className="text-eve-gray">
            Deadline: {moment(deadline).format("LL")}
          </small>
        </div>
      </div>
    </Link>
  );
}
