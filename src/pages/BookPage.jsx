import React from "react";
import {
  Calendar,
  Clock,
  User,
  Gift,
  Lock,
  MapPin
} from "lucide-react";
import { BRAND, buildWhatsAppBookingUrl } from "../data/spachanceData";

export default function BookPage({ onOpenGiftModal }) {
  return (
    <div className="book-page">
      {/* 1. Full Viewport Authentic Studio Vanity Hero */}
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
            src="/assets/hero_book_real.jpg"
            alt="SpaChance Studio Vanity Area"
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
              Reservations
            </span>
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              Book Your SpaChance Experience
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
              Reserve your quiet luxury facial, bodywork, manicure & pedicure,
              or spa package directly on WhatsApp with your preferred date and
              time.
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
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Conversion Booking Section */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container" style={{ maxWidth: "980px" }}>
          {/* Unified Booking & Inquire Card matching screenshot design */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid rgba(140, 128, 112, 0.2)",
              borderRadius: "16px",
              padding: "clamp(1.8rem, 4.5vw, 3.2rem)",
              boxShadow: "0 10px 40px rgba(46, 41, 37, 0.05)",
              marginBottom: "3.5rem"
            }}
          >
            {/* Top Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.2rem" }}>
              <img
                src="/assets/whatsapp_official_icon.png"
                alt="WhatsApp"
                style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <span
                style={{
                  backgroundColor: "#2e2925",
                  color: "#ffffff",
                  padding: "0.38rem 0.9rem",
                  borderRadius: "20px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase"
                }}
              >
                BOOK & INQUIRE
              </span>
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                color: "#2e2925",
                marginBottom: "1rem",
                fontWeight: 500,
                lineHeight: "1.2"
              }}
            >
              Book Instantly or Inquire Directly
            </h2>

            {/* Description */}
            <div style={{ color: "#4a423a", fontSize: "1.02rem", lineHeight: "1.6", marginBottom: "2.4rem", maxWidth: "640px" }}>
              <p style={{ marginBottom: "0.3rem" }}>
                Message Anita & the SpaChance team on WhatsApp to book your service, ask about custom packages, or get gift vouchers.
              </p>
              <p>
                Share your preferred date and time and receive a rapid confirmation.
              </p>
            </div>

            {/* 4 Feature Items Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.8rem",
                alignItems: "center",
                marginBottom: "2rem"
              }}
            >
              {/* Feature 1 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#f5ead6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#4a3e31"
                  }}
                >
                  <Clock size={22} />
                </div>
                <span style={{ fontSize: "0.9rem", color: "#2e2925", fontWeight: 500, lineHeight: "1.35" }}>
                  Pre-filled message & date prompt
                </span>
              </div>

              {/* Feature 2 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#f5ead6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#4a3e31"
                  }}
                >
                  <User size={22} />
                </div>
                <span style={{ fontSize: "0.9rem", color: "#2e2925", fontWeight: 500, lineHeight: "1.35" }}>
                  Personal consultation with an expert
                </span>
              </div>

              {/* Feature 3 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#f5ead6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#4a3e31"
                  }}
                >
                  <Calendar size={22} />
                </div>
                <span style={{ fontSize: "0.9rem", color: "#2e2925", fontWeight: 500, lineHeight: "1.35" }}>
                  Flexible scheduling & instant confirmation
                </span>
              </div>

              {/* Feature 4 */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.9rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#f5ead6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "#4a3e31"
                  }}
                >
                  <Gift size={22} />
                </div>
                <span style={{ fontSize: "0.9rem", color: "#2e2925", fontWeight: 500, lineHeight: "1.35" }}>
                  Custom packages & gift vouchers
                </span>
              </div>
            </div>

            <hr style={{ border: "none", borderTop: "1px solid rgba(140, 128, 112, 0.2)", margin: "2rem 0 1.8rem 0" }} />

            {/* Direct Line Box */}
            <div
              style={{
                backgroundColor: "#f8f4ed",
                border: "1px solid rgba(140, 128, 112, 0.2)",
                borderRadius: "12px",
                padding: "1.1rem 1.5rem",
                marginBottom: "1.2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem"
              }}
            >
              <img
                src="/assets/whatsapp_official_icon.png"
                alt="WhatsApp"
                style={{ width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#2e2925", display: "block" }}>
                  WhatsApp Direct Line:
                </span>
                <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#2e2925", fontFamily: "var(--font-sans)" }}>
                  {BRAND.whatsappPhone}
                </span>
              </div>
            </div>

            {/* Primary Green Action Button */}
            <a
              href={buildWhatsAppBookingUrl("a SpaChance service or package")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                backgroundColor: "#169e4d",
                color: "#ffffff",
                padding: "1.15rem",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.65rem",
                fontWeight: 600,
                fontSize: "1.05rem",
                textDecoration: "none",
                transition: "background-color 300ms ease, transform 200ms ease",
                boxShadow: "0 4px 15px rgba(22, 158, 77, 0.25)"
              }}
              className="whatsapp-main-btn"
            >
              <img
                src="/assets/whatsapp_official_icon.png"
                alt="WhatsApp"
                style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
              />
              <span>Message on WhatsApp to Book or Inquire</span>
            </a>

            {/* Security Footer Note */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.4rem",
                fontSize: "0.85rem",
                color: "#6e6358",
                marginTop: "0.9rem"
              }}
            >
              <Lock size={15} style={{ color: "#6e6358" }} />
              <span>Your details & conversations are private and secure.</span>
            </div>
          </div>

          {/* Operating Hours & Location */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <Clock size={20} style={{ color: "var(--accent-dark)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Studio Operating Hours
                </h3>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {BRAND.hours.map((h, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.88rem",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{h.days}</span>
                    <span
                      style={{
                        color: h.time.includes("Closed")
                          ? "#c0392b"
                          : "var(--text-muted)",
                      }}
                    >
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={20} style={{ color: "var(--accent-dark)" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Studio Location
                </h3>
              </div>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  marginBottom: "0.8rem",
                }}
              >
                Located in the quiet{" "}
                <strong>Ogbojo-Madina / North Legon Area</strong>, Accra, Ghana.
                Ample private parking.
              </p>

              <div
                style={{
                  backgroundColor: "#e5d7be",
                  padding: "0.85rem",
                  borderRadius: "4px",
                  fontSize: "0.82rem",
                }}
              >
                <strong>First Visit Tip:</strong> Please arrive 10-15 minutes
                early to enjoy your intake & botanical tea.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .whatsapp-main-btn:hover {
            background-color: #128641 !important;
            transform: translateY(-2px);
          }
        `}</style>
      </section>
    </div>
  );
}
