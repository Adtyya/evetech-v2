import Read from "@/components/view/blog/Read";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ReadBlog({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return <Read />;
}
