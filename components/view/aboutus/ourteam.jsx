import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import Image from "next/image";
import ImageContent from "@/public/images/aboutus/steven.png";

export default function OurTeam() {
  return (
    <Container className="py-8">
      <div>
        <Heading variant="h3" className="font-bold text-btn-primary">
          Our <span className="text-btn-blue">Team</span>
        </Heading>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-10 py-5">
        <EmployeeCard></EmployeeCard>
        <EmployeeCard></EmployeeCard>
        <EmployeeCard></EmployeeCard>
        <EmployeeCard></EmployeeCard>
      </div>
    </Container>
  );
}

function EmployeeCard() {
  return (
    <div>
      <div className="w-full h-52 md:h-64 lg:h-80 bg-eve-white border-2 border-border-gray relative rounded-2xl">
        <Image
          src={ImageContent}
          alt="profile-pic"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full mt-1.5">
        <p className="font-bold text-btn-primary text-lg text-center">Name</p>
        <p className="text-btn-primary text-lg text-center">Jabatan</p>
      </div>
    </div>
  );
}
