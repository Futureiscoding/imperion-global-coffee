import Link from "next/link";
import Image from "next/image";
import BuyerConfidence from "@/components/BuyerConfidence";
import TradeAssets from "@/components/TradeAssets";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Imperion Global Holdings Limited",
  description:
    "Kenyan specialty coffee exporter supplying premium green coffee, traceability and export coordination for roasters, importers and international buyers.",
};

const trustPoints = [
  "Kenyan origin with traceable supply decisions",
  "Lot-level quality information and specification context",
  "Clear export communication and buyer support",
  "Responsive sample and commercial inquiry flow",
];

const coffeeCards = [
  { grade: "Kenya AA", origin: "Nyeri", variety: "SL28 / SL34", process: "Washed", score: "86+", altitude: "1,700–1,900 masl", crop: "2025/26", screen: "17/18+", moisture: "10.4%", availability: "Available", color: "bg-white" },
  { grade: "Kenya AB", origin: "Kirinyaga", variety: "Ruiru 11 / Batian", process: "Washed", score: "84+", altitude: "1,600–1,800 masl", crop: "2025/26", screen: "15/16", moisture: "10.8%", availability: "Sampling", color: "bg-[#f7f3ea]" },
  { grade: "Kenya PB", origin: "Embu", variety: "SL28 / Batian", process: "Washed", score: "85+", altitude: "1,650–1,850 masl", crop: "2025/26", screen: "Peaberry", moisture: "10.5%", availability: "Reserved", color: "bg-white" },
  { grade: "Kenya C", origin: "Kiambu", variety: "Mixed Arabica", process: "Washed", score: "82+", altitude: "1,500–1,700 masl", crop: "2025/26", screen: "Smaller screen", moisture: "10.9%", availability: "Upcoming", color: "bg-[#f7f3ea]" },
];

const processSteps = [
  { title: "Source", text: "Kenyan coffee origins and producer relationships." },
  { title: "Process", text: "Washed, natural or other verified processing methods." },
  { title: "Quality", text: "Grading, physical analysis and cupping evaluation." },
  { title: "Export", text: "Documentation, packaging and logistics coordination." },
  { title: "Roaster", text: "Coffee delivered to international buyers." },
];

export default function HomePage() {
  return (
    <>
      <Seo
        title="Imperion Global Holdings | Premium Kenyan Coffee Exporter"
        description="Imperion Global Holdings sources premium Kenyan green coffee for roasters, importers and specialty coffee businesses with transparent specifications, traceability and export coordination."
        keywords="Kenyan green coffee exporter, Kenyan specialty coffee exporter, Kenya AA coffee, Kenyan coffee importer, Kenyan green coffee beans"
        structuredData={productSchema}
      />

      <section className="relative overflow-hidden bg-darkgreen">
        <div className="absolute inset-0">
          <Image src="/images/coffee export.jpg" alt="Kenyan coffee export and sourcing activity" fill className="object-cover opacity-35" priority />
        </div>
        <div className="relative container-shell grid gap-10 py-18 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">Premium Kenyan coffee. Sourced with integrity.</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
              Premium Kenyan Coffee. Sourced with Integrity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              We connect international roasters, importers and specialty coffee businesses with carefully sourced Kenyan green coffee, backed by transparent specifications, traceability and reliable export coordination.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/coffee" className="cta-primary">Explore Our Coffee</Link>
              <Link href="/contact#inquiry-form" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white hover:border-gold hover:text-gold">Request Samples</Link>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">Buyer confidence</p>
            <div className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/8 p-4 text-sm font-medium leading-6 text-white/90">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="section-label">Why Imperion</p>
            <h2 className="section-title">Kenyan origin, quality focus and buyer clarity.</h2>
            <p className="section-copy">
              We help buyers understand where the coffee is from, how it is processed, how it is graded and what documentation supports the transaction. That clarity builds trust before the first shipment is ever booked.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Kenyan Origin", "Coffee sourced from recognised Kenyan growing regions."],
              ["Quality Focus", "Lot-level specifications and quality information."],
              ["Traceability", "Transparent origin and supply chain information."],
              ["Export Capability", "Professional export coordination and documentation support."],
            ].map(([title, body]) => (
              <article key={title} className="premium-card p-6">
                <h3 className="text-xl font-bold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell pb-16 md:pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="section-label">Our Coffee</p>
          <h2 className="section-title">Premium Kenyan green coffee, clearly presented.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coffeeCards.map((coffee) => (
            <article key={coffee.grade} className={`premium-card ${coffee.color}`}>
              <div className="relative aspect-[4/3] bg-forest/5">
                <Image src="/images/coffee-grade-aa.jpg" alt={`${coffee.grade} Kenyan coffee`} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">{coffee.grade}</p>
                <h3 className="mt-3 text-2xl font-bold text-forest">{coffee.origin}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/75">
                  <li><strong>Variety:</strong> {coffee.variety}</li>
                  <li><strong>Process:</strong> {coffee.process}</li>
                  <li><strong>Cup score:</strong> {coffee.score}</li>
                  <li><strong>Altitude:</strong> {coffee.altitude}</li>
                  <li><strong>Crop year:</strong> {coffee.crop}</li>
                  <li><strong>Screen size:</strong> {coffee.screen}</li>
                  <li><strong>Moisture:</strong> {coffee.moisture}</li>
                  <li><strong>Availability:</strong> {coffee.availability}</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/coffee/current-lots" className="inline-flex rounded-full bg-forest px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-white hover:bg-forest/90">
                    View Lot
                  </Link>
                  <Link href="/contact#inquiry-form" className="inline-flex rounded-full border border-forest/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-forest hover:border-gold hover:text-gold">
                    Request Sample
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f9f5ee]">
        <div className="container-shell py-16 md:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="section-label">Origin</p>
            <h2 className="section-title">From Kenyan farms to buyer requirements.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Nyeri",
              "Kirinyaga",
              "Kiambu",
              "Embu",
              "Meru",
              "Bungoma",
              "Mt. Elgon",
              "Machakos",
            ].map((region) => (
              <article key={region} className="premium-card p-5">
                <p className="text-2xl font-bold text-forest">{region}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 md:py-20">
        <div className="mb-8 max-w-3xl">
          <p className="section-label">From farm to roaster</p>
          <h2 className="section-title">The process behind reliable export supply.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <article key={step.title} className="premium-card p-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold text-forest">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16 md:pb-20">
        <div className="rounded-[2rem] bg-forest p-8 text-white shadow-soft md:p-10">
          <p className="section-label text-gold">Quality & Traceability</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl">
            Every lot has a story. Every specification has a purpose.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            Origin, variety, grade, screen size, moisture, processing method, crop year, lot information and cupping score all inform the buyer decision. We keep that context clear and usable.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/quality-traceability" className="cta-primary">Learn More</Link>
            <Link href="/contact#inquiry-form" className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white hover:border-gold hover:text-gold">Request Samples</Link>
          </div>
        </div>
      </section>

      <BuyerConfidence />

      <section className="container-shell pb-16 md:pb-20">
        <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft md:p-10">
          <p className="section-label">Taste before you commit</p>
          <h2 className="section-title">Taste before you commit.</h2>
          <p className="section-copy">
            Request samples, assess the coffee in your own roasting or buying program and then confirm requirements before moving into larger commercial volumes.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              "Select coffee",
              "Request samples",
              "Evaluate the coffee",
              "Confirm requirements",
              "Proceed to commercial order",
            ].map((step, index) => (
              <div key={step} className="rounded-[1.25rem] bg-beige p-5 text-sm font-semibold leading-6 text-forest">
                <span className="block text-xs uppercase tracking-[0.2em] text-gold">0{index + 1}</span>
                {step}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact#inquiry-form" className="cta-primary">Request Samples</Link>
          </div>
        </div>
      </section>

      <TradeAssets />
    </>
  );
}
