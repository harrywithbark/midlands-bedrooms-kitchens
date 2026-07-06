import { QuoteForm } from "./QuoteForm";

const areas = [
  "Leicester",
  "Loughborough",
  "Market Harborough",
  "Hinckley",
  "Coalville",
  "Melton Mowbray",
];

export function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrap">
        <div>
          <div className="eyebrow">Get in touch</div>
          <h2>Get a quote</h2>
          <p>
            Tell us a bit about your project and we&apos;ll get back to you —
            usually same day via WhatsApp or phone.
          </p>
          <div className="contact-details">
            <p>
              <strong>Phone</strong>
              <br />
              <a href="tel:+447312094979">073 1209 4979</a>
              <br />
              <a href="tel:+447577443300">075 7744 3300</a>
            </p>
            <p>
              <strong>Hours</strong>
              <br />
              Mon–Sat, by appointment
            </p>
            <p>
              <strong>Workshop</strong>
              <br />
              <span className="placeholder-note">
                [ Add full street address ]
              </span>
              , Leicester
            </p>
            <p>
              <strong>Areas we cover</strong>
            </p>
            <div className="areas">
              {areas.map((area) => (
                <span key={area} className="area-tag">
                  {area}
                </span>
              ))}
            </div>
            <div className="map-placeholder">
              [ Map placeholder — embed Google Maps when address confirmed ]
            </div>
          </div>
        </div>
        <div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
