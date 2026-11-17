const processSteps = [
  ["Buyer brief and demand planning", "Buyer grade, volume, destination, timing, documentation, and sample needs are aligned with sourcing windows."],
  ["Origin and producer alignment", "Farm, cooperative, estate, or mill options are matched to the requested cup profile, grade, and traceability level."],
  ["Cherry selection and intake controls", "Ripe cherry intake is weighed, recorded, and separated to protect lot identity from the first handling point."],
  ["Sorting and preparation", "Visual sorting removes underripe, overripe, damaged cherry, and foreign material before processing begins."],
  ["Pulping and fermentation monitoring", "Pulping and fermentation are monitored against site conditions, timing, water quality, and cup objectives."],
  ["Washing and parchment handling", "Washed parchment is rinsed, moved carefully, and kept identified before drying."],
  ["Raised-bed drying", "Drying is managed with turning, airflow, and shade decisions to protect clarity and reduce uneven moisture risk."],
  ["Moisture monitoring", "Moisture readings guide movement into conditioning, storage, milling, and export preparation."],
  ["Hulling, grading, and screen sorting", "Coffee is hulled, graded, and screen sorted against buyer specifications including AA, AB, PB, and C."],
  ["Sample roasting and cupping review", "Representative samples are roasted and cupped to review cup profile, defects, and commercial fit."],
  ["Bagging, labelling, and export preparation", "Approved coffee is packed, labelled, and matched with the relevant buyer and export document requirements."],
  ["Shipment booking and buyer updates", "Shipment planning, dispatch timing, document pack review, and buyer updates close the export workflow."],
];

export default function ProcessFlow() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {processSteps.map(([title, body], index) => (
        <li
          key={title}
          className="rounded-[1.5rem] border border-forest/10 bg-white p-5 shadow-soft"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Step {index + 1}</p>
          <h3 className="mt-3 text-lg font-semibold text-forest">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink/80">{body}</p>
        </li>
      ))}
    </ol>
  );
}
