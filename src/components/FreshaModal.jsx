import React, { useState } from "react";
import { X, Calendar, Clock, Send, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND, buildWhatsAppBookingUrl } from "../data/spachanceData";
import { WhatsAppLogo } from "./SocialLogos";

export default function FreshaModal({ isOpen, onClose, selectedService }) {
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  if (!isOpen) return null;

  const serviceTitle = selectedService ? selectedService.title : "a SpaChance treatment";
  const servicePrice = selectedService ? selectedService.price : "";

  const handleContinueToWhatsApp = () => {
    const dateText = preferredDate ? preferredDate : "[insert date]";
    const timeText = preferredTime ? preferredTime : "[insert time]";
    const priceText = servicePrice ? ` (${servicePrice})` : "";
    const message = `Hi SpaChance! I'd like to book ${serviceTitle}${priceText}. My preferred date is ${dateText} at ${timeText}. Please confirm availability.`;
    const url = `${BRAND.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1200,
        backgroundColor: "rgba(35, 31, 28, 0.75)",
        backdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <div
        className="spa-card"
        style={{
          width: "100%",
          maxWidth: "520px",
          backgroundColor: "#f6eedf",
          padding: "2.2rem",
          position: "relative",
          borderRadius: "8px",
          boxShadow: "0 25px 65px rgba(0,0,0,0.25)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
          }}
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem auto",
              boxShadow: "0 8px 25px rgba(37, 211, 102, 0.35)"
            }}
          >
            <WhatsAppLogo size={36} />
          </div>
          <span className="tag-subtitle" style={{ color: "var(--accent-dark)" }}>Direct WhatsApp Reservation</span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem" }}>
            Book Your SpaChance Visit
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginTop: "0.4rem",
            }}
          >
            Specify your preferred date and time below to chat directly with Anita & the team on WhatsApp.
          </p>
        </div>

        {selectedService && (
          <div
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-focused)",
              padding: "1rem",
              borderRadius: "6px",
              marginBottom: "1.2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  color: "var(--accent-dark)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                Selected Service
              </span>
              <h4
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", color: "var(--text-primary)" }}
              >
                {selectedService.title}
              </h4>
              {selectedService.duration && (
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  {selectedService.duration}
                </span>
              )}
            </div>
            {selectedService.price && (
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                {selectedService.price}
              </div>
            )}
          </div>
        )}

        {/* Optional Date & Time Selectors */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
              Preferred Date
            </label>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="input-spa"
              style={{ fontSize: "0.88rem", padding: "0.6rem 0.8rem" }}
            />
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-muted)", marginBottom: "0.3rem" }}>
              Preferred Time
            </label>
            <input
              type="time"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="input-spa"
              style={{ fontSize: "0.88rem", padding: "0.6rem 0.8rem" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8rem",
            marginBottom: "1.2rem",
          }}
        >
          <button
            onClick={handleContinueToWhatsApp}
            className="btn-primary"
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: "1rem",
              justifyContent: "center",
              backgroundColor: "#25D366",
              borderColor: "#25D366",
              color: "#ffffff"
            }}
          >
            <Send size={18} />
            Continue to WhatsApp
          </button>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            fontSize: "0.8rem",
            color: "var(--text-light)",
            borderTop: "1px solid var(--border-subtle)",
            paddingTop: "1rem",
          }}
        >
          <ShieldCheck size={16} style={{ color: "#25D366" }} />
          <span>
            Instant Response • No Pre-payment Required
          </span>
        </div>
      </div>
    </div>
  );
}
