import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Imperion Global Holdings Limited",
  description:
    "Exporter of traceable Kenyan coffee for roasters, importers, and green coffee buyers, with secondary avocado and macadamia export lines.",
};

const coffeeProof = [
  "AA, AB, PB, and C grades",
  "Fully washed Kenyan coffees",
  "Moisture, screen size, cupping, and documentation checks",
  "FOB Mombasa and CIF quotation support",
];

const secondaryExports = [
  {
    href: "/avocado",
    title: "Hass & Fuerte Avocado",
    body: "Fresh Kenyan avocado supply with sizing, maturity handling, packhouse coordination, and cold-chain planning.",
    image: "/images/media-avocado-field.jpg",
  },
  {
    href: "/macadamia",
    title: "Raw & Processed Macadamia",
    body: "Kenyan macadamia options for snack, ingredient, and industrial buyers needing clean grading and packaging.",
    image: "/images/media-macadamia-field.jpg",
  },
];

const sampleDetails = [
  "3 x 250g green coffee samples",
  "DHL / express courier shipping",
  "Sample cost credited against the first confirmed commercial order",
];

const tradeAssets = [
  { label: "Company Profile PDF", href: "/company-profile.pdf" },
  { label: "Coffee Spec Sheet", href: "/spec-sheet-template.pdf" },
  { label: "Buyer Inquiry Form", href: "/contact" },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Premium Kenyan Coffee for Roasters, Importers & Green Coffee Buyers"
        description="Traceable washed Kenyan coffee, quality-checked at origin, prepared for reliable export to Europe, the U.S., Asia, and the Middle East."
        keywords="Kenyan coffee exporter, green coffee samples, Kenyan AA coffee, Kenyan AB coffee, coffee lots Kenya"
        structuredData={productSchema}
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(14, 79, 54, 0.72), rgba(14, 79, 54, 0.82)), url('/images/coffee export.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
              Traceable Kenyan Coffee. Measurable Quality. Reliable Export Supply.
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Premium Kenyan Coffee for Roasters, Importers & Green Coffee Buyers
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88">
              Traceable washed Kenyan coffee, quality-checked at origin, prepared for reliable export to Europe,
              the U.S., Asia, and the Middle East.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest shadow-soft hover:bg-gold/90">
                Request Coffee Samples
              </Link>
              <Link href="/coffee/catalog" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                View Available Lots
              </Link>
              <a href="/company-profile.pdf" className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                Download Company Profile
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/15 bg-white/12 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Coffee Buyer Proof</p>
            <div className="mt-6 grid gap-4">
              {coffeeProof.map((item) => (
                <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 text-sm font-medium leading-6 text-white">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Coffee First</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              Built around the buying decisions roasters and importers actually need to make.
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink/75">
              Imperion presents Kenyan coffee with clear grade, region, process, moisture, cup profile, sample, and
              export documentation details so buyers can move from evaluation to confirmed order with confidence.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/coffee" className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                Explore Coffee Program
              </Link>
              <Link href="/coffee/process" className="inline-flex rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
                Quality Assurance
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["/images/media-coffee-factory.jpg", "Coffee grading and processing"],
              ["/images/grade-placeholder-aa.jpg", "Kenyan AA green coffee"],
              ["/images/Warehouse.jpg", "Export-ready coffee storage"],
              ["/images/media-coffee-field.jpg", "Kenyan coffee sourcing region"],
            ].map(([src, alt]) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-white shadow-soft">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <article className="rounded-[2rem] border border-gold/35 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Sample Credit Program</p>
          <h2 className="mt-3 text-2xl font-semibold text-forest">Curated green coffee samples for qualified buyers.</h2>
          <p className="mt-4 text-sm leading-7 text-ink/75">
            We provide curated green coffee samples for qualified buyers before commercial orders. Buyers may request
            selected Kenyan grades including AA, AB, PB, and C depending on availability.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {sampleDetails.map((item) => (
              <div key={item} className="rounded-2xl bg-beige p-4 text-sm font-medium leading-6 text-forest">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-ink/75">
            This gives buyers confidence before committing to larger volumes.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
              Request Coffee Samples
            </Link>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Trade Assets</p>
          <h2 className="mt-3 text-2xl font-semibold">Downloadable buyer documents.</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tradeAssets.map((asset) => (
              <Link
                key={asset.label}
                href={asset.href}
                className="inline-flex min-h-16 items-center justify-center rounded-full border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                {asset.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Secondary Export Lines</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
            Avocado and macadamia remain available for buyers building broader Kenya supply programs.
          </h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {secondaryExports.map((item) => (
            <Link key={item.href} href={item.href} className="grid overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-soft md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-forest">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/75">{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
