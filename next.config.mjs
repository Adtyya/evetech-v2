/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source:
          "/:lang/blog/read/menavigasi-transformasi-digital-pentingnya-cloud-dalam-bisnis-modern",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/blog/read/wa.me/08995226188",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/read/pengertian-software-house-manfaat-dan-layanannya",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/blog",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/news-portal",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source: "/:lang/portofolio",
        destination: "/:lang/portfolio",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/top-7-web-application-development-tools-empowering-developers-in-2023",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/news-portal",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/software-houses-your-strategic-partner-for-development",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/blog/seo-on-page-optimization",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/web-app-development",
        destination: "/:lang/services/web-app-development",
        permanent: true,
      },
      {
        source: "/:lang/services/news-web-development",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source: "/:lang/web-development",
        destination: "/:lang/services/web-app-development",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/recognize-brand-archetypes-for-your-business-development",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/news-portal",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/why-businesses-need-social-media-specialists-for-success",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/mobile-app-development",
        destination: "/:lang/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/:lang/news-portal/whatsapp",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/cloud-computing-definition-operation-process-benefits-and-disadvantage",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/blog/how-to-make-smart-goals",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/career/all",
        destination: "/:lang/career",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/4-success-entrepreneurs-in-indonesia-a-glimpse-into-visionary-leaders",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/cloud-computing-definition-operation-process-benefits-and-disadvantage",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/portofolio",
        destination: "/:lang/portfolio",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/autopilot-business-a-guide-to-maximize-your-business",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/autopilot-business-a-guide-to-maximize-your-business",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/blog/how-to-make-smart-goals",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/4-success-entrepreneurs-in-indonesia-a-glimpse-into-visionary-leaders",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source: "/:lang/:lang/about-us",
        destination: "/:lang/about-us",
        permanent: true,
      },
      {
        source: "/:lang/news-portal/whatsapp",
        destination: "/:lang/services/news-web-app-development",
        permanent: true,
      },
      {
        source: "/:lang/blog/how-to-start-website-development-business",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/5-innovative-education-technologies-shaping-the-future-of-learning",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/5-innovative-education-technologies-shaping-the-future-of-learning",
        destination: "/:lang/blog",
        permanent: true,
      },
      {
        source:
          "/:lang/blog/unlocking-the-power-of-innovation-how-a-software-house-can-transform-your-business",
        destination: "/:lang/blog",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
