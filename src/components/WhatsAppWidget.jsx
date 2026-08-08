import React, { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { BRAND } from "../data/spachanceData";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [founderImageSrc, setFounderImageSrc] = useState(BRAND.founder.image);

  const quickPrompts = [
    "Hi Anita! I'd like to book a custom facial.",
    "Hello! Can I get details on your Spa Packages?",
    "Hi SpaChance! Where are you located in Ogbojo-Madina?",
    "I need advice on skin barrier maintenance.",
  ];

  const handleSend = (msgText) => {
    const textToSend =
      msgText ||
      customMsg ||
      "Hello SpaChance! I'm interested in booking an appointment.";
    const encoded = encodeURIComponent(textToSend);
    window.open(`${BRAND.whatsappUrl}?text=${encoded}`, "_blank");
    setCustomMsg("");
    setIsOpen(false);
  };

  return (
    <div
      style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 1100 }}
    >
      {/* Expanded Chat Box */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "75px",
            right: "0",
            width: "340px",
            maxWidth: "calc(100vw - 32px)",
            backgroundColor: "#f6eedf",
            border: "1px solid var(--border-focused)",
            borderRadius: "12px",
            boxShadow: "0 20px 50px rgba(46, 41, 37, 0.25)",
            overflow: "hidden",
            animation: "fadeIn 300ms cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#075E54",
              color: "#ffffff",
              padding: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={founderImageSrc}
                  alt="Anita Sekyere"
                  onError={() => {
                    if (founderImageSrc !== BRAND.founder.fallbackImage) {
                      setFounderImageSrc(BRAND.founder.fallbackImage);
                    }
                  }}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #25D366",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    width: "12px",
                    height: "12px",
                    backgroundColor: "#25D366",
                    borderRadius: "50%",
                    border: "2px solid #075E54",
                  }}
                />
              </div>
              <div>
                <strong
                  style={{
                    display: "block",
                    fontSize: "0.98rem",
                    fontFamily: "var(--font-serif)",
                    color: "#ffffff",
                  }}
                >
                  SpaChance Concierge
                </strong>
                <span style={{ fontSize: "0.75rem", color: "#e0f2f1" }}>
                  Anita Sekyere & Team • Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "0.2rem",
              }}
              aria-label="Close chat"
            >
              <X size={22} />
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              maxHeight: "360px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                padding: "0.85rem 1rem",
                borderRadius: "8px",
                fontSize: "0.88rem",
                color: "var(--text-primary)",
                lineHeight: "1.5",
                border: "1px solid var(--border-subtle)",
              }}
            >
              👋 Welcome to SpaChance! How can we assist you with your skin or
              wellness journey in Ogbojo-Madina today?
            </div>

            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "var(--accent-dark)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quick Options:
            </span>

            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                style={{
                  textAlign: "left",
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid var(--border-subtle)",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "6px",
                  fontSize: "0.82rem",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all 200ms ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Sparkles
                  size={13}
                  style={{ shrink: 0, color: "var(--accent-dark)" }}
                />
                <span>{p}</span>
              </button>
            ))}
          </div>

          {/* Footer Input */}
          <div
            style={{
              padding: "0.75rem 1rem 1rem 1rem",
              borderTop: "1px solid var(--border-subtle)",
              backgroundColor: "#efe5d6",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="input-spa"
              style={{ fontSize: "0.85rem", padding: "0.6rem 0.8rem" }}
            />
            <button
              onClick={() => handleSend()}
              className="btn-primary"
              style={{
                padding: "0.6rem 0.9rem",
                borderRadius: "4px",
                backgroundColor: "#25D366",
                borderColor: "#25D366",
                color: "#ffffff",
              }}
              aria-label="Send WhatsApp message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button with Attached WhatsApp Logo Image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "none",
          boxShadow: "0 10px 30px rgba(37, 211, 102, 0.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
          padding: 0,
          overflow: "hidden",
        }}
        aria-label="Open WhatsApp Chat assistant"
        className="whatsapp-float-btn"
      >
        {isOpen ? (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#075E54",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={30} style={{ color: "#ffffff" }} />
          </div>
        ) : (
          <img
            src="/assets/whatsapp_official_icon.png"
            alt="WhatsApp Chat"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
      </button>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 14px 35px rgba(37, 211, 102, 0.55);
        }
      `}</style>
    </div>
  );
}
