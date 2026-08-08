import React, { useState } from "react";
import { Calendar, Check, Sparkles, Gift, ExternalLink } from "lucide-react";
import {
  BRAND,
  SERVICES_CATALOG,
  buildWhatsAppBookingUrl,
} from "../data/spachanceData";

export default function ServicesPage({
  activeCategory: initialCategory,
  onBookService,
  onOpenGiftModal,
}) {
  const categories = SERVICES_CATALOG.map((c) => c.category);
  const [activeCategory, setActiveCategory] = useState(
    initialCategory || categories[0] || "packages",
  );

  const currentCatalog =
    SERVICES_CATALOG.find((c) => c.category === activeCategory) ||
    SERVICES_CATALOG[0];

  return (
    <div className="services-page">
      {/* 1. Full Viewport Authentic Studio Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-dark-bg)",
          textAlign: "center",
          overflow: "hidden",
          paddingTop: "80px",
        }}
      >
        <div
          style={{ position: "absolute", inset: 0, opacity: 0.88, zIndex: 1 }}
        >
          <img
            src="/assets/hero_services_real.jpg"
            alt="SpaChance Treatment Room Sanctuary"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {/* Reduced Dark Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(25, 22, 19, 0.55) 0%, rgba(25, 22, 19, 0.3) 60%, rgba(237, 224, 200, 0.85) 100%)",
            }}
          />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <span
              className="tag-subtitle"
              style={{
                color: "#ede0c8",
                letterSpacing: "0.18em",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              Treatment Catalogue
            </span>
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              Personalized Skin & Wellness Menu
            </h1>
            <p
              style={{
                maxWidth: "580px",
                margin: "0 auto 2rem auto",
                color: "#f5eae0",
                fontSize: "1.12rem",
                lineHeight: "1.65",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              Explore our curated spa packages, skin barrier facials,
              therapeutic deep tissue massage, pedicure & manicure, and beauty
              treatments in Ogbojo-Madina, Accra.
            </p>

            <a
              href={buildWhatsAppBookingUrl("a SpaChance treatment")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                backgroundColor: "#ede0c8",
                color: "#2e2925",
                borderColor: "#ede0c8",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            >
              <Calendar size={17} />
              Book
            </a>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section
        style={{
          backgroundColor: "#e5d7be",
          borderBottom: "1px solid var(--border-subtle)",
          position: "sticky",
          top: "100px",
          zIndex: 90,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.6rem",
            padding: "0.85rem",
            overflowX: "auto",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.55rem 1.2rem",
                borderRadius: "25px",
                border:
                  activeCategory === cat
                    ? "2px solid var(--text-primary)"
                    : "1px solid var(--border-subtle)",
                backgroundColor:
                  activeCategory === cat
                    ? "var(--text-primary)"
                    : "rgba(255, 255, 255, 0.5)",
                color:
                  activeCategory === cat
                    ? "var(--bg-primary)"
                    : "var(--text-primary)",
                fontWeight: activeCategory === cat ? 600 : 500,
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 300ms ease",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                textTransform: "capitalize",
              }}
            >
              {cat === "packages" && (
                <Sparkles
                  size={13}
                  style={{
                    color:
                      activeCategory === "packages"
                        ? "#ede0c8"
                        : "var(--accent-dark)",
                  }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Service Items Grid */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container">
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <span
              className="tag-subtitle"
              style={{ textTransform: "capitalize" }}
            >
              {currentCatalog.category} Menu
            </span>
            <h2>{currentCatalog.title}</h2>
            <p>{currentCatalog.description}</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                activeCategory === "packages"
                  ? "repeat(auto-fit, minmax(310px, 1fr))"
                  : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.8rem",
            }}
          >
            {currentCatalog.items.map((item) => (
              <div
                key={item.id}
                className="spa-card"
                style={{
                  padding: "1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  border: item.popular
                    ? "2px solid var(--accent-dark)"
                    : "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  {item.badge && (
                    <span
                      className="featured-badge"
                      style={{ marginBottom: "0.6rem" }}
                    >
                      {item.badge}
                    </span>
                  )}
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.description}
                  </p>

                  {item.includes && (
                    <div
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.4)",
                        padding: "0.85rem",
                        borderRadius: "4px",
                        marginBottom: "1rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          color: "var(--accent-dark)",
                          display: "block",
                          marginBottom: "0.3rem",
                        }}
                      >
                        Included:
                      </span>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.3rem",
                        }}
                      >
                        {item.includes.map((inc, i) => (
                          <li
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.4rem",
                              fontSize: "0.82rem",
                            }}
                          >
                            <Check
                              size={13}
                              style={{ color: "var(--accent-dark)" }}
                            />{" "}
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-light)",
                        display: "block",
                      }}
                    >
                      {item.duration}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.35rem",
                        fontWeight: 600,
                      }}
                    >
                      {item.price}
                    </span>
                  </div>

                  <a
                    href={buildWhatsAppBookingUrl(item.title, item.price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: "0.65rem 1.1rem", fontSize: "0.84rem" }}
                  >
                    <ExternalLink size={14} />
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Gift Cards Spotlight */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#e5d7be" }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "680px" }}
        >
          <Gift
            size={28}
            style={{ color: "var(--accent-dark)", marginBottom: "0.6rem" }}
          />
          <h2 style={{ marginBottom: "0.6rem" }}>
            Gift a SpaChance Experience
          </h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "0.92rem" }}>
            SpaChance Gift Cards allow recipients to choose their preferred
            skincare treatment or massage therapy at their convenience.
          </p>
          <button onClick={onOpenGiftModal} className="btn-primary">
            <Sparkles size={15} /> Purchase Gift Voucher
          </button>
        </div>
      </section>
    </div>
  );
}
