import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import VideoHero from "@/components/VideoHero";
import GallerySlides from "@/components/GallerySlides";
import { brand } from "@/content/rebuild-kit";

const products = [
  { name: "Kenyan Arabica Coffee", href: "/coffee", image: "/images/gallery/cupping-session.jpg", copy: "Specialty and commercial coffee, with AA, AB, PB and other grades subject to current availability.", className: "lg:col-span-2" },
  { name: "Hass Avocados", href: "/avocado", image: "/images/media-avocado-field.jpg", copy: "Buyer-specific sourcing, sizing, maturity, packaging, and export coordination." },
  { name: "Macadamia Nuts", href: "/macadamia", image: "/images/media-macadamia-field.jpg", copy: "Raw and processed options subject to availability and buyer specifications." },
];

const why = [
  ["Traceable Kenyan Origin", "Origin, sourcing region, and supply information presented clearly."],
  ["Quality-Led Sourcing", "Physical evaluation and specification checks where applicable."],
  ["Buyer-Focused Communication", "Requirements and commercial questions handled directly."],
  ["Export Documentation Support", "Relevant shipment information and documentation coordinated."],
  ["Reliable Supply Coordination", "Sourcing and shipment steps managed around buyer needs."],
  ["International Market Focus", "A Kenya-based team serving international buyers and trade partners."],
];

const qualitySteps = [
  ["01", "Origin Sourcing", "Identifying coffee and agricultural products through appropriate sourcing channels."],
  ["02", "Processing & Handling", "Handling and processing according to product requirements."],
  ["03", "Quality Evaluation", "Grading, moisture, physical inspection, cupping, and specification checks where applicable."],
  ["04", "Buyer Approval", "Samples, specifications, product profiles, and buyer requirements."],
  ["05", "Documentation", "Preparing relevant export documentation and shipment information."],
  ["06", "Export Coordination", "Shipment preparation and coordination with buyers and relevant logistics partners."],
];

const services = [
  ["Agricultural Commodity Sourcing", "Coffee-led sourcing with buyer requirements guiding product selection."],
  ["Coffee Export Supply", "Current grades and offers coordinated directly with buyers."],
  ["Product Quality Evaluation", "Physical checks, grading context, moisture, and cupping where applicable."],
  ["Export Coordination", "Packaging and shipment preparation coordinated around each transaction."],
  ["Trade Documentation Support", "Relevant export information and buyer documentation requirements."],
  ["Buyer-Specific Sourcing", "Specifications, destination, volume, and commercial terms discussed individually."],
];

export default function HomePage() {
  return (
    <>
      <Seo title="Kenyan Coffee & Agricultural Exporter | Imperion" description="Imperion Global Holdings Limited connects international buyers with traceable Kenyan coffee and agricultural products through sourcing, quality evaluation, documentation, and export coordination." />
      <VideoHero />

      <section className="container-shell py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr] lg:gap-16">
          <div>
            <p className="section-label">About Imperion</p>
            <h2 className="section-title">Connecting Kenyan Origin to Global Markets</h2>
            <p className="section-copy">Imperion Global Holdings Limited is a Kenya-based agricultural export and trading company focused on sourcing and supplying quality agricultural products to international buyers.</p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone">Our approach combines Kenyan sourcing networks, quality and traceability, export coordination, and long-term B2B partnerships built around clear buyer communication.</p>
            <Link href="/about" className="cta-secondary mt-7">Discover Imperion</Link>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-mist">
              <Image src="/images/simon-njuguna-portrait.jpeg" alt="Simon Njuguna, Managing Director of Imperion Global Holdings" fill sizes="(max-width: 1024px) 85vw, 30vw" className="object-contain object-center" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-goldtext">Simon Njuguna · Managing Director</p>
          </div>
        </div>
      </section>

      <section className="bg-beige/70">
        <div className="container-shell py-16 sm:py-20">
          <div className="flex items-end justify-between gap-6">
            <div><p className="section-label">Our Products</p><h2 className="section-title">Kenyan agricultural products for global buyers</h2></div>
            <Link href="/coffee" className="hidden font-bold text-forest underline decoration-gold underline-offset-4 sm:block">Explore Our Products</Link>
          </div>
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link key={product.name} href={product.href} className={`group overflow-hidden border border-forest/10 bg-white ${product.className || ""}`}>
                <div className={`relative ${index === 0 ? "aspect-[16/7] lg:aspect-[16/7]" : "aspect-[4/3]"}`}>
                  <Image src={product.image} alt={product.name} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6"><p className="font-mono text-xs text-goldtext">0{index + 1}</p><h3 className="mt-3 font-serif text-2xl text-forest">{product.name}</h3><p className="mt-3 text-sm leading-7 text-stone">{product.copy}</p><span className="mt-5 inline-block font-bold text-forest">View product →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <p className="section-label">Why Imperion</p><h2 className="section-title">Trade with context, clarity, and control</h2>
        <div className="mt-9 grid gap-px overflow-hidden border border-forest/10 bg-forest/10 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(([title, copy], index) => (
            <article key={title} className="bg-white p-6"><p className="font-mono text-xs text-goldtext">0{index + 1}</p><h3 className="mt-5 text-xl font-bold text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-stone">{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="bg-darkgreen text-white">
        <div className="container-shell py-16 sm:py-20">
          <p className="section-label text-goldlight">Quality Assurance</p><h2 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight md:text-5xl">A clear process from origin to export</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {qualitySteps.map(([number, title, copy]) => (
              <article key={number} className="bg-darkgreen p-6"><p className="font-mono text-xs text-goldlight">{number}</p><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-7 text-white/70">{copy}</p></article>
            ))}
          </div>
          <Link href="/quality-traceability" className="cta-primary mt-8">Explore Quality &amp; Compliance</Link>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="flex items-end justify-between gap-6"><div><p className="section-label">Services</p><h2 className="section-title">What we coordinate</h2></div><Link href="/export" className="hidden font-bold text-forest underline decoration-gold underline-offset-4 sm:block">Discuss Your Requirements</Link></div>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, copy], index) => <article key={title} className="border-t-2 border-gold bg-white p-6 shadow-soft"><p className="font-mono text-xs text-goldtext">0{index + 1}</p><h3 className="mt-5 text-xl font-bold text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-stone">{copy}</p></article>)}</div>
      </section>

      <section className="border-y border-forest/10 bg-beige">
        <div className="container-shell grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative min-h-[390px] overflow-hidden rounded-lg"><Image src="/images/coffee-farm-hero.jpg" alt="Coffee-growing landscape and coffee plants in Kenya" fill sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" /></div>
          <div><p className="section-label">Origin &amp; Sourcing</p><h2 className="section-title">Kenyan coffee, shaped by region</h2><p className="section-copy">Kenya's coffee-growing regions give buyers a meaningful lens for origin, growing conditions, sourcing, and cup characteristics.</p><div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">{["Nyeri","Kirinyaga","Kiambu","Murang'a","Embu","Meru"].map(region => <p key={region} className="border-l-2 border-gold bg-white px-4 py-3 text-sm font-bold text-forest">{region}</p>)}</div><Link href="/coffee/regions-and-harvest" className="cta-secondary mt-7">Explore Regions</Link></div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="section-label">Export &amp; Logistics</p><h2 className="section-title">Prepared for the buyer's requirements</h2><p className="section-copy">From export preparation and packaging coordination to quality documentation and buyer specifications, we keep commercial communication clear.</p></div><div className="grid gap-4 sm:grid-cols-2">{["Export preparation","Packaging coordination","Quality documentation","Buyer specifications","FOB Mombasa support where applicable","Shipment coordination"].map(item => <p key={item} className="border border-forest/10 bg-white p-5 text-sm font-bold text-forest">{item}</p>)}</div></div>
      </section>

      <section className="bg-beige/70">
        <div className="container-shell py-16 sm:py-20">
          <p className="section-label">Successful Shipments</p>
          <h2 className="section-title">Delivered to Dubai, now being roasted</h2>
          <p className="section-copy">The coffee shown here was delivered to Dubai, where the customer is roasting it.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((number) => (
              <article key={number} className="overflow-hidden border border-forest/10 bg-white">
                <video className="aspect-[4/3] w-full bg-black object-contain" controls playsInline preload="metadata" aria-label={`Customer roasting coffee delivered to Dubai, video ${number}`}>
                  <source src={`/videos/dubai-delivery-roasting-${number}.mp4`} type="video/mp4" />
                  Your browser does not support embedded video.
                </video>
                <p className="p-4 text-sm font-semibold text-forest">Dubai delivery · Video {number}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <p className="section-label">Accredited by</p>
        <h2 className="section-title">Accredited by relevant Kenyan institutions and marks</h2>
        <p className="section-copy">Imperion is accredited by the Agriculture and Food Authority (AFA), the Kenya Plant Health Inspectorate Service (KEPHIS), KenTrade, and the Made in Kenya mark.</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["Agriculture and Food Authority (AFA)", "/images/institutions/agriculture-food-authority.png"],
            ["Kenya Plant Health Inspectorate Service (KEPHIS)", "/images/institutions/kephis.jpg"],
            ["Made in Kenya mark", "/images/institutions/made-in-kenya.png"],
            ["Kenya Trade Network Agency (KenTrade)", "/images/institutions/kentrade.png"],
          ].map(([name, src]) => (
            <div key={name} className="flex min-h-32 items-center justify-center border border-forest/10 bg-white p-5">
              <Image src={src} alt={name} width={220} height={110} sizes="(max-width: 768px) 45vw, 20vw" className="max-h-24 w-full object-contain" />
            </div>
          ))}
        </div>
      </section>

      <GallerySlides />

      <section className="bg-forest text-white">
        <div className="container-shell flex flex-col gap-7 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between"><div className="max-w-3xl"><p className="eyebrow text-goldlight">Start a conversation</p><h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Let's Build a Reliable Supply Partnership.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Whether you are sourcing Kenyan coffee, agricultural products, or exploring a long-term supply partnership, our team is ready to understand your requirements.</p></div><div className="flex flex-wrap gap-3"><Link href="/samples" className="cta-primary">Request Coffee Samples</Link><Link href="/coffee" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-bold hover:border-goldlight hover:text-goldlight">Request Pricing</Link><Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-bold hover:border-goldlight hover:text-goldlight">Contact Our Export Team</Link></div></div>
      </section>
    </>
  );
}
