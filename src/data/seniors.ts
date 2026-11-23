/**
 * The 16 seniors of Aero Club NITTE, Batch 2023–2027.
 * Names and designations must stay exactly as given by the club.
 * Portraits live in public/assets/portraits/<slug>.jpg and can be replaced in place.
 */
export interface Senior {
  slug: string;
  name: string;
  designation: string;
  image: string;
}

const portrait = (slug: string) =>
  slug === "gagandeep"
    ? "assets/portraits/gagandeep.png"
    : `assets/portraits/${slug}.jpg`;

export const SENIORS: readonly Senior[] = [
  { slug: "gagandeep", name: "Gagandeep Kayara Gangadhara", designation: "President" },
  {
    slug: "chinmay",
    name: "Chinmay Kulkarni",
    designation:
      "Technical Head, Documentation Head, Marketing Head, Competition and Flying Incharge",
  },
  { slug: "samruddha", name: "Samruddha S Aithal", designation: "Finance Head" },
  {
    slug: "shreyas",
    name: "Shreyas",
    designation: "Inventory Head, Competition and Flying Incharge",
  },
  { slug: "meghraj", name: "Meghraj M", designation: "Social Media Head and Marketing" },
  { slug: "bhanushankar", name: "Bhanushankar Bhat", designation: "Competition Incharge" },
  { slug: "abhyudaya", name: "Abhyudaya J", designation: "Social Media" },
  { slug: "sakshath", name: "Sakshath Shetty", designation: "Inventory" },
  { slug: "rakshith", name: "Rakshith V Devadiga", designation: "Inventory" },
  {
    slug: "abhijna",
    name: "Abhijna Laxmi",
    designation: "Recruitment, Marketing and Competition Incharge",
  },
  { slug: "aneesh", name: "Aneesh Prabhu", designation: "Inventory and Software" },
  { slug: "shishir", name: "Shishir D", designation: "Competition Incharge and Software" },
  { slug: "vinod", name: "Vinod S Shanbogue", designation: "Social Media, Inventory" },
  { slug: "bhoomika", name: "Bhoomika", designation: "Documentation" },
  { slug: "srinidhi", name: "Srinidhi D S", designation: "Social Media and Software" },
  { slug: "vasavi", name: "Vasavi Joshi", designation: "Finance" },
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
