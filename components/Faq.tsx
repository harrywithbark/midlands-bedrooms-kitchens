const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most wardrobe installs take 2–3 days. Kitchens usually run 2–4 weeks from sign-off to final fit. We'll confirm a firm timeline after the free consultation.",
  },
  {
    question: "Do you offer a free quote?",
    answer:
      "Yes. We come out, measure the space, and talk through what you need — no cost, no obligation.",
  },
  {
    question: "Do you work outside Leicester?",
    answer:
      "We cover Leicester, Loughborough, Market Harborough, Hinckley, and surrounding towns. Get in touch and we'll confirm if we can reach you.",
  },
  {
    question: "Is there a guarantee on the work?",
    answer:
      "Placeholder — we offer a 5-year guarantee on workmanship. Confirm exact terms with your team before publishing.",
  },
  {
    question: "Can I see examples before committing?",
    answer:
      "Yes — browse our gallery above or message us on WhatsApp. We're happy to talk through similar projects we've completed nearby.",
  },
];

export function Faq() {
  return (
    <section className="compact">
      <div className="eyebrow">Questions</div>
      <h2>Common questions</h2>
      <div className="faq-accordion">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
