import Link from "next/link";
import Seo from "@/components/Seo";

const services = [
  ["Agricultural Commodity Sourcing", "Coffee-led agricultural sourcing coordinated around buyer specifications and availability."],
  ["Coffee Export Supply", "Current Kenyan Arabica coffee grades and buyer offers confirmed through direct communication."],
  ["Product Quality Evaluation", "Grading, physical inspection, moisture checks, and cupping where applicable."],
  ["Export Coordination", "Shipment preparation and coordination with buyers and relevant logistics partners."],
  ["International Trade Documentation Support", "Relevant export information and document requirements identified for each transaction."],
  ["Buyer-Specific Product Sourcing", "Volume, grade, processing, packaging, origin, and destination requirements discussed individually."],
  ["Packaging Coordination", "Suitable packaging specifications aligned with product and buyer requirements."],
  ["Logistics and Shipment Coordination", "FOB Mombasa and other agreed shipment arrangements coordinated transaction by transaction."],
];

const process = [
  ["Inquiry & Consultation", "Discuss the product, destination, volume, and buyer expectations."],
  ["Requirements & Specifications", "Align grades, processing, packaging, documentation, and commercial requirements."],
  ["Sourcing", "Identify appropriate supply channels and available product."],
  ["Quality Evaluation", "Assess product characteristics and share relevant evaluation information."],
  ["Sample Approval Where Applicable", "Review samples and specifications before commercial confirmation."],
  ["Commercial Confirmation", "Confirm offer details, terms, and buyer requirements in writing."],
  ["Documentation & Export Preparation", "Prepare relevant transaction documents and export information."],
  ["Shipment Coordination", "Coordinate loading, shipment communication, and buyer updates."],
];

export default function ServicesPage() {
  return (
    <>
      <Seo title="International Trade & Export Services | Imperion" description="Agricultural commodity sourcing, coffee export supply, quality evaluation, documentation, packaging, and logistics coordination." />
      <section className="bg-darkgreen text-white">
        <div className="container-shell py-16 lg:py-24">
          <p className="eyebrow text-goldlight">Services</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] md:text-6xl">Structured support for international agricultural trade.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">From sourcing through export preparation, our team coordinates buyer requirements with Kenya-based supply channels and relevant trade partners.</p>
          <Link href="/contact" className="cta-primary mt-8">Discuss Your Requirements</Link>
        </div>
      </section>
      <section className="container-shell py-16 sm:py-20">
        <p className="section-label">What we provide</p><h2 className="section-title">A clear service scope</h2>
        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map(([title, copy], index) => <article key={title} className="border-t-2 border-gold bg-white p-6 shadow-soft"><p className="font-mono text-xs text-goldtext">0{index + 1}</p><h3 className="mt-5 text-xl font-bold text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-stone">{copy}</p></article>)}</div>
      </section>
      <section className="bg-beige/70">
        <div className="container-shell py-16 sm:py-20">
          <p className="section-label">How buyers work with Imperion</p><h2 className="section-title">One transparent process</h2>
          <ol className="mt-9 grid gap-px overflow-hidden border border-forest/10 bg-forest/10 md:grid-cols-2 lg:grid-cols-4">{process.map(([title, copy], index) => <li key={title} className="bg-white p-6"><p className="font-mono text-xs text-goldtext">0{index + 1}</p><h3 className="mt-4 text-lg font-bold text-forest">{title}</h3><p className="mt-3 text-sm leading-7 text-stone">{copy}</p></li>)}</ol>
          <Link href="/contact" className="cta-primary mt-8">Start an Inquiry</Link>
        </div>
      </section>
    </>
  );
}
