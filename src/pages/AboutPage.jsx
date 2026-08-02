import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/spachanceData';

export default function AboutPage({ onOpenBookModal }) {
  return (
    <div className="about-page">
      {/* 1. Full Viewport Authentic Studio Hero */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-dark-bg)',
          textAlign: 'center',
          overflow: 'hidden',
          paddingTop: '80px'
        }}
      >
        <div style={{ position: 'absolute', inset: 0, opacity: 0.88, zIndex: 1 }}>
          <img
            src="/assets/hero_about_real.jpg"
            alt="SpaChance Studio Skincare Display"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Reduced Dark Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, rgba(25, 22, 19, 0.55) 0%, rgba(25, 22, 19, 0.3) 60%, rgba(237, 224, 200, 0.85) 100%)'
            }}
          />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <span
              className="tag-subtitle"
              style={{ color: '#ede0c8', letterSpacing: '0.18em', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
            >
              Our Story & Studio
            </span>
            <h1
              style={{
                color: '#ffffff',
                marginBottom: '1rem',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
                textShadow: '0 2px 14px rgba(0,0,0,0.6)'
              }}
            >
              Science-Backed Skincare. Serene Atmosphere.
            </h1>
            <p
              style={{
                maxWidth: '580px',
                margin: '0 auto 2rem auto',
                color: '#f5eae0',
                fontSize: '1.12rem',
                lineHeight: '1.65',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)'
              }}
            >
              Meet Anita Sekyere, certified skin specialist and founder of SpaChance, Accra's premier sanctuary for skin barrier health and body wellness.
            </p>

            <a
              href={BRAND.freshaBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ backgroundColor: '#ede0c8', color: '#2e2925', borderColor: '#ede0c8', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            >
              <Calendar size={17} />
              Book Your Visit
            </a>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <div className="img-editorial" style={{ height: '440px', borderRadius: '6px' }}>
              <img src="/assets/hero_about_real.jpg" alt="Anita Sekyere's SpaChance Skincare Studio" />
            </div>

            <div>
              <span className="tag-subtitle">Founder Story</span>
              <h2 style={{ marginBottom: '1rem' }}>
                Anita Sekyere — Certified Skin Specialist
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                {BRAND.founder.bio}
              </p>

              <div style={{ backgroundColor: 'var(--bg-card)', padding: '1.2rem', borderRadius: '6px', border: '1px solid var(--border-subtle)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <Award size={20} style={{ color: 'var(--accent-dark)' }} />
                  <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem' }}>Certified Specialist Credentials</strong>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Certified in advanced dermo-cosmetics, chemical resurfacing safety, and holistic therapeutic massage for West African skin profiles.
                </p>
              </div>

              <a
                href={BRAND.freshaBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Calendar size={16} />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars */}
      <section className="section-padding" style={{ backgroundColor: '#e5d7be' }}>
        <div className="container">
          <div className="section-header center">
            <span className="tag-subtitle">Our Principles</span>
            <h2>The SpaChance Standard</h2>
            <p>Quiet luxury, skin barrier priority, and unhurried care in East Legon.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.8rem'
            }}
          >
            <div className="spa-card" style={{ padding: '1.8rem' }}>
              <ShieldCheck size={26} style={{ color: 'var(--accent-dark)', marginBottom: '0.8rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Barrier Preservation
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                We protect your natural moisture shield with lipid hydration seals and non-stripping exfoliants.
              </p>
            </div>

            <div className="spa-card" style={{ padding: '1.8rem' }}>
              <Sparkles size={26} style={{ color: 'var(--accent-dark)', marginBottom: '0.8rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Quiet Luxury Space
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                A calm, unhurried treatment environment designed to lower stress and quiet the mind.
              </p>
            </div>

            <div className="spa-card" style={{ padding: '1.8rem' }}>
              <Heart size={26} style={{ color: 'var(--accent-dark)', marginBottom: '0.8rem' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                Tailored Treatment Plans
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Customized facial and bodywork protocols matching your specific skin goals and body needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
