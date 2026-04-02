export type BoatType = "sail" | "power";

export interface Boat {
  slug: string;
  name: string;
  model: string;
  type: BoatType;
  year: number;
  loa: string;
  cabins: number;
  heads: number;
  lowSeason: number;
  highSeason: number;
  description: string;
  highlights: string[];
  heroImage: string;
  galleryImages: string[];
  specs: Record<string, string>;
}

export const boats: Boat[] = [
  {
    slug: "lea-lee",
    name: "Lea Lee",
    model: "Beneteau 36 CC",
    type: "sail",
    year: 2002,
    loa: "36'5\"",
    cabins: 2,
    heads: 1,
    lowSeason: 4500,
    highSeason: 5700,
    description:
      "A responsive, capable coastal cruiser ideal for couples or small groups. The Beneteau 36 CC is renowned for its balanced helm, comfortable cockpit, and easy single-handed handling — making it the perfect introduction to BC sailing.",
    highlights: ["Balanced helm", "Spacious cockpit", "Well-equipped galley", "Easy handling"],
    heroImage: "/images/fleet/lea-lee-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "36'5\"",
      "Beam": "12'2\"",
      "Draft": "5'11\"",
      "Displacement": "~11,900 lbs",
      "Engine": "Diesel inboard",
      "Fuel Capacity": "35 US Gal",
      "Water Capacity": "60 US Gal",
      "Cabins": "2",
      "Heads": "1",
      "Year": "2002",
    },
  },
  {
    slug: "san-miquel",
    name: "San Miquel",
    model: "Island Packet 38",
    type: "sail",
    year: 1989,
    loa: "42'",
    cabins: 2,
    heads: 2,
    lowSeason: 4200,
    highSeason: 5400,
    description:
      "The Island Packet 38 is a blue-water thoroughbred — stiff, safe, and comfortable offshore. With its full keel, raised salon, and spacious interior, San Miquel handles BC's variable conditions with authority and comfort.",
    highlights: ["Full keel offshore stability", "Raised salon with panoramic views", "Two heads for comfort", "Blue-water capable"],
    heroImage: "/images/fleet/san-miquel-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "42'",
      "Beam": "13'2\"",
      "Draft": "4'8\"",
      "Displacement": "~20,000 lbs",
      "Engine": "Diesel inboard",
      "Fuel Capacity": "50 US Gal",
      "Water Capacity": "100 US Gal",
      "Cabins": "2",
      "Heads": "2",
      "Year": "1989",
    },
  },
  {
    slug: "gloman-magic",
    name: "Gloman Magic",
    model: "Jeanneau 42 DS",
    type: "sail",
    year: 2011,
    loa: "42'5\"",
    cabins: 2,
    heads: 2,
    lowSeason: 6300,
    highSeason: 7500,
    description:
      "The Jeanneau 42 DS is the flagship of the DSYC sailing fleet — a modern, performance-oriented yacht with a strikingly contemporary interior. Twin wheels, open transom, and a light-filled saloon make Gloman Magic as pleasurable at anchor as she is underway.",
    highlights: ["Twin helm wheels", "Performance sail plan", "Contemporary interior", "Open transom swim platform"],
    heroImage: "/images/fleet/gloman-magic-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "42'5\"",
      "Beam": "13'9\"",
      "Draft": "6'11\"",
      "Displacement": "~22,000 lbs",
      "Engine": "55hp Diesel",
      "Fuel Capacity": "58 US Gal",
      "Water Capacity": "106 US Gal",
      "Cabins": "2",
      "Heads": "2",
      "Year": "2011",
    },
  },
  {
    slug: "meera",
    name: "Meera",
    model: "Marex 330 Scandinavia",
    type: "power",
    year: 2023,
    loa: "34'5\"",
    cabins: 2,
    heads: 1,
    lowSeason: 7800,
    highSeason: 9000,
    description:
      "The newest vessel in the DSYC fleet. The Marex 330 Scandinavia is a Scandinavian-engineered dayboat that redefines what a compact powerboat can be. Stunning exterior lines, exceptional build quality, and a spacious helm station make Meera the most modern boat in the fleet.",
    highlights: ["Newest vessel — 2023", "Scandinavian engineering", "Exceptional build quality", "Spacious helm station"],
    heroImage: "/images/fleet/meera-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "34'5\"",
      "Beam": "10'11\"",
      "Engine": "2 × Volvo Penta stern drive",
      "Cabins": "2",
      "Heads": "1",
      "Year": "2023",
    },
  },
  {
    slug: "sand-piper",
    name: "Sand Piper",
    model: "Island Gypsy 36",
    type: "power",
    year: 1983,
    loa: "36'",
    cabins: 3,
    heads: 2,
    lowSeason: 5700,
    highSeason: 6900,
    description:
      "A classic trawler-style motor yacht with three cabins — ideal for families or groups of up to six. The Island Gypsy 36's efficient single diesel makes it one of the most economical powerboats in the fleet, with a comfortable full-beam master stateroom.",
    highlights: ["3 cabins — sleeps 6", "Efficient trawler hull", "Full-beam master stateroom", "Aft cockpit"],
    heroImage: "/images/fleet/sand-piper-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "36'",
      "Beam": "12'6\"",
      "Engine": "Diesel single",
      "Fuel Capacity": "200 US Gal",
      "Water Capacity": "85 US Gal",
      "Cabins": "3",
      "Heads": "2",
      "Year": "1983",
    },
  },
  {
    slug: "sea-moss",
    name: "Sea Moss",
    model: "Meridian 381",
    type: "power",
    year: 2005,
    loa: "38'6\"",
    cabins: 2,
    heads: 1,
    lowSeason: 6000,
    highSeason: 7800,
    description:
      "The Meridian 381 is a mid-size sedan bridge motor yacht that offers the perfect balance of speed, range, and comfort. With its large salon, helm station visibility, and well-appointed galley, Sea Moss is the most popular powerboat for first-time DSYC charterers.",
    highlights: ["Sedan bridge layout", "Excellent visibility", "Large salon", "Popular with first-timers"],
    heroImage: "/images/fleet/sea-moss-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "38'6\"",
      "Beam": "13'",
      "Displacement": "~22,275 lbs",
      "Engine": "Twin Volvo Diesel",
      "Fuel Capacity": "200 US Gal",
      "Water Capacity": "80 US Gal",
      "Cabins": "2",
      "Heads": "1",
      "Year": "2005",
    },
  },
  {
    slug: "gulf-mariner",
    name: "Gulf Mariner",
    model: "Grand Mariner 40",
    type: "power",
    year: 1980,
    loa: "40'",
    cabins: 2,
    heads: 2,
    lowSeason: 5700,
    highSeason: 6900,
    description:
      "A well-proven, spacious cruising powerboat with classic lines. The Grand Mariner 40 offers a full-beam master stateroom, a comfortable salon, and a large aft deck for entertaining — all at an accessible price point.",
    highlights: ["Classic trawler lines", "Full-beam master stateroom", "Large aft deck", "Two heads"],
    heroImage: "/images/fleet/gulf-mariner-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "40'",
      "Beam": "14'",
      "Engine": "Twin gas or diesel",
      "Cabins": "2",
      "Heads": "2",
      "Year": "1980",
    },
  },
  {
    slug: "kittiwake",
    name: "Kittiwake",
    model: "Grand Banks Classic 42",
    type: "power",
    year: 1975,
    loa: "42'7\"",
    cabins: 2,
    heads: 2,
    lowSeason: 5700,
    highSeason: 6900,
    description:
      "The Grand Banks Classic is the most iconic trawler ever built — and Kittiwake is a beautifully maintained example. Teak decks, a raised pilothouse, and the famous Grand Banks hull make her as seaworthy as she is beautiful. A genuine classic.",
    highlights: ["Iconic Grand Banks hull", "Teak decks and trim", "Raised pilothouse", "Blue-water seakindly"],
    heroImage: "/images/fleet/kittiwake-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "42'7\"",
      "Beam": "13'8\"",
      "Engine": "Twin diesel",
      "Fuel Capacity": "300 US Gal",
      "Water Capacity": "100 US Gal",
      "Cabins": "2",
      "Heads": "2",
      "Year": "1975",
    },
  },
  {
    slug: "at-last",
    name: "At Last",
    model: "Bayliner 4788",
    type: "power",
    year: 2000,
    loa: "54'",
    cabins: 3,
    heads: 2,
    lowSeason: 9600,
    highSeason: 12600,
    description:
      "At 54 feet, At Last is the largest boat in the DSYC fleet for groups of up to eight. The Bayliner 4788 offers three full staterooms, a spacious main salon, and a flybridge — giving groups the space to live comfortably aboard for a week or more.",
    highlights: ["54 feet — largest in fleet", "3 staterooms + flybridge", "Groups up to 8", "Full-length lower deck"],
    heroImage: "/images/fleet/at-last-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "54'",
      "Beam": "15'5\"",
      "Engine": "Twin diesel",
      "Fuel Capacity": "400 US Gal",
      "Water Capacity": "150 US Gal",
      "Cabins": "3",
      "Heads": "2",
      "Year": "2000",
    },
  },
  {
    slug: "son-seeker",
    name: "Son Seeker",
    model: "540 Sea Ray",
    type: "power",
    year: 2002,
    loa: "54'9\"",
    cabins: 3,
    heads: 2,
    lowSeason: 11400,
    highSeason: 14400,
    description:
      "The flagship of the DSYC powerboat fleet. The 540 Sea Ray combines the performance of a sport cruiser with the accommodation of a full motor yacht. Twin 600hp diesels, a full-beam master stateroom, and a stunning helm station make Son Seeker the most impressive vessel in the fleet.",
    highlights: ["Fleet flagship", "Twin 600hp diesels", "Full-beam master stateroom", "Sport-yacht performance"],
    heroImage: "/images/fleet/son-seeker-hero.jpg",
    galleryImages: [],
    specs: {
      "LOA": "54'9\"",
      "Beam": "15'11\"",
      "Engine": "Twin 600hp diesel",
      "Fuel Capacity": "500 US Gal",
      "Water Capacity": "100 US Gal",
      "Cabins": "3",
      "Heads": "2",
      "Year": "2002",
    },
  },
];

export function getBoatBySlug(slug: string): Boat | undefined {
  return boats.find((b) => b.slug === slug);
}

export function getBoatsByType(type: BoatType): Boat[] {
  return boats.filter((b) => b.type === type);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("en-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}
