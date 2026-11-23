/**
 * The 16 seniors of Aero Club NITTE, Batch 2023–2027.
 * Portraits live in public/assets/portraits/.
 */
export interface Senior {
  slug: string;
  name: string;
  designation: string;
  image: string;
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
].map((s) => ({ ...s, image: portrait(s.slug) }));

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
