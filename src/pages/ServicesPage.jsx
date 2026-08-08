import React, { useState } from "react";
import { Calendar, Check, Sparkles, Gift, ExternalLink, AlertCircle } from "lucide-react";
import { BRAND, SERVICES_CATALOG, buildWhatsAppBookingUrl, buildWhatsAppConsultationUrl } from "../data/spachanceData";

export default function ServicesPage({ activeCategory: initialCategory, onCategoryChange, onBookService, onOpenGiftModal }) {
  const categories = SERVICES_CATALOG.map((c) => c.category);
  const [activeCategory, setActiveCategory] = useState(initialCategory || categories[0] || "packages");

  // Keep internal state in sync with prop if changed externally
  React.useEffect(() => {
    if (initialCategory && initialCategory !== activeCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  const currentCatalog =
    SERVICES_CATALOG.find((c) => c.category === activeCategory) || SERVICES_CATALOG[0];

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
          paddingTop: "80px"
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.88, zIndex: 1 }}>
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
                "linear-gradient(to bottom, rgba(25, 22, 19, 0.55) 0%, rgba(25, 22, 19, 0.3) 60%, rgba(237, 224, 200, 0.85) 100%)"
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
                textShadow: "0 2px 8px rgba(0,0,0,0.5)"
              }}
            >
              Treatment Catalogue
            </span>
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)"
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
                textShadow: "0 2px 10px rgba(0,0,0,0.6)"
              }}
            >
              Explore our curated spa packages, skin barrier facials, therapeutic deep tissue massage, pedicure & manicure, and beauty treatments in Ogbojo-Madina, Accra.
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
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
              }}
            >
              <Calendar size={17} />
              Book
            </a>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs - Fully Mobile Responsive Scroll Bar */}
      <section className="category-pills-bar">
        <div className="category-pills-scroll-wrapper">
          <div className="category-pills-track">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                className={`category-pill-btn ${activeCategory === cat ? "active" : ""}`}
              >
                {cat === "packages" && (
                  <Sparkles
                    size={14}
                    style={{
                      color: activeCategory === "packages" ? "#ede0c8" : "var(--accent-dark)",
                      flexShrink: 0
                    }}
                  />
                )}
                <span>{cat}</span>
              </button>
            ))}
          </div>
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
              gap: "1.8rem"
            }}
          >
            {currentCatalog.items.map((item) => {
              if (item.isUmbrella) {
                return (
                  <div
                    key={item.id}
                    className="spa-card umbrella-card"
                    style={{
                      gridColumn: "1 / -1",
                      padding: "clamp(1.6rem, 3.5vw, 2.5rem)",
                      border: "2px solid var(--accent-dark)",
                      backgroundColor: "#fffdfa",
                      boxShadow: "0 8px 30px rgba(46, 41, 37, 0.08)"
                    }}
                  >
                    {/* Umbrella Header */}
                    <div style={{ marginBottom: "1.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                        <span className="featured-badge">{item.badge}</span>
                        <span style={{ fontSize: "0.78rem", color: "var(--accent-dark)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Protocol Treatment
                        </span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", marginBottom: "0.8rem", color: "#2e2925" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "0.98rem", color: "#4a423a", lineHeight: "1.68", marginBottom: "1.2rem", maxWidth: "880px" }}>
                        {item.description}
                      </p>

                      {/* What Clients Can Expect List */}
                      {item.expectations && item.expectations.length > 0 && (
                        <div style={{ backgroundColor: "#f9f6f0", padding: "1rem 1.2rem", borderRadius: "6px", marginBottom: "1.2rem", border: "1px solid rgba(140, 128, 112, 0.15)" }}>
                          <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-dark)", display: "block", marginBottom: "0.5rem", letterSpacing: "0.06em" }}>
                            WHAT CLIENTS CAN EXPECT:
                          </span>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.45rem" }}>
                            {item.expectations.map((exp, i) => (
                              <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.86rem", color: "#2e2925" }}>
                                <Check size={14} style={{ color: "var(--accent-dark)", flexShrink: 0 }} />
                                <span>{exp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Mandatory Notice Box */}
                      {item.notice && (
                        <div
                          style={{
                            backgroundColor: "#f5ead6",
                            borderLeft: "4px solid var(--accent-dark)",
                            padding: "0.9rem 1.2rem",
                            borderRadius: "4px",
                            color: "#382a1d",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem"
                          }}
                        >
                          <AlertCircle size={18} style={{ color: "var(--accent-dark)", flexShrink: 0 }} />
                          <span>{item.notice}</span>
                        </div>
                      )}
                    </div>

                    {/* Sub-Services Options Header */}
                    <div style={{ marginTop: "2rem", marginBottom: "1.2rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.6rem" }}>
                        <div>
                          <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "#2e2925", margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span>Options</span>
                          </h4>
                        </div>
                        <span style={{ fontSize: "0.88rem", color: "var(--accent-dark)", fontWeight: 600, backgroundColor: "#f8f3ea", padding: "0.35rem 0.85rem", borderRadius: "20px" }}>
                          Price: {item.price}
                        </span>
                      </div>
                    </div>

                    {/* Sub-Services Grid */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "1.4rem"
                      }}
                    >
                      {item.subServices.map((sub) => (
                        <div
                          key={sub.id}
                          style={{
                            backgroundColor: "#ffffff",
                            border: "1px solid rgba(140, 128, 112, 0.25)",
                            borderRadius: "8px",
                            padding: "1.4rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.03)"
                          }}
                        >
                          <div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                              <h5 style={{ fontFamily: "var(--font-serif)", fontSize: "1.25rem", color: "#2e2925", margin: 0 }}>
                                {sub.title}
                              </h5>
                              <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--accent-dark)", backgroundColor: "#f8f3ea", padding: "0.2rem 0.6rem", borderRadius: "12px", whiteSpace: "nowrap" }}>
                                {sub.duration}
                              </span>
                            </div>

                            {sub.programInvestment && (
                              <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-dark)", marginBottom: "0.5rem" }}>
                                PROGRAM INVESTMENT: {sub.programInvestment}
                              </div>
                            )}

                            {sub.target && !sub.phases && (
                              <p style={{ fontSize: "0.85rem", color: "#6e6358", fontStyle: "italic", marginBottom: "0.8rem", fontWeight: 500 }}>
                                {sub.target}
                              </p>
                            )}

                            {sub.phases && sub.phases.length > 0 && (
                              <div style={{ backgroundColor: "#f9f6f0", padding: "0.8rem", borderRadius: "6px", marginBottom: "0.9rem" }}>
                                <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-dark)", display: "block", marginBottom: "0.35rem" }}>
                                  Program Phases & Goals:
                                </span>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                  {sub.phases.map((ph, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.83rem", color: "#2e2925" }}>
                                      <Check size={14} style={{ color: "var(--accent-dark)", flexShrink: 0 }} />
                                      <span>{ph}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {sub.includes && sub.includes.length > 0 && (
                              <div style={{ backgroundColor: "#f9f6f0", padding: "0.8rem", borderRadius: "6px", marginBottom: "0.9rem" }}>
                                <span style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-dark)", display: "block", marginBottom: "0.35rem" }}>
                                  Includes:
                                </span>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                                  {sub.includes.map((inc, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.83rem", color: "#2e2925" }}>
                                      <Check size={14} style={{ color: "var(--accent-dark)", flexShrink: 0 }} />
                                      <span>{inc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {sub.paymentPolicy && (
                              <div style={{ fontSize: "0.8rem", color: "#4a423a", backgroundColor: "#f5ead6", padding: "0.6rem 0.8rem", borderRadius: "4px", marginBottom: "1.1rem", lineHeight: "1.4" }}>
                                <strong>Package & Payment Policy:</strong> {sub.paymentPolicy}
                              </div>
                            )}
                          </div>

                          <a
                            href={sub.whatsappUrl || buildWhatsAppConsultationUrl(sub.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center", fontSize: "0.86rem", padding: "0.75rem" }}
                          >
                            <ExternalLink size={14} />
                            Book Consultation
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
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
                      : "1px solid var(--border-subtle)"
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
                        marginBottom: "0.5rem"
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-muted)",
                        marginBottom: "1rem"
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
                          marginBottom: "1rem"
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            color: "var(--accent-dark)",
                            display: "block",
                            marginBottom: "0.3rem"
                          }}
                        >
                          Included:
                        </span>
                        <ul
                          style={{
                            listStyle: "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.3rem"
                          }}
                        >
                          {item.includes.map((inc, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                fontSize: "0.82rem"
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
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "var(--text-light)",
                          display: "block"
                        }}
                      >
                        {item.duration}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: item.price.length > 15 ? "1.05rem" : "1.35rem",
                          fontWeight: 600
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
                      {item.badge === "Consultation Required" || item.price?.toLowerCase().includes("expert recommendation")
                        ? "Book Consultation"
                        : "Book"}
                    </a>
                  </div>
                </div>
              );
            })}
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
          <h2 style={{ marginBottom: "0.6rem" }}>Gift a SpaChance Experience</h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "0.92rem" }}>
            SpaChance Gift Cards allow recipients to choose their preferred skincare treatment or massage therapy at their convenience.
          </p>
          <button onClick={onOpenGiftModal} className="btn-primary">
            <Sparkles size={15} /> Purchase Gift Voucher
          </button>
        </div>
      </section>

      <style>{`
        .category-pills-bar {
          background-color: #e5d7be;
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 100px;
          z-index: 90;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          transition: top 300ms ease;
          width: 100%;
          overflow: hidden;
        }

        .category-pills-scroll-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.75rem 1rem;
          box-sizing: border-box;
        }

        .category-pills-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }

        .category-pills-track {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          align-items: center !important;
          gap: 0.6rem !important;
          width: max-content !important;
          min-width: 100% !important;
          box-sizing: border-box !important;
        }

        .category-pill-btn {
          flex: 0 0 auto !important;
          flex-shrink: 0 !important;
          width: auto !important;
          min-width: max-content !important;
          height: 38px !important;
          min-height: 38px !important;
          padding: 0 1.1rem !important;
          border-radius: 20px !important;
          border: 1px solid var(--border-subtle) !important;
          background-color: rgba(255, 255, 255, 0.65) !important;
          color: var(--text-primary) !important;
          font-weight: 500 !important;
          font-size: 0.88rem !important;
          cursor: pointer !important;
          transition: all 250ms ease !important;
          white-space: nowrap !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.4rem !important;
          text-transform: capitalize !important;
          box-sizing: border-box !important;
        }

        .category-pill-btn:hover {
          background-color: rgba(255, 255, 255, 0.9) !important;
        }

        .category-pill-btn.active {
          border: 2px solid var(--text-primary) !important;
          background-color: var(--text-primary) !important;
          color: var(--bg-primary) !important;
          font-weight: 600 !important;
          box-shadow: 0 4px 12px rgba(46, 41, 37, 0.18) !important;
        }

        @media (min-width: 901px) {
          .category-pills-track {
            justify-content: center !important;
          }
        }

        @media (max-width: 1024px) {
          .category-pills-bar {
            top: 75px !important;
          }
        }

        @media (max-width: 900px) {
          .category-pills-scroll-wrapper {
            padding: 0.65rem 0.8rem !important;
          }
          .category-pills-track {
            gap: 0.5rem !important;
            justify-content: flex-start !important;
          }
          .category-pill-btn {
            height: 36px !important;
            min-height: 36px !important;
            padding: 0 0.95rem !important;
            font-size: 0.83rem !important;
          }
        }

        @media (max-width: 600px) {
          .category-pills-bar {
            top: 65px !important;
          }
        }
      `}</style>
    </div>
  );
}
