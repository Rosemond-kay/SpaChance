import React from "react";

export default function PrivacyPage() {
  return (
    <div
      className="privacy-page"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <section className="section-padding" style={{ paddingTop: "120px" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div className="section-header" style={{ marginBottom: "2rem" }}>
            <span className="tag-subtitle">Privacy Policy</span>
            <h1>How SpaChance handles your information.</h1>
            <p>
              This notice explains what data we collect, how we use it, and your
              choices when visiting the site or booking a treatment.
            </p>
          </div>
          <div
            className="spa-card"
            style={{ padding: "1.8rem", lineHeight: 1.7 }}
          >
            <p style={{ marginBottom: "1rem" }}>
              <strong>Information we collect:</strong> When you visit our
              website, we may collect basic technical data such as browser type,
              IP address, and pages viewed. When you book through WhatsApp or
              contact us by WhatsApp or email, we may collect your name, phone
              number, preferred treatment, and booking details.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>How we use it:</strong> We use your information to respond
              to inquiries, manage appointments, provide customer support, and
              improve the experience on our website. Booking data may be stored
              securely as part of our WhatsApp appointment coordination.
            </p>
            <p style={{ marginBottom: "1rem" }}>
              <strong>Cookies:</strong> We may use cookies to improve site
              performance and understand basic usage patterns. You can disable
              cookies in your browser settings if you prefer.
            </p>
            <p>
              <strong>Your control:</strong> You may contact us to request
              access, correction, or deletion of your personal information where
              applicable. We recommend keeping your booking details up to date
              before appointments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
