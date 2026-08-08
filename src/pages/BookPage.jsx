import React from "react";
import {
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { BRAND, buildWhatsAppBookingUrl } from "../data/spachanceData";
import { WhatsAppLogo } from "../components/SocialLogos";

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
              Book via WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Conversion Booking Path */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {/* Primary Path: WhatsApp Instant Custom Message */}
            <div
              className="spa-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "2px solid var(--accent-dark)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  <WhatsAppLogo size={22} />
                  <span className="featured-badge">Primary Booking Path</span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.6rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  Instant WhatsApp Booking
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    marginBottom: "1.2rem",
                  }}
                >
                  Message Anita & the SpaChance team directly on WhatsApp to
                  choose your service, share your preferred date and time, and
                  receive rapid confirmation.
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--accent-dark)" }}
                    />{" "}
                    Pre-filled service message & date prompt
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--accent-dark)" }}
                    />{" "}
                    Personal consultation with Anita Sekyere
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.85rem",
                    }}
                  >
                    <CheckCircle2
                      size={15}
                      style={{ color: "var(--accent-dark)" }}
                    />{" "}
                    Flexible scheduling & instant confirmation
                  </li>
                </ul>
              </div>

              <a
                href={buildWhatsAppBookingUrl("a SpaChance treatment")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  width: "100%",
                  padding: "1rem",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  backgroundColor: "#25D366",
                  borderColor: "#25D366",
                  color: "#ffffff",
                }}
              >
                <ExternalLink size={16} />
                Send Booking Message on WhatsApp
              </a>
            </div>

            {/* Direct Line & Inquiries */}
            <div
              className="spa-card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.8rem",
                  }}
                >
                  <img
                    src="/assets/whatsapp_official_icon.png"
                    alt="WhatsApp"
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent-dark)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Direct Concierge
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.6rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  Custom Package Inquiries
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-muted)",
                    marginBottom: "1.2rem",
                  }}
                >
                  Need advice on customized barrier repair facials, bridal
                  packages, or gift vouchers? Reach out directly.
                </p>

                <div
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: "1rem",
                    borderRadius: "4px",
                    border: "1px solid var(--border-subtle)",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <img
                    src="/assets/whatsapp_official_icon.png"
                    alt="WhatsApp"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-light)",
                        display: "block",
                      }}
                    >
                      WhatsApp Direct Line:
                    </span>
                    <strong
                      style={{
                        fontSize: "1.1rem",
                        fontFamily: "var(--font-serif)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {BRAND.whatsappPhone}
                    </strong>
                  </div>
                </div>
              </div>

              <a
                href={`${BRAND.whatsappUrl}?text=${encodeURIComponent("Hi SpaChance! I have a question about booking an appointment with Anita.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                }}
              >
                <MessageCircle size={16} />
                <span>Message Concierge</span>
              </a>
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
      </section>
    </div>
  );
}
