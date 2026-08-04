import React from "react";

export default function TermsPage() {
  return (
    <div
      className="terms-page"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <section className="section-padding" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <span className="tag-subtitle">Terms of Service</span>
            <h1>Booking, cancellation, and service terms.</h1>
            <p>
              Please review these terms before scheduling a treatment or
              purchasing a gift card.
            </p>
          </div>
          <div
            className="spa-card"
            style={{ padding: "1.8rem", lineHeight: 1.7 }}
          >
            <p style={{ marginBottom: "1rem" }}>
              <strong>Appointments:</strong> All bookings are subject to
              availability. Please arrive 10–15 minutes early for your first
              visit so we can prepare your treatment space and intake details.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Cancellation:</strong> We recommend giving at least 24
              hours’ notice for cancellations or rescheduling. Late
              cancellations may be subject to a fee at the studio’s discretion.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Services:</strong> Treatments are tailored to your skin
              and wellness needs, and results may vary based on skin type,
              aftercare, and consistency of follow-up visits.
            </p>
            <p>
              <strong>Gift cards:</strong> Gift cards are non-refundable unless
              required by law and may be redeemed for eligible services and
              packages at SpaChance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
