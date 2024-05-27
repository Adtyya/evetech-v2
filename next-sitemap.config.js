module.exports = {
  siteUrl: process.env.NEXT_APP_URL || "https://evetechsolution.com/",
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
};
