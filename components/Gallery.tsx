"use client";

import { useMemo, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {
  galleryItems,
  whatsappUrl,
  type GalleryCategory,
} from "@/lib/gallery-data";

type Filter = "all" | GalleryCategory;
type SortMode = "featured" | "az";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "wardrobes", label: "Wardrobes" },
  { value: "kitchens", label: "Kitchens" },
  { value: "storage", label: "Storage" },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [sortMode, setSortMode] = useState<SortMode>("featured");

  const visibleItems = useMemo(() => {
    const filtered = galleryItems.filter(
      (item) => activeFilter === "all" || item.category === activeFilter,
    );

    if (sortMode === "az") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [activeFilter, sortMode]);

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

      <div className="catalog-toolbar gallery-toolbar">
        <span className="catalog-count" id="galleryCount">
          Showing <strong>{visibleItems.length}</strong> projects
        </span>
        <div className="catalog-toolbar-right">
          <label className="catalog-sort">
            <span>Sort</span>
            <select
              className="catalog-sort-select"
              id="gallerySort"
              aria-label="Sort gallery"
              value={sortMode}
              onChange={(event) =>
                setSortMode(event.target.value as SortMode)
              }
            >
              <option value="featured">Featured</option>
              <option value="az">Name A–Z</option>
            </select>
          </label>
        </div>
      </div>

      <div className="gallery-grid" id="galleryGrid">
        {visibleItems.map((item) => (
          <figure
            key={item.name}
            data-category={item.category}
            data-name={item.name}
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
        ))}
      </div>
    </section>
  );
}
