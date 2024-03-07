import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import NavbarEvetech from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Evetech: Software House Semarang & Jakarta",
  description:
    "Evetech Software House Semarang & Jakarta provides Custom Software & ERP Development, Web Development, Mobile App Development & Web Design in Indonesia and Malaysia.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "YeDPr9Oy1PD6fLQS5vg18h2wJwUmYjKT9WINun619ag",
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
      <GoogleAnalytics gaId="G-RFJ981P2V2" />
      <GoogleTagManager gtmId="GTM-WKQW34PH" />
    </html>
  );
}
