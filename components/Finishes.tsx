import { Catalog, CatalogBlock } from "./Catalog";
import {
  finishFilters,
  finishSwatches,
  storageFilters,
  storageProducts,
} from "@/lib/catalog-data";

export function Finishes() {
  return (
    <section id="finishes" className="compact">
      <div className="eyebrow">Materials</div>
      <h2>Finishes & bespoke storage</h2>
      <p style={{ maxWidth: "640px", marginBottom: "24px" }}>
        Choose door styles, colours and worktop materials — or explore custom
        storage beyond bedrooms and kitchens.
      </p>

      <Catalog
        id="finishes"
        ariaLabel="Filter finishes"
        sidebarTitle="Finish type"
        filters={finishFilters}
        countSuffix="options"
        initialCount={12}
        layoutClass="finishes-layout"
        showSort={false}
        showColumnToggle={false}
        variant="swatches"
        swatches={finishSwatches}
      />

      <div className="storage-block" id="storage">
        <CatalogBlock
          id="storage-catalog"
          breadcrumb={{ parent: "Bespoke", current: "Storage solutions" }}
          title="Custom storage beyond wardrobes"
        >
          <Catalog
            id="storage"
            ariaLabel="Filter storage types"
            sidebarTitle="Room"
            filters={storageFilters}
            countSuffix="solutions"
            initialCount={6}
            showSort={false}
            showColumnToggle={false}
            variant="products"
            products={storageProducts}
          />
        </CatalogBlock>
      </div>
    </section>
  );
}
