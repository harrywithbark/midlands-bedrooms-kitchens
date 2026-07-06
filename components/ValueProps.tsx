const valueProps = [
  {
    icon: "01",
    title: "Workshop-built",
    text: "Designed and made in our own workshop, not bought in flatpack.",
  },
  {
    icon: "02",
    title: "Free measure-up",
    text: "We come to you, measure properly, and quote with no obligation.",
  },
  {
    icon: "03",
    title: "5-year guarantee",
    text: "Placeholder — confirm your actual warranty terms before launch.",
  },
  {
    icon: "04",
    title: "Local coverage",
    text: "Leicester, Loughborough, Market Harborough & surrounding towns.",
  },
];

export function ValueProps() {
  return (
    <div className="value-props">
      {valueProps.map((prop) => (
        <div key={prop.icon} className="value-prop">
          <div className="vp-icon">{prop.icon}</div>
          <h3>{prop.title}</h3>
          <p>{prop.text}</p>
        </div>
      ))}
    </div>
  );
}
