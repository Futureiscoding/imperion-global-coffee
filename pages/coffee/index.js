import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";
import SamplePolicy from "@/components/SamplePolicy";
import DownloadAssets from "@/components/DownloadAssets";

const grades = [
  ["AA", "Large 17-19 screen beans for premium lots with bright, complex cup potential."],
  ["AB", "Balanced 15-16 screen coffee widely used by specialty and commercial buyers."],
  ["PB", "Selected peaberry lots with fruit-forward sweetness and limited availability."],
  ["C", "Smaller 13-14 screen coffee for mild cups, bulk programs, and blends."],
];

const qualityChecks = [
  "Moisture checks before shipment",
  "Screen size confirmation",
  "Cupping and sensory evaluation",
  "Physical bean review",
  "Lot and documentation review",
  "Shipment communication from origin",
];

const documents = [
  "Commercial invoice and packing list",
  "Certificate of Origin",
  "Phytosanitary support",
  "Moisture and quality details",
  "Lot sheet and sample notes",
  "FOB Mombasa or CIF quotation support",
];

export default function CoffeePage() {
  return (
    <>
      <Seo
        title="Kenyan Coffee for Buyers | Imperion Global Holdings"
        description="Kenyan coffee built for buyers who need traceability, quality, consistency, samples, available lots, and export documentation."
      />

      <section className="relative overflow-hidden bg-forest">
        <Image src="/images/coffee-farm-hero.jpg" alt="Kenyan coffee farm" fill priority className="object-cover opacity-35" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Flagship Coffee Program</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Kenyan Coffee Built for Buyers Who Need Traceability, Quality, and Consistency
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              Fully washed Kenyan coffees prepared for roasters, importers, and green coffee buyers who need clear
              grade, cup, moisture, documentation, and shipment communication before committing to volume.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
                Request Samples
              </Link>
              <Link href="/coffee/lots" className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                View Available Lots
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          {grades.map(([grade, body]) => (
            <article key={grade} className="rounded-[1.5rem] border border-forest/10 bg-white p-7 shadow-soft">
              <p className="text-4xl font-semibold text-forest">{grade}</p>
              <p className="mt-4 text-sm leading-7 text-ink/75">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[1.5rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Processing</p>
            <h2 className="mt-3 text-2xl font-semibold text-forest">Fully washed Kenyan coffees.</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              We focus on clean, export-ready washed Kenyan lots with the clarity, acidity, and traceability buyers
              expect from Kenya origin coffee.
            </p>
          </article>

          <article className="rounded-[1.5rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Control</p>
            <h2 className="mt-3 text-2xl font-semibold text-forest">Measurable quality before export.</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
              {qualityChecks.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="rounded-[1.5rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Export Documentation</p>
            <h2 className="mt-3 text-2xl font-semibold text-forest">Trade documents buyers can review.</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
              {documents.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <SamplePolicy />
      <DownloadAssets />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[1.5rem] bg-forest p-8 text-white shadow-soft">
          <h2 className="text-3xl font-semibold">Ready to evaluate Kenyan coffee lots?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/80">
            Share your preferred grade, target bag count, market, and Incoterm. Our export team will respond with
            sample options, available lots, or quotation information.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/contact" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              Request Samples
            </Link>
            <Link href="/coffee/lots" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              View Available Lots
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
