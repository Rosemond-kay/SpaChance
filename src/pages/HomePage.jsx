import React, { useState, useEffect } from "react";
import {
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronLeft,
  Quote,
  Star,
  Check,
} from "lucide-react";
import {
  BRAND,
  HERO_SLIDES,
  SPA_PACKAGES,
  SERVICES_CATALOG,
  TESTIMONIALS,
  buildWhatsAppBookingUrl,
} from "../data/spachanceData";
import { GoogleLogo } from "../components/SocialLogos";

export default function HomePage({
  setActivePage,
  onBookService,
  onOpenGiftModal,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Auto-rotate hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      {/* 1. Full Viewport Hero Slider */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-dark-bg)",
          overflow: "hidden",
          paddingTop: "100px",
        }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              inset: 0,
              opacity: currentSlide === index ? 0.88 : 0,
              transition: "opacity 1200ms cubic-bezier(0.22, 1, 0.36, 1)",
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.headline}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: currentSlide === index ? "scale(1.03)" : "scale(1)",
                transition: "transform 7000ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
            {/* Softened Dark Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, rgba(25, 22, 19, 0.6) 0%, rgba(25, 22, 19, 0.35) 55%, rgba(25, 22, 19, 0.1) 100%)",
              }}
            />
          </div>
        ))}

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
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
              {HERO_SLIDES[currentSlide].headline}
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "#f5eae0",
                marginBottom: "2.2rem",
                maxWidth: "560px",
                lineHeight: "1.65",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
              }}
            >
              Quiet luxury facials, hyperpigmentation treatment, and restorative
              bodywork by Anita Sekyere in Ogbojo-Madina.
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
                href={buildWhatsAppBookingUrl("a SpaChance visit")}
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
                Book via WhatsApp
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

        {/* Slide Indicators */}
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
              therapy, pedicure & manicure, and curated packages in Accra.
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
            <h2>Curated Spa Packages</h2>
            <p>
              Complete mind and body resets designed to restore skin barrier
              health and melt away deep muscle stress.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
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
                  justifyContent: "space-between",
                  border: pkg.popular
                    ? "2px solid var(--accent-dark)"
                    : "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <div
                    className="img-editorial"
                    style={{ height: "200px", marginBottom: "1.2rem" }}
                  >
                    <img src={pkg.image} alt={pkg.title} />
                    {pkg.badge && (
                      <span
                        className="featured-badge"
                        style={{
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          zIndex: 2,
                        }}
                      >
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <div style={{ padding: "0 1.4rem 1.4rem 1.4rem" }}>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--accent-dark)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {pkg.subtitle}
                    </span>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.4rem",
                        marginTop: "0.2rem",
                        marginBottom: "0.6rem",
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
                          marginBottom: "0.4rem",
                        }}
                      >
                        Includes:
                      </span>
                      <ul
                        style={{
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.3rem",
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

                      <a
                        href={buildWhatsAppBookingUrl(pkg.title, pkg.price)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          padding: "0.65rem 1.2rem",
                          fontSize: "0.85rem",
                        }}
                      >
                        <Calendar size={14} />
                        Book
                      </a>
                    </div>
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
              style={{
                height: "440px",
                boxShadow: "0 20px 45px rgba(46, 41, 37, 0.12)",
                borderRadius: "6px",
              }}
            >
              <img
                src={BRAND.founder.image}
                alt="Anita Sekyere - Founder & Skin Specialist"
              />
            </div>

            <div>
              <span className="tag-subtitle">Meet Our Founder</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  marginBottom: "1rem",
                }}
              >
                Anita Sekyere
              </h2>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: "var(--accent-dark)",
                  fontWeight: 500,
                  marginBottom: "1.2rem",
                }}
              >
                {BRAND.founder.title}
              </h3>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                  marginBottom: "1.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {BRAND.founder.bio}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.2rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    borderLeft: "3px solid var(--accent-dark)",
                    paddingLeft: "0.85rem",
                  }}
                >
                  <strong
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                      display: "block",
                    }}
                  >
                    Customized Care
                  </strong>
                  <span
                    style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}
                  >
                    Every treatment is tailored to your skin.
                  </span>
                </div>
                <div
                  style={{
                    borderLeft: "3px solid var(--accent-dark)",
                    paddingLeft: "0.85rem",
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
                    Unhurried Ogbojo-Madina studio.
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

      {/* 5. Google Business Profile Genuine Reviews */}
      <section
        className="section-padding"
        style={{
          backgroundColor: "var(--bg-dark)",
          color: "var(--text-dark-bg)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "860px", textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              backgroundColor: "rgba(237, 224, 200, 0.12)",
              padding: "0.4rem 1rem",
              borderRadius: "20px",
              marginBottom: "1rem",
            }}
          >
            <GoogleLogo size={18} />
            <span
              style={{ fontSize: "0.85rem", color: "#ede0c8", fontWeight: 600 }}
            >
              5.0 Star Rating on Google Business Profile
            </span>
          </div>

          <h2 style={{ color: "#ffffff", marginBottom: "2rem" }}>
            Client Reviews & Testimonials
          </h2>

          <div
            style={{
              minHeight: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "2rem",
              borderRadius: "8px",
              border: "1px solid rgba(140, 128, 112, 0.2)",
              position: "relative",
            }}
          >
            <Quote
              size={36}
              style={{
                position: "absolute",
                top: "1rem",
                left: "1.2rem",
                color: "rgba(237, 224, 200, 0.15)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.2rem",
                marginBottom: "0.8rem",
              }}
            >
              {[...Array(TESTIMONIALS[testimonialIdx].stars || 5)].map(
                (_, s) => (
                  <Star key={s} size={16} fill="#c68a2c" color="#c68a2c" />
                ),
              )}
            </div>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
                fontStyle: "italic",
                color: "#ede0c8",
                marginBottom: "1.2rem",
                lineHeight: "1.6",
                whiteSpace: "pre-line",
              }}
            >
              "{TESTIMONIALS[testimonialIdx].quote}"
            </p>

            <strong style={{ fontSize: "1.05rem", color: "#ffffff" }}>
              {TESTIMONIALS[testimonialIdx].author}
            </strong>
            <span
              style={{
                fontSize: "0.82rem",
                color: "#ab9f8f",
                marginTop: "0.2rem",
              }}
            >
              {TESTIMONIALS[testimonialIdx].role} •{" "}
              {TESTIMONIALS[testimonialIdx].date}
            </span>
          </div>

          {/* Carousel Navigation Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.8rem",
            }}
          >
            <button
              onClick={() =>
                setTestimonialIdx(
                  (prev) =>
                    (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                )
              }
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(237, 224, 200, 0.3)",
                color: "#ede0c8",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            <div style={{ display: "flex", gap: "0.4rem" }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  style={{
                    width: testimonialIdx === i ? "20px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    backgroundColor:
                      testimonialIdx === i
                        ? "#c68a2c"
                        : "rgba(237, 224, 200, 0.3)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 300ms ease",
                  }}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS.length)
              }
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(237, 224, 200, 0.3)",
                color: "#ede0c8",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Gift Cards Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div
          className="container"
          style={{ textAlign: "center", maxWidth: "680px" }}
        >
          <Sparkles
            size={28}
            style={{ color: "var(--accent-dark)", marginBottom: "0.6rem" }}
          />
          <h2 style={{ marginBottom: "0.6rem" }}>
            Gift a SpaChance Experience
          </h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            SpaChance Gift Cards allow your loved ones to choose their preferred
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
