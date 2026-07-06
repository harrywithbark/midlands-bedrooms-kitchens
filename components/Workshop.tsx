const workshopPhotos = [
  {
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    label: "[ workshop photo 1 ]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
    label: "[ workshop photo 2 ]",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565182999561-18fcd7a7559d?w=600&q=80",
    label: "[ workshop photo 3 ]",
  },
];

export function Workshop() {
  return (
    <section>
      <div className="eyebrow">Made in-house</div>
      <h2>Made in our workshop, not bought in flatpack</h2>
      <p>
        Everything we fit is designed and built in-house. That means tighter
        tolerances, better finishes, and furniture that&apos;s actually made for
        your room, not a standard size squeezed into it.
      </p>
      <div className="workshop-grid">
        {workshopPhotos.map((photo) => (
          <div
            key={photo.label}
            className="photo"
            style={{ backgroundImage: `url('${photo.image}')` }}
          >
            {photo.label}
          </div>
        ))}
      </div>
    </section>
  );
}
