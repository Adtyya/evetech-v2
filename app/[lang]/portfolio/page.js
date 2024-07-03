import Hero from "@/components/view/portfolio/hero";
import ListProjects from "@/components/view/portfolio/listProjects";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.portfolio" });

  return {
    title: t("title"),
    description: t("desc"),
    alternates: {
      canonical: "https://evetechsolution.com/portfolio",
    },
  };
}

export default function PortofolioPage({ params }) {
  unstable_setRequestLocale(params.lang);
  return (
    <>
      <Hero></Hero>
      <ListProjects></ListProjects>
    </>
  );
}
