import ContactUsForm from "@/components/view/contactus/form";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ContoactUsPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <ContactUsForm></ContactUsForm>
    </>
  );
}
