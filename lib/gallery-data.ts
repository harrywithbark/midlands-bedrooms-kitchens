import type { CSSProperties } from "react";

export type GalleryCategory = "wardrobes" | "kitchens" | "storage";

export type GalleryItem = {
  category: GalleryCategory;
  name: string;
  image: string;
  imageStyle?: CSSProperties;
  caption: string;
  tag: string;
  whatsappText: string;
};

export const galleryItems: GalleryItem[] = [
  {
    category: "wardrobes",
    name: "Sage shaker wardrobes — Leicester",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    caption: "Sage shaker wardrobes — Leicester",
    tag: "Wardrobes",
    whatsappText:
      "Hi, I'm interested in the sage shaker wardrobe project shown on your site. Could you tell me more?",
  },
  {
    category: "wardrobes",
    name: "Walk-in system, LED shelving",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    caption: "Walk-in system, LED shelving",
    tag: "Wardrobes",
    whatsappText:
      "Hi, I'm interested in the LED walk-in wardrobe system shown on your site. Could you tell me more?",
  },
  {
    category: "kitchens",
    name: "Handleless grey gloss kitchen",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
    caption: "Handleless grey gloss kitchen",
    tag: "Kitchens",
    whatsappText:
      "Hi, I'm interested in the handleless grey gloss kitchen shown on your site. Could you tell me more?",
  },
  {
    category: "wardrobes",
    name: "Sliding mirror door wardrobe",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
    caption: "Sliding mirror door wardrobe",
    tag: "Wardrobes",
    whatsappText:
      "Hi, I'm interested in the sliding mirror door wardrobe shown on your site. Could you tell me more?",
  },
  {
    category: "kitchens",
    name: "Custom blue glass splashback",
    image:
      "https://images.unsplash.com/photo-1600489000022-208129279abb?w=600&q=80",
    imageStyle: {
      background: "linear-gradient(160deg,#3A4A6E,#242E44)",
    },
    caption: "Custom blue glass splashback",
    tag: "Kitchens",
    whatsappText:
      "Hi, I'm interested in the custom blue glass splashback kitchen shown on your site. Could you tell me more?",
  },
  {
    category: "kitchens",
    name: "Custom purple glass splashback",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    imageStyle: {
      background: "linear-gradient(160deg,#5A3A6E,#332044)",
    },
    caption: "Custom purple glass splashback",
    tag: "Kitchens",
    whatsappText:
      "Hi, I'm interested in the custom purple glass splashback kitchen shown on your site. Could you tell me more?",
  },
  {
    category: "storage",
    name: "Media wall Leicester",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    caption: "Media wall — Leicester",
    tag: "Storage",
    whatsappText:
      "Hi, I'm interested in the media wall project shown on your site.",
  },
  {
    category: "storage",
    name: "Under-stairs storage",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    caption: "Under-stairs pull-out storage",
    tag: "Storage",
    whatsappText:
      "Hi, I'm interested in under-stairs storage like shown on your site.",
  },
  {
    category: "wardrobes",
    name: "Oak grain fitted",
    image:
      "https://images.unsplash.com/photo-1616137462111-b2e7f9578618?w=600&q=80",
    caption: "Oak grain fitted wardrobes",
    tag: "Wardrobes",
    whatsappText:
      "Hi, I'm interested in oak grain fitted wardrobes shown on your site.",
  },
];

export const WHATSAPP_PHONE = "447312094979";

export function whatsappUrl(text: string) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}`;
}
