import BlogList from "@/components/view/blog/BlogList";
import { unstable_setRequestLocale } from "next-intl/server";

export default function BlogPage({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <>
      <BlogList></BlogList>
    </>
  );
}
