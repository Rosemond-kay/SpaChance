import React, { useState } from "react";
import { Sparkles, Calendar, Menu, X, Phone } from "lucide-react";
import { BRAND } from "../data/spachanceData";

export default function Navbar({
  activePage,
  setActivePage,
  onOpenBookModal,
  onOpenGiftModal,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services & Packages" },
    { id: "blog", label: "Blog & Insights" },
    { id: "book", label: "Book & Hours" },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "100px",
          zIndex: 1000,
          backgroundColor: "#ede0c8",
          borderBottom: "1px solid rgba(140, 128, 112, 0.25)",
          boxShadow: "0 4px 20px rgba(46, 41, 37, 0.08)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/* Logo taking up 100% full height of the Navbar */}
          <button
            onClick={() => handleNavClick("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "0",
            }}
            aria-label="SpaChance Home"
          >
            <img
              src="/assets/spachance_logo.png"
              alt="SpaChance Skin & Beauty"
              style={{
                height: "100%",
                maxHeight: "100px",
                width: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2.2rem" }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${activePage === item.id ? "active" : ""}`}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  fontWeight: activePage === item.id ? 600 : 500,
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header CTAs */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
            className="desktop-nav"
          >
            <button
              onClick={onOpenGiftModal}
              className="btn-secondary"
              style={{ padding: "0.65rem 1.2rem", fontSize: "0.88rem" }}
            >
              <Sparkles size={15} />
              Gift Cards
            </button>

            <a
              href={BRAND.freshaBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "0.65rem 1.4rem", fontSize: "0.88rem" }}
            >
              <Calendar size={15} />
              Book
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
              padding: "0.4rem",
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            backgroundColor: "#ede0c8",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.8rem",
            padding: "2rem",
          }}
        >
          <img
            src="/assets/spachance_logo.png"
            alt="SpaChance"
            style={{
              height: "110px",
              width: "auto",
              marginBottom: "1rem",
              objectFit: "contain",
            }}
          />

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.4rem",
                fontFamily: "var(--font-serif)",
                color:
                  activePage === item.id
                    ? "var(--accent-dark)"
                    : "var(--text-primary)",
                fontWeight: activePage === item.id ? 600 : 500,
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              width: "80%",
              maxWidth: "280px",
              marginTop: "1rem",
            }}
          >
            <a
              href={BRAND.freshaBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: "100%", textAlign: "center" }}
            >
              <Calendar size={16} />
              Book
            </a>

            <button
              onClick={onOpenGiftModal}
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              <Sparkles size={16} />
              Purchase Gift Card
            </button>

            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                fontSize: "0.88rem",
                color: "var(--accent-dark)",
                marginTop: "0.4rem",
              }}
            >
              <Phone size={15} />
              WhatsApp: {BRAND.whatsappPhone}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
