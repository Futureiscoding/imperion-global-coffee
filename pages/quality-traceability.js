import Link from "next/link";
import Seo from "@/components/Seo";
import { geoMapping } from "@/content/rebuild-kit";

const qualitySignals = [
  "Moisture",
  "Screen size and density",
  "Defect count",
  "Cupping",
  "Retained reference sample",
  "Pre-shipment sample approval",
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
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Quality and Traceability</p>
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
        <h2 className="section-title">Geo-mapping progress</h2>
        <p className="section-copy">The EU Deforestation Regulation applies from 30 December 2026 to large and medium operators and from 30 June 2027 to micro and small operators. Coffee must not come from land deforested after 31 December 2020.</p>
        <div className="mt-8 overflow-x-auto rounded-[1.5rem] border border-forest/10 bg-white">
          <table className="w-full min-w-[700px] text-left text-sm">
            <caption className="sr-only">Plot-level geo-mapping progress by sourcing region</caption>
            <thead className="border-b border-forest/10 bg-beige/60"><tr><th scope="col" className="p-5">Region</th><th scope="col" className="p-5">Geo-mapping status</th><th scope="col" className="p-5">As of</th></tr></thead>
            <tbody>{geoMapping.regions.map((row) => <tr key={row.region}><td className="p-5 text-stone">{row.region}</td><td className="p-5 font-semibold text-forest">{row.status}</td><td className="p-5 font-mono">{row.updated}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-cherry">
          One sample map was provided for Central Kenya; this does not establish that the wider region is fully mapped or verified.
          Plot-level coordinates are not published.
        </p>
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
            <Link href="/coffee" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              Request the offer sheet
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
