export function Wardrobes() {
  return (
    <section id="wardrobes" className="compact">
      <div className="split-section">
        <div>
          <div className="eyebrow">Wardrobes</div>
          <h2>Built to fit the room, not the other way around</h2>
          <p>
            Every wardrobe we build starts with a proper measure-up, not a
            catalogue size. Sliding mirror doors to open up a small room,
            shaker-style doors for a classic look, or a full walk-in system with
            shelving, drawers, and hanging space laid out exactly how you need
            it.
          </p>
          <div
            className="grid3 features"
            style={{ gridTemplateColumns: "1fr", marginTop: "20px" }}
          >
            <div className="feature">Sliding, mirrored & hinged doors</div>
            <div className="feature">
              Built-in LED lighting, standard on walk-ins
            </div>
            <div className="feature">
              Oak, grey woodgrain & painted shaker finishes
            </div>
          </div>
        </div>
        <div
          className="split-photo bracketed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80')",
          }}
        >
          <span className="bl" />
          <span className="br" />
          <span className="ph-label">[ placeholder photo ]</span>
        </div>
      </div>
    </section>
  );
}
