// SpaChance Master Data Repository (Real Studio Assets & Concise Copy)

export const BRAND = {
  name: "SpaChance",
  tagline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
  alternateTaglines: [
    "Expert skincare, therapeutic massage, and beauty treatments in East Legon, Accra.",
    "Personalized skin and body wellness for deep relaxation and visible radiance."
  ],
  founder: {
    name: "Anita Sekyere",
    title: "Certified Skin Specialist & Beauty Consultant",
    bio: "Founded by certified skin specialist Anita Sekyere, SpaChance provides personalized skin barrier repair, targeted hyperpigmentation treatment, and therapeutic massage in a peaceful East Legon sanctuary.",
    image: "/assets/hero_about_real.jpg"
  },
  positioning: "SpaChance is a premium skin and wellness studio in East Legon, Accra, Ghana, specializing in personalized facials, therapeutic massage, skincare, and beauty treatments. Founded by Anita Sekyere, a certified skin specialist and beauty consultant.",
  location: "East Legon / North Legon Area, Accra, Ghana",
  googleMapsUrl: "https://share.google/CIUT5xThq2CxXTpTh",
  freshaBookingUrl: "https://www.fresha.com/book-now/spachance-jcxwxeuj/services?lid=1255191&share=true&pId=1191372",
  whatsappUrl: "https://wa.me/233545196008",
  whatsappPhone: "+233 54 519 6008",
  socials: {
    instagram: "https://www.instagram.com/thespachance",
    tiktok: "https://www.tiktok.com/@thespachance",
    googleBusiness: "https://share.google/CIUT5xThq2CxXTpTh",
    whatsapp: "https://wa.me/233545196008"
  },
  hours: [
    { days: "Tuesday – Saturday", time: "10:00 AM – 6:00 PM" },
    { days: "Sunday", time: "1:00 PM – 7:00 PM" },
    { days: "Monday", time: "Closed for Staff Rest" }
  ]
};

export const HERO_SLIDES = [
  {
    image: "/assets/hero_home_real.jpg",
    subheading: "East Legon • Accra",
    headline: "Healthy Skin. Deep Relaxation. Lasting Confidence.",
    ctaText: "Book Appointment"
  },
  {
    image: "/assets/hero_services_real.jpg",
    subheading: "Therapeutic Sanctuary",
    headline: "Unhurried Facial & Bodywork Experiences",
    ctaText: "Explore Services"
  },
  {
    image: "/assets/hero_about_real.jpg",
    subheading: "Skin Barrier Care",
    headline: "Expert Skincare Tailored to Your Unique Needs",
    ctaText: "View Facials"
  },
  {
    image: "/assets/hero_blog_real.jpg",
    subheading: "Personalized Wellness",
    headline: "Restorative Massage Therapy for Body Reset",
    ctaText: "View Massages"
  },
  {
    image: "/assets/hero_book_real.jpg",
    subheading: "Sanctuary Atmosphere",
    headline: "Your SpaChance Awaits in East Legon",
    ctaText: "Reserve Now"
  }
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
    description: "Our signature sanctuary experience combining deep barrier skincare with a 90-minute full body massage.",
    includes: [
      "Barrier Repair Facial with Custom Serums",
      "90-Min Deep Tissue or Hot Stone Massage",
      "Hydrating Herbal Foot Soak & Pedicure",
      "Complimentary Botanical Refreshments"
    ],
    image: "/assets/hero_services_real.jpg"
  },
  {
    id: "pkg-2",
    title: "Radiant Skin & Barrier Package",
    subtitle: "Facial & Deep Hydration",
    duration: "105 Mins",
    price: "GH₵ 850",
    popular: false,
    badge: "Founder's Choice",
    description: "Formulated by Anita Sekyere to repair compromised skin barriers, clear acne congestion, and restore glow.",
    includes: [
      "Digital Skin Consultation & Diagnostics",
      "Deep Cleanse & Gentle Exfoliation",
      "Cold-Pressed Lipid Barrier Seal",
      "Scalp & Neck Pressure-Point Relief"
    ],
    image: "/assets/hero_about_real.jpg"
  },
  {
    id: "pkg-3",
    title: "Therapeutic Stress Relief Ritual",
    subtitle: "Bodywork & Tension Release",
    duration: "120 Mins",
    price: "GH₵ 920",
    popular: false,
    badge: "Most Requested",
    description: "Designed for busy professionals seeking immediate release from lower back tightness and shoulder knots.",
    includes: [
      "60-Min Swedish or Deep Tissue Massage",
      "Hot Basalt Stone Spinal Accent",
      "Nourishing Hand & Foot Hydration",
      "Aromatherapy Breathing Sequence"
    ],
    image: "/assets/hero_blog_real.jpg"
  }
];

export const SERVICES_CATALOG = [
  {
    category: "Packages",
    title: "Curated Spa Packages",
    description: "Bundled spa experiences offering deep relaxation and skin renewal in East Legon.",
    image: "/assets/hero_services_real.jpg",
    items: SPA_PACKAGES
  },
  {
    category: "Skincare",
    title: "Facials & Skin Barrier Therapy",
    description: "Targeted facial treatments for acne, hyperpigmentation, and skin barrier maintenance in Accra.",
    image: "/assets/hero_about_real.jpg",
    items: [
      {
        id: "skin-1",
        title: "In-Depth Skin Analysis & Consultation",
        duration: "30 Mins",
        price: "GH₵ 150",
        description: "Diagnostic assessment of your skin barrier health and personalized homecare plan.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "skin-2",
        title: "Signature Deep-Cleanse Hydrating Facial",
        duration: "60 Mins",
        price: "GH₵ 350",
        description: "Pore detox, double cleansing, gentle extractions, and antioxidant serum infusion.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "skin-3",
        title: "Acne Clarifying & Purifying Treatment",
        duration: "75 Mins",
        price: "GH₵ 450",
        description: "Targeted salicylic and zinc therapy to soothe active breakouts and reduce redness.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "skin-4",
        title: "Hyperpigmentation Corrective Facial",
        duration: "75 Mins",
        price: "GH₵ 500",
        description: "Formulated for dark spots and uneven tone using niacinamide and safe botanical brighteners.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "skin-5",
        title: "Specialized Skin Barrier Maintenance",
        duration: "60 Mins",
        price: "GH₵ 400",
        description: "Replenishes essential ceramides and fatty acids to fortify delicate skin.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "skin-6",
        title: "Chemical Peel & Microneedling Therapy",
        duration: "90 Mins",
        price: "GH₵ 750",
        description: "Cellular renewal for deep texture improvement and collagen stimulation.",
        freshaUrl: BRAND.freshaBookingUrl
      }
    ]
  },
  {
    category: "Massage",
    title: "Therapeutic Bodywork & Massage",
    description: "Restorative deep tissue, Swedish, and hot stone massage therapies in East Legon, Accra.",
    image: "/assets/hero_blog_real.jpg",
    items: [
      {
        id: "msg-1",
        title: "Deep Tissue Muscle Recovery Massage",
        duration: "60 / 90 Mins",
        price: "GH₵ 400 / GH₵ 550",
        description: "Targeted firm pressure to relieve chronic muscle tightness, posture strain, and back knots.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "msg-2",
        title: "Swedish Relaxation Body Massage",
        duration: "60 / 90 Mins",
        price: "GH₵ 350 / GH₵ 500",
        description: "Smooth, rhythmic strokes with warm oils to calm the nervous system and induce restful sleep.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "msg-3",
        title: "Hot Stone Restorative Massage",
        duration: "75 Mins",
        price: "GH₵ 480",
        description: "Heated volcanic basalt stones melt away muscular spasms and enhance blood circulation.",
        freshaUrl: BRAND.freshaBookingUrl
      }
    ]
  },
  {
    category: "Nails",
    title: "Nail Care & Luxury Pedicures",
    description: "Hygienic manicures and pedicures with foot soak massage and cuticle conditioning.",
    image: "/assets/hero_book_real.jpg",
    items: [
      {
        id: "nail-1",
        title: "SpaChance Luxury Spa Pedicure",
        duration: "60 Mins",
        price: "GH₵ 220",
        description: "Herbal foot soak, exfoliating scrub, heel buffing, and relaxing foot massage.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "nail-2",
        title: "Essential Care Manicure",
        duration: "45 Mins",
        price: "GH₵ 160",
        description: "Nail shaping, gentle cuticle care, hand massage, and high-shine finish.",
        freshaUrl: BRAND.freshaBookingUrl
      }
    ]
  },
  {
    category: "Beauty",
    title: "Waxing, Brows & Beauty Enhancements",
    description: "Precision brow lamination, waxing, and professional makeup application.",
    image: "/assets/hero_home_real.jpg",
    items: [
      {
        id: "bty-1",
        title: "Brow Lamination & Tinting Ritual",
        duration: "60 Mins",
        price: "GH₵ 280",
        description: "Sculpted, full, glossy brows defined for 6-8 weeks of effortless framing.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "bty-2",
        title: "Precision Body Waxing",
        duration: "30-90 Mins",
        price: "From GH₵ 120",
        description: "Gentle warm wax formulation suitable for sensitive skin zones.",
        freshaUrl: BRAND.freshaBookingUrl
      },
      {
        id: "bty-3",
        title: "Professional Glam Makeup",
        duration: "60 Mins",
        price: "GH₵ 350",
        description: "Flawless, long-wearing event makeup tailored to your undertones.",
        freshaUrl: BRAND.freshaBookingUrl
      }
    ]
  }
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
        text: "The skin barrier is your outermost shield against moisture loss and inflammation. In Accra, intense sun, dust, and harsh scrubs degrade this protective lipid layer, causing tightness, breakouts, and hyperpigmentation."
      },
      {
        heading: "How to tell if your skin barrier is damaged",
        text: "Signs include a stinging feel when applying basic moisturizer, excessive oiliness with dry patches, and persistent acne. At SpaChance, Anita Sekyere evaluates barrier health before recommending active treatments."
      },
      {
        heading: "3 Steps to restore barrier health",
        text: "Pause harsh physical scrubs, use lipid-replenishing ceramides, and schedule a specialized Skin Barrier Maintenance session at SpaChance East Legon."
      }
    ],
    image: "/assets/hero_about_real.jpg"
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
        heading: "What is the difference between Deep Tissue and Swedish Massage?",
        text: "Swedish massage uses smooth strokes to lower stress and ease general tension. Deep Tissue applies firm pressure to release deep muscular knots and posture tightness built up from desk work or exercise."
      },
      {
        heading: "How much does a massage cost in East Legon, Accra?",
        text: "Therapeutic massages in Accra range from GH₵ 350 to GH₵ 550. At SpaChance, all sessions take place in quiet luxury rooms with organic oils and hot stone accents."
      }
    ],
    image: "/assets/hero_blog_real.jpg"
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
        text: "When dark skin experiences breakouts or irritation, melanocytes overproduce pigment as a defense mechanism. Abrasive scrubs only darken marks further."
      },
      {
        heading: "The SpaChance Hyperpigmentation Protocol",
        text: "We pair gentle tyrosinase inhibitors with anti-inflammatory niacinamide and enzyme exfoliation to safely fade dark spots while protecting your skin barrier."
      }
    ],
    image: "/assets/hero_home_real.jpg"
  }
];

export const FAQS = [
  {
    q: "Where is SpaChance located and what areas do you serve?",
    a: "SpaChance is located in the East Legon / North Legon area of Accra, Ghana. We serve clients across East Legon, North Legon, Airport Residential Area, Cantonments, and Dzorwulu."
  },
  {
    q: "What makes SpaChance different from other spas in Accra?",
    a: "Founded by certified skin specialist Anita Sekyere, SpaChance specializes in skin barrier repair, custom hyperpigmentation treatment, and therapeutic bodywork in a quiet luxury environment."
  },
  {
    q: "How much does a facial or massage cost at SpaChance?",
    a: "Facials start at GH₵ 350, specialized barrier therapy is GH₵ 400, and body massages start at GH₵ 350. Curated Spa Packages range from GH₵ 850 to GH₵ 1,250."
  },
  {
    q: "How do I book an appointment?",
    a: "Book online via our official Fresha Booking link or message our team directly on WhatsApp at +233 54 519 6008."
  },
  {
    q: "What are your operating hours?",
    a: "Tuesday – Saturday: 10:00 AM – 6:00 PM | Sunday: 1:00 PM – 7:00 PM | Monday: Closed."
  },
  {
    q: "Can I buy a SpaChance Gift Card?",
    a: "Yes! We offer digital and physical SpaChance Gift Cards (GH₵ 300 to GH₵ 1,250) for any treatment or package."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Anita's expertise in skin barrier repair saved my skin. The quiet luxury space in East Legon is peaceful and truly therapeutic.",
    author: "Kofi A.",
    role: "East Legon Resident"
  },
  {
    quote: "The SpaChance Ultimate Escape is the best self-care investment. The deep tissue massage and custom facial left me glowing.",
    author: "Efua M.",
    role: "Accra Professional"
  },
  {
    quote: "Finally a studio that understands melanin skin! My hyperpigmentation faded significantly without any irritation.",
    author: "Ama D.",
    role: "Airport Residential Resident"
  }
];
