import Container from "@/components/box/container";
import Markdown from "react-markdown";
import { SEOBoosterEN, SEOBoosterID } from "./content";
import { useLocale } from "next-intl";

export default function Booster() {
  const locale = useLocale();

  return (
    <Container>
      <Markdown className="prose lg:prose-lg w-full max-w-full py-12">
        {locale === "en" ? SEOBoosterEN : SEOBoosterID}
      </Markdown>
    </Container>
  );
}
