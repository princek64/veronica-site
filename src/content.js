// ╔══════════════════════════════════════════════════════════════════╗
// ║  SITE CONTENT — This is the ONLY file you need to edit.        ║
// ║                                                                ║
// ║  All the text, image references, and links on the website      ║
// ║  are controlled from here. Simply update the values below      ║
// ║  and save — no need to touch any other files.                  ║
// ║                                                                ║
// ║  For images: place your image files in the /public/images/     ║
// ║  folder, then update the filename below. Example:              ║
// ║    heroImage: "my-photo.jpg"                                   ║
// ║  The site will look for it at /images/my-photo.jpg             ║
// ╚══════════════════════════════════════════════════════════════════╝

export const content = {

  // ── General ─────────────────────────────────────────────────────
  // Your practice name — appears in the nav, footer, and browser tab
  practiceName: "Veronica",

  // Tagline — appears below your name in the footer
  tagline: "Jungian Psychotherapist",

  // Browser tab title and SEO meta description
  siteTitle: "Veronica — Jungian Psychotherapist",
  metaDescription:
    "Jungian psychotherapist exploring the transformative power of dreams. Archetypal pattern analysis, dream work, and psychedelic integration.",


  // ── Hero Section ────────────────────────────────────────────────
  // The large landing section visitors see first

  heroEyebrow: "Jungian Psychotherapist · Dream Work · Archetypal Analysis",

  // Heading — use \n for line breaks
  heroHeading: "Explore the\ntransformative\npower of dreams.",

  heroSubtext:
    "I help guide you through the journey of symbolic representation of dreams, fostering a space of non-directive reflection where you can safely uncover the forgotten, yet essential, parts of yourself.",

  heroCta: "Begin the Journey",

  // Hero image — drop your photo into /public/images/ and put the filename here
  // Leave empty to use the default atmospheric image
  heroImage: "",
  heroImageAlt: "Atmospheric hero image",

  // Labyrinth banner image — the wide atmospheric image below the hero
  // Drop your image into /public/images/ and put the filename here
  labyrinthImage: "labyrinth.png",
  labyrinthAlt:
    "Stone labyrinth on a clifftop overlooking the ocean — a symbol of the inner journey",
  labyrinthCaption: "The path inward is never a straight line",


  // ── Offerings Section ───────────────────────────────────────────
  // The four service cards

  offeringsEyebrow: "Offerings",
  offeringsTitle: "Ways We Can Connect",
  offeringsSubtext:
    "Tailored, low-demand approaches to support your unique mind, body, and spirit without the pressure of traditional clinical settings.",

  services: [
    {
      id: "one-on-one",
      title: "1-on-1 Sessions",
      body: "Neurodivergent-affirming therapy that honours your unmasked self. We work together at your pace, accommodating your sensory needs, special interests, and communication style without pressure to conform to neurotypical standards.",
    },
    {
      id: "art-therapy",
      title: "Art Therapy",
      body: "Sometimes words aren't enough. Through painting, clay, and mixed media, we bypass the logical brain to access deeper emotions, process trauma, and discover new pathways to healing in a tactile, sensory-rich way.",
    },
    {
      id: "dream-work",
      title: "Dream Workshops",
      body: "A closed group of 6–8 people meeting weekly to explore dreams through amplification. The psyche begins to speak — resolving underlying conflicts through active presence in a communal field.",
    },
    {
      id: "womens-circles",
      title: "Women's Circles",
      body: "A gentle, structured space to share and be witnessed without judgement. We explore what's present, practise grounding, and hold space for each other's stories.",
    },
  ],


  // ── About Section ───────────────────────────────────────────────
  // Your bio and profile photo

  aboutEyebrow: "About",
  aboutHeading: "Hi, I'm Veronica.",

  // Bio paragraphs — each string becomes its own paragraph
  aboutBio: [
    "My passion lies in exploring the transformative power of dreams and I help you to guide through the journey of symbolic representation of dreams. I approach therapy as an art form, fostering a space of non-directive reflection where clients can safely uncover the forgotten, yet essential, parts of themselves.",

    "With an MA in Jungian Studies (UK) and certification as an Archetypal Pattern Analyst from the Assisi Institute (USA), and Jungian Psychotherapist (MAAP) I bring a wealth of knowledge and experience. I am currently pursuing accreditation with the British Psychoanalytic Foundation.",

    "In addition to my practice, I lead a Jungian reading group, teach yoga, and am a dedicated practitioner of Vipassana meditation. I also specialize in the integration of psychedelic experiences and am an active member of the UCL psychedelic research group, deeply engaged in this field.",
  ],

  // The handwritten signature name below the bio
  signatureName: "Veronica",

  // Credential badges
  credentials: [
    "MA Jungian Studies",
    "Archetypal Pattern Analyst",
    "MAAP",
    "Vipassana Practitioner",
  ],

  // About photo — drop your photo into /public/images/ and put the filename here
  // Leave empty string to use the external Squarespace URL below instead
  aboutImage: "",
  aboutImageExternal:
    "https://images.squarespace-cdn.com/content/v1/6797ab9f39ef7d0bae8206b6/f977e95d-a390-4490-aefb-7ee2b28d009e/me+round.png?format=500w",
  aboutImageAlt: "Veronica — Jungian Psychotherapist",


  // ── Connect / Contact Section ───────────────────────────────────

  connectEyebrow: "Connect",
  connectHeading: "Ready to explore your inner world?",
  connectSubtext:
    "I offer free 20-minute introductory calls to see if we'd be a comfortable fit. Reach out via email to schedule, or follow along on Instagram for gentle reminders and reflections.",

  contactEmail: "hello@veronica.com",
  instagramHandle: "@veronica",
  instagramUrl: "https://instagram.com/veronica",


  // ── Footer ──────────────────────────────────────────────────────

  footerLocation: "London & Online",
  footerCopyright: "2026 Veronica. All rights reserved.",


  // ── Navigation Links ────────────────────────────────────────────
  // Update labels if you rename your sections
  navLinks: [
    { label: "Offerings", href: "#offerings" },
    { label: "About",     href: "#about" },
    { label: "Connect",   href: "#connect" },
  ],
};
