import Link from "next/link";

export default function SamplePolicy({ compact = false }) {
  return (
    <section className={compact ? "" : "mx-auto max-w-7xl px-6 pb-16"}>
      <article className="rounded-[1.5rem] border border-gold/35 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Sample Credit Program</p>
        <h2 className="mt-3 text-2xl font-semibold text-forest">Curated green coffee samples for qualified buyers.</h2>
        <p className="mt-4 text-sm leading-7 text-ink/75">
          We provide curated green coffee samples for qualified buyers before commercial orders. Buyers may request
          selected Kenyan grades including AA, AB, PB, and C depending on availability.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {["3 x 250g green coffee samples", "DHL / express courier shipping", "Sample cost credited against the first confirmed commercial order"].map((item) => (
            <div key={item} className="rounded-lg bg-beige p-4 text-sm font-medium leading-6 text-forest">
              {item}
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm leading-7 text-ink/75">
          This gives buyers confidence before committing to larger volumes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
            Request Coffee Samples
          </Link>
          <a href="/sample-policy.pdf" className="inline-flex rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
            Download Sample Policy PDF
          </a>
        </div>
      </article>
    </section>
  );
}
