"use client";

import Container from "@/components/box/container";
import CardDetailVacancies from "./component/card";

export default function DetailVacanciesTop() {
  return (
    <Container className="py-12">
      <CardDetailVacancies
        image={"/images/career/sample.jfif"}
        jobTitle={"UI Designer"}
        employementType={"internship"}
        placementType={"onsite"}
        placementLocation={"surakarta"}
        experienceNeeded={"1+ years experience"}
      />
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-auto md:col-span-8">
          <div className="space-y-3">
            <p className="font-bold text-btn-primary capitalize">
              Job Overview
            </p>
            <p className="text-btn-primary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              dolor suscipit provident enim optio repellat accusamus voluptas
              nihil. Eligendi asperiores ratione, iusto adipisci ducimus soluta
              mollitia unde aliquid laudantium quibusdam accusamus reiciendis!
              Hic illum unde, quibusdam atque ea sint natus reiciendis, tenetur
              dolorum debitis fugit cupiditate odio nihil facilis
              exercitationem. <br /> <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              reprehenderit debitis consequuntur. Qui commodi, praesentium
              voluptates quam similique cupiditate eius accusantium molestiae
              est. Labore placeat aliquam, dolor sit error consectetur est
              reprehenderit doloribus quisquam fuga tempora eum, optio qui
              excepturi?
            </p>
          </div>
        </div>
        <div className="col-auto md:col-span-4">
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            <SideCardInfo title="Work level" subtitle="Senior" />
            <SideCardInfo title="Job-Type" subtitle="Full-Time" />
            <SideCardInfo title="Work Model" subtitle="Work Model" />
            <SideCardInfo title="Experience" subtitle="1+ Experience" />
          </div>
        </div>
      </div>
    </Container>
  );
}

function SideCardInfo({ title, subtitle }) {
  return (
    <div className="bg-eve-white rounded-2xl p-3">
      <small className="text-btn-primary/60 capitalize">{title}</small>
      <p className="text-btn-primary font-bold capitalize">{subtitle}</p>
    </div>
  );
}
