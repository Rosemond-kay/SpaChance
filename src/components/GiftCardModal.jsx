import React, { useEffect, useState } from "react";
import { X, Sparkles, CheckCircle2, Gift } from "lucide-react";
import { BRAND } from "../data/spachanceData";

export default function GiftCardModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState("500");
  const [recipient, setRecipient] = useState("");
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [ordered, setOrdered] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const presetAmounts = ["500", "800", "1000", "1500"];
  const isOrderDisabled = !recipient.trim() || !sender.trim();

  useEffect(() => {
    if (!toastMessage) return;

    const timer = window.setTimeout(() => setToastMessage(""), 2400);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const handleOrder = (channel) => {
    if (isOrderDisabled) {
      setToastMessage(
        "Please add both the recipient name and your name before ordering.",
      );
      return;
    }

    setOrdered(true);
    const cardSummary = `Hi SpaChance! I'd like to purchase a Spa Gift Card.\n\n- Value: GH₵ ${amount}\n- To: ${recipient || "Honored Guest"}\n- From: ${sender || "A Friend"}\n- Note: ${message || "Enjoy your skin & wellness experience!"}`;

    setTimeout(() => {
      if (channel === "whatsapp") {
        window.open(
          `${BRAND.whatsappUrl}?text=${encodeURIComponent(cardSummary)}`,
          "_blank",
        );
      } else {
        window.open(BRAND.freshaBookingUrl, "_blank");
      }
      setOrdered(false);
      onClose();
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
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
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "540px",
          backgroundColor: "#f5ebe0",
          padding: "2rem",
          position: "relative",
          borderRadius: "8px",
          maxHeight: "90vh",
          overflowY: "auto",
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
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: "center", marginBottom: "1.8rem" }}>
          <span
            className="tag-subtitle"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <Gift size={14} /> Digital & Physical Gift Cards
          </span>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
            Give the Gift of Radiance & Serenity
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
              marginTop: "0.4rem",
            }}
          >
            Perfect for birthdays, anniversaries, corporate appreciation, or
            self-care surprises in Accra (valid until two months after
            purchase).
          </p>
        </div>

        {/* Live Card Preview */}
        <div
          style={{
            backgroundColor: "var(--bg-dark)",
            color: "var(--text-dark-bg)",
            padding: "1.5rem",
            borderRadius: "8px",
            marginBottom: "1.8rem",
            position: "relative",
            backgroundImage:
              "radial-gradient(circle at 90% 10%, rgba(140, 128, 112, 0.25) 0%, transparent 60%)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "2rem",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "#e4d3b7",
                }}
              >
                SpaChance
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#ab9f8f",
                }}
              >
                Skin & Wellness Studio
              </span>
            </div>
            <Sparkles size={20} style={{ color: "#e4d3b7" }} />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                color: "#ab9f8f",
                letterSpacing: "0.08em",
              }}
            >
              Gift Voucher Value
            </span>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.2rem",
                color: "#e4d3b7",
                fontWeight: "bold",
              }}
            >
              GH₵ {amount}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "0.82rem",
              color: "#ab9f8f",
              borderTop: "1px solid rgba(228, 211, 183, 0.2)",
              paddingTop: "0.8rem",
            }}
          >
            <div>
              To:{" "}
              <span style={{ color: "#e4d3b7" }}>
                {recipient || "Honored Guest"}
              </span>
            </div>
            <div>
              From:{" "}
              <span style={{ color: "#e4d3b7" }}>
                {sender || "A Special Friend"}
              </span>
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                color: "var(--text-primary)",
              }}
            >
              Select Amount (GHS):
            </label>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0.6rem",
              }}
            >
              {presetAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  style={{
                    padding: "0.6rem",
                    borderRadius: "4px",
                    border:
                      amount === val
                        ? "2px solid var(--text-primary)"
                        : "1px solid var(--border-subtle)",
                    backgroundColor:
                      amount === val
                        ? "var(--text-primary)"
                        : "rgba(255,255,255,0.5)",
                    color:
                      amount === val
                        ? "var(--bg-primary)"
                        : "var(--text-primary)",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  GH₵ {val}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                }}
              >
                Recipient Name:
              </label>
              <input
                type="text"
                placeholder="e.g. Abena Serwaa"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="input-spa"
              />
            </div>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginBottom: "0.3rem",
                }}
              >
                Your Name:
              </label>
              <input
                type="text"
                placeholder="e.g. Kwesi Mensah"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="input-spa"
              />
            </div>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "0.3rem",
              }}
            >
              Personal Message (Optional):
            </label>
            <textarea
              rows={2}
              placeholder="Wishing you a relaxing spa day at SpaChance..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-spa"
            />
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            {toastMessage && (
              <div
                role="status"
                aria-live="polite"
                style={{
                  padding: "0.7rem 0.85rem",
                  borderRadius: "6px",
                  backgroundColor: "rgba(46, 41, 37, 0.95)",
                  color: "#f5ebe0",
                  fontSize: "0.85rem",
                  textAlign: "center",
                }}
              >
                {toastMessage}
              </div>
            )}

            <button
              onClick={() => handleOrder("whatsapp")}
              disabled={ordered || isOrderDisabled}
              className="btn-primary"
              style={{
                width: "100%",
                opacity: ordered || isOrderDisabled ? 0.65 : 1,
                cursor: ordered || isOrderDisabled ? "not-allowed" : "pointer",
              }}
            >
              {ordered ? <CheckCircle2 size={18} /> : <Gift size={18} />}
              {ordered
                ? "Generating Gift Order..."
                : "Order Gift Card via WhatsApp"}
            </button>

            <button
              onClick={() => handleOrder("fresha")}
              disabled={ordered || isOrderDisabled}
              className="btn-secondary"
              style={{
                width: "100%",
                fontSize: "0.85rem",
                opacity: ordered || isOrderDisabled ? 0.65 : 1,
                cursor: ordered || isOrderDisabled ? "not-allowed" : "pointer",
              }}
            >
              View Available Spa Packages on Fresha
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
