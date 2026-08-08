import React, { useState } from "react";
import {
  Calendar,
  Sparkles,
  Heart,
  Shield,
  Award,
  ExternalLink,
} from "lucide-react";
import { BRAND, buildWhatsAppBookingUrl } from "../data/spachanceData";

export default function AboutPage({ onOpenBookModal }) {
  const [founderImageSrc, setFounderImageSrc] = useState(BRAND.founder.image);

  return (
    <div className="about-page">
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
            src="/assets/hero_about_real.jpg"
            alt="SpaChance Studio Skincare Display"
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
              Our Philosophy & Founder
            </span>
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              Quiet Luxury & Skin Barrier Science
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
              Meet Anita Sekyere, certified skin specialist and founder of
              SpaChance, Accra's premier sanctuary for skin barrier health and
              body wellness.
            </p>

            <a
              href={buildWhatsAppBookingUrl("a SpaChance service")}
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

      {/* Founder Story */}
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
              style={{ height: "440px", borderRadius: "6px" }}
            >
              <img
                src={founderImageSrc}
                alt="Anita Sekyere - SpaChance Founder"
                onError={() => {
                  if (founderImageSrc !== BRAND.founder.fallbackImage) {
                    setFounderImageSrc(BRAND.founder.fallbackImage);
                  }
                }}
              />
            </div>

            <div>
              <span className="tag-subtitle">Founder Story</span>
              <h2 style={{ marginBottom: "1rem" }}>
                Anita Sekyere — Certified Skin Specialist
              </h2>
              <p style={{ marginBottom: "1rem" }}>{BRAND.founder.bio}</p>

              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  padding: "1.2rem",
                  borderRadius: "6px",
                  border: "1px solid var(--border-subtle)",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  <Award size={20} style={{ color: "var(--accent-dark)" }} />
                  <strong
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.05rem",
                    }}
                  >
                    Certified Specialist Credentials
                  </strong>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Certified in cosmetic science, advanced facials for chemical
                  peels, and micro-needling for melanated skin profiles.
                </p>
              </div>

              <a
                href={buildWhatsAppBookingUrl("a Skin Consultation with Anita")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#e5d7be" }}
      >
        <div className="container">
          <div
            className="section-header center"
            style={{ marginBottom: "2.5rem" }}
          >
            <span className="tag-subtitle">Our Core Pillars</span>
            <h2>Why Choose SpaChance</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              className="spa-card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <Shield
                size={32}
                style={{ color: "var(--accent-dark)", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Barrier First Skincare
              </h3>
              <p style={{ fontSize: "0.88rem" }}>
                We prioritize long-term skin health over aggressive quick fixes.
                Every treatment repairs and respects your natural lipid shield.
              </p>
            </div>

            <div
              className="spa-card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <Heart
                size={32}
                style={{ color: "var(--accent-dark)", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Unhurried Care
              </h3>
              <p style={{ fontSize: "0.88rem" }}>
                Your appointment is dedicated solely to you. We schedule
                adequate time between clients for deep relaxation without rush.
              </p>
            </div>

            <div
              className="spa-card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <Sparkles
                size={32}
                style={{ color: "var(--accent-dark)", marginBottom: "1rem" }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  marginBottom: "0.5rem",
                }}
              >
                Melanin Skin Mastery
              </h3>
              <p style={{ fontSize: "0.88rem" }}>
                Specialized protocols formulated specifically for rich melanin
                tones to prevent hyperpigmentation and post-acne marks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
