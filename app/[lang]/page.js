import WrapWithAOS from "@/components/view/home/wrapper";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  return (
    <main>
      {/* Dibuat menjadi satu komponen karna perlu init AOS menggunakan use client */}
      <WrapWithAOS></WrapWithAOS>
    </main>
  );
}
