import Link from "next/link";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Imperion Global Holdings Limited",
  description:
    "Exporter of premium Kenyan coffee, avocado, and macadamia nuts with traceability, compliance support, and buyer-ready documentation.",
};

const buyerReasons = [
  {
    title: "Premium Quality",
    body: "Every lot is tested, graded, and certified before export.",
  },
  {
    title: "Full Traceability",
    body: "From farm to export documentation-complete visibility.",
  },
  {
    title: "Experienced Export Team",
    body: "Led by experts in coffee, logistics, and international trade.",
  },
  {
    title: "Global Shipping",
    body: "We ship to Europe, U.S., Middle East, and Asia.",
  },
];

const exportsList = [
  {
    href: "/coffee",
    title: "Specialty & Commercial Coffee",
    body: "Primary product line for importers seeking traceable Kenyan lots, export documentation, and quality-led communication.",
  },
  {
    href: "/avocado",
    title: "Hass & Fuerte Avocado",
    body: "Fresh export program built around sizing, maturity standards, cold-chain handling, and international buyer readiness.",
  },
  {
    href: "/macadamia",
    title: "Raw & Processed Macadamia Nuts",
    body: "Premium Kenyan macadamia supply for snack, ingredient, and industrial buyers needing clean grading and packaging options.",
  },
];

const complianceList = [
  "KEPHIS Phytosanitary",
  "KEBS Quality Compliance",
  "Food Safety & Handling Standards",
  "Export Documentation Accuracy Guaranteed",
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Imperion Global Holdings | Premium Kenyan Coffee, Avocados & Macadamia Nuts"
        description="Imperion Global Holdings connects global buyers with premium Kenyan coffee, avocado, and macadamia nuts backed by traceability, quality assurance, and export readiness."
        keywords="Kenyan coffee exporter, avocado exporter, macadamia exporter, Kenya agricultural exports, traceable coffee"
        structuredData={productSchema}
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21, 58, 43, 0.6), rgba(21, 58, 43, 0.76)), url('/images/coffee-farm-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Integrity in Every Shipment</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Premium Kenyan Coffee, Avocados & Macadamia Nuts — Traceable, Ethical, Export-Ready.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">
              We connect global buyers with Kenya&apos;s finest specialty coffees and high-grade agricultural
              products, backed by strict quality assurance, full traceability, and direct partnerships with
              farmers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest shadow-soft hover:bg-gold/90"
              >
                Request a Quote
              </Link>
              <a
                href="/spec-sheet-template.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Download Company Profile
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Export Confidence</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold text-white">3</p>
                <p className="mt-1 text-sm text-white/80">Core export product lines for buyer programs</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">100%</p>
                <p className="mt-1 text-sm text-white/80">Focus on traceable and document-ready shipments</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">4</p>
                <p className="mt-1 text-sm text-white/80">Key compliance pillars supporting buyer assurance</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">Global</p>
                <p className="mt-1 text-sm text-white/80">Shipping support across Europe, U.S., Middle East, and Asia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Why Buyers Choose Us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            Built for importers who need quality, visibility, and reliable execution.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {buyerReasons.map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-forest">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/75">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2.5rem] border border-forest/10 bg-white p-8 shadow-soft lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Our Main Exports</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              Kenyan origin products presented for serious international buyers.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {exportsList.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[2rem] border border-forest/10 bg-beige/40 p-8 transition hover:border-gold/40 hover:bg-white"
              >
                <h3 className="text-2xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/75">{item.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/coffee"
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Certifications & Compliance</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest">Documentation and standards that reduce buyer risk.</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/75">
            {complianceList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Meet the Founder</p>
          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-56 w-64 items-center justify-center overflow-hidden rounded-[1.75rem] bg-white/10 sm:h-72 sm:w-80">
              <img src="/images/simon-njuguna.jpg" alt="Simon Njuguna" className="h-full w-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Simon Njuguna</h2>
              <p className="mt-3 text-sm leading-7 text-white/80">
                Simon Njuguna leads Imperion Global Holdings with a focus on transparent trade, disciplined export
                preparation, and strong farmer-linked sourcing relationships built for long-term global buyers.
              </p>
              <Link href="/about" className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-white">
                Visit About Us
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
