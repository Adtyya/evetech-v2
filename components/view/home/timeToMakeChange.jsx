import Container from "@/components/box/container";
import Heading from "@/components/text/heading";

export default function TimeToMakeChange() {
  return (
    <div className="bg-eve-black">
      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white items-center gap-5">
          <div>
            <Heading
              data-aos="fade-right"
              variant="h2"
              className="font-bold text-white"
            >
              {`It's time to make a`}
              <br></br>
              <span className="text-btn-blue">change</span> for your business!
            </Heading>
          </div>
          <div className="flex justify-normal lg:justify-end">
            <p data-aos="fade-up" className="text-white">
              People are migrating towards mobile phones <br /> and computers.
              Its time to beat your <br /> competitors with our high technology
              online <br /> IT solutions.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
