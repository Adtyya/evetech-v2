"use client";

import Container from "@/components/box/container";
import { ButtonLightBlue } from "@/components/button/button";
import Heading from "@/components/text/heading";
import { useState } from "react";
import {
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiCheckCircle,
} from "react-icons/hi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Link from "next/link";

const faqContent = [
  {
    q: "Apa Saja Kategori Layanan Pembuatan Website Portal Berita Evetech Solution?",
    a: "Layanan pembuatan website berita dari Evetech Solution mencakup desain, development, content migration, deployment dan maintenance. Hal-hal lain seperti domain, hosting, image editing hingga copywriting akan ditambahkan terpisah sesuai dengan kebutuhan project.",
  },
  {
    q: "Apakah Evetech Solution Menyediakan Layanan Hosting?",
    a: "Kami menggunakan pihak ketiga untuk layanan hosting. Tetapi anda tidak perlu khawatir, kami memiliki banyak rekanan hosting provider yang terpercaya. Kami akan memberikan rekomendasi hosting terbaik sesuai dengan kebutuhan anda.",
  },
  {
    q: "Berapa Harga Jasa Pembuatan Website Portal Berita di Evetech Solution?",
    a: "Mengenai harga pembuatan aplikasi dan website berita akan disesuaikan dengan proyek serta fitur-fitur pada website berita maupun aplikasi, oleh karena itu anda dapat mendiskusikan standar nominal biaya jasa pembuatan website berita dengan tim kami terlebih dahulu untuk mendapatkan kesepakatan yang tepat.",
  },
  {
    q: "Berapa Lama Waktu Yang Dibutuhkan Dalam Pembuatan Website Portal Berita di Evetech Solution?",
    a: "Umumnya, waktu pembuatan website landing page berkisar mulai dari 2 minggu hingga 4 minggu. Waktu estimasi tidak pasti karena dapat kurang ataupun lebih bergantung pada kebutuhan dan ruang lingkup project.",
  },
  {
    q: "Apakah Ada Garansi Pada Jasa Pembuatan Website Berita Bebas Bug?",
    a: "Kami akan memberikan garansi bebas bug. tim kami akan memperbaiki masalah jika dalam implementasinya website mengalami kendala bug atau teknis lainnya.",
  },
  {
    q: "Apakah Evetech Solution Dapat Membantu Ketika Website Mengalami Kendala, Maintenance, Dan Optimasi Seo Website Berita?",
    a: "Ya, kami menyediakan layanan untuk itu.",
  },
  {
    q: "Bagaimana Pembayaran Untuk Jasa Website Berita Evetech Solution?",
    a: "Kami terbuka untuk pembayaran down payment (DP) terlebih dahulu dan pembayaran full saat website  berita sudah selesai dan dapat diakses.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Container className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div className="space-y-3.5 lg:sticky lg:top-[12rem]">
            <Heading variant="h2" className="font-bold text-btn-primary">
              Answers to our most{" "}
              <span className="text-btn-blue">Frequently Asked Questions</span>
            </Heading>
            <p className="text-eve-gray">{`Couldn't find what you were looking for?`}</p>
            <Link href="/contact-us">
              <ButtonLightBlue className="capitalize mt-2.5">
                Tanyakan sekarang
              </ButtonLightBlue>
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          {faqContent.map((item, idx) => {
            return (
              <QACard
                question={item.q}
                answer={item.a}
                key={idx}
                active={idx === activeIndex}
                onClick={() => setActiveIndex(idx)}
              ></QACard>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

function QACard({ question = "", answer = "", active = false, ...props }) {
  const [parent] = useAutoAnimate();

  return (
    <div
      className="bg-eve-qa w-full p-4 rounded-2xl cursor-pointer"
      {...props}
      ref={parent}
    >
      <div className="w-full relative">
        <p className="text-btn-primary font-semibold w-full max-w-xl pr-3 lg:pr-0">
          {question}
        </p>
        <button className="absolute top-1.5 right-0.5">
          {!active ? <HiOutlinePlusSm /> : <HiOutlineMinusSm />}
        </button>
      </div>
      {active && (
        <div className="mt-1.5 flex space-x-2">
          <div className="text-xl mt-0.5 text-eve-check">
            <HiCheckCircle />
          </div>
          <p className="text-eve-qadesc">{answer}</p>
        </div>
      )}
    </div>
  );
}
