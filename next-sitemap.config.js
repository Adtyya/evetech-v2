module.exports = {
  // siteUrl: process.env.NEXT_APP_URL || "https://evetechsolution.com/",
  siteUrl: "https://evetechsolution.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 1,
  exclude: ["/", "/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `https://${
        process.env.NEXT_APP_URL || "evetechsolution.com"
      }/server-sitemap.xml`,
    ],
  },
  // Opsi untuk mengatur locale paths
  // alternateRefs: [
  //   {
  //     hrefLang: "en",
  //     href: "https://evetechsolution.com/en",
  //   },
  //   {
  //     hrefLang: "id",
  //     href: "https://evetechsolution.com/id",
  //   },
  // ],
  // transform: async (config, path) => {
  //   const paths = [];

  //   const locales = ["en", "id"]; // Ganti dengan daftar locales Anda
  //   locales.forEach((locale) => {
  //     if (locale === config.defaultLocale) {
  //       paths.push({
  //         loc: path,
  //         changefreq: config.changefreq,
  //         priority: config.priority,
  //         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //         alternateRefs: config.alternateRefs.map((ref) => ({
  //           ...ref,
  //           href: ref.href.replace("/" + locale, ""),
  //         })),
  //       });
  //     } else {
  //       paths.push({
  //         loc: `/${locale}${path}`,
  //         changefreq: config.changefreq,
  //         priority: config.priority,
  //         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  //         alternateRefs: config.alternateRefs.map((ref) => ({
  //           ...ref,
  //           href: `/${locale}${ref.href}`,
  //         })),
  //       });
  //     }
  //   });

  //   return paths;
  // },
};
