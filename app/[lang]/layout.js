import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { NextIntlClientProvider, useMessages } from "next-intl";
import NavbarEvetech from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Evetech: Software House Solo & Jakarta",
//   description:
//     "Evetech Software House Solo & Jakarta provides Custom Software & ERP Development, Web Development, Mobile App Development & Web Design in Indonesia and Malaysia.",
//   verification: {
//     google: "YeDPr9Oy1PD6fLQS5vg18h2wJwUmYjKT9WINun619ag",
//   },
// };

export const metadata = {
  alternates: {
    canonical: "https://evetechsolution.com",
  },
};

const locales = ["en", "id"];

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }) {
  const messages = useMessages();

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextTopLoader color="#3A85FF" zIndex={2000} />
        <NextIntlClientProvider messages={messages} locale={lang}>
          <NavbarEvetech></NavbarEvetech>
          {children}
          <Footer></Footer>
        </NextIntlClientProvider>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
      </body>
      <GoogleAnalytics gaId="G-903G43D26M" />
      <GoogleTagManager gtmId="GTM-903G43D26M" />
    </html>
  );
}
