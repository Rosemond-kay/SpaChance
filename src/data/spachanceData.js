// SpaChance Master Data Repository (Real Studio Assets & Concise Copy)

export const BRAND = {
  name: "SpaChance",
  tagline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
  alternateTaglines: [
    "Expert skincare, therapeutic massage, and beauty treatments in Ogbojo/Madina, Accra.",
    "Personalized skin and body wellness for deep relaxation and visible radiance.",
  ],
  founder: {
    name: "Anita Sekyere",
    title: "Certified Skin Specialist & Beauty Consultant",
    bio: "Founded by certified skin specialist Anita Sekyere, SpaChance provides personalized skin barrier repair, targeted hyperpigmentation treatment, and therapeutic massage in a peaceful Ogbojo-Madina sanctuary.",
    image: "/assets/Anita-Sekyere-SpaChance-Founder.jpeg",
    fallbackImage: "/assets/founder.jpg",
  },
  positioning:
    "SpaChance is a premium skin and wellness studio in Ogbojo/Madina, Accra, Ghana, specializing in personalized facials, therapeutic massage, skincare, and beauty treatments. Founded by Anita Sekyere, a certified skin specialist and beauty consultant.",
  location: "Ogbojo/Madina Area, Accra, Ghana",
  address: {
    streetAddress: "Passion Hill Street, Ogbojo / Madina Area",
    addressLocality: "Accra",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  contactEmail: "spachance@gmail.com",
  googleMapsUrl: "https://share.google/CIUT5xThq2CxXTpTh",
  whatsappUrl: "https://wa.me/233545196008",
  whatsappPhone: "+233 54 519 6008",
  socials: {
    instagram: "https://www.instagram.com/thespachance",
    tiktok: "https://www.tiktok.com/@thespachance",
    googleBusiness: "https://share.google/CIUT5xThq2CxXTpTh",
    whatsapp: "https://wa.me/233545196008",
  },
  hours: [
    { days: "Tuesday – Saturday", time: "10:00 AM – 6:00 PM" },
    { days: "Sunday", time: "1:00 PM – 7:00 PM" },
    { days: "Monday", time: "Closed for Staff Rest" },
  ],
};

export const buildWhatsAppConsultationUrl = (
  serviceName = "a SpaChance treatment",
) => {
  const message = `Hi SpaChance! I need a consultation for ${serviceName}. My preferred date is [insert date] and time is [insert time]. Please confirm availability.`;
  return `${BRAND.whatsappUrl}?text=${encodeURIComponent(message)}`;
};

export const buildWhatsAppBookingUrl = (
  serviceName = "a SpaChance treatment",
  price = "",
  isConsultation = false,
) => {
  const needsConsultation =
    isConsultation ||
    (price && price.toLowerCase().includes("expert recommendation"));

  if (needsConsultation) {
    return buildWhatsAppConsultationUrl(serviceName);
  }

  const priceText = price ? ` (${price})` : "";
  const message = `Hi SpaChance! I'd like to book ${serviceName}${priceText}. My preferred date is [insert date] and time is [insert time]. Please confirm availability.`;
  return `${BRAND.whatsappUrl}?text=${encodeURIComponent(message)}`;
};

export const HERO_SLIDES = [
  {
    image: "/assets/facial.avif",
    subheading: "Ogbojo-Madina • Accra",
    headline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
    ctaText: "Book",
  },
  {
    image: "/assets/Skincare.avif",
    subheading: "Therapeutic Sanctuary",
    headline: "Unhurried Facial & Bodywork Experiences",
    ctaText: "Explore Services",
  },
  {
    image: "/assets/Spa day.avif",
    subheading: "Skin Barrier Care",
    headline: "Expert Skincare Tailored to Your Unique Needs",
    ctaText: "View Facials",
  },
  {
    image: "/assets/hotstone-massage.avif",
    subheading: "Personalized Wellness",
    headline: "Restorative Massage Therapy for Body Reset",
    ctaText: "View Massages",
  },
  {
    image: "/assets/Welcoming Space.avif",
    subheading: "Sanctuary Atmosphere",
    headline: "Your SpaChance Awaits in Ogbojo-Madina",
    ctaText: "Book via WhatsApp",
  },
];

export const SPA_PACKAGES = [
  {
    id: "pkg-1",
    title: "The SpaChance Ultimate Escape",
    subtitle: "Full Body Reset & Radiance Ritual",
    duration: "180 Mins",
    price: "GH₵ 1,250",
    popular: true,
    badge: "Top Priority Package",
    description:
      "Our signature sanctuary experience combining deep barrier skincare with a 90-minute full body massage.",
    includes: [
      "Custom Classic Facial",
      "60-Min Hot Stone Massage",
      "Hydrating Jelly Foot Soak & Pedicure",
      "Complimentary Botanical Refreshments",
    ],
    image: "/assets/Welcoming Space.avif",
  },
  {
    id: "pkg-2",
    title: "Radiant Skin & Barrier Package",
    subtitle: "Facial & Deep Hydration",
    duration: "105 Mins",
    price: "GH₵ 850",
    popular: false,
    badge: "Founder's Choice",
    description:
      "Formulated by our expert founder to repair compromised skin barriers, clear acne congestion, and restore glow.",
    includes: [
      "Skin Consultation & Diagnostics",
      "Deep Cleanse & Gentle Exfoliation",
      "Lipid Barrier Seal",
    ],
    image: "/assets/facial.avif",
  },
  {
    id: "pkg-3",
    title: "Therapeutic Stress Relief Ritual",
    subtitle: "Bodywork & Tension Release",
    duration: "120 Mins",
    price: "GH₵ 920",
    popular: false,
    badge: "Most Requested",
    description:
      "Designed for busy professionals seeking immediate release from lower back tightness and shoulder knots.",
    includes: [
      "60-Min Swedish or Deep Tissue Massage",
      "Aromatherapy",
      "Nourishing Pedi & Mani Hydration",
    ],
    image: "/assets/Spa day.avif",
  },
];

export const SERVICES_CATALOG = [
  {
    category: "packages",
    title: "Curated Spa Packages",
    description:
      "Signature wellness rituals combining skincare, massage, and pampering in a calm Ogbojo-Madina setting.",
    image: "/assets/Spa package.jpg",
    items: [
      {
        id: "pkg-1",
        title: "Indulgent Self-Care",
        duration: "3h",
        price: "GHS 600.00",
        description:
          "This package includes a refreshing welcome drink, classic pedicure, and classic manicure with polish.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Indulgent Self-Care Package",
          "GHS 600.00",
        ),
      },
      {
        id: "pkg-2",
        title: "MELT AWAY TENSION",
        duration: "2h 30m",
        price: "GHS 800.00",
        description:
          "This package includes a refreshing welcome drink, classic pedicure, and a full body massage.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Melt Away Tension Package",
          "GHS 800.00",
        ),
      },
      {
        id: "pkg-3",
        title: "SPA DAY",
        duration: "3h 30m",
        price: "GHS 1,500.00",
        description:
          "This package includes a refreshing welcome drink, a customized facial treatment, a full body massage, and a pedi-mani combo.",
        whatsappUrl: buildWhatsAppBookingUrl("Spa Day Package", "GHS 1,500.00"),
      },
    ],
  },
  {
    category: "skin consultation",
    title: "Skin Consultation",
    description:
      "Professional assessments to evaluate your skin type, concerns, and recommended treatments and products.",
    image: "/assets/hero_about_real.jpg",
    items: [
      {
        id: "skin-consultation",
        title: "Skin Consultation",
        duration: "45m",
        price: "GHS 300.00",
        description:
          "A skin consultation is a professional assessment that evaluates your skin type, condition, and concerns to recommend appropriate treatments and products.",
        whatsappUrl: buildWhatsAppBookingUrl("Skin Consultation", "GHS 300.00"),
      },
    ],
  },
  {
    category: "facials",
    title: "Facials & Advanced Skin Treatments",
    description:
      "Targeted facials for acne, barrier repair, and visible glow from first treatment to long-term care.",
    image: "/assets/facial.avif",
    items: [
      {
        id: "facial-6",
        title: "Classic facial",
        duration: "2h",
        price: "GHS 500.00",
        description:
          "A classic facial is a fundamental skincare treatment that focuses on cleansing, exfoliating, and hydrating the skin.",
        whatsappUrl: buildWhatsAppBookingUrl("Classic facial", "GHS 500.00"),
      },
      {
        id: "facial-7",
        title: "Deep Cleanse Facial",
        duration: "2h",
        price: "GHS 600.00",
        description:
          "It is a specialized skincare treatment designed to target and alleviate acne-prone skin.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Deep Cleanse Facial",
          "GHS 600.00",
        ),
      },
      
      {
        id: "facial-2",
        title: "Facials Returning Clients - LED Therapy",
        duration: "2h",
        price: "GHS 400.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Facials Returning Clients - LED Therapy",
          "GHS 400.00",
        ),
      },
      {
        id: "facial-3",
        title: "Facials Returning Clients - Classic Facial",
        duration: "2h",
        price: "GHS 450.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Facials Returning Clients - Classic Facial",
          "GHS 450.00",
        ),
      },
      {
        id: "facial-4",
        title: "Facials Returning Clients - Barrier Repair Facial",
        duration: "2h",
        price: "GHS 550.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Facials Returning Clients - Barrier Repair Facial",
          "GHS 550.00",
        ),
      },
      {
        id: "facial-5",
        title:
          "Barrier Repair Facial (3 sessions with aftercare skincare products)",
        badge: "Consultation Required",
        duration: "6h 15m (3 sessions)",
        price: "Expert recommendation needed before booking",
        description:
          "A barrier repair facial is a restorative treatment aimed at repairing and fortifying the skin's natural barrier, providing relief from dryness, sensitivity, and irritation. Requires consultation and skin analysis before booking.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Barrier Repair Facial (3 sessions + aftercare products)",
          "Expert recommendation needed before booking",
        ),
      },
      {
        id: "facial-1",
        title: "Acne Treatment Facial (2 treatments & aftercare skincare products)",
        popular: true,
        badge: "Consultation Required",
        duration: "4 hr total (2 sessions + aftercare kit)",
        price: "Expert recommendation needed before booking",
        description:
          "Take control of your skin with our targeted acne treatment facial. Designed to combat breakouts, reduce redness, and prevent future blemishes. Includes 2 sessions of customized facial treatment and aftercare skincare products for personal use at home. Requires consultation and skin analysis before booking.",
        includes: [
          "2 Sessions of customized facial treatment",
          "Full aftercare skincare products for home use",
          "Deep cleansing to unclog pores",
          "Soothing ingredients to reduce inflammation & redness",
          "Tailored treatments to suit mild to severe acne",
          "Boosts skin confidence with regular care",
        ],
        whatsappUrl: buildWhatsAppBookingUrl(
          "Acne Treatment Facial (2 sessions + home products)",
          "Expert recommendation needed before booking",
        ),
      },
      
      
      {
        id: "microneedling-menu",
        title: "Microneedling Menu",
        isUmbrella: true,
        popular: true,
        badge: "Consultation Required",
        price: "Expert recommendation needed before booking",
        duration: "1 hr per session",
        notice: "These Treatments are only recommended after a Consultation and skin analysis.",
        description:
          "At SpaChance, microneedling is performed with precision and respect for the skin barrier. This treatment stimulates natural collagen production to improve acne scars, refine texture, and correct uneven pigmentation — without aggressive trauma. Our approach is tailored for melanated skin, reducing the risk of post-inflammatory hyperpigmentation while delivering visible results.",
        subServices: [
          {
            id: "mn-collagen-refresh",
            title: "Collagen Refresh (0.5mm)",
            duration: "1 hr",
            target: "For glow, mild texture, pore refinement",
            includes: ["Microneedling", "HA infusion", "LED"],
            paymentPolicy: "3 sessions — 70% upfront payment before treatment, 30% balance on 3rd session",
            whatsappUrl: buildWhatsAppBookingUrl(
              "Microneedling: Collagen Refresh (0.5mm)",
              "Expert recommendation needed before booking",
            ),
          },
          {
            id: "mn-scar-revision",
            title: "Scar Revision Therapy",
            duration: "1 hr",
            target: "For acne scars & deep texture",
            includes: [
              "Targeted deeper needling",
              "HA + Peptide infusion",
              "LED Therapy",
            ],
            paymentPolicy: "Package of 4 sessions: 70% upfront payment before treatment and 30% balance on 3rd session",
            whatsappUrl: buildWhatsAppBookingUrl(
              "Microneedling: Scar Revision Therapy",
              "Expert recommendation needed before booking",
            ),
          },
          {
            id: "mn-skin-remodeling",
            title: "Skin Remodeling Protocol",
            duration: "1 hr (14 weeks duration)",
            target: "Best for acne scars + pigmentation combination clients",
            includes: [
              "1 Prep Peel session",
              "3 Microneedling sessions",
              "1 Post-needling peel session",
            ],
            paymentPolicy: "70-30 payment policy applies (70% upfront before treatment, 30% balance on 3rd session)",
            whatsappUrl: buildWhatsAppBookingUrl(
              "Microneedling: Skin Remodeling Protocol",
              "Expert recommendation needed before booking",
            ),
          },
        ],
        whatsappUrl: buildWhatsAppBookingUrl(
          "Microneedling Menu Consultation",
          "Expert recommendation needed before booking",
        ),
      },
      {
        id: "skin-refinement-protocol",
        title: "The Skin Refinement Protocol",
        isUmbrella: true,
        popular: true,
        badge: "Consultation Required",
        price: "Expert recommendation needed before booking",
        duration: "45 min per session",
        notice: "These Treatments are only recommended after a Consultation and skin analysis.",
        description:
          "A gentle, yet effective skin correction journey created specifically for skin of color — targeting mild acne, pigmentation, and texture while protecting the skin barrier.",
        expectations: [
          "Reduced acne flare-ups",
          "Clearer pores & smoother texture",
          "Healthier, more balanced skin",
          "Pigmentation Correction",
          "Long-term Radiance",
        ],
        subServices: [
          {
            id: "srp-resurfacing-peel",
            title: "Resurfacing Peel",
            duration: "45 min (8 weeks duration)",
            programInvestment: "Includes 2 Phases with 3 peel sessions",
            phases: [
              "Phase 1: Skin Stabilization",
              "Phase 2: Correction & Refinement",
            ],
            timeline: "Duration: 8 weeks",
            paymentPolicy: "70-30 payment policy applies (70% upfront before treatment, 30% balance on 3rd session)",
            whatsappUrl: buildWhatsAppBookingUrl(
              "The Skin Refinement Protocol: Resurfacing Peel",
              "Expert recommendation needed before booking",
            ),
          },
          {
            id: "srp-advance-refinement-peel",
            title: "Advance Refinement Peel",
            duration: "45 min (12 weeks duration)",
            programInvestment: "Includes 3 Phases with 5 peel sessions",
            phases: [
              "Phase 1: Skin Stabilization",
              "Phase 2: Correction & Refinement",
              "Phase 3: Texture + Pigmentation Correction",
            ],
            timeline: "Duration: 12 weeks",
            paymentPolicy: "70-30 payment policy applies (70% upfront before treatment, 30% balance on 3rd session)",
            whatsappUrl: buildWhatsAppBookingUrl(
              "The Skin Refinement Protocol: Advance Refinement Peel",
              "Expert recommendation needed before booking",
            ),
          },
        ],
        whatsappUrl: buildWhatsAppBookingUrl(
          "The Skin Refinement Protocol Consultation",
          "Expert recommendation needed before booking",
        ),
      },
    ],
  },
  {
    category: "massage",
    title: "Massage Therapy",
    description:
      "Restorative massage experiences for tension release, deep muscle recovery, and full-body calm.",
    image: "/assets/hotstone-massage.jpeg",
    items: [
      {
        id: "msg-1",
        title: "Full body Swedish Massage",
        duration: "1h",
        price: "GHS 450.00",
        description:
          "A gentle form of massage that uses long strokes, kneading, and circular movements to relax and energize the body.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Full body Swedish Massage",
          "GHS 450.00",
        ),
      },
      {
        id: "msg-2",
        title: "Deep Tissue Massage",
        duration: "1h",
        price: "GHS 500.00",
        description:
          "Focuses on deeper layers of muscles and is used for chronic muscle tension, knots, or injuries.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Deep Tissue Massage",
          "GHS 500.00",
        ),
      },
      {
        id: "msg-3",
        title: "Hot Stone Massage",
        duration: "1 hr",
        price: "GHS 500",
        description:
          "A therapeutic massage using smooth heated stones to ease deep muscle tension, improve circulation, and promote total body relaxation.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Hot Stone Massage",
          "GHS 500",
        ),
      },
    ],
  },
  {
    category: "pedicure & manicure",
    title: "Pedicure & Manicure Services",
    description:
      "Hydrating foot soaks, gel polish, manicures, and finishing touches for beautifully soft, refreshed hands and feet.",
    image: "/assets/Pedi feet.avif",
    items: [
      {
        id: "pedicure-1",
        title: "French Gel Pedi",
        duration: "1 hr, 45 min",
        price: "GHS 350",
        description:
          "Elegant French gel pedicure with a hydrating soak and precise polish finish.",
        whatsappUrl: buildWhatsAppBookingUrl("French Gel Pedi", "GHS 350"),
      },
      {
        id: "pedicure-2",
        title: "Spa Pedi with Gel polish",
        duration: "1 hr, 45 min",
        price: "GHS 300",
        description:
          "Relaxing spa pedicure enhanced with long-lasting gel polish.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Spa Pedi with Gel polish",
          "GHS 300",
        ),
      },
      {
        id: "pedicure-3",
        title: "Men Spa Pedi",
        duration: "2 hr",
        price: "GHS 300",
        description:
          "A masculine foot treatment with comfort-focused care and soothing hydration.",
        whatsappUrl: buildWhatsAppBookingUrl("Men Spa Pedi", "GHS 300"),
      },
      {
        id: "pedicure-4",
        title: "Jelly Pedi",
        duration: "1 hr",
        price: "GHS 300",
        description: "Luxurious foot spa treatment with jelly soak and polish.",
        whatsappUrl: buildWhatsAppBookingUrl("Jelly Pedi", "GHS 300"),
      },
      {
        id: "pedicure-5",
        title: "Spa Pedicure",
        duration: "1 hr, 45 min",
        price: "GHS 200",
        description:
          "Indulge your feet in a pampering experience that rejuvenates and refreshes.",
        whatsappUrl: buildWhatsAppBookingUrl("Spa Pedicure", "GHS 200"),
      },
      {
        id: "pedicure-6",
        title: "Tidying & Gel polish",
        duration: "1 hr",
        price: "GHS 100",
        description:
          "Quick grooming treatment with clean edges and gel color finish.",
        whatsappUrl: buildWhatsAppBookingUrl("Tidying & Gel polish", "GHS 100"),
      },
      {
        id: "pedicure-7",
        title: "Mani & Gel Polish",
        duration: "1 hr",
        price: "GHS 200",
        description:
          "Hand and nail treatment with gel polish for a beautifully polished finish.",
        whatsappUrl: buildWhatsAppBookingUrl("Mani & Gel Polish", "GHS 200"),
      },
      {
        id: "pedicure-8",
        title: "Men Mani",
        duration: "1 hr",
        price: "GHS 150",
        description:
          "A tailored manicure for men with nail care and hand hydration.",
        whatsappUrl: buildWhatsAppBookingUrl("Men Mani", "GHS 150"),
      },
    ],
  },
  {
    category: "makeup",
    title: "Makeup Services",
    description:
      "Professional makeup application for polished, fresh, and long-wearing looks.",
    image: "/assets/hero_home_real.jpg",
    items: [
      {
        id: "makeup-1",
        title: "Day Makeup",
        duration: "1h 45m",
        price: "GHS 500.00",
        description:
          "Consultation, skincare prep, makeup application, and strip lash extension application.",
        whatsappUrl: buildWhatsAppBookingUrl("Day Makeup", "GHS 500.00"),
      },
    ],
  },
  {
    category: "brows & lash",
    title: "Brows & Lash Treatments",
    description:
      "Precision brow shaping, tinting, and microblading services for polished definition.",
    image: "/assets/lash.avif",
    items: [
      {
        id: "brow-1",
        title: "Brow waxing and Tint",
        duration: "45m",
        price: "GHS 180.00",
        description:
          "Brow waxing shapes and defines the eyebrows by removing unwanted hair. Brow tinting applies a semi-permanent dye.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Brow waxing and Tint",
          "GHS 180.00",
        ),
      },
      {
        id: "brow-2",
        title: "Brow Wax",
        duration: "30m",
        price: "GHS 80.00",
        description: "Brow grooming only.",
        whatsappUrl: buildWhatsAppBookingUrl("Brow Wax", "GHS 80.00"),
      },
      {
        id: "brow-3",
        title: "Microblading - Touch up",
        duration: "1h",
        price: "GHS 500.00",
        description:
          "Semi-permanent cosmetic tattooing technique used to enhance the appearance of the eyebrows.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Microblading - Touch up",
          "GHS 500.00",
        ),
      },
      {
        id: "brow-4",
        title: "Microblading - New Brows",
        duration: "2h",
        price: "GHS 800.00",
        description:
          "Semi-permanent cosmetic tattooing technique used to enhance the appearance of the eyebrows.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Microblading - New Brows",
          "GHS 800.00",
        ),
      },
      {
        id: "brow-lamination",
        title: "Brow Lamination",
        duration: "1 hr",
        price: "GHS 200",
        description:
          "A professional brow treatment that sets and aligns brow hairs for a fuller, slicked-up, and perfectly groomed appearance.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Brow Lamination",
          "GHS 200",
        ),
      },
    ],
  },
  {
    category: "waxing",
    title: "Waxing Services",
    description:
      "Precise waxing for brows, body, and intimate areas with comfort-focused care.",
    image: "/assets/swedish massage.avif",
    items: [
      {
        id: "brow-5",
        title: "The Intimate combo",
        duration: "1h 15m",
        price: "GHS 450.00",
        description:
          "This package includes underarm waxing and Hollywood waxing or bikini waxing services.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "The Intimate combo",
          "GHS 450.00",
        ),
      },
      {
        id: "brow-6",
        title: "Female Full body wax",
        duration: "1h 35m",
        price: "GHS 650.00",
        description: "This package includes leg waxing and arm waxing.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Female Full body wax",
          "GHS 650.00",
        ),
      },
      {
        id: "brow-7",
        title: "Hollywood wax",
        duration: "45m",
        price: "GHS 350.00",
        description:
          "Removes all hair from the pubic area, including front, back, and everything in between.",
        whatsappUrl: buildWhatsAppBookingUrl("Hollywood wax", "GHS 350.00"),
      },
      {
        id: "brow-8",
        title: "Arm waxing - Female",
        duration: "45m",
        price: "GHS 300.00",
        description: "Arm waxing service.",
        whatsappUrl: buildWhatsAppBookingUrl(
          "Arm waxing - Female",
          "GHS 300.00",
        ),
      },
      {
        id: "brow-9",
        title: "Leg waxing Female",
        duration: "50m",
        price: "GHS 350.00",
        description: "Leg waxing service.",
        whatsappUrl: buildWhatsAppBookingUrl("Leg waxing Female", "GHS 350.00"),
      },
      {
        id: "brow-10",
        title: "Chin & Neck",
        duration: "45m",
        price: "GHS 150.00",
        description: "Chin and neck waxing service.",
        whatsappUrl: buildWhatsAppBookingUrl("Chin & Neck wax", "GHS 150.00"),
      },
      {
        id: "brow-11",
        title: "Underarm wax",
        duration: "30m",
        price: "GHS 100.00",
        description: "Underarm waxing service.",
        whatsappUrl: buildWhatsAppBookingUrl("Underarm wax", "GHS 100.00"),
      },
    ],
  },
];

export const BLOG_POSTS = [
  {
    id: "post-1",
    slug: "skin-barrier-repair-accra",
    title: "Skin Barrier Repair in Melanin Skin: Essential Reset Guide",
    category: "Skincare",
    date: "August 2026",
    readTime: "3 min read",
    author: "Anita Sekyere",
    tldr: "Ghana's climate and harsh soaps often strip your skin barrier. Learn how ceramide-rich barrier care restores your skin's natural shield.",
    contentBlocks: [
      {
        heading: "What is the skin barrier and why is it vulnerable in Accra?",
        text: "The skin barrier is your outermost shield against moisture loss and inflammation. In Accra, intense sun, dust, and harsh scrubs degrade this protective lipid layer, causing tightness, breakouts, and hyperpigmentation.",
      },
      {
        heading: "How to tell if your skin barrier is damaged",
        text: "Signs include a stinging feel when applying basic moisturizer, excessive oiliness with dry patches, and persistent acne. At SpaChance, our team evaluates barrier health before recommending active treatments.",
      },
      {
        heading: "3 Steps to restore barrier health",
        text: "Pause harsh physical scrubs, use lipid-replenishing ceramides, and schedule a specialized Skin Barrier Maintenance session at SpaChance Ogbojo/Madina.",
      },
    ],
    image: "/assets/facial.avif",
  },
  {
    id: "post-2",
    slug: "deep-tissue-vs-swedish-massage-accra",
    title: "Deep Tissue vs. Swedish Massage: Which Is Right for You?",
    category: "Massage & Wellness",
    date: "July 2026",
    readTime: "3 min read",
    author: "SpaChance Wellness Team",
    tldr: "Choose Swedish massage for stress relief; select Deep Tissue massage to relieve stubborn muscular knots, posture strain, and joint stiffness.",
    contentBlocks: [
      {
        heading:
          "What is the difference between Deep Tissue and Swedish Massage?",
        text: "Swedish massage uses smooth strokes to lower stress and ease general tension. Deep Tissue applies firm pressure to release deep muscular knots and posture tightness built up from desk work or exercise.",
      },
      {
        heading: "How much does a massage cost in Ogbojo-Madina, Accra?",
        text: "Therapeutic massages in Accra range from GH₵ 450 to GH₵ 900. At SpaChance, all sessions take place in quiet luxury rooms with organic oils and hot stone accents.",
      },
    ],
    image: "/assets/swedish massage.avif",
  },
  {
    id: "post-3",
    slug: "hyperpigmentation-solutions-melanin-skin",
    title: "Treating Hyperpigmentation & Acne Marks for Dark Skin",
    category: "Skincare",
    date: "June 2026",
    readTime: "3 min read",
    author: "Anita Sekyere",
    tldr: "Melanin-rich skin requires non-aggressive brighteners like niacinamide and barrier support to clear dark spots without causing secondary marks.",
    contentBlocks: [
      {
        heading: "Why post-inflammatory hyperpigmentation happens",
        text: "When dark skin experiences breakouts or irritation, melanocytes overproduce pigment as a defense mechanism. Abrasive scrubs only darken marks further.",
      },
      {
        heading: "The SpaChance Hyperpigmentation Protocol",
        text: "We pair gentle tyrosinase inhibitors with anti-inflammatory niacinamide and enzyme exfoliation to safely fade dark spots while protecting your skin barrier.",
      },
    ],
    image: "/assets/Skincare.avif",
  },
];

export const FAQS = [
  {
    q: "Where is SpaChance located and what areas do you serve?",
    a: "SpaChance is located Ogbojo-Madina in Accra, Ghana. We serve clients across Ogbojo-Madina, North Legon, Airport Residential Area, Cantonments, Madina, and Dzorwulu.",
  },
  {
    q: "What spa treatments does SpaChance offer?",
    a: "SpaChance offers a range of professional spa and beauty treatments designed to help you relax, recharge, and care for your skin. Our services include customized facials, therapeutic massage, body treatments, pedicures, manicures, waxing, lash and brow services, and skin consultations. Every treatment is tailored to your individual needs for a truly personalized wellness experience.",
  },
  {
    q: "How much does a facial or massage cost at SpaChance?",
    a: "Facials start at GH₵ 400, and body massages start at GH₵ 450. Special discounted packages are available for returning clients.",
  },
  {
    q: "How do I book an appointment?",
    a: "Bookings are handled directly on WhatsApp at +233 54 519 6008. Click any booking button to open WhatsApp with your chosen service pre-filled, where you can share your preferred date and time.",
  },
  {
    q: "What are your operating hours?",
    a: "Tuesday – Saturday: 10:00 AM – 6:00 PM | Sunday: 1:00 PM – 7:00 PM | Monday: Closed.",
  },
  {
    q: "Can I buy a SpaChance Gift Card?",
    a: "Yes! We offer digital and physical SpaChance Gift Cards (GH₵ 500 to GH₵ 1,500) for any treatment or package.",
  },
  {
    q: "Which facial is best for acne and hyperpigmentation?",
    a: "The best facial depends on your skin condition. At SpaChance, we perform a professional skin analysis before recommending a treatment for acne, post-acne marks, hyperpigmentation, dehydration, or sensitive skin. Our customized facials are designed to improve skin health while protecting your skin barrier for lasting results.",
  },
  {
    q: "How often should I visit a spa for self-care?",
    a: "For general wellness, many clients enjoy a spa visit every 3 to 4 weeks to relieve stress and maintain healthy skin. Regular massages, facials, and body treatments can help improve relaxation, circulation, and overall well-being. The ideal schedule depends on your lifestyle, skin goals, and treatment plan.",
  },
  {
    q: "Why should I book a skin consultation before a facial?",
    a: "A skin consultation helps identify your skin type, concerns, and goals before any treatment begins. At SpaChance, this allows us to recommend the most effective facial and skincare routine for your needs instead of using a one-size-fits-all approach. This personalized process helps achieve better, longer-lasting results.",
  },
  {
    q: "Why choose SpaChance for spa and skincare treatments in Accra?",
    a: "SpaChance combines luxury spa experiences with personalized skincare expertise in one welcoming space. Whether you're looking to unwind with a massage, maintain healthy skin with customized facials, or prepare for a special occasion with beauty treatments, our focus is on delivering professional care that helps you look and feel your best.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Walking into this spa felt like stepping into a sanctuary. The atmosphere was calm, welcoming, and instantly soothing. My wife had her massage first, and when she came out, her smile said it all — she looked lighter, happier, and completely at peace. When it was my turn, I experienced the same magic. The therapist’s technique was both gentle and deeply effective, easing away tension while creating a sense of emotional release. It wasn’t just a massage; it was an experience that touched both body and soul.\n\nSharing this moment together made it even more special. We left feeling renewed, connected, and grateful for the care we received. This place doesn’t just offer massages — it offers healing, intimacy, and joy.\n\nIf you’re looking for somewhere to truly unwind and reconnect, I can’t recommend this spa enough. It’s the kind of place you’ll want to return to again and again.",
    author: "Sylvester Sarfo Dikoh",
    role: "Google Business Review",
    stars: 5,
    date: "2 months ago",
  },
  {
    quote:
      "I have had massage and pedicure from other places, and I must say my experience at SpaChance tops them all!\n\nThe massage was incredibly relaxing, every bit of tension melted away.\n\nThe pedicure was equally amazing. My feet felt so soft, clean and pampered.\n\nWhat topped it for me is the attention to details in all services rendered and the welcoming and peaceful atmosphere.\n\nA great time was had and I’m already looking forward to my next visit!\nHighly recommend !!",
    author: "Elvera Apeamenyo",
    role: "Google Business Review",
    stars: 5,
    date: "2 months ago",
  },
  {
    quote:
      "The massage was so relaxing and really enjoyed it.\nDefinitely gained me as a client.",
    author: "Fordjour Lois",
    role: "Google Business Review",
    stars: 5,
    date: "8 months ago",
  },
  {
    quote: "A very beautiful and intimate space.\nExcellent service too!",
    author: "Ivy Hammond",
    role: "Google Business Review",
    stars: 5,
    date: "a year ago",
  },
  {
    quote:
      "Loved everything about my experience there. The privacy, ambience and service delivery. I highly recommend.",
    author: "Dinah Hammond",
    role: "Google Business Review",
    stars: 5,
    date: "a year ago",
  },
  {
    quote: "Cozy and relaxing… Best spa experience!",
    author: "Wendy Sekyere",
    role: "Google Business Review",
    stars: 5,
    date: "a year ago",
  },
  {
    quote: "First class treatment and excellent customer service.",
    author: "fatau umar",
    role: "Google Business Review",
    stars: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Anita's expertise in skin barrier repair saved my skin. The quiet luxury space in Ogbojo-Madina is peaceful and truly therapeutic.",
    author: "Kofi A.",
    role: "Ogbojo-Madina Resident",
    stars: 5,
    date: "Verified Client",
  },
  {
    quote:
      "The SpaChance Ultimate Escape is the best self-care investment. The deep tissue massage and custom facial left me glowing.",
    author: "Efua M.",
    role: "Accra Professional",
    stars: 5,
    date: "Verified Client",
  },
  {
    quote:
      "Finally a studio that understands melanin skin! My hyperpigmentation faded significantly without any irritation.",
    author: "Ama D.",
    role: "Airport Residential Resident",
    stars: 5,
    date: "Verified Client",
  },
];
