import WrapWithAOS from "@/components/view/home/wrapper";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.home" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default function Home({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <main>
      <WrapWithAOS></WrapWithAOS>
    </main>
  );
}
