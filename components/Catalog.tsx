"use client";

import { useMemo, useState } from "react";
import type { CatalogFilter, ProductItem, SwatchItem } from "@/lib/catalog-data";

type CatalogProps = {
  id: string;
  ariaLabel: string;
  sidebarTitle: string;
  filters: CatalogFilter[];
  countSuffix: string;
  initialCount: number;
  sidebarNote?: string;
  showSort?: boolean;
  showColumnToggle?: boolean;
  layoutClass?: string;
  variant: "products" | "swatches";
  products?: ProductItem[];
  swatches?: SwatchItem[];
};

type SortMode = "featured" | "az";
type Cols = 2 | 3 | 4;

function sortProducts(items: ProductItem[], mode: SortMode) {
  const sorted = [...items];
  if (mode === "az") {
    sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }
  sorted.sort((a, b) => {
    const badgeA = a.badge ? 0 : 1;
    const badgeB = b.badge ? 0 : 1;
    return badgeA - badgeB || a.name.localeCompare(b.name);
  });
  return sorted;
}

function sortSwatches(items: SwatchItem[]) {
  return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

export function Catalog({
  id,
  ariaLabel,
  sidebarTitle,
  filters,
  countSuffix,
  initialCount,
  sidebarNote,
  showSort = true,
  showColumnToggle = true,
  layoutClass,
  variant,
  products = [],
  swatches = [],
}: CatalogProps) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortMode, setSortMode] = useState<SortMode>("featured");
  const [cols, setCols] = useState<Cols>(3);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter(
      (item) => activeFilter === "all" || item.category === activeFilter,
    );
    return sortProducts(filtered, sortMode);
  }, [products, activeFilter, sortMode]);

  const visibleSwatches = useMemo(() => {
    const filtered = swatches.filter(
      (item) => activeFilter === "all" || item.category === activeFilter,
    );
    return sortSwatches(filtered);
  }, [swatches, activeFilter]);

  const visibleCount =
    variant === "products" ? visibleProducts.length : visibleSwatches.length;

  return (
    <div
      className={`catalog-layout${layoutClass ? ` ${layoutClass}` : ""}`}
      data-catalog={id}
    >
      <aside className="catalog-sidebar" aria-label={ariaLabel}>
        <h4>{sidebarTitle}</h4>
        <ul className="catalog-cats">
          {filters.map((filter) => (
            <li key={filter.value}>
              <button
                type="button"
                className={`catalog-cat${activeFilter === filter.value ? " active" : ""}`}
                data-filter={filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>
        {sidebarNote ? (
          <div className="catalog-sidebar-note">
            <span className="placeholder-note">{sidebarNote}</span>
          </div>
        ) : null}
      </aside>

      <div className="catalog-main">
        <div className="catalog-toolbar">
          <span className="catalog-count">
            Showing <strong>{visibleCount || initialCount}</strong> {countSuffix}
          </span>
          {showSort || showColumnToggle ? (
            <div className="catalog-toolbar-right">
              {showSort && variant === "products" ? (
                <label className="catalog-sort">
                  <span>Sort</span>
                  <select
                    className="catalog-sort-select"
                    aria-label={`Sort ${countSuffix}`}
                    value={sortMode}
                    onChange={(event) =>
                      setSortMode(event.target.value as SortMode)
                    }
                  >
                    <option value="featured">Featured</option>
                    <option value="az">Name A–Z</option>
                  </select>
                </label>
              ) : null}
              {showColumnToggle && variant === "products" ? (
                <div className="catalog-cols" role="group" aria-label="Grid columns">
                  {([2, 3, 4] as Cols[]).map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`col-btn${cols === value ? " active" : ""}`}
                      data-cols={value}
                      aria-label={`${value} columns`}
                      onClick={() => setCols(value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        {variant === "products" ? (
          <div className={`catalog-grid cols-${cols}`} id={`${id}Grid`}>
            {visibleProducts.map((product) => (
              <article
                key={product.name}
                className="product-card"
                data-category={product.category}
                data-name={product.name}
              >
                <a
                  className="product-thumb"
                  href="#contact"
                  style={{ backgroundImage: `url('${product.image}')` }}
                >
                  {product.badge ? (
                    <span className="product-badge">{product.badge}</span>
                  ) : null}
                </a>
                <div className="product-body">
                  <span className="product-cat">{product.tag}</span>
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <a className="product-enquire" href="#contact">
                    Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="swatch-grid" id={`${id}Grid`}>
            {visibleSwatches.map((swatch) => (
              <article
                key={swatch.name}
                className="swatch-card"
                data-category={swatch.category}
                data-name={swatch.name}
              >
                <div className="swatch" style={swatch.swatchStyle} />
                <h4>{swatch.title}</h4>
                <p>{swatch.subtitle}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type CatalogBlockProps = {
  id: string;
  breadcrumb: { parent: string; current: string };
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function CatalogBlock({
  id,
  breadcrumb,
  title,
  intro,
  children,
}: CatalogBlockProps) {
  return (
    <div className="catalog-block" id={id}>
      <div className="catalog-header">
        <nav className="catalog-breadcrumb" aria-label="Breadcrumb">
          <span>{breadcrumb.parent}</span> / <strong>{breadcrumb.current}</strong>
        </nav>
        <h3>{title}</h3>
        {intro ? <p className="catalog-intro">{intro}</p> : null}
      </div>
      {children}
    </div>
  );
}
