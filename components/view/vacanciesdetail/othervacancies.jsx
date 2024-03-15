import Container from "@/components/box/container";
import { CardPosition } from "../career/recentpositions";
import Heading from "@/components/text/heading";

export default function OtherVacancies({ listOther }) {
  return (
    <Container className="py-12">
      <Heading variant="h3" className="font-bold text-btn-primary capitalize">
        Other Job vacancies <span className="text-btn-blue">available</span>
      </Heading>
      <div className="mt-8 space-y-5">
        {listOther.map((item, idx) => {
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
    </Container>
  );
}
