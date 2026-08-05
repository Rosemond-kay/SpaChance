// SpaChance Master Data Repository (Real Studio Assets & Concise Copy)

export const BRAND = {
  name: "SpaChance",
  tagline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
  alternateTaglines: [
    "Expert skincare, therapeutic massage, and beauty treatments in East Legon, Accra.",
    "Personalized skin and body wellness for deep relaxation and visible radiance.",
  ],
  founder: {
    name: "Anita Sekyere",
    title: "Certified Skin Specialist & Beauty Consultant",
    bio: "Founded by certified skin specialist Anita Sekyere, SpaChance provides personalized skin barrier repair, targeted hyperpigmentation treatment, and therapeutic massage in a peaceful East Legon sanctuary.",
    image: "/assets/Anita-Sekyere-SpaChance-Founder.jpeg",
    fallbackImage: "/assets/founder.jpg",
  },
  positioning:
    "SpaChance is a premium skin and wellness studio in East Legon, Accra, Ghana, specializing in personalized facials, therapeutic massage, skincare, and beauty treatments. Founded by Anita Sekyere, a certified skin specialist and beauty consultant.",
  location: "East Legon / North Legon Area, Accra, Ghana",
  address: {
    streetAddress: "East Legon / North Legon Area",
    addressLocality: "Accra",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  contactEmail: "hello@spachance.com",
  googleMapsUrl: "https://share.google/CIUT5xThq2CxXTpTh",
  freshaBookingUrl:
    "https://www.fresha.com/book-now/spachance-jcxwxeuj/services?lid=1255191&share=true&pId=1191372",
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

export const HERO_SLIDES = [
  {
    image: "/assets/hero_home_real.jpg",
    subheading: "East Legon • Accra",
    headline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
    ctaText: "Book Appointment",
  },
  {
    image: "/assets/hero_services_real.jpg",
    subheading: "Therapeutic Sanctuary",
    headline: "Unhurried Facial & Bodywork Experiences",
    ctaText: "Explore Services",
  },
  {
    image: "/assets/hero_about_real.jpg",
    subheading: "Skin Barrier Care",
    headline: "Expert Skincare Tailored to Your Unique Needs",
    ctaText: "View Facials",
  },
  {
    image: "/assets/hero_blog_real.jpg",
    subheading: "Personalized Wellness",
    headline: "Restorative Massage Therapy for Body Reset",
    ctaText: "View Massages",
  },
  {
    image: "/assets/hero_book_real.jpg",
    subheading: "Sanctuary Atmosphere",
    headline: "Your SpaChance Awaits in East Legon",
    ctaText: "Reserve Now",
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
      "Barrier Repair Facial with Custom Serums",
      "90-Min Deep Tissue or Hot Stone Massage",
      "Hydrating Herbal Foot Soak & Pedicure",
      "Complimentary Botanical Refreshments",
    ],
    image: "/assets/hero_services_real.jpg",
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
      "Digital Skin Consultation & Diagnostics",
      "Deep Cleanse & Gentle Exfoliation",
      "Cold-Pressed Lipid Barrier Seal",
      "Scalp & Neck Pressure-Point Relief",
    ],
    image: "/assets/hero_about_real.jpg",
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
      "Hot Basalt Stone Spinal Accent",
      "Nourishing Hand & Foot Hydration",
      "Aromatherapy Breathing Sequence",
    ],
    image: "/assets/hero_blog_real.jpg",
  },
];

export const SERVICES_CATALOG = [
  {
    category: "packages",
    title: "Curated Spa Packages",
    description:
      "Signature wellness rituals combining skincare, massage, and pampering in a calm East Legon setting.",
    image: "/assets/hero_services_real.jpg",
    items: [
      {
        id: "pkg-1",
        title: "Indulgent Self-Care",
        duration: "3h",
        price: "¢600.00",
        description:
          "This package includes a refreshing welcome drink, classic pedicure, and classic manicure with polish.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "pkg-2",
        title: "MELT AWAY TENSION",
        duration: "2h 30m",
        price: "¢800.00",
        description:
          "This package includes a refreshing welcome drink, classic pedicure, and a full body massage.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "pkg-3",
        title: "SPA DAY",
        duration: "3h 30m",
        price: "¢1,500.00",
        description:
          "This package includes a refreshing welcome drink, a customized facial treatment, and a full body massage.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "skin consultation",
    title: "Skin Consultation",
    description:
      "Professional assessments to evaluate your skin type, concerns, and recommended treatments.",
    image: "/assets/hero_about_real.jpg",
    items: [
      {
        id: "skin-consultation",
        title: "Skin Consultation",
        duration: "45m",
        price: "¢300.00",
        description:
          "A skin consultation is a professional assessment that evaluates your skin type, condition, and concerns to recommend appropriate treatments and products.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "facials",
    title: "Facials & Advanced Skin Treatments",
    description:
      "Targeted facials for acne, barrier repair, and visible glow from first treatment to long-term care.",
    image: "/assets/hero_about_real.jpg",
    items: [
      {
        id: "facial-1",
        title: "Acne treatment facial (2)",
        duration: "4h",
        price: "¢3,800.00",
        description:
          "Take control of your skin with our targeted acne treatment facial. Designed to combat breakouts, reduce redness, and prevent future blemishes.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-2",
        title: "Facials Returning Clients - LED Therapy",
        duration: "2h",
        price: "¢400.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-3",
        title: "Facials Returning Clients - Classic Facial",
        duration: "2h",
        price: "¢450.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-4",
        title: "Facials Returning Clients - Barrier Repair Facial",
        duration: "2h",
        price: "¢550.00",
        description:
          "Monthly facial treatment only. This service rate is applied to clients who are on a consistent facial treatment for specific skin conditions.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-5",
        title:
          "Barrier Repair Facial (3 sessions with aftercare skincare products)",
        duration: "6h 15m",
        price: "¢3,800.00",
        description:
          "A barrier repair facial is a restorative treatment aimed at repairing and fortifying the skin's natural barrier, providing relief from dryness, sensitivity, and irritation while promoting a healthier, more resilient complexion.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-6",
        title: "Classic facial",
        duration: "2h",
        price: "¢500.00",
        description:
          "A classic facial is a fundamental skincare treatment that focuses on cleansing, exfoliating, and hydrating the skin.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-7",
        title: "Deep Cleanse Facial",
        duration: "2h",
        price: "¢600.00",
        description:
          "It is a specialized skincare treatment designed to target and alleviate acne-prone skin.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-8",
        title: "Microneedling Menu - Collagen Refresh (0.5mm)",
        duration: "1h",
        price: "¢2,700.00",
        description:
          "This treatment stimulates natural collagen production to improve acne scars, refine texture, and correct uneven pigmentation without aggressive trauma.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-9",
        title: "Microneedling Menu - Scar Revision Therapy",
        duration: "1h",
        price: "¢4,400.00",
        description:
          "This treatment stimulates natural collagen production to improve acne scars, refine texture, and correct uneven pigmentation without aggressive trauma.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-10",
        title: "Microneedling Menu - Skin Remodeling Protocol",
        duration: "1h",
        price: "¢5,200.00",
        description:
          "This treatment stimulates natural collagen production to improve acne scars, refine texture, and correct uneven pigmentation without aggressive trauma.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-11",
        title: "The Skin Refinement Protocol Resurfacing Peel",
        duration: "45m",
        price: "¢2,500.00",
        description:
          "A gentle yet effective skin correction journey created specifically for skin of color, targeting mild acne, pigmentation, and texture while protecting the skin barrier.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "facial-12",
        title: "The Skin Refinement Protocol Advance Refinement Peel",
        duration: "45m",
        price: "¢4,200.00",
        description:
          "A gentle yet effective skin correction journey created specifically for skin of color, targeting mild acne, pigmentation, and texture while protecting the skin barrier.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "massage",
    title: "Massage Therapy",
    description:
      "Restorative massage experiences for tension release, deep muscle recovery, and full-body calm.",
    image: "/assets/hero_blog_real.jpg",
    items: [
      {
        id: "msg-1",
        title: "Full body Swedish Massage",
        duration: "1h",
        price: "¢450.00",
        description:
          "A gentle form of massage that uses long strokes, kneading, and circular movements to relax and energize the body.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "msg-2",
        title: "Deep Tissue Massage",
        duration: "1h",
        price: "¢500.00",
        description:
          "Focuses on deeper layers of muscles and is used for chronic muscle tension, knots, or injuries.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "pedicure",
    title: "Pedicure Services",
    description:
      "Hydrating foot soaks, polish, and finishing touches that leave your feet soft and refreshed.",
    image: "/assets/hero_book_real.jpg",
    items: [
      {
        id: "pedicure-1",
        title: "Jelly Pedi",
        duration: "1h",
        price: "¢300.00",
        description: "Luxurious foot spa treatment.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "pedicure-2",
        title: "Spa Pedicure",
        duration: "1h 45m",
        price: "¢200.00",
        description:
          "Indulge your feet in a pampering experience that rejuvenates and refreshes.",
        freshaUrl: BRAND.freshaBookingUrl,
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
        price: "¢500.00",
        description:
          "Consultation, skincare prep, makeup application, and strip lash extension application.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "brows & lash",
    title: "Brows & Lash Treatments",
    description:
      "Precision brow shaping, tinting, and microblading services for polished definition.",
    image: "/assets/hero_home_real.jpg",
    items: [
      {
        id: "brow-3",
        title: "Microblading - Touch up",
        duration: "1h",
        price: "¢500.00",
        description:
          "Semi-permanent cosmetic tattooing technique used to enhance the appearance of the eyebrows.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-4",
        title: "Microblading - New Brows",
        duration: "2h",
        price: "¢800.00",
        description:
          "Semi-permanent cosmetic tattooing technique used to enhance the appearance of the eyebrows.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
  {
    category: "waxing",
    title: "Waxing Services",
    description:
      "Precise waxing for brows, body, and intimate areas with comfort-focused care.",
    image: "/assets/hero_home_real.jpg",
    items: [
      {
        id: "brow-1",
        title: "Brow waxing and Tint",
        duration: "45m",
        price: "¢180.00",
        description:
          "Brow waxing shapes and defines the eyebrows by removing unwanted hair. Brow tinting involves applying a semi-permanent dye.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-2",
        title: "Brow Wax",
        duration: "30m",
        price: "¢80.00",
        description: "Brow grooming only.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-5",
        title: "The Intimate combo",
        duration: "1h 15m",
        price: "¢450.00",
        description:
          "This package includes underarm waxing and Hollywood waxing or bikini waxing services.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-6",
        title: "Female Full body wax",
        duration: "1h 35m",
        price: "¢4,650.00",
        description: "This package includes leg waxing and arm waxing.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-7",
        title: "Hollywood wax",
        duration: "45m",
        price: "¢350.00",
        description:
          "Removes all the hair from the pubic area, including the front, back, and everything in between.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-8",
        title: "Arm waxing - Female",
        duration: "45m",
        price: "¢300.00",
        description: "Arm waxing service.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-9",
        title: "Leg waxing Female",
        duration: "50m",
        price: "¢350.00",
        description: "Leg waxing service.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-10",
        title: "Chin & Neck",
        duration: "45m",
        price: "¢150.00",
        description: "Chin and neck waxing service.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
      {
        id: "brow-11",
        title: "Underarm wax",
        duration: "30m",
        price: "¢100.00",
        description: "Underarm waxing service.",
        freshaUrl: BRAND.freshaBookingUrl,
      },
    ],
  },
];

export const BLOG_POSTS = [
  {
    id: "post-1",
    slug: "skin-barrier-repair-accra",
    title: "Skin Barrier Repair in West Africa: Essential Reset Guide",
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
        text: "Signs include a stinging feel when applying basic moisturizer, excessive oiliness with dry patches, and persistent acne. At SpaChance, Anita Sekyere evaluates barrier health before recommending active treatments.",
      },
      {
        heading: "3 Steps to restore barrier health",
        text: "Pause harsh physical scrubs, use lipid-replenishing ceramides, and schedule a specialized Skin Barrier Maintenance session at SpaChance East Legon.",
      },
    ],
    image: "/assets/hero_about_real.jpg",
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
        heading: "How much does a massage cost in East Legon, Accra?",
        text: "Therapeutic massages in Accra range from GH₵ 350 to GH₵ 550. At SpaChance, all sessions take place in quiet luxury rooms with organic oils and hot stone accents.",
      },
    ],
    image: "/assets/hero_blog_real.jpg",
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
    image: "/assets/hero_home_real.jpg",
  },
];

export const FAQS = [
  {
    q: "Where is SpaChance located and what areas do you serve?",
    a: "SpaChance is located Ogbojo-Madina in Accra, Ghana. We serve clients across East Legon, North Legon, Airport Residential Area, Cantonments, Madina, and Dzorwulu.",
  },
  {
    q: "What spa treatments does SpaChance offer?",
    a: "SpaChance offers a range of professional spa and beauty treatments designed to help you relax, recharge, and care for your skin. Our services include customized facials, therapeutic massage, body treatments, pedicures, manicures, waxing, lash and brow services, and skin consultations. Every treatment is tailored to your individual needs for a truly personalized wellness experience.",
  },
  {
    q: "How much does a facial or massage cost at SpaChance?",
    a: "Facials start at GH₵ 600, and body massages start at GH₵ 450. Special discounted packages are available for returning clients.",
  },
  {
    q: "How do I book an appointment?",
    a: "Book online via our official Fresha Booking link or message our team directly on WhatsApp at +233 54 519 6008.",
  },
  {
    q: "What are your operating hours?",
    a: "Tuesday – Saturday: 10:00 AM – 6:00 PM | Sunday: 1:00 PM – 7:00 PM | Monday: Closed.",
  },
  {
    q: "Can I buy a SpaChance Gift Card?",
    a: "Yes! We offer digital and physical SpaChance Gift Cards (GH₵ 300 to GH₵ 1,250) for any treatment or package.",
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
      "Anita's expertise in skin barrier repair saved my skin. The quiet luxury space in East Legon is peaceful and truly therapeutic.",
    author: "Kofi A.",
    role: "East Legon Resident",
  },
  {
    quote:
      "The SpaChance Ultimate Escape is the best self-care investment. The deep tissue massage and custom facial left me glowing.",
    author: "Efua M.",
    role: "Accra Professional",
  },
  {
    quote:
      "Finally a studio that understands melanin skin! My hyperpigmentation faded significantly without any irritation.",
    author: "Ama D.",
    role: "Airport Residential Resident",
  },
];
