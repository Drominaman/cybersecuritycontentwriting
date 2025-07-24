/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://cybersecuritycontentwriting.com',
  generateRobotsTxt: true,   // adds /robots.txt
  sitemapSize: 7000,         // splits if the list grows huge
  autoLastmod: true,         // injects <lastmod> tags
  changefreq: 'weekly',      // optional crawl hint
};