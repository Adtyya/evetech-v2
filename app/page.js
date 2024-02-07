import WrapWithAOS from "@/components/view/home/wrapper";

export default function Home() {
  return (
    <main>
      {/* Dibuat menjadi satu komponen karna perlu init AOS menggunakan use client */}
      <WrapWithAOS></WrapWithAOS>
    </main>
  );
}
