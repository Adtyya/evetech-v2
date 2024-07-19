import Container from "@/components/box/container";
import { ButtonPrimary } from "@/components/button/button";
import Heading from "@/components/text/heading";
import { useTranslations } from "next-intl";

export default function FindMore() {
  const t = useTranslations("AboutUs.section5");

  return (
    <Container className="py-7">
      <div className="space-y-4">
        <Heading variant="h3" className="font-bold text-btn-primary">
          {t("title")}
        </Heading>
        <p className="text-eve-gray">{t("subtitle")}</p>
        <div>
          <a
            href="https://drive.usercontent.google.com/u/0/uc?id=1KAzenbj-bzLHsLBmyHWLjgrZaYIodM5r&export=download"
            target="_blank"
          >
            <ButtonPrimary className="px-5">{t("download")}</ButtonPrimary>
          </a>
        </div>
      </div>
    </Container>
  );
}
