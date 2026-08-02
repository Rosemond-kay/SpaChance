import React, { useEffect } from 'react';
import { BRAND, FAQS, SPA_PACKAGES } from '../data/spachanceData';

export default function SeoSchema() {
  useEffect(() => {
    // 1. LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "name": BRAND.name,
      "image": "https://spachance.com/assets/hero_1.jpg",
      "url": "https://spachance.com",
      "telephone": BRAND.whatsappPhone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "East Legon / North Legon Area",
        "addressLocality": "Accra",
        "addressCountry": "GH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 5.6356,
        "longitude": -0.1603
      },
      "priceRange": "GH₵ 150 - GH₵ 1250",
      "founder": {
        "@type": "Person",
        "name": BRAND.founder.name,
        "jobTitle": BRAND.founder.title
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "13:00",
          "closes": "19:00"
        }
      ]
    };

    // 2. FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    // Inject Script Tags
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
    };
  }, []);

  return null;
}
