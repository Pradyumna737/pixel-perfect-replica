
/**
 * The 16 seniors of Aero Club NITTE, Batch 2023–2027.
 * Portraits live in public/assets/portraits/.
 */
export interface Senior {
  slug: string;
  name: string;
  designation: string;
  image: string;
  portraitScale: number;
  portraitOffsetY: number;
}

const portrait = (slug: string) =>
  `assets/portraits/${slug}.png`;

export const SENIORS: readonly Senior[] = [
  {
    slug: "gagandeep",
    name: "Gagandeep Kayara Gangadhara",
    designation: "President · 2025–2026",
  },
  {
    slug: "chinmay",
    name: "Chinmay Kulkarni",
    designation: "Technical Head · 2025–2026",
  },
  {
    slug: "samruddha",
    name: "Samruddha S Aithal",
    designation: "Finance Head · 2025–2026",
  },
  {
    slug: "shreyas",
    name: "Shreyas",
    designation: "Inventory Head, Competition & Flying In-charge · 2025–2026",
  },
  {
    slug: "meghraj",
    name: "Meghraj M",
    designation: "Social Media Head · 2025–2026",
  },
  {
    slug: "bhanushankar",
    name: "Bhanushankar Bhat",
    designation: "Competition In-charge Head · 2025–2026",
  },
  {
    slug: "abhyudaya",
    name: "Abhyudaya J",
    designation: "Social Media Team Member",
  },
  {
    slug: "sakshath",
    name: "Sakshath Shetty",
    designation: "Inventory Team Member",
  },
  {
    slug: "rakshith",
    name: "Rakshith V Devadiga",
    designation: "Inventory Team Member",
  },
  {
    slug: "abhijna",
    name: "Abhijna Laxmi",
    designation: "Recruitment, Marketing & Competition In-charge",
  },
  {
    slug: "aneesh",
    name: "Aneesh Prabhu",
    designation: "Inventory & Software Team Member",
  },
  {
    slug: "shishir",
    name: "Shishir D",
    designation: "Competition In-charge & Software Team Member",
  },
  {
    slug: "vinod",
    name: "Vinod S Shanbogue",
    designation: "Social Media & Inventory Team Member",
  },
  {
    slug: "bhoomika",
    name: "Bhoomika",
    designation: "Documentation Team Member",
  },
  {
    slug: "srinidhi",
    name: "Srinidhi D S",
    designation: "Social Media & Software Team Member",
  },
  {
    slug: "vasavi",
    name: "Vasavi Joshi",
    designation: "Finance Team Member",
  },
].map((s) => {
  const framing: Record<string, { scale: number; offsetY: number }> = {
    // Chinmay: close upper-body framing
    chinmay: { scale: 1.5, offsetY: 0 },

    // Samruddha: unchanged
    samruddha: { scale: 0.88, offsetY: 4 },

    // Shreyas: unchanged
    shreyas: { scale: 0.88, offsetY: 4 },

    // Meghraj: move further down
    meghraj: { scale: 0.76, offsetY: 10 },

    // Sakshath: stronger upper-body zoom
    sakshath: { scale: 2.0, offsetY: 0 },

    // Rakshith: stronger upper-body zoom
    rakshith: { scale: 2.0, offsetY: 0 },

    // Aneesh: reveal the complete head
    aneesh: { scale: 0.62, offsetY: 8 },

    // Shishir: slight zoom and downward positioning
    shishir: { scale: 1.12, offsetY: 3 },

    // Vinod: zoom out and move down to reveal the head
    vinod: { scale: 0.65, offsetY: 8 },

    // Bhoomika: slightly closer framing
    bhoomika: { scale: 1.45, offsetY: 0 },

    // Srinidhi: unchanged
    srinidhi: { scale: 1.0, offsetY: 2 },

    // Vasavi: unchanged
    vasavi: { scale: 1.0, offsetY: 2 },
  };

  const crop = framing[s.slug] ?? { scale: 1, offsetY: 0 };

  return {
    ...s,
    image: portrait(s.slug),
    portraitScale: crop.scale,
    portraitOffsetY: crop.offsetY,
  };
});

export const DEFAULT_SENIOR_SLUG = "gagandeep";

export const EVENT = {
  title: "The Aero Journey",
  club: "Aero Club NITTE",
  batch: "Batch 2023–2027",
  dateLong: "30 November 2026",
  dateShort: "30 NOV 2026",
  time: "2:00 PM",
  venue: "Shambhavi Hall",
  message:
    "Join us as we celebrate the journey, friendships and memories that made Aero Club special.",
} as const;

export const LOGO_PATH = "assets/NEW AERO LOGO TRANSPARENT.png";
