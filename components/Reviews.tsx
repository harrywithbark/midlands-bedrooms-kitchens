const reviews = [
  {
    quote:
      "Brilliant from start to finish. They measured properly, built everything in their workshop, and the fit was spot on.",
    author: "— Sarah M., Oadby",
  },
  {
    quote:
      "Our kitchen looks like it came out of a showroom. The custom glass splashback was exactly the colour we wanted.",
    author: "— James & Priya K., Leicester",
  },
  {
    quote:
      "Walk-in wardrobe with LED lighting transformed our bedroom. Proper craftsmen, not a flatpack crew.",
    author: "— David T., Loughborough",
  },
  {
    quote:
      "Free quote, no pushy sales, and they stuck to the timeline. WhatsApp made it easy to ask questions.",
    author: "— Emma R., Market Harborough",
  },
];

export function Reviews() {
  return (
    <section className="compact">
      <div className="eyebrow">Reviews</div>
      <h2>What our clients say</h2>
      <div className="review-header">
        <strong>4.9</strong> from <span>placeholder</span> Google reviews ·{" "}
        <span className="placeholder-note">swap for real reviews</span>
      </div>
      <div className="reviews">
        {reviews.map((review) => (
          <div key={review.author} className="review">
            <div className="stars">★★★★★</div>
            <em>&ldquo;{review.quote}&rdquo;</em>
            <span>
              {review.author}{" "}
              <span className="placeholder-note">placeholder</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
