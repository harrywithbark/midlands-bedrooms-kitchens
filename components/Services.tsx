const services = [
  {
    tag: "01",
    title: "Wardrobes",
    text: "Sliding, mirrored, and shaker-door wardrobes, fitted to fill every inch of your room.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  },
  {
    tag: "02",
    title: "Kitchens",
    text: "German, Italian, and British kitchen brands, fitted with the finish and detail of a full showroom build.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80",
  },
  {
    tag: "03",
    title: "Bespoke storage",
    text: "Walk-in closets, media walls, and custom units designed around how you actually use the space.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120b2?w=600&q=80",
  },
];

export function Services() {
  return (
    <section>
      <div className="eyebrow">What we build</div>
      <h2>Three ways we can help</h2>
      <div className="grid3">
        {services.map((service) => (
          <div key={service.tag} className="card">
            <div
              className="card-img"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <span className="tag">{service.tag}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
