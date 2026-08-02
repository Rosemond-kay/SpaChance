import React from 'react';
import { X, Calendar, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND, SERVICES_CATALOG } from '../data/spachanceData';

export default function FreshaModal({ isOpen, onClose, selectedService }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1200,
        backgroundColor: 'rgba(35, 31, 28, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
    >
      <div
        className="spa-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#f6eedf',
          padding: '2.2rem',
          position: 'relative',
          borderRadius: '8px',
          boxShadow: '0 25px 65px rgba(0,0,0,0.25)'
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
        >
          <X size={24} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-focused)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
              color: 'var(--accent-dark)'
            }}
          >
            <Calendar size={26} />
          </div>
          <span className="tag-subtitle">Official Booking Portal</span>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem' }}>
            Book Your SpaChance Experience
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
            Select your preferred date & time via our seamless Fresha partner booking system.
          </p>
        </div>

        {selectedService && (
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-focused)',
              padding: '1rem',
              borderRadius: '6px',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--accent-dark)', fontWeight: 600, letterSpacing: '0.05em' }}>Selected Service</span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem' }}>{selectedService.title}</h4>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{selectedService.duration}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {selectedService.price}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '1.5rem' }}>
          <a
            href={BRAND.freshaBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: '100%', padding: '1.1rem', fontSize: '1rem', justifyContent: 'center' }}
          >
            <ExternalLink size={18} />
            Continue to Fresha Live Calendar
          </a>

          <a
            href={`${BRAND.whatsappUrl}?text=${encodeURIComponent(`Hi SpaChance! I'd like to book ${selectedService ? selectedService.title : 'an appointment'} directly with Anita.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
          >
            <Sparkles size={16} />
            Or Book via WhatsApp Assistant
          </a>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-light)', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
          <ShieldCheck size={16} style={{ color: 'var(--accent-dark)' }} />
          <span>Instant Confirmation • No Pre-payment Required for Most Services</span>
        </div>
      </div>
    </div>
  );
}
