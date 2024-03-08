import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

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
  return children;
}
