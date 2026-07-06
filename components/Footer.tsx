export function Footer() {
  return (
    <footer>
      <div className="fname">Midlands Bedrooms & Kitchens</div>
      <div>Bespoke fitted wardrobes and kitchens, built in-house.</div>
      <div className="links">
        <a href="#wardrobes">Wardrobes</a>
        <a href="#kitchens">Kitchens</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        Serving Leicester and surrounding towns ·{" "}
        <a href="tel:+447312094979">073 1209 4979</a> ·{" "}
        <a href="tel:+447577443300">075 7744 3300</a>
      </div>
      <div style={{ marginTop: "12px", opacity: 0.7 }}>
        By appointment · © 2026
      </div>
    </footer>
  );
}
