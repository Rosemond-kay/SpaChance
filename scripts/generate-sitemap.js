import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = "https://spachance.com";

// Read spachanceData.js to extract BLOG_POSTS dynamically
const dataFilePath = path.join(__dirname, "../src/data/spachanceData.js");
const dataContent = fs.readFileSync(dataFilePath, "utf8");

// Extract blog slugs using regex
const slugMatches = [...dataContent.matchAll(/slug:\s*["']([^"']+)["']/g)];
const blogSlugs = Array.from(new Set(slugMatches.map((m) => m[1])));

const staticRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/services", priority: "0.9", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/book", priority: "0.8", changefreq: "weekly" },
  { url: "/contact", priority: "0.8", changefreq: "monthly" },
  { url: "/blog", priority: "0.8", changefreq: "weekly" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
];

const categoryRoutes = [
  "/services/packages",
  "/services/skin-consultation",
  "/services/facials",
  "/services/massage",
  "/services/pedicure-and-manicure",
  "/services/makeup",
  "/services/brows-and-lash",
  "/services/waxing",
].map((url) => ({
  url,
  priority: "0.85",
  changefreq: "weekly",
}));

const blogRoutes = blogSlugs.map((slug) => ({
  url: `/blog/${slug}`,
  priority: "0.7",
  changefreq: "monthly",
}));

const allRoutes = [...staticRoutes, ...categoryRoutes, ...blogRoutes];
const today = new Date().toISOString().split("T")[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const publicDir = path.join(__dirname, "../public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
console.log(`✅ Sitemap successfully generated with ${allRoutes.length} URLs at public/sitemap.xml!`);
