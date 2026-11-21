import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

export default function AvocadoPage() {
  return (
    <>
      <Seo title="Hass Avocado Sourcing | Imperion" description="Buyer-specific Kenyan Hass avocado sourcing and export coordination subject to season and availability." />
      <section className="bg-darkgreen text-white">
        <div className="container-shell grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div><p className="eyebrow text-goldlight">Agricultural Product</p><h1 className="mt-5 font-serif text-5xl leading-[1.05] md:text-6xl">Hass Avocados</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Buyer-specific sourcing and export coordination for Kenyan avocados, aligned around variety, season, sizing, maturity, packaging, and handling requirements.</p><Link href="/contact" className="cta-primary mt-8">Request Avocado Pricing</Link></div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg"><Image src="/images/media-avocado-field.jpg" alt="Avocado sourcing in Kenya" fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="container-shell py-16 sm:py-20">
        <p className="section-label">Product information</p><h2 className="section-title">Specifications confirmed per enquiry</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-3">{[
          ["Varieties", "Hass and other available varieties, subject to season and sourcing."],
          ["Buyer Specifications", "Sizing, maturity, volume, destination, packaging, and handling requirements."],
          ["Export Coordination", "Preparation, documentation, and shipment coordination discussed for each transaction."],
        ].map(([title, copy]) => <article key={title} className="premium-card p-6"><h3 className="text-xl font-bold text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-stone">{copy}</p></article>)}</div>
      </section>
      <section className="container-shell pb-20"><ContactForm title="Inquire about Kenyan avocados" formType="general" /></section>
    </>
  );
}
