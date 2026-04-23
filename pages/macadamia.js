import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Kenyan Macadamia Nuts",
  brand: "Imperion Global Holdings Limited",
  description:
    "High-oil Kenyan macadamia nuts processed under strict food safety standards for snack, confectionery, and industrial-grade buyers.",
  category: "Nuts",
};

const productForms = [
  "Raw Nut in Shell",
  "Raw Kernel",
  "Styles: 0, 1, 1L, 2, 4L, 5, 6",
];

const qualityStandards = [
  "Moisture <1.5%",
  "Hand and machine grading",
  "Aflatoxin-free",
  "Nitrogen-flush packaging (optional)",
];

const packaging = [
  "5kg, 11.34kg (25lb), 20kg vacuum-sealed bags",
  "Bulk export cartons",
  "Batch codes and traceability included",
];

const bestFor = [
  "Snack manufacturers",
  "Nut processors",
  "Bakery & confectionery companies",
  "Health food distributors",
];

const gallery = [
  {
    title: "Macadamia Farm Background",
    image: "/images/media-macadamia-field.jpg",
    body: "Field imagery showing orchard sourcing, harvest readiness, and buyer-facing origin context.",
  },
  {
    title: "Packhouse and Processing",
    image: "/images/media-macadamia-factory.jpg",
    body: "Processing visuals for receiving, drying, cracking, grading, and export preparation workflows.",
  },
  {
    title: "Packed for Shipment",
    image: "/images/Warehouse.jpg",
    body: "Shipment-ready cargo presentation for vacuum-sealed product and export pallet coordination.",
  },
];

export default function MacadamiaPage() {
  return (
    <>
      <Seo
        title="Premium Kenyan Macadamia Nuts — High Oil, Export Grade"
        description="Export-grade Kenyan macadamia nuts with high oil content, food safety handling, grading, traceability, and buyer-ready packaging."
        structuredData={productSchema}
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21, 58, 43, 0.55), rgba(21, 58, 43, 0.72)), url('/images/media-macadamia-field.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Macadamia Exports</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Premium Kenyan Macadamia Nuts — High Oil, Export Grade
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              We export high-oil Kenyan macadamia, processed under strict food safety standards to meet
              confectionery, snack, and industrial-grade requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/spec-sheet-template.pdf"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest shadow-soft hover:bg-gold/90"
              >
                Download Macadamia Specs
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">High-oil Kenyan macadamia for serious buyers</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              Our macadamia program is built for ingredient buyers and processors who need food safety discipline,
              consistent grading, and export-ready documentation. We support commercial supply conversations with
              traceability and packaging formats aligned to market requirements.
            </p>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Product Forms</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {productForms.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Standards</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {qualityStandards.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Packaging</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {packaging.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Best For</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {bestFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Visual Proof</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest">Field, packhouse, and shipment visuals</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
              <div className="aspect-[4/3] bg-beige">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold">Move from product review to commercial quotation.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Request a quotation, specification pack, or shipment discussion if you are evaluating Kenyan
              macadamia for manufacturing, processing, or distribution.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/spec-sheet-template.pdf"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90"
              >
                Download Macadamia Specs
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Request a Quote
              </Link>
            </div>
          </article>

          <ContactForm title="Request a Macadamia Quote" />
        </div>
      </section>
    </>
  );
}
