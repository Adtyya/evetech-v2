"use client";

import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { CardPosition } from "../career/recentpositions";
import { group } from "radash";

export default function RecentOpenPosition({ listVacancies }) {
  const groupedVacanciesByDepartment = group(
    listVacancies,
    (a) => a?.attributes?.department
  );

  return (
    <Container className="py-12">
      <div>
        <Heading variant="h2" className="font-bold text-btn-primary capitalize">
          Recent <span className="text-btn-blue">open positions</span>
        </Heading>
        <p className="text-eve-gray mt-1.5">
          Find out how you could contribute
        </p>
      </div>
      <div className="mt-8">
        {groupedVacanciesByDepartment["IT Engineer"].length !== 0 ? (
          <div className="mb-5">
            <Heading variant="h3" className="font-bold text-eve-gray">
              IT Engineer
            </Heading>
            <br />
            <div className="space-y-5">
              {groupedVacanciesByDepartment["IT Engineer"].map((item, idx) => {
                return (
                  <div key={idx}>
                    <CardPosition
                      title={item?.attributes?.title}
                      employementType={item?.attributes?.workType}
                      placementType={item?.attributes?.workModel}
                      placementLocation={item?.attributes?.location}
                      experienceNeeded={`${item?.attributes?.experienceInYears} Years Experience`}
                      department={item?.attributes?.department}
                      createdAt={item?.attributes?.createdAt}
                      deadline={item?.attributes?.endDate}
                      slug={item?.attributes?.slug}
                    ></CardPosition>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {groupedVacanciesByDepartment["Designer"].length !== 0 ? (
          <div className="mb-5">
            <Heading variant="h3" className="font-bold text-eve-gray">
              Designer
            </Heading>
            <br />
            <div className="space-y-5">
              {groupedVacanciesByDepartment["Designer"].map((item, idx) => {
                return (
                  <div key={idx}>
                    <CardPosition
                      title={item?.attributes?.title}
                      employementType={item?.attributes?.workType}
                      placementType={item?.attributes?.workModel}
                      placementLocation={item?.attributes?.location}
                      experienceNeeded={`${item?.attributes?.experienceInYears} Years Experience`}
                      department={item?.attributes?.department}
                      createdAt={item?.attributes?.createdAt}
                      deadline={item?.attributes?.endDate}
                      slug={item?.attributes?.slug}
                    ></CardPosition>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </Container>
  );
}
