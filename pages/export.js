import Link from "next/link";
import Seo from "@/components/Seo";

const exportSteps = [
  "Receive and sort",
  "Mill, grade and cup",
  "Truck to Mombasa",
  "Prepare and release export documents",
  "Load and ship",
  "Share shipment updates"
];

export default function ExportPage() {
  return (
    <>
      <Seo
        title="Export Coordination | Imperion Global Holdings"
        description="Learn how Imperion supports coffee export buyers through inquiry, sample review, documentation, packaging and shipping coordination."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Export</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl">Structured export coordination for Kenyan coffee buyers.</h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Our export service is designed to support international buyers with a clear communication path from first inquiry to final shipment.
            We focus on coffee quality, documentation, and operational coordination without over-promising services we do not directly control.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {exportSteps.map((step, index) => (
            <article key={step} className="rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">0{index + 1}</p>
              <h2 className="mt-4 text-xl font-semibold text-forest">{step}</h2>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Commercial clarity</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest">FOB Mombasa, CIF or CFR by agreement.</h2>
          <dl className="mt-6 grid gap-px overflow-hidden border border-forest/10 bg-forest/10 sm:grid-cols-2">
            {[
              ["Packaging", "60 kg jute or GrainPro, subject to the offer"],
              ["Minimum order", "To be confirmed for each offer"],
              ["Payment", "Commercial terms to be confirmed in writing"],
              ["Lead time", "To be confirmed after contract"],
              ["Documents", "Invoice, packing list and shipment-specific export documents"],
            ].map(([term, detail]) => (
              <div key={term} className="bg-white p-5">
                <dt className="text-sm font-bold text-forest">{term}</dt>
                <dd className="mt-2 text-sm text-stone">{detail}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm leading-8 text-ink/75">
            Incoterms are discussed based on the buyer's destination, shipping requirements, and documentation needs. Any final quotation, price basis,
            packaging, shipping arrangement and export terms are aligned directly with the buyer and the specific transaction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
              Submit Coffee Request
            </Link>
            <Link href="/coffee" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
              Request the offer sheet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
