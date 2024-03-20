import Hero from "@/components/view/portfolio/hero";
import ListProjects from "@/components/view/portfolio/listProjects";
import { unstable_setRequestLocale } from "next-intl/server";

export default function PortofolioPage({ params }) {
  unstable_setRequestLocale(params.lang);
  return (
    <>
      <Hero></Hero>
      <ListProjects></ListProjects>
    </>
  );
}
