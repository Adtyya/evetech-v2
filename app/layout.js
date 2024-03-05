import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import NavbarEvetech from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evetech Solution",
  description:
    "Evetech Software House Semarang & Jakarta provides Custom Software & ERP Development, Web Development, Mobile App Development & Web Design in Indonesia and Malaysia.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#3A85FF" zIndex={2000} />
        <NavbarEvetech></NavbarEvetech>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
