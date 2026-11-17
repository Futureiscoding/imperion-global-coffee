import Link from "next/link";
import Seo from "@/components/Seo";

const exportSteps = [
  "Buyer inquiry and sourcing brief",
  "Coffee selection and lot review",
  "Sample evaluation and approval",
  "Commercial discussion and document requirements",
  "Packaging, loading and export preparation",
  "Shipping coordination and delivery updates"
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
          <h2 className="mt-3 text-3xl font-semibold text-forest">FOB and CIF discussions are handled case by case.</h2>
          <p className="mt-4 text-sm leading-8 text-ink/75">
            Incoterms are discussed based on the buyer's destination, shipping requirements, and documentation needs. Any final quotation, price basis,
            packaging, shipping arrangement and export terms are aligned directly with the buyer and the specific transaction.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
              Submit Coffee Request
            </Link>
            <Link href="/how-to-buy" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
              How to Buy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
