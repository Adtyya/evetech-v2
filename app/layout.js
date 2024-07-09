import "./globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const metadata = {
  title: "Custom Software Development | Mobile App and Web Development",
  description:
    "Tailored custom software solution that aligns seamlessly with your unique operational needs. Evetech Solution your partner in digital transformation.",
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
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return children;
}
