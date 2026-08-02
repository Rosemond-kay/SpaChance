import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import GiftCardModal from './components/GiftCardModal';
import FreshaModal from './components/FreshaModal';
import SeoSchema from './components/SeoSchema';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BookPage from './pages/BookPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);
  const [isFreshaModalOpen, setIsFreshaModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleBookService = (service) => {
    setSelectedService(service);
    setIsFreshaModalOpen(true);
  };

  return (
    <div className="app-root" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)' }}>
      {/* Inject SEO JSON-LD Schemas */}
      <SeoSchema />

      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenBookModal={() => {
          setSelectedService(null);
          setIsFreshaModalOpen(true);
        }}
        onOpenGiftModal={() => setIsGiftModalOpen(true)}
      />

      {/* Main Active Page View */}
      <main style={{ flexGrow: 1 }}>
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onBookService={handleBookService}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenBookModal={() => setIsFreshaModalOpen(true)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onBookService={handleBookService}
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}

        {activePage === 'blog' && (
          <BlogPage
            onOpenBookModal={() => setIsFreshaModalOpen(true)}
          />
        )}

        {activePage === 'book' && (
          <BookPage
            onOpenGiftModal={() => setIsGiftModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenGiftModal={() => setIsGiftModalOpen(true)}
      />

      {/* Interactive WhatsApp Assistant Widget */}
      <WhatsAppWidget />

      {/* Interactive Gift Card Modal */}
      <GiftCardModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />

      {/* Interactive Fresha Booking Modal */}
      <FreshaModal
        isOpen={isFreshaModalOpen}
        onClose={() => setIsFreshaModalOpen(false)}
        selectedService={selectedService}
      />
    </div>
  );
}
