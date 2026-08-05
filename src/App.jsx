import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import GiftCardModal from "./components/GiftCardModal";
import FreshaModal from "./components/FreshaModal";
import SeoSchema from "./components/SeoSchema";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BookPage from "./pages/BookPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const getPageFromPath = (pathname) => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

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

const getCategoryFromSearch = (search) => {
  const params = new URLSearchParams(search);
  return params.get("category") || "packages";
};

const buildRoute = (page, category = "packages") => {
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

  if (page !== "services") {
    return baseRoute;
  }

  const url = new URL(window.location.href);
  url.pathname = "/services";

  if (category && category !== "packages") {
    url.searchParams.set("category", category);
  } else {
    url.searchParams.delete("category");
  }

  return `${url.pathname}${url.search}`;
};

const updateDocumentMeta = (page, category) => {
  const route = buildRoute(page, category);
  const canonical = `${window.location.origin}${route}`;
  const pageMeta = {
    home: {
      title: "SpaChance | Premium Skin & Wellness, East Legon",
      description:
        "Premium skin, wellness, and restorative massage in East Legon, Accra. Book tailored facials, barrier care, and spa rituals.",
    },
    about: {
      title: "About SpaChance | Skin Specialist & Wellness Studio",
      description:
        "Learn about Anita Sekyere, SpaChance’s founder, and the studio’s barrier-care philosophy in East Legon, Accra.",
    },
    services: {
      title: "Services & Packages | SpaChance",
      description:
        "Explore SpaChance facials, massage, pedicure, makeup, and brows & lash services in East Legon, Accra.",
    },
    blog: {
      title: "Blog & Insights | SpaChance",
      description:
        "Read skincare and wellness insights from Anita Sekyere for healthy skin and deep relaxation in Accra.",
    },
    book: {
      title: "Book & Hours | SpaChance",
      description:
        "Book your SpaChance treatment online or by WhatsApp and view studio hours in East Legon, Accra.",
    },
    contact: {
      title: "Contact SpaChance",
      description:
        "Get in touch with SpaChance by phone, WhatsApp, or email for consultations and bookings in East Legon, Accra.",
    },
    privacy: {
      title: "Privacy Policy | SpaChance",
      description:
        "Read SpaChance’s privacy policy covering booking data, analytics, and cookie use on the site.",
    },
    terms: {
      title: "Terms of Service | SpaChance",
      description:
        "Review SpaChance’s booking, cancellation, and service terms for appointments and gift cards.",
    },
  };

  const meta = pageMeta[page] || pageMeta.home;

  document.title = meta.title;
  const titleTag = document.querySelector('meta[name="title"]');
  if (titleTag) titleTag.setAttribute("content", meta.title);

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) descriptionTag.setAttribute("content", meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", meta.title);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute("content", meta.description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", canonical);

  const twitterCard = document.querySelector('meta[name="twitter:card"]');
  if (twitterCard) twitterCard.setAttribute("content", "summary_large_image");

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.rel = "canonical";
    document.head.appendChild(canonicalTag);
  }
  canonicalTag.href = canonical;
};

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [serviceCategory, setServiceCategory] = useState("packages");
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isFreshaModalOpen, setIsFreshaModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleSetActivePage = (page, options = {}) => {
    const nextPage = page || "home";
    setActivePage(nextPage);

    if (nextPage === "services") {
      setServiceCategory(options.category || "packages");
    }
  };

  useEffect(() => {
    const initialPage = getPageFromPath(window.location.pathname);
    const initialCategory =
      initialPage === "services"
        ? getCategoryFromSearch(window.location.search)
        : "packages";

    setActivePage(initialPage);
    setServiceCategory(initialCategory);
    updateDocumentMeta(initialPage, initialCategory);
  }, []);

  useEffect(() => {
    const route = buildRoute(
      activePage,
      activePage === "services" ? serviceCategory : "packages",
    );
    const currentRoute = `${window.location.pathname}${window.location.search}`;

    if (currentRoute !== route) {
      window.history.pushState(
        { page: activePage, category: serviceCategory },
        "",
        route,
      );
    }

    updateDocumentMeta(activePage, activePage === "services" ? serviceCategory : "packages");
  }, [activePage, serviceCategory]);

  useEffect(() => {
    const handlePopState = () => {
      const nextPage = getPageFromPath(window.location.pathname);
      const nextCategory =
        nextPage === "services"
          ? getCategoryFromSearch(window.location.search)
          : "packages";

      setActivePage(nextPage);
      setServiceCategory(nextCategory);
      updateDocumentMeta(nextPage, nextCategory);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const handleBookService = (service) => {
    setSelectedService(service);
    setIsFreshaModalOpen(true);
  };

  return (
    <div
      className="app-root"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      {/* Inject SEO JSON-LD Schemas */}
      <SeoSchema />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={handleSetActivePage}
        onOpenBookModal={() => {
          setSelectedService(null);
          setIsFreshaModalOpen(true);
        }}
        onOpenGiftModal={() => setIsGiftModalOpen(true)}
      />

      {/* Main Active Page View */}
      <main id="main-content" style={{ flexGrow: 1 }}>
        {activePage === "home" && (
          <HomePage
            setActivePage={handleSetActivePage}
            onBookService={handleBookService}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}

        {activePage === "about" && (
          <AboutPage onOpenBookModal={() => setIsFreshaModalOpen(true)} />
        )}

        {activePage === "services" && (
          <ServicesPage
            activeCategory={serviceCategory}
            onCategoryChange={setServiceCategory}
            onBookService={handleBookService}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}

        {activePage === "blog" && (
          <BlogPage onOpenBookModal={() => setIsFreshaModalOpen(true)} />
        )}

        {activePage === "book" && (
          <BookPage onOpenGiftModal={() => setIsGiftModalOpen(true)} />
        )}

        {activePage === "contact" && <ContactPage />}
        {activePage === "privacy" && <PrivacyPage />}
        {activePage === "terms" && <TermsPage />}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={handleSetActivePage}
        onOpenGiftModal={() => setIsGiftModalOpen(true)}
      />

      {/* Interactive WhatsApp Assistant Widget */}
      <WhatsAppWidget />

      {/* Interactive Gift Card Modal */}
      <GiftCardModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />

      {/* Interactive Fresha Booking Modal */}
      <FreshaModal
        isOpen={isFreshaModalOpen}
        onClose={() => setIsFreshaModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
