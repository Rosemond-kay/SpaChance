import React, { useState } from "react";
import { Clock, Share2, ArrowRight, Calendar, Search, ArrowLeft, CheckCircle2, User, Sparkles } from "lucide-react";
import {
  BRAND,
  BLOG_POSTS,
  buildWhatsAppBookingUrl,
  buildWhatsAppConsultationUrl,
} from "../data/spachanceData";

export default function BlogPage({
  activeBlogSlug,
  setActivePage,
  onOpenBookModal,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedLink, setCopiedLink] = useState(false);

  const categories = ["All", "Skincare", "Massage & Wellness"];

  // Find article if slug is active in URL
  const activePost = activeBlogSlug
    ? BLOG_POSTS.find((p) => p.slug === activeBlogSlug) || null
    : null;

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category.includes(activeCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tldr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleShareClick = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  // If a blog slug is present in the URL, render the Standalone Blog Article Page
  if (activePost) {
    const nextPosts = BLOG_POSTS.filter((p) => p.id !== activePost.id).slice(0, 2);

    return (
      <div className="blog-article-page" style={{ paddingTop: "110px", minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
        {/* Top Sticky Breadcrumb Bar */}
        <div
          style={{
            backgroundColor: "#ede0c8",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "0.85rem 0",
            position: "sticky",
            top: "100px",
            zIndex: 90
          }}
        >
          <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button
              onClick={() => setActivePage("blog")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 600,
                fontSize: "0.9rem",
                color: "var(--text-primary)"
              }}
            >
              <ArrowLeft size={18} />
              <span>Back to All Articles</span>
            </button>

            <button
              onClick={handleShareClick}
              className="btn-secondary"
              style={{ padding: "0.4rem 0.9rem", fontSize: "0.82rem" }}
            >
              <Share2 size={14} />
              <span>{copiedLink ? "Link Copied!" : "Share Article"}</span>
            </button>
          </div>
        </div>

        {/* Article Main Content Container */}
        <article className="section-padding" style={{ paddingBottom: "3rem" }}>
          <div className="container" style={{ maxWidth: "840px" }}>
            {/* Article Meta Header */}
            <div style={{ marginBottom: "1.8rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.82rem", color: "var(--accent-dark)", marginBottom: "0.8rem" }}>
                <span className="featured-badge" style={{ textTransform: "uppercase" }}>
                  {activePost.category}
                </span>
                <span>•</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <Clock size={13} /> {activePost.readTime}
                </span>
                <span>•</span>
                <span>{activePost.date}</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4.2vw, 3.2rem)",
                  color: "var(--text-primary)",
                  lineHeight: "1.2",
                  marginBottom: "1rem"
                }}
              >
                {activePost.title}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "var(--accent-dark)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <User size={18} />
                </div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block" }}>{activePost.author}</strong>
                  <span style={{ fontSize: "0.78rem" }}>Certified Skin Specialist & Beauty Consultant</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div
              className="spa-card"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "clamp(260px, 45vw, 420px)",
                marginBottom: "2rem"
              }}
            >
              <img
                src={activePost.image}
                alt={activePost.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* TL;DR Summary Box */}
            <div
              style={{
                backgroundColor: "#f5ead6",
                borderLeft: "5px solid var(--accent-dark)",
                padding: "1.2rem 1.5rem",
                borderRadius: "6px",
                marginBottom: "2.5rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)"
              }}
            >
              <span style={{ fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-dark)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em" }}>
                Key Takeaway (TL;DR):
              </span>
              <p style={{ fontSize: "1.02rem", color: "#2e2925", lineHeight: "1.6", margin: 0, fontWeight: 500 }}>
                {activePost.tldr}
              </p>
            </div>

            {/* Article Content Blocks */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
              {activePost.contentBlocks.map((block, idx) => (
                <section key={idx} className="article-block">
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.7rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.75rem",
                      lineHeight: "1.3"
                    }}
                  >
                    {block.heading}
                  </h2>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#4a423a",
                      lineHeight: "1.75",
                      margin: 0
                    }}
                  >
                    {block.text}
                  </p>
                </section>
              ))}
            </div>

            {/* Recommended Consultation CTA Banner */}
            <div
              className="spa-card"
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid var(--accent-dark)",
                borderRadius: "12px",
                padding: "2rem",
                textAlign: "center",
                marginBottom: "3.5rem"
              }}
            >
              <Sparkles size={26} style={{ color: "var(--accent-dark)", marginBottom: "0.6rem" }} />
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", marginBottom: "0.6rem" }}>
                Ready to Experience Barrier-First Skincare in Accra?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "1.4rem", maxWidth: "600px", margin: "0 auto 1.4rem auto" }}>
                Schedule a skin consultation with the expert SpaChance team in Ogbojo-Madina to analyze your skin barrier and receive a personalized treatment plan.
              </p>
              <a
                href={buildWhatsAppConsultationUrl(activePost.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", padding: "0.85rem 1.6rem" }}
              >
                <Calendar size={16} /> Book Consultation
              </a>
            </div>

            {/* Read Next Section */}
            {nextPosts.length > 0 && (
              <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "2.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1.5rem" }}>
                  More Articles from SpaChance
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                  {nextPosts.map((p) => (
                    <div key={p.id} className="spa-card" style={{ padding: "1.2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent-dark)", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                          {p.category}
                        </span>
                        <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", marginBottom: "0.5rem", lineHeight: "1.3" }}>
                          {p.title}
                        </h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
                          {p.tldr.slice(0, 100)}...
                        </p>
                      </div>
                      <button
                        onClick={() => setActivePage("blog", { slug: p.slug })}
                        className="btn-secondary"
                        style={{ padding: "0.45rem 0.85rem", fontSize: "0.8rem", width: "100%", justifyContent: "center" }}
                      >
                        Read Article <ArrowRight size={13} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    );
  }

  // Otherwise render the Blog Listing Page
  return (
    <div className="blog-page">
      {/* 1. Full Viewport Authentic Studio Hero */}
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
            src="/assets/hero_blog_real.jpg"
            alt="SpaChance Client Wellness Experience"
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
              Skincare Insights
            </span>
            <h1
              style={{
                color: "#ffffff",
                marginBottom: "1rem",
                fontSize: "clamp(2.5rem, 5.2vw, 4.4rem)",
                textShadow: "0 2px 14px rgba(0,0,0,0.6)",
              }}
            >
              Skin Health & Wellness Journal
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
              Expert guidance on skin barrier care,
              hyperpigmentation, and body massage in Accra.
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
              Book
            </a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        className="section-padding"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1.2rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.45rem 1.1rem",
                    borderRadius: "20px",
                    border:
                      activeCategory === cat
                        ? "2px solid var(--text-primary)"
                        : "1px solid var(--border-subtle)",
                    backgroundColor:
                      activeCategory === cat
                        ? "var(--text-primary)"
                        : "transparent",
                    color:
                      activeCategory === cat
                        ? "var(--bg-primary)"
                        : "var(--text-primary)",
                    fontSize: "0.84rem",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ position: "relative", minWidth: "240px" }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-spa"
                style={{ paddingLeft: "2.4rem", fontSize: "0.85rem" }}
              />
              <Search
                size={15}
                style={{
                  position: "absolute",
                  left: "0.8rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--text-light)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.8rem",
            }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="spa-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <div className="img-editorial" style={{ height: "200px" }}>
                  <img src={post.image} alt={post.title} />
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.78rem",
                      color: "var(--accent-dark)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{ fontWeight: 600, textTransform: "uppercase" }}
                    >
                      {post.category}
                    </span>
                    <span>•</span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.2rem",
                      }}
                    >
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      marginBottom: "0.6rem",
                      lineHeight: "1.25",
                    }}
                  >
                    {post.title}
                  </h2>

                  <div
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.4)",
                      padding: "0.75rem",
                      borderRadius: "4px",
                      borderLeft: "3px solid var(--accent-primary)",
                      marginBottom: "1rem",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <strong>TL;DR:</strong> {post.tldr}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "0.8rem",
                      borderTop: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--text-light)",
                      }}
                    >
                      By {post.author}
                    </span>
                    <button
                      onClick={() => {
                        if (setActivePage) {
                          setActivePage("blog", { slug: post.slug });
                        }
                      }}
                      className="btn-secondary"
                      style={{ padding: "0.45rem 0.9rem", fontSize: "0.8rem" }}
                    >
                      Read Article <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
