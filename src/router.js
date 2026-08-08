const getPageFromPath = (pathname = "/") => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (normalizedPath.startsWith("/blog/")) {
    return "blog";
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

const getCategoryFromSearch = (search = "") => {
  const params = new URLSearchParams(search);
  return params.get("category") || "packages";
};

const getPageStateFromLocation = (location = window.location) => {
  const redirectParam = new URLSearchParams(location.search || "").get(
    "redirect",
  );
  const targetUrl = redirectParam
    ? new URL(redirectParam, window.location.origin)
    : new URL(location.href || "https://example.com/");

  const page = getPageFromPath(targetUrl.pathname);
  const blogSlug =
    page === "blog" ? getBlogSlugFromPath(targetUrl.pathname) : null;
  const category =
    page === "services" ? getCategoryFromSearch(targetUrl.search) : "packages";

  return { page, category, blogSlug };
};

const buildRoute = (
  page,
  category = "packages",
  blogSlug = null,
  baseUrl = window.location.href,
) => {
  const routeMap = {
    home: "/",
    about: "/about",
    services: "/services",
    blog: "/blog",
    book: "/book",
    contact: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  };

  const baseRoute = routeMap[page] || "/";

  if (page === "blog") {
    return blogSlug ? `/blog/${encodeURIComponent(blogSlug)}` : "/blog";
  }

  if (page !== "services") {
    return baseRoute;
  }

  const url = new URL(baseUrl || "https://example.com/");
  url.pathname = "/services";

  if (category && category !== "packages") {
    url.searchParams.set("category", category);
  } else {
    url.searchParams.delete("category");
  }

  return `${url.pathname}${url.search}`;
};

export {
  getPageFromPath,
  getBlogSlugFromPath,
  getCategoryFromSearch,
  getPageStateFromLocation,
  buildRoute,
};
export default {
  getPageFromPath,
  getBlogSlugFromPath,
  getCategoryFromSearch,
  getPageStateFromLocation,
  buildRoute,
};
