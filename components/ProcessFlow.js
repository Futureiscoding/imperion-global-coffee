const processSteps = [
  "Buyer brief and forward demand planning are aligned with crop calendar expectations.",
  "Farm and cooperative partners confirm cherry maturity standards and selective picking dates.",
  "Incoming cherry lots are weighed, tagged, and recorded for traceability.",
  "Visual sorting removes underripe, overripe, and foreign material before pulping.",
  "Pulping and fermentation are monitored against target Brix, pH, and weather conditions.",
  "Washed parchment is rinsed and moved to raised beds or drying tables.",
  "Drying is managed with regular turning and shade control to protect cup quality.",
  "Moisture is checked until the lot reaches export-ready storage range.",
  "Parchment or dried cherry is hulled, graded, and screen-sorted by specification.",
  "Sample roasting, cupping, and QA review confirm profile, defects, and buyer fit.",
  "Bulk coffee is bagged, labeled, palletized, and matched with export documents.",
  "Shipment booking, final document pack, and buyer dispatch updates close the workflow.",
];

export default function ProcessFlow() {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {processSteps.map((step, index) => (
        <li
          key={step}
          className="rounded-[1.5rem] border border-forest/10 bg-white p-5 shadow-soft"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Step {index + 1}</p>
          <p className="mt-3 text-sm leading-7 text-ink/80">{step}</p>
        </li>
      ))}
    </ol>
  );
}
