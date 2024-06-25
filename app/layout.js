import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const metadata = {
  title: "Software House in Semarang - Evetech Solution",
  description:
    "Discover innovative software solutions with Evetech Solution, the premier software house in Semarang. Your partner in digital transformation.",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
  verification: {
    google: "YeDPr9Oy1PD6fLQS5vg18h2wJwUmYjKT9WINun619ag",
  },
  robots: "index,follow",
};

export default function RootLayout({ children }) {
  return children;
}
