import type { CSSProperties } from "react";

export type CatalogFilter = {
  value: string;
  label: string;
};

export type ProductItem = {
  category: string;
  name: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
};

export type SwatchItem = {
  category: string;
  name: string;
  title: string;
  subtitle: string;
  swatchStyle: CSSProperties;
};

export const wardrobeFilters: CatalogFilter[] = [
  { value: "all", label: "All styles" },
  { value: "sliding", label: "Sliding door" },
  { value: "shaker", label: "Shaker" },
  { value: "walkin", label: "Walk-in" },
  { value: "mirrored", label: "Mirrored" },
  { value: "alcove", label: "Alcove & loft" },
];

export const wardrobeProducts: ProductItem[] = [
  {
    category: "sliding",
    name: "Horizon sliding",
    tag: "Sliding door",
    title: "Horizon sliding",
    description:
      "Full-height sliding panels with soft-close track — ideal for tight bedroom layouts.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    badge: "Popular",
  },
  {
    category: "mirrored",
    name: "Reflection mirrored",
    tag: "Mirrored",
    title: "Reflection mirrored",
    description: "Floor-to-ceiling mirror doors that visually double the room.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
  },
  {
    category: "shaker",
    name: "Classic shaker",
    tag: "Shaker",
    title: "Classic shaker",
    description:
      "Painted or woodgrain shaker fronts with tailored internal layouts.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    category: "walkin",
    name: "Studio walk-in",
    tag: "Walk-in",
    title: "Studio walk-in",
    description:
      "Open dressing room with LED shelving, drawers and hanging zones.",
    image:
      "https://images.unsplash.com/photo-1631889992176-5fa8e4c846fe?w=600&q=80",
    badge: "LED standard",
  },
  {
    category: "shaker",
    name: "Sage shaker suite",
    tag: "Shaker",
    title: "Sage shaker suite",
    description:
      "Soft painted finish with mixed hanging, shelves and shoe storage.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
  },
  {
    category: "alcove",
    name: "Alcove fitted",
    tag: "Alcove & loft",
    title: "Alcove fitted",
    description: "Box-in awkward chimney breasts and eaves with usable storage.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120b2?w=600&q=80",
  },
  {
    category: "sliding",
    name: "Dual-tone sliding",
    tag: "Sliding door",
    title: "Dual-tone sliding",
    description: "Contrasting panel colours with integrated top storage.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
  },
  {
    category: "walkin",
    name: "Corner walk-in",
    tag: "Walk-in",
    title: "Corner walk-in",
    description: "L-shaped internal layout making use of dead corner space.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  },
  {
    category: "mirrored",
    name: "Bronze mirror",
    tag: "Mirrored",
    title: "Bronze mirror",
    description: "Tinted mirror doors with brushed metal trim detail.",
    image:
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80",
  },
  {
    category: "shaker",
    name: "Oak grain shaker",
    tag: "Shaker",
    title: "Oak grain shaker",
    description: "Warm woodgrain fronts with soft-close hinges throughout.",
    image:
      "https://images.unsplash.com/photo-1616137462111-b2e7f9578618?w=600&q=80",
  },
  {
    category: "alcove",
    name: "Loft eaves",
    tag: "Alcove & loft",
    title: "Loft eaves",
    description: "Angled cabinetry following roof lines in loft conversions.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80",
  },
  {
    category: "sliding",
    name: "Minimal flush",
    tag: "Sliding door",
    title: "Minimal flush",
    description: "Handleless sliding doors with push-to-open internals.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
];

export const kitchenFilters: CatalogFilter[] = [
  { value: "all", label: "All styles" },
  { value: "handleless", label: "Handleless" },
  { value: "shaker", label: "Shaker" },
  { value: "island", label: "Island" },
  { value: "splashback", label: "Glass splashback" },
];

export const kitchenProducts: ProductItem[] = [
  {
    category: "handleless",
    name: "Slate handleless",
    tag: "Handleless",
    title: "Slate handleless",
    description:
      "Matte grey gloss with integrated J-pull and full appliance bank.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
    badge: "Popular",
  },
  {
    category: "shaker",
    name: "Heritage shaker",
    tag: "Shaker",
    title: "Heritage shaker",
    description:
      "Classic framed doors with quartz worktop and Belfast sink option.",
    image:
      "https://images.unsplash.com/photo-1600489000022-208129279abb?w=600&q=80",
  },
  {
    category: "splashback",
    name: "Azure glass",
    tag: "Glass splashback",
    title: "Azure glass",
    description: "Custom coloured glass splashback matched to door colour.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    badge: "Custom glass",
  },
  {
    category: "island",
    name: "Central island",
    tag: "Island",
    title: "Central island",
    description: "Seating overhang, prep sink and concealed bin storage.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
  {
    category: "handleless",
    name: "White gloss line",
    tag: "Handleless",
    title: "White gloss line",
    description: "High-gloss white with LED pelmet lighting.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    category: "shaker",
    name: "Sage in-frame",
    tag: "Shaker",
    title: "Sage in-frame",
    description: "Painted in-frame shaker with brass hardware accents.",
    image:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80",
  },
  {
    category: "splashback",
    name: "Violet glass",
    tag: "Glass splashback",
    title: "Violet glass",
    description: "Statement colour splashback behind hob and sink runs.",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80",
  },
  {
    category: "island",
    name: "Compact galley",
    tag: "Island",
    title: "Compact galley",
    description: "Space-efficient layout for terraced homes and flats.",
    image:
      "https://images.unsplash.com/photo-1556909177-f6e7ad7d3136?w=600&q=80",
  },
  {
    category: "handleless",
    name: "Graphite matte",
    tag: "Handleless",
    title: "Graphite matte",
    description: "Soft-touch matte fronts with oak open shelving detail.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
  },
];

export const finishFilters: CatalogFilter[] = [
  { value: "all", label: "All" },
  { value: "paint", label: "Painted" },
  { value: "wood", label: "Wood & grain" },
  { value: "glass", label: "Glass" },
  { value: "worktop", label: "Worktops" },
];

export const finishSwatches: SwatchItem[] = [
  {
    category: "paint",
    name: "Sage green",
    title: "Sage green",
    subtitle: "Painted shaker",
    swatchStyle: { background: "#9CAF88" },
  },
  {
    category: "paint",
    name: "Soft white",
    title: "Soft white",
    subtitle: "Painted matt",
    swatchStyle: {
      background: "#F4F1EA",
      border: "1px solid var(--line)",
    },
  },
  {
    category: "paint",
    name: "Charcoal",
    title: "Charcoal",
    subtitle: "Handleless gloss",
    swatchStyle: { background: "#3D3D3D" },
  },
  {
    category: "wood",
    name: "Natural oak",
    title: "Natural oak",
    subtitle: "Woodgrain veneer",
    swatchStyle: {
      background: "linear-gradient(135deg,#C4A574,#8B6914)",
    },
  },
  {
    category: "wood",
    name: "Grey oak",
    title: "Grey oak",
    subtitle: "Woodgrain veneer",
    swatchStyle: {
      background: "linear-gradient(135deg,#A89F91,#6B6560)",
    },
  },
  {
    category: "wood",
    name: "Walnut",
    title: "Walnut",
    subtitle: "Interior shelving",
    swatchStyle: {
      background: "linear-gradient(135deg,#5C4033,#3E2723)",
    },
  },
  {
    category: "glass",
    name: "Azure glass",
    title: "Azure glass",
    subtitle: "Splashback colour",
    swatchStyle: {
      background: "linear-gradient(135deg,#4A90D9,#2E5A8B)",
    },
  },
  {
    category: "glass",
    name: "Violet glass",
    title: "Violet glass",
    subtitle: "Splashback colour",
    swatchStyle: {
      background: "linear-gradient(135deg,#7B5BA8,#4A3566)",
    },
  },
  {
    category: "glass",
    name: "Bronze mirror",
    title: "Bronze mirror",
    subtitle: "Wardrobe doors",
    swatchStyle: {
      background: "linear-gradient(135deg,#8B7355,#5C4A3A)",
    },
  },
  {
    category: "worktop",
    name: "Quartz white",
    title: "Quartz white",
    subtitle: "Kitchen worktop",
    swatchStyle: {
      background: "linear-gradient(135deg,#E8E8E8,#D0D0D0)",
    },
  },
  {
    category: "worktop",
    name: "Concrete grey",
    title: "Concrete grey",
    subtitle: "Kitchen worktop",
    swatchStyle: {
      background: "linear-gradient(135deg,#9E9E9E,#616161)",
    },
  },
  {
    category: "worktop",
    name: "Butcher block",
    title: "Butcher block",
    subtitle: "Oak island top",
    swatchStyle: {
      background: "linear-gradient(135deg,#DEB887,#8B6914)",
    },
  },
];

export const storageFilters: CatalogFilter[] = [
  { value: "all", label: "All" },
  { value: "living", label: "Living" },
  { value: "hall", label: "Hall & stairs" },
  { value: "office", label: "Home office" },
];

export const storageProducts: ProductItem[] = [
  {
    category: "living",
    name: "Media wall",
    tag: "Living",
    title: "Media wall",
    description:
      "TV unit with concealed cabling, shelving and optional fireplace surround.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  },
  {
    category: "hall",
    name: "Under-stairs",
    tag: "Hall & stairs",
    title: "Under-stairs",
    description:
      "Pull-out drawers and hanging for coats, shoes and utilities.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
  {
    category: "office",
    name: "Home office",
    tag: "Home office",
    title: "Built-in desk",
    description:
      "Floating desk with overhead cupboards and cable management.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120b2?w=600&q=80",
  },
  {
    category: "living",
    name: "Alcove shelving",
    tag: "Living",
    title: "Alcove shelving",
    description: "Floor-to-ceiling units flanking chimney breasts.",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
  },
  {
    category: "hall",
    name: "Boot room",
    tag: "Hall & stairs",
    title: "Boot room",
    description: "Bench seating, hooks and cubbies for muddy boots and bags.",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
  },
  {
    category: "office",
    name: "Library wall",
    tag: "Home office",
    title: "Library wall",
    description: "Open shelving with ladder rail for tall book collections.",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
  },
];
