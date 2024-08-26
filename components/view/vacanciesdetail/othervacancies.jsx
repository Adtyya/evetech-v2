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
                title={item?.title}
                employementType={item?.workType}
                placementType={item?.workModel}
                placementLocation={item?.location}
                experienceNeeded={`${item?.experienceInYears} Years Experience`}
                department={item?.department}
                createdAt={item?.date}
                deadline={item?.endDate}
                slug={item?.slug}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}
