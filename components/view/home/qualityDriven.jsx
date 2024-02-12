import Container from "@/components/box/container";
import Heading from "@/components/text/heading";

export default function QualityDriven() {
  return (
    <div className="w-full h-full bg-white py-16">
      <Container className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        <div>
          <Heading
            variant="h2"
            className="font-bold text-btn-primary sticky top-[12rem]"
          >
            Quality-driven{" "}
            <span className="text-btn-blue capitalize">
              custom software development
            </span>
          </Heading>
        </div>
        <div className="space-y-5">
          {[1, 2, 3, 5, 6, 3, 2, 4].map((item, idx) => {
            return (
              <CardQualityDriven
                key={idx}
                title="Discovery & Analysis"
                content="You can’t brainstorm, much less build, a great solution without first investing in discovery and analysis. Our team burrows into your existing infrastructure to uncover strengths and weaknesses so time isn’t wasted during the design and build phases."
                isEven={idx + (1 % 2) === 0}
              ></CardQualityDriven>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

function CardQualityDriven({ title, content, isEven }) {
  return (
    <div
      className={`grid grid-cols-12 gap-3 ${
        isEven ? "bg-eve-white" : "bg-btn-white"
      } py-5 pr-5 rounded-2xl sticky top-[12rem] w-full h-52`}
    >
      <div className="col-span-2 flex justify-center">
        <div className="w-8 h-8 rounded-full bg-white"></div>
      </div>
      <div className="col-span-10">
        <h3 className="text-btn-primary font-semibold text-xl lg:text-2xl">
          {title}
        </h3>
        <p className="mt-1.5 text-eve-gray">{content}</p>
      </div>
    </div>
  );
}
