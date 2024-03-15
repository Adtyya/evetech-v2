import Container from "@/components/box/container";
import { CardPosition } from "../career/recentpositions";
import Heading from "@/components/text/heading";

export default function OtherVacancies() {
  return (
    <Container className="py-12">
      <Heading variant="h3" className="font-bold text-btn-primary capitalize">
        Other Job vacancies <span className="text-btn-blue">available</span>
      </Heading>
      <div className="mt-8 space-y-5">
        <CardPosition
          title="UI Designer"
          employementType="full time"
          placementType="onsite"
          placementLocation="surakarta"
          experienceNeeded="1+ Years experience"
        ></CardPosition>
      </div>
    </Container>
  );
}
