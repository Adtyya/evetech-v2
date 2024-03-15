import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { CardPosition } from "../career/recentpositions";

export default function RecentOpenPosition() {
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
        <div>
          <Heading variant="h3" className="font-bold text-eve-gray">
            Department
          </Heading>
          <br />
          <div className="space-y-5">
            <div>
              <CardPosition
                title="UI Designer"
                employementType="full time"
                placementType="onsite"
                placementLocation="surakarta"
                experienceNeeded="1+ Years experience"
              ></CardPosition>
            </div>
            <div>
              <CardPosition
                title="UI Designer"
                employementType="full time"
                placementType="onsite"
                placementLocation="surakarta"
                experienceNeeded="1+ Years experience"
              ></CardPosition>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
