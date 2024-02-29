import Container from "@/components/box/container";
import Heading from "@/components/text/heading";

export default function OurTeam() {
  return (
    <Container className="py-8">
      <div>
        <Heading variant="h3" className="font-bold text-btn-primary">
          Our <span className="text-btn-blue">Team</span>
        </Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <EmployeeCard></EmployeeCard>
        <EmployeeCard></EmployeeCard>
        <EmployeeCard></EmployeeCard>
      </div>
    </Container>
  );
}

function EmployeeCard() {
  return <div>Halo</div>;
}
