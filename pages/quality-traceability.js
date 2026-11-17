import Link from "next/link";
import Seo from "@/components/Seo";

const qualitySignals = [
  "Origin and region context",
  "Variety and growing profile",
  "Grade and screen size",
  "Moisture content",
  "Processing method",
  "Crop year and harvest window",
  "Cupping score and taste notes",
  "Lot-level traceability information"
];

export default function QualityTraceabilityPage() {
  return (
    <>
      <Seo
        title="Quality & Traceability | Imperion Global Holdings"
        description="Learn how Imperion evaluates Kenyan coffee through origin, grade, processing, moisture, cupping score, and lot-level traceability."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Quality & Traceability</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            Every Lot Has a Story. Every Specification Has a Purpose.
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Buyers need more than a grade label. They need context. We use origin information, processing details,
            physical analysis, and cupping data to help buyers understand the coffee they are evaluating before a commercial commitment.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {qualitySignals.map((signal) => (
            <article key={signal} className="rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-forest">{signal}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] bg-forest p-10 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Traceability</p>
          <h2 className="mt-3 text-3xl font-semibold">Lot information should be clear, usable and relevant.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/80">
            A lot can be evaluated through origin, process, grade, screen size, moisture, processing conditions and cup profile.
            This makes it easier for roasters, importers and trading teams to match coffee to their product or market position.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/coffee/current-lots" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              View Current Lots
            </Link>
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              Request Samples
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
