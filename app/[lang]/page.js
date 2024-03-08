import WrapWithAOS from "@/components/view/home/wrapper";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main>
      {/* Dibuat menjadi satu komponen karna perlu init AOS menggunakan use client */}
      <WrapWithAOS></WrapWithAOS>
    </main>
  );
}
