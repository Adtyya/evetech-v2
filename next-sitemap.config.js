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
    transformRobotsTxt: async (_, robotsTxt) => {
      const withoutHost = robotsTxt.replace(
        `# Host\nHost: https://evetechsolution.com\n\n`,
        ""
      );

      return withoutHost;
    },
  },
  // Define custom routes with different priorities
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
      };
    }

    if (path.startsWith("/blog")) {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.6,
      };
    }

    // Default transformation
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};
