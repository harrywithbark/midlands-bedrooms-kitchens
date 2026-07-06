"use client";

import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  galleryItems,
  whatsappUrl,
  type GalleryCategory,
} from "@/lib/gallery-data";

type Filter = "all" | GalleryCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "wardrobes", label: "Wardrobes" },
  { value: "kitchens", label: "Kitchens" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  return (
    <section id="gallery">
      <div className="eyebrow">Recent work</div>
      <h2>A look at recent projects</h2>
      <p style={{ marginBottom: "8px" }}>
        <span className="placeholder-note">
          Gallery uses placeholder stock images — swap for your real project
          photos
        </span>
      </p>

      <div
        className="filter-tabs"
        role="tablist"
        aria-label="Filter gallery by category"
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={`filter-tab${activeFilter === filter.value ? " active" : ""}`}
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid" id="galleryGrid">
        {galleryItems.map((item) => {
          const visible =
            activeFilter === "all" || item.category === activeFilter;

          return (
            <figure
              key={item.caption}
              data-category={item.category}
              className={visible ? undefined : "hidden"}
            >
              <div
                className="ph"
                style={{
                  backgroundImage: `url('${item.image}')`,
                  ...item.imageStyle,
                }}
              />
              <div className="info">
                <figcaption>{item.caption}</figcaption>
                <span className="cat-tag">{item.tag}</span>
                <a
                  className="wa-btn"
                  href={whatsappUrl(item.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon-circle">
                    <WhatsAppIcon />
                  </span>
                  <span className="label">
                    <span className="small">Ask on</span>
                    <span className="big">WhatsApp</span>
                  </span>
                </a>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
