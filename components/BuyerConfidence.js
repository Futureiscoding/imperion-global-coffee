const confidencePoints = [
  "Traceable Kenyan sourcing",
  "AA, AB, PB, and C grade options",
  "Moisture and screen size checks",
  "Sample credit program",
  "FOB Mombasa and CIF support",
  "Export documentation support",
  "Responsive buyer communication",
  "Coffee-first sourcing focus",
];

export default function BuyerConfidence({ compact = false }) {
  return (
    <section className={compact ? "" : "mx-auto max-w-7xl px-6 pb-16"}>
      <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Buyer Confidence Points</p>
        <h2 className="mt-3 text-3xl font-semibold text-forest">Built for serious coffee sourcing conversations.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {confidencePoints.map((point) => (
            <article key={point} className="rounded-[1.25rem] bg-beige/60 p-5">
              <h3 className="text-sm font-semibold leading-6 text-forest">{point}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
