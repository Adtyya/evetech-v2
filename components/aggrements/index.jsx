"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Aggrements() {
  const t = useTranslations("Agreements");
  const [isAggree, setIsAggree] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem("userAggree") || null;
    setIsAggree(key);
    setMounted(true);
  }, []);

  function handleAggre() {
    localStorage.setItem("userAggree", 1);
    setIsAggree(1);
  }

  return (
    <>
      {mounted && Number(isAggree) !== 1 ? (
        <div class="fixed bottom-1.5 lg:left-1.5 z-20 flex items-center justify-start w-full">
          <div className="w-full max-w-2xl bg-white border-eve-gray border rounded-xl p-2.5">
            <p className="font-semibold pb-1">{t("title")}</p>
            <p>
              {t.rich("content", {
                a: (chunk) => (
                  <Link href="/privacy" className="text-blue-500">
                    {chunk}
                  </Link>
                ),
              })}
            </p>
            <div className="flex pt-1.5 space-x-3.5">
              <button className="hover:underline" onClick={handleAggre}>
                {t("button")}
              </button>
              <Link href="/privacy" className="hover:underline">
                {t("navigation")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
