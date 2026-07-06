const steps = [
  {
    num: "01 / measure",
    title: "Consult",
    text: "We come to you, measure up, and talk through what you need.",
  },
  {
    num: "02 / plan",
    title: "Design",
    text: "You get a clear plan before anything's built.",
  },
  {
    num: "03 / build",
    title: "Manufacture",
    text: "Built in our own workshop, to your exact measurements.",
  },
  {
    num: "04 / fit",
    title: "Install",
    text: "Fitted cleanly, on schedule, with no surprises.",
  },
];

export function Process() {
  return (
    <section>
      <div className="eyebrow">How it works</div>
      <h2>How a project runs</h2>
      <div className="steps">
        {steps.map((step) => (
          <div key={step.num} className="step">
            <div className="num">{step.num}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
