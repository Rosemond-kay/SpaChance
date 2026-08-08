import React from "react";
import { Calendar, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { BRAND, buildWhatsAppBookingUrl } from "../data/spachanceData";

export default function ContactPage() {
  return (
    <div
      className="contact-page"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <section className="section-padding" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <span className="tag-subtitle">Contact SpaChance</span>
            <h1>
              Reach the studio for consultations, bookings, and wellness
              guidance.
            </h1>
            <p>
              We’re based in Ogbojo-Madina, Accra, and our team is happy to help
              you plan your visit.
            </p>
          </div>

          <div style={{ display: "grid", gap: "1.5rem" }}>
            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.8rem",
                }}
              >
                <MapPin size={20} style={{ color: "var(--accent-dark)" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Studio Address
                </h2>
              </div>
              <p style={{ marginBottom: "0.4rem" }}>
                Ogbojo-Madina Area, Accra, Ghana
              </p>
              <a
                href={BRAND.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--accent-dark)",
                  textDecoration: "underline",
                }}
              >
                View on Google Maps
              </a>
            </div>

            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.8rem",
                }}
              >
                <Phone size={20} style={{ color: "var(--accent-dark)" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Phone & WhatsApp
                </h2>
              </div>
              <a
                href={BRAND.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  marginBottom: "0.4rem",
                  color: "var(--accent-dark)",
                  textDecoration: "underline",
                }}
              >
                {BRAND.whatsappPhone}
              </a>
              <span style={{ color: "var(--text-muted)" }}>
                Appointment bookings
              </span>
            </div>

            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.8rem",
                }}
              >
                <Mail size={20} style={{ color: "var(--accent-dark)" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Email
                </h2>
              </div>
              <a
                href={`mailto:${BRAND.contactEmail}`}
                style={{
                  color: "var(--accent-dark)",
                  textDecoration: "underline",
                }}
              >
                {BRAND.contactEmail}
              </a>
            </div>

            <div className="spa-card" style={{ padding: "1.8rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  marginBottom: "0.8rem",
                }}
              >
                <Calendar size={20} style={{ color: "var(--accent-dark)" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                  }}
                >
                  Book
                </h2>
              </div>
              <a
                href={buildWhatsAppBookingUrl("a SpaChance appointment")}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ marginTop: "0.4rem" }}
              >
                <MessageCircle size={16} /> Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
