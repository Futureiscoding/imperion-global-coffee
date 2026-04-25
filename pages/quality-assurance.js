import Image from "next/image";
import Seo from "@/components/Seo";

const points = [
  "Direct sourcing from Kenyan coffee regions",
  "Screen grading: AA, AB, PB, C",
  "Moisture checks before shipment",
  "Cupping and sensory evaluation",
  "Pre-export documentation review",
  "Phytosanitary and export compliance support",
  "Shipment communication from origin to buyer",
];

export default function QualityAssurancePage() {
  return (
    <>
      <Seo
        title="Quality Assurance From Farm to Export | Imperion Global Holdings"
        description="Imperion quality assurance for Kenyan coffee covers sourcing, screen grading, moisture checks, cupping, documentation, and shipment communication."
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Quality Assurance</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            Quality Assurance From Farm to Export
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/75">
            We prepare coffee for serious buyers by combining origin sourcing discipline, physical quality checks,
            cupping review, document control, and clear shipment communication.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-soft">
          <Image src="/images/media-coffee-factory.jpg" alt="Coffee quality inspection at origin" fill className="object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {points.map((point) => (
            <article key={point} className="rounded-[1.5rem] border border-forest/10 bg-white p-7 shadow-soft">
              <h2 className="text-xl font-semibold text-forest">{point}</h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
