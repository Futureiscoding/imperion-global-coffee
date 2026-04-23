import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kenyan Fresh Hass Avocado",
  brand: "Imperion Global Holdings Limited",
  description:
    "Export grade Kenyan Hass and Fuerte avocados with traceability, size sorting, cold-chain handling, and international documentation support.",
  category: "Fresh Produce",
};

const specifications = [
  "Varieties: Hass (main), Fuerte (optional)",
  "Sizes: 12, 14, 16, 18, 20, 22, 24",
  "Oil Content: 18-22%",
  "Residue Standards: Low-residue / Zero-residue options",
];

const qualityProcess = [
  "Pre-cooling",
  "Sorting by size and weight",
  "Cold-chain consistency (4-6°C)",
  "Packaging in ventilated cartons (4kg / 10kg)",
  "Full traceability",
];

const certifications = [
  "KEPHIS Phytosanitary",
  "KEBS compliance",
  "GlobalG.A.P (where applicable)",
];

const shipping = [
  "Reefer container loading",
  "Full documentation: invoice, packing list, CoC, phytosanitary",
  "Export to: Europe, Middle East, Asia",
];

const gallery = [
  {
    title: "Avocado Farm Background",
    image: "/images/media-avocado-field.jpg",
    body: "Field imagery for farm sourcing, maturity checks, and orchard readiness before harvest and packing.",
  },
  {
    title: "Packhouse Photos",
    image: "/images/media-avocado-factory.jpg",
    body: "Packhouse handling, sorting, grading, and export preparation for buyer-facing quality assurance.",
  },
  {
    title: "Container Ready to Ship",
    image: "/images/Warehouse.jpg",
    body: "Palletized export cargo staged for reefer loading and shipment coordination.",
  },
];

export default function AvocadoPage() {
  return (
    <>
      <Seo
        title="Kenyan Fresh Hass Avocado — Export Grade Quality"
        description="Premium Kenyan Hass and Fuerte avocados sourced from certified farms with export documentation, size sorting, traceability, and cold-chain readiness."
        structuredData={productSchema}
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21, 58, 43, 0.55), rgba(21, 58, 43, 0.7)), url('/images/media-avocado-field.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Fresh Avocado Exports</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Kenyan Fresh Hass Avocado — Export Grade Quality
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              We supply premium Hass and Fuerte avocados sourced from certified farms. Each batch meets
              international size, oil content, and residue standards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/spec-sheet-template.pdf"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest shadow-soft hover:bg-gold/90"
              >
                Download Avocado Specs
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Request Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Premium avocado supply for export buyers</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              Our avocado program is built for importers who need consistency, traceability, and readiness for
              international trade. We work with certified farms and quality handling partners to maintain export
              standards from field to final shipment.
            </p>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Specifications</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {specifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Process</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {qualityProcess.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Certifications</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Shipping</p>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
              {shipping.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Visual Proof</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Field, packhouse, and shipment visuals</h2>
          </div>
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
            <h2 className="mt-3 text-3xl font-semibold">Move from specification review to commercial discussion.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Request pricing, shipment guidance, or the avocado specification pack if you are evaluating Kenyan
              origin supply for retail, wholesale, or foodservice programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/spec-sheet-template.pdf"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90"
              >
                Download Avocado Specs
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Request Pricing
              </Link>
            </div>
          </article>

          <ContactForm title="Request Avocado Pricing" />
        </div>
      </section>
    </>
  );
}
