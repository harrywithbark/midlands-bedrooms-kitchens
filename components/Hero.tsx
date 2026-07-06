export function Hero() {
  return (
    <section className="hero">
      <span className="hero-badge">Leicester workshop · Bespoke only</span>
      <div
        className="photo bracketed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80')",
        }}
      >
        <span className="bl" />
        <span className="br" />
        <span className="ph-label">
          [ placeholder — replace with your hero project photo ]
        </span>
      </div>
      <h1>
        Bespoke fitted wardrobes and kitchens, built in our own workshop.
      </h1>
      <p style={{ marginLeft: "auto", marginRight: "auto" }}>
        No flatpack. No outsourcing. Just made-to-measure furniture, designed
        for your space and fitted right the first time.
      </p>
      <div className="cta-row">
        <a className="cta" href="#contact">
          Book a free consultation
        </a>
        <a className="cta-secondary" href="#gallery">
          View recent work
        </a>
      </div>
    </section>
  );
}
