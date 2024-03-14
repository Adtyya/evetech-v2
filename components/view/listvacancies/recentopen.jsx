"use client";

import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { CardPosition } from "../career/recentpositions";
import { group, isEmpty } from "radash";
import { ButtonPrimary } from "@/components/button/button";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function RecentOpenPosition({
  listVacancies = [],
  paginationInfo = {},
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const groupedVacanciesByDepartment = group(
    listVacancies,
    (a) => a?.attributes?.department
  );

  function handleChangePage(page) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set("page", page);
    router.push(`${pathname}?${current}`);
  }

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
        {isEmpty(groupedVacanciesByDepartment) ? (
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-btn-primary">
              There are no vacancies yet 😓
            </h3>
          </div>
        ) : null}
        {groupedVacanciesByDepartment.hasOwnProperty("IT Engineer") &&
        groupedVacanciesByDepartment["IT Engineer"]?.length !== 0 ? (
          <div className="mb-5">
            <Heading variant="h3" className="font-bold text-eve-gray">
              IT Engineer
            </Heading>
            <br />
            <div className="space-y-5">
              {groupedVacanciesByDepartment["IT Engineer"]?.map((item, idx) => {
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
        {groupedVacanciesByDepartment.hasOwnProperty("Designer") &&
        groupedVacanciesByDepartment["Designer"]?.length !== 0 ? (
          <div className="mb-5">
            <Heading variant="h3" className="font-bold text-eve-gray">
              Designer
            </Heading>
            <br />
            <div className="space-y-5">
              {groupedVacanciesByDepartment["Designer"]?.map((item, idx) => {
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
        {groupedVacanciesByDepartment.hasOwnProperty("Marketing") &&
        groupedVacanciesByDepartment["Marketing"]?.length !== 0 ? (
          <div className="mb-5">
            <Heading variant="h3" className="font-bold text-eve-gray">
              Marketing
            </Heading>
            <br />
            <div className="space-y-5">
              {groupedVacanciesByDepartment["Marketing"]?.map((item, idx) => {
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
      <div className="mt-7">
        <div className="flex justify-between">
          <ButtonPrimary
            className={paginationInfo.page !== 1 ? "visible" : "invisible"}
            onClick={() => handleChangePage(paginationInfo.page - 1)}
          >
            Previous
          </ButtonPrimary>
          <ButtonPrimary
            className={
              paginationInfo.page < paginationInfo.pageCount
                ? "visible"
                : "invisible"
            }
            onClick={() => handleChangePage(paginationInfo.page + 1)}
          >
            Next
          </ButtonPrimary>
        </div>
      </div>
    </Container>
  );
}
