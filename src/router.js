// SpaChance Client-Side Router Helper
// Handles clean, shareable URLs for Pages, Blog Slugs, and Service Categories

const CATEGORY_SLUG_MAP = {
  packages: "packages",
  "skin consultation": "skin-consultation",
  facials: "facials",
  massage: "massage",
  "pedicure & manicure": "pedicure-and-manicure",
  makeup: "makeup",
  "brows & lash": "brows-and-lash",
  waxing: "waxing",
};

// Reverse map: URL slug -> Category name in catalog
const SLUG_TO_CATEGORY_MAP = Object.entries(CATEGORY_SLUG_MAP).reduce(
  (acc, [catName, slug]) => {
    acc[slug] = catName;
    return acc;
  },
  {},
);

const getPageFromPath = (pathname = "/") => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (normalizedPath.startsWith("/blog/")) {
    return "blog";
  }
  if (normalizedPath.startsWith("/services/")) {
    return "services";
  }

  switch (normalizedPath) {
    case "/about":
      return "about";
    case "/services":
      return "services";
    case "/blog":
      return "blog";
    case "/book":
      return "book";
    case "/contact":
      return "contact";
    case "/privacy":
      return "privacy";
    case "/terms":
      return "terms";
    default:
      return "home";
  }
};

const getBlogSlugFromPath = (pathname = "/") => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  if (!normalizedPath.startsWith("/blog/")) {
    return null;
  }

  return normalizedPath.slice("/blog/".length) || null;
};

const getCategoryFromPathAndSearch = (pathname = "/", search = "") => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  
  if (normalizedPath.startsWith("/services/")) {
    const slug = normalizedPath.slice("/services/".length);
    if (SLUG_TO_CATEGORY_MAP[slug]) {
      return SLUG_TO_CATEGORY_MAP[slug];
    }
  }

  const params = new URLSearchParams(search);
  const searchCat = params.get("category");
  if (searchCat) {
    // Handle query param if passed e.g. ?category=facials or ?category=pedicure%20%26%20manicure
    if (CATEGORY_SLUG_MAP[searchCat]) return searchCat;
    if (SLUG_TO_CATEGORY_MAP[searchCat]) return SLUG_TO_CATEGORY_MAP[searchCat];
  }

  return "packages";
};

const getPageStateFromLocation = (location = window.location) => {
  const redirectParam = new URLSearchParams(location.search || "").get(
    "redirect",
  );
  const targetUrl = redirectParam
    ? new URL(redirectParam, window.location.origin)
    : new URL(location.href || "https://spachance.com/");

  const page = getPageFromPath(targetUrl.pathname);
  const blogSlug =
    page === "blog" ? getBlogSlugFromPath(targetUrl.pathname) : null;
  const category =
    page === "services"
      ? getCategoryFromPathAndSearch(targetUrl.pathname, targetUrl.search)
      : "packages";

  return { page, category, blogSlug };
};

const buildRoute = (
  page,
  category = "packages",
  blogSlug = null,
  baseUrl = window.location.href,
) => {
  if (page === "blog") {
    return blogSlug ? `/blog/${encodeURIComponent(blogSlug)}` : "/blog";
  }

  if (page === "services") {
    const catSlug = CATEGORY_SLUG_MAP[category] || "packages";
    return catSlug === "packages" ? "/services" : `/services/${catSlug}`;
  }

  const routeMap = {
    home: "/",
    about: "/about",
    book: "/book",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  };

  return routeMap[page] || "/";
};

export {
  CATEGORY_SLUG_MAP,
  SLUG_TO_CATEGORY_MAP,
  getPageFromPath,
  getBlogSlugFromPath,
  getCategoryFromPathAndSearch,
  getPageStateFromLocation,
  buildRoute,
};
export default {
  CATEGORY_SLUG_MAP,
  SLUG_TO_CATEGORY_MAP,
  getPageFromPath,
  getBlogSlugFromPath,
  getCategoryFromPathAndSearch,
  getPageStateFromLocation,
  buildRoute,
};
