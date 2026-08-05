import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Calendar,
  ArrowRight,
  Check,
  Search,
  ChevronDown,
  ChevronUp,
  Gift,
  ChevronRight,
} from "lucide-react";
import {
  BRAND,
  HERO_SLIDES,
  SPA_PACKAGES,
  SERVICES_CATALOG,
  TESTIMONIALS,
  FAQS,
} from "../data/spachanceData";

export default function HomePage({
  setActivePage,
  onBookService,
  onOpenGiftModal,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroTaglineIdx, setHeroTaglineIdx] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [faqSearch, setFaqSearch] = useState("");
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [founderImageSrc, setFounderImageSrc] = useState(BRAND.founder.image);

  // Auto Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto Testimonial Crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const filteredFaqs = FAQS.filter(
    (f) =>
      f.q.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.a.toLowerCase().includes(faqSearch.toLowerCase()),
  );

  return (
    <div className="home-page">
      {/* 1. Full Viewport Hero Carousel */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-dark)",
          overflow: "hidden",
          color: "var(--text-dark-bg)",
          paddingTop: "80px",
        }}
      >
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: "absolute",
              inset: 0,
              opacity: currentSlide === idx ? 0.88 : 0,
              transition: "opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1)",
              zIndex: 1,
            }}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: currentSlide === idx ? "scale(1.02)" : "scale(1)",
                transition: "transform 6000ms linear",
              }}
            />
            {/* Reduced Dark Overlay so real photos are vibrant */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(25, 22, 19, 0.6) 0%, rgba(25, 22, 19, 0.3) 55%, rgba(25, 22, 19, 0.05) 100%), linear-gradient(to top, rgba(237, 224, 200, 0.4) 0%, transparent 25%)",
              }}
            />
          </div>
        ))}

        <div
          className="container"
          style={{ position: "relative", zIndex: 2, padding: "4rem 1rem" }}
        >
          <div style={{ maxWidth: "680px" }}>
            <span
              className="tag-subtitle"
              style={{
                color: "#ede0c8",
                letterSpacing: "0.18em",
                textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              {HERO_SLIDES[currentSlide].subheading}
            </span>

            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1.2rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                lineHeight: "1.1",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              {heroTaglineIdx === 0
                ? BRAND.tagline
                : BRAND.alternateTaglines[heroTaglineIdx - 1]}
            </h1>

            <p
              style={{
                color: "#f5eae0",
                fontSize: "1.12rem",
                lineHeight: "1.65",
                marginBottom: "2.2rem",
                maxWidth: "600px",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              Personalized skin barrier maintenance, therapeutic massage, and
              curated spa packages in Ogbojo-Madina, Accra. Guided by certified
              specialist Anita Sekyere.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <a
                href={BRAND.freshaBookingUrl}
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
                Book Your Visit
              </a>

              <button
                onClick={() => setActivePage("services")}
                className="btn-secondary"
                style={{
                  color: "#ffffff",
                  borderColor: "#ffffff",
                  backgroundColor: "rgba(0,0,0,0.25)",
                  backdropFilter: "blur(4px)",
                }}
              >
                Explore Services
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "28px",
            right: "5%",
            zIndex: 3,
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: currentSlide === i ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  currentSlide === i ? "#ffffff" : "rgba(255, 255, 255, 0.4)",
                border: "none",
                cursor: "pointer",
                transition: "all 400ms ease",
                boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Visual Service Category Grid */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container">
          <div
            className="section-header center"
            style={{ marginBottom: "2rem" }}
          >
            <span className="tag-subtitle">Spa & Wellness Menu</span>
            <h2>Our Specialized Offerings</h2>
            <p>
              Select a category to explore our skin barrier facials, massage
              therapy, and curated packages in Accra.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {SERVICES_CATALOG.map((cat, idx) => (
              <div
                key={idx}
                className="category-card"
                onClick={() =>
                  setActivePage("services", { category: cat.category })
                }
              >
                <div className="img-editorial" style={{ height: "250px" }}>
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="category-card-banner">
                  <span>{cat.category.toUpperCase()} &gt;</span>
                  <ChevronRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Spa Packages */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#e5d7be" }}
      >
        <div className="container">
          <div
            className="section-header center"
            style={{ marginBottom: "2.5rem" }}
          >
            <span className="tag-subtitle">⭐ Most Popular</span>
            <h2>Featured Spa Packages</h2>
            <p>
              Unhurried sanctuary rituals combining skin barrier repair with
              full-body muscle recovery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {SPA_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="spa-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div className="img-editorial" style={{ height: "200px" }}>
                  <img src={pkg.image} alt={pkg.title} />
                  <span
                    className="featured-badge"
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      zIndex: 2,
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div
                  style={{
                    padding: "1.6rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pkg.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    {pkg.description}
                  </p>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                      padding: "0.85rem",
                      borderRadius: "4px",
                      marginBottom: "1.2rem",
                      flexGrow: 1,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "var(--accent-dark)",
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Included:
                    </span>
                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                      }}
                    >
                      {pkg.includes.map((inc, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.82rem",
                            color: "var(--text-primary)",
                          }}
                        >
                          <Check
                            size={14}
                            style={{ color: "var(--accent-dark)", shrink: 0 }}
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "0.9rem",
                      borderTop: "1px solid var(--border-subtle)",
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
                        {pkg.duration}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.4rem",
                          fontWeight: 600,
                        }}
                      >
                        {pkg.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onBookService(pkg)}
                      className="btn-primary"
                      style={{ padding: "0.65rem 1.2rem", fontSize: "0.85rem" }}
                    >
                      <Calendar size={14} />
                      Book Package
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder Teaser Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            <div
              className="img-editorial"
              style={{ height: "420px", borderRadius: "6px" }}
            >
              <img
                src={founderImageSrc}
                alt="Anita Sekyere - Founder"
                onError={() => {
                  if (founderImageSrc !== BRAND.founder.fallbackImage) {
                    setFounderImageSrc(BRAND.founder.fallbackImage);
                  }
                }}
              />
            </div>

            <div>
              <span className="tag-subtitle">Certified Skin Specialist</span>
              <h2 style={{ marginBottom: "1rem" }}>Meet Anita Sekyere</h2>
              <p style={{ marginBottom: "1rem" }}>
                SpaChance was founded to deliver visible skin correction without
                aggressive stripping. We specialize in skin barrier maintenance,
                acne resolution, and hyperpigmentation care for West African
                skin.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    borderLeft: "2px solid var(--accent-primary)",
                    paddingLeft: "0.8rem",
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      display: "block",
                    }}
                  >
                    Barrier Science
                  </strong>
                  <span
                    style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}
                  >
                    Ceramide hydration seals.
                  </span>
                </div>
                <div
                  style={{
                    borderLeft: "2px solid var(--accent-primary)",
                    paddingLeft: "0.8rem",
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      display: "block",
                    }}
                  >
                    Quiet Luxury
                  </strong>
                  <span
                    style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}
                  >
                    Unhurried East Legon studio.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setActivePage("about")}
                className="btn-secondary"
              >
                Read Anita's Story <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-dark-bg)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "800px", textAlign: "center" }}
        >
          <span className="tag-subtitle" style={{ color: "#ab9f8f" }}>
            Client Feedback
          </span>

          <div
            style={{
              minHeight: "140px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 2.2vw, 1.6rem)",
                fontStyle: "italic",
                color: "#ede0c8",
                marginBottom: "1rem",
              }}
            >
              "{TESTIMONIALS[testimonialIdx].quote}"
            </p>
            <strong style={{ fontSize: "0.95rem", color: "#ede0c8" }}>
              {TESTIMONIALS[testimonialIdx].author}
            </strong>
            <span style={{ fontSize: "0.8rem", color: "#ab9f8f" }}>
              {TESTIMONIALS[testimonialIdx].role}
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIdx(i)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    testimonialIdx === i
                      ? "#ede0c8"
                      : "rgba(237, 224, 200, 0.25)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container" style={{ maxWidth: "850px" }}>
          <div className="section-header center">
            <span className="tag-subtitle">Frequently Asked Questions</span>
            <h2>Client Insights</h2>
            <p>
              Pricing, skin barrier care, and booking details for your visit.
            </p>
          </div>

          <div style={{ marginBottom: "2rem", position: "relative" }}>
            <input
              type="text"
              placeholder="Search questions (cost, facial, massage, location)..."
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              className="input-spa"
              style={{ paddingLeft: "2.6rem" }}
            />
            <Search
              size={16}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-light)",
              }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
          >
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="spa-card"
                  style={{ overflow: "hidden" }}
                >
                  <button
                    onClick={() => setActiveFaq(isExpanded ? null : idx)}
                    style={{
                      width: "100%",
                      padding: "1.2rem 1.5rem",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontWeight: 600,
                      fontSize: "0.98rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span>{faq.q}</span>
                    {isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                  {isExpanded && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.2rem 1.5rem",
                        fontSize: "0.9rem",
                        color: "var(--text-muted)",
                        borderTop: "1px solid var(--border-subtle)",
                        paddingTop: "0.8rem",
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Gift Card Callout */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#e5d7be" }}
      >
        <div className="container">
          <div
            className="spa-card"
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "#eddcc2",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <span
                className="tag-subtitle"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Gift size={15} /> Gift Cards
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  marginBottom: "0.8rem",
                }}
              >
                Give the SpaChance Experience
              </h2>
              <p style={{ marginBottom: "1.2rem", fontSize: "0.92rem" }}>
                Digital and physical SpaChance Gift Cards for any treatment or
                package in Ogbojo-Madina, Accra.
              </p>
              <button onClick={onOpenGiftModal} className="btn-primary">
                <Sparkles size={15} /> Purchase Gift Card
              </button>
            </div>

            <div
              className="img-editorial"
              style={{ height: "220px", borderRadius: "6px" }}
            >
              <img
                src="/assets/hero_book_real.jpg"
                alt="SpaChance Gift Voucher"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
