import Link from "next/link";
import Image from "next/image";
import BuyerConfidence from "@/components/BuyerConfidence";
import TradeAssets from "@/components/TradeAssets";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Kenyan Green Coffee Export Program",
  brand: "Imperion Global Holdings Limited",
  description:
    "Kenyan green coffee grades including AA, AB, PB, and C for roasters, importers, distributors, and green coffee buyers.",
  category: "Green Coffee Beans",
  material: "Kenyan Arabica coffee",
};

const gradeCards = [
  {
    title: "AA",
    image: "/images/coffee-grade-aa.jpg",
    points: ["Screen 17/18+", "Bright acidity", "Blackcurrant, citrus, floral notes", "Premium single-origin and specialty programs"],
  },
  {
    title: "AB",
    image: "/images/coffee-grade-ab.jpg",
    points: ["Screen 15/16", "Balanced acidity", "Caramel, cocoa, citrus, spice notes", "Excellent value for specialty and commercial roasters"],
  },
  {
    title: "PB",
    image: "/images/coffee-grade-pb.jpg",
    points: ["Peaberry grade", "Rounded bean structure", "Concentrated fruit and sweetness", "Ideal for distinctive buyer offerings"],
  },
  {
    title: "C",
    image: "/images/coffee-grade-c.jpg",
    points: ["Smaller screen grade", "Commercially viable", "Useful for blends and value-driven programs", "Good option for price-sensitive buyers"],
  },
];

const qaChecks = [
  "Moisture checks",
  "Screen size verification",
  "Visual defect review",
  "Sample roasting",
  "Cupping review",
  "Lot traceability",
  "Export documentation support",
];

const sampleProgram = [
  "3 x 250g green coffee samples",
  "Express courier dispatch",
  "AA, AB, PB, and C subject to availability",
  "Sample cost credited against first confirmed commercial order",
  "Buyer confirms shipping address and preferred courier",
];

const commercialTerms = [
  "FOB Mombasa",
  "CIF quotation support",
  "60kg jute / GrainPro options",
  "Commercial order confirmation through pro forma invoice",
  "Payment terms agreed per buyer and transaction",
  "Export documentation pack available",
];

export default function CoffeePage() {
  return (
    <>
      <Seo
        title="Kenyan Green Coffee Exporter | AA, AB, PB & C Grades"
        description="Explore Kenyan green coffee grades including AA, AB, PB, and C. Request samples, review quality details, and source traceable washed coffee from Kenya."
        structuredData={productSchema}
        image="/images/coffee-farm-hero.jpg"
        imageAlt="Kenyan coffee farm used for green coffee export sourcing"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coffee-farm-hero.jpg"
            alt="Kenyan coffee farm landscape for traceable green coffee sourcing"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Flagship Coffee Program</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Kenyan Coffee Sourced for Serious Buyers
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/88">
              Imperion Global Holdings Limited supports roasters, importers, and green coffee buyers seeking
              traceable Kenyan coffee with clear grade information, quality checks, buyer communication, and export
              documentation support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
                Request Coffee Samples
              </Link>
              <Link href="/coffee/current-lots" className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                View Current Coffee Lots
              </Link>
              <Link href="/how-to-buy" className="inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
                How to Buy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Buyer Promise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
              Clear coffee information before buyers commit commercial volume.
            </h2>
            <p className="mt-5 text-sm leading-8 text-ink/75">
              We help buyers review grade, process, cup profile, screen size, moisture range, packaging format,
              sample options, and shipment terms before moving into a quotation or pro forma invoice.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <Image src="/images/media-coffee-factory.jpg" alt="Green coffee grading and sample preparation in Kenya" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Coffee Grades</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">
          AA, AB, PB, and C grade options for different buyer programs.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {gradeCards.map((grade) => (
            <article key={grade.title} className="overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3] bg-beige">
                <Image src={grade.image} alt={`Kenyan ${grade.title} green coffee grade beans`} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-forest">{grade.title}</h3>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
                  {grade.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <BuyerConfidence />

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Assurance</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Quality review before export decisions.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {qaChecks.map((item) => (
                <div key={item} className="rounded-[1.25rem] bg-beige/60 p-4 text-sm font-semibold leading-6 text-forest">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border border-gold/35 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Sample Credit Program</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Curated green coffee samples for qualified buyers.</h2>
            <p className="mt-4 text-sm leading-8 text-ink/75">
              Qualified buyers may request curated green coffee samples before committing to commercial volumes.
              Sample costs and courier charges may be credited against the first confirmed commercial order, subject
              to prior agreement.
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/75">
              {sampleProgram.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Commercial Terms</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest">Export terms discussed per buyer and transaction.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {commercialTerms.map((term) => (
              <div key={term} className="rounded-[1.25rem] bg-beige/60 p-5 text-sm font-semibold leading-6 text-forest">
                {term}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TradeAssets />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] bg-forest p-10 text-white shadow-soft">
          <h2 className="text-3xl font-semibold">Ready to review Kenyan coffee for your program?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/80">
            Share your grade, quantity, destination port, documentation needs, and sample preference. Our team will
            respond with the most relevant next steps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              Submit Buyer Inquiry
            </Link>
            <Link href="/coffee/current-lots" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              View Current Coffee Lots
            </Link>
            <a href="https://wa.me/254748167811?text=Hello%20Imperion%20Global%20Holdings%2C%20I%20would%20like%20to%20discuss%20Kenyan%20coffee%20exports." className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              Speak to Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
