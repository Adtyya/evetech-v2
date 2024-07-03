import Container from "@/components/box/container";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";
import Markdown from "react-markdown";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.tnc" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/tnc",
    },
  };
}
export default function TermsAndConditions({ params: { lang } }) {
  unstable_setRequestLocale(lang);

  const t = useTranslations("Tnc");

  return (
    <>
      <div className="h-16 lg:h-32"></div>
      <Container className="py-12">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-xl lg:text-2xl font-bold capitalize text-btn-primary">
            {t("title")}
          </h1>
          <div className="py-4">
            <Markdown className="prose lg:prose-lg prose-a:text-btn-blue">
              {t("content")}
            </Markdown>
          </div>
        </div>
      </Container>
    </>
  );
}
