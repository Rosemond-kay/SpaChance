import React from "react";
import { MapPin, Clock } from "lucide-react";
import { BRAND } from "../data/spachanceData";
import { InstagramLogo, TikTokLogo, GoogleLogo } from "./SocialLogos";

export default function Footer({ setActivePage, onOpenGiftModal }) {
  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-dark-bg)",
        padding: "4.5rem 0 2.5rem 0",
        borderTop: "1px solid rgba(140, 128, 112, 0.2)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand Info & Updated Logo Mark */}
          <div>
            <div
              style={{
                backgroundColor: "#ede0c8",
                padding: "0.75rem 1.2rem",
                borderRadius: "6px",
                display: "inline-block",
                marginBottom: "1.2rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              }}
            >
              <img
                src="/assets/spachance_footer_logo.png"
                alt="SpaChance Skin & Beauty"
                style={{
                  height: "70px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <p
              style={{
                color: "#ab9f8f",
                fontSize: "0.88rem",
                lineHeight: "1.65",
                marginBottom: "1.5rem",
              }}
            >
              Premium skin & wellness studio in East Legon, Accra. Certified
              skin specialist care, custom barrier repair facials, and
              therapeutic massage for radiant skin and deep relaxation.
            </p>

            {/* Social Links with Attached WhatsApp Logo Image */}
            <div
              style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}
            >
              {/* Instagram */}
              <a
                href={BRAND.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 300ms ease",
                }}
                className="social-btn"
                aria-label="Instagram"
              >
                <InstagramLogo size={32} />
              </a>

              {/* TikTok */}
              <a
                href={BRAND.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 300ms ease",
                }}
                className="social-btn"
                aria-label="TikTok"
              >
                <TikTokLogo size={32} />
              </a>

              {/* WhatsApp Official Attached Logo Image */}
              <a
                href={BRAND.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 300ms ease",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
                className="social-btn"
                aria-label="WhatsApp"
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
              </a>

              {/* Google Business Profile */}
              <a
                href={BRAND.socials.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  borderRadius: "50%",
                  padding: "5px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  transition: "transform 300ms ease",
                }}
                className="social-btn"
                aria-label="Google Business Profile"
              >
                <GoogleLogo size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                color: "#ede0c8",
                fontSize: "1.05rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              Explore
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem",
              }}
            >
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  About Anita & Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("services")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Services & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("blog")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Blog & Insights
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenGiftModal}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Spa Gift Cards
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("privacy")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("terms")}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ab9f8f",
                    cursor: "pointer",
                    fontSize: "0.88rem",
                  }}
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div>
            <h4
              style={{
                color: "#ede0c8",
                fontSize: "1.05rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              Studio Location
            </h4>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                marginBottom: "1.1rem",
                color: "#ab9f8f",
                fontSize: "0.88rem",
              }}
            >
              <MapPin size={17} style={{ color: "#ede0c8", shrink: 0 }} />
              <div>
                <strong style={{ color: "#ede0c8", display: "block" }}>
                  SpaChance Studio
                </strong>
                East Legon / North Legon Area, Accra, Ghana
                <br />
                <span style={{ display: "block", marginTop: "0.25rem" }}>
                  Phone: {BRAND.whatsappPhone}
                </span>
                <span style={{ display: "block" }}>
                  Email: {BRAND.contactEmail}
                </span>
                <a
                  href={BRAND.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "0.2rem",
                    color: "#ede0c8",
                    textDecoration: "underline",
                    fontSize: "0.8rem",
                  }}
                >
                  Google Maps Location
                </a>
              </div>
            </div>

            {/* Official WhatsApp Line */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                color: "#ab9f8f",
                fontSize: "0.88rem",
                alignItems: "center",
              }}
            >
              <img
                src="/assets/whatsapp_official_icon.png"
                alt="WhatsApp"
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ede0c8", fontWeight: 600 }}
                >
                  {BRAND.whatsappPhone}
                </a>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.78rem",
                    color: "#ab9f8f",
                  }}
                >
                  WhatsApp Concierge & Bookings
                </span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4
              style={{
                color: "#ede0c8",
                fontSize: "1.05rem",
                marginBottom: "1rem",
                fontFamily: "var(--font-serif)",
              }}
            >
              Operating Hours
            </h4>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                color: "#ab9f8f",
                fontSize: "0.88rem",
              }}
            >
              <Clock size={17} style={{ color: "#ede0c8", shrink: 0 }} />
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                }}
              >
                {BRAND.hours.map((h, i) => (
                  <li key={i}>
                    <span style={{ color: "#ede0c8", fontWeight: 500 }}>
                      {h.days}:
                    </span>{" "}
                    {h.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(140, 128, 112, 0.15)",
            paddingTop: "1.8rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            fontSize: "0.8rem",
            color: "#8c8070",
          }}
        >
          <div>
            © {new Date().getFullYear()} SpaChance. All Rights Reserved. Founded
            by Anita Sekyere.
          </div>
          <div>
            <span>Healthy Skin. Deep Relaxation. Lasting Confidence.</span>
          </div>
        </div>
      </div>

      <style>{`
        .social-btn:hover {
          transform: translateY(-3px) scale(1.08);
        }
      `}</style>
    </footer>
  );
}
