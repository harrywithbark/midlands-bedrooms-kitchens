import { Catalog, CatalogBlock } from "./Catalog";
import { kitchenFilters, kitchenProducts } from "@/lib/catalog-data";

export function Kitchens() {
  return (
    <section id="kitchens" className="compact">
      <div className="split-section reverse">
        <div>
          <div className="eyebrow">Kitchens</div>
          <h2>Designer finish, without the showroom markup</h2>
          <p>
            We work with German, Italian, and British kitchen suppliers to bring
            you a proper designer finish. Integrated appliances, handleless gloss
            or matte fronts, and one detail most fitters don&apos;t offer —
            custom coloured glass splashbacks, made to match your kitchen
            exactly.
          </p>
          <div
            className="grid3 features"
            style={{ gridTemplateColumns: "1fr", marginTop: "20px" }}
          >
            <div className="feature">Handleless & shaker-style fronts</div>
            <div className="feature">Integrated ovens, hobs & extraction</div>
            <div
              className="feature"
              style={{ borderLeftColor: "var(--brand-hover)" }}
            >
              Custom glass splashback colours
            </div>
          </div>
        </div>
        <div
          className="split-photo bracketed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600489000022-208129279abb?w=800&q=80')",
          }}
        >
          <span className="bl" />
          <span className="br" />
          <span className="ph-label">[ placeholder photo ]</span>
        </div>
      </div>

      <CatalogBlock
        id="kitchen-styles"
        breadcrumb={{ parent: "Kitchens", current: "Styles" }}
        title="Browse kitchen styles"
        intro="German, Italian and British supplier ranges — fitted by our team with integrated appliances and optional custom glass splashbacks."
      >
        <Catalog
          id="kitchens"
          ariaLabel="Filter kitchen styles"
          sidebarTitle="Categories"
          filters={kitchenFilters}
          countSuffix="styles"
          initialCount={9}
          sidebarNote="Supplier brands — confirm list before launch"
          variant="products"
          products={kitchenProducts}
        />
      </CatalogBlock>
    </section>
  );
}
