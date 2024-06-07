import ContactUsForm from "@/components/view/contactus/form";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata.contact" });

  return {
    title: t("title"),
    description: t("desc"),
  };
}

export default function ContoactUsPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <ContactUsForm></ContactUsForm>
    </>
  );
}
