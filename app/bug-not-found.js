import { Inter } from "next/font/google";
import NavbarEvetech from "@/components/navbar/navbarNotFound";
import Footer from "@/components/footer/footer";
import NextTopLoader from "nextjs-toploader";
import { NextIntlClientProvider, useMessages, useLocale } from "next-intl";
import Image from "next/image";
import Container from "@/components/box/container";
import Heading from "@/components/text/heading";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: "https://evetechsolution.com",
  },
};

const locales = ["en", "id"];

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }) {
  unstable_setRequestLocale(params.lang); // Atur lokalitas di server
  return {
    title: "Page Not Found",
    description: "The page you're looking for does not exist.",
  };
}

export default function NotFound({ params }) {
  const messages = useMessages();
  const locale = useLocale(); // Dapatkan lokalitas dari hook

  // Jika params.lang ada, gunakan itu; jika tidak, gunakan lokalitas dari hook
  const lang = params?.lang || locale || "en";

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextTopLoader color="#3A85FF" zIndex={2000} />
        <NextIntlClientProvider messages={messages} locale={lang}>
          <NavbarEvetech />
          <Container>
            <div className="flex flex-col w-full h-[85vh] items-center justify-center">
              <div className="w-3/5 h-80 relative">
                <Image
                  alt="404"
                  src="/images/404/404.png"
                  fill
                  className="object-contain"
                />
              </div>
              <Heading variant="h2" className="text-btn-primary font-bold">
                Page Not Found!
              </Heading>
            </div>
          </Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
