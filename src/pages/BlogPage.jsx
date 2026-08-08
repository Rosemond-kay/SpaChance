import React, { useState } from "react";
import { Clock, X, Share2, ArrowRight, Calendar, Search } from "lucide-react";
import {
  BRAND,
  BLOG_POSTS,
  buildWhatsAppBookingUrl,
} from "../data/spachanceData";

export default function BlogPage({
  activeBlogSlug,
  setActivePage,
  onOpenBookModal,
}) {
  const [selectedPost, setSelectedPost] = useState(
    activeBlogSlug
      ? BLOG_POSTS.find((p) => p.slug === activeBlogSlug) || null
      : null,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Skincare", "Massage & Wellness"];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category.includes(activeCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tldr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Expert guidance by Anita Sekyere on skin barrier care,
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
                        setSelectedPost(post);
                        if (setActivePage) {
                          setActivePage("blog", { blogSlug: post.slug });
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

      {/* Reader Modal */}
      {selectedPost && (
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
              maxWidth: "700px",
              maxHeight: "88vh",
              backgroundColor: "#f5eae0",
              padding: "2rem",
              position: "relative",
              borderRadius: "8px",
              overflowY: "auto",
            }}
          >
            <button
              onClick={() => {
                setSelectedPost(null);
                if (setActivePage) {
                  setActivePage("blog");
                }
              }}
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

            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                textTransform: "uppercase",
                color: "var(--accent-dark)",
              }}
            >
              {selectedPost.category} • {selectedPost.readTime}
            </span>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2rem",
                marginTop: "0.3rem",
                marginBottom: "0.8rem",
                lineHeight: "1.2",
              }}
            >
              {selectedPost.title}
            </h1>

            <div
              style={{
                backgroundColor: "var(--bg-card)",
                padding: "1rem",
                borderRadius: "4px",
                borderLeft: "4px solid var(--accent-dark)",
                marginBottom: "1.5rem",
                fontSize: "0.88rem",
              }}
            >
              <strong>Summary (TL;DR):</strong> {selectedPost.tldr}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                marginBottom: "2rem",
              }}
            >
              {selectedPost.contentBlocks.map((block, i) => (
                <div key={i}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.35rem",
                      marginBottom: "0.4rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {block.heading}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--text-muted)",
                      lineHeight: "1.65",
                    }}
                  >
                    {block.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-subtle)",
                paddingTop: "1.2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a
                href={buildWhatsAppBookingUrl("a SpaChance facial treatment")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ fontSize: "0.88rem" }}
              >
                <Calendar size={15} /> Book Facial via WhatsApp
              </a>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert("Link copied to clipboard!");
                }}
                className="btn-secondary"
                style={{ padding: "0.45rem 0.9rem", fontSize: "0.82rem" }}
              >
                <Share2 size={14} /> Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
