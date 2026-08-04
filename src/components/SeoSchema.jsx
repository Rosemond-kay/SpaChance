import React, { useEffect } from "react";
import { BRAND, FAQS, SERVICES_CATALOG } from "../data/spachanceData";

export default function SeoSchema() {
  useEffect(() => {
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: BRAND.name,
      image: "https://spachance.com/assets/spachance_logo.png",
      url: "https://spachance.com",
      telephone: BRAND.whatsappPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          BRAND.address?.streetAddress || "East Legon / North Legon Area",
        addressLocality: BRAND.address?.addressLocality || "Accra",
        addressCountry: BRAND.address?.addressCountry || "GH",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 5.6356,
        longitude: -0.1603,
      },
      priceRange: "GH₵ 150 - GH₵ 1250",
      founder: {
        "@type": "Person",
        name: BRAND.founder.name,
        jobTitle: BRAND.founder.title,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "13:00",
          closes: "19:00",
        },
      ],
      sameAs: [BRAND.socials.instagram, BRAND.socials.tiktok],
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    };

    const serviceSchemas = SERVICES_CATALOG.flatMap((category) =>
      category.items.map((item) => ({
        "@context": "https://schema.org",
        "@type": "Service",
        name: item.title,
        serviceType: category.category,
        description: item.description,
        areaServed: "Accra, Ghana",
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^0-9.,-]/g, ""),
          priceCurrency: "GHS",
          url: "https://spachance.com",
        },
      })),
    );

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(localBusinessSchema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    const serviceScripts = serviceSchemas.map((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      serviceScripts.forEach((script) => {
        if (document.head.contains(script)) document.head.removeChild(script);
      });
    };
  }, []);

  return null;
}
