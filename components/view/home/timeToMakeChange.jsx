import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { useTranslations } from "next-intl";

export default function TimeToMakeChange() {
  const t = useTranslations("HomePage.section3");

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
              {t.rich("title", {
                span: (chunk) => <span className="text-btn-blue">{chunk}</span>,
                br: () => <br></br>,
              })}
            </Heading>
          </div>
          <div className="flex justify-normal lg:justify-end">
            <p data-aos="fade-up" className="text-xl text-white max-w-xs">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
