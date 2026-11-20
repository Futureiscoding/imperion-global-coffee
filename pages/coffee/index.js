import Link from "next/link";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

export default function CoffeePage() {
  return (
    <>
      <Seo title="Kenyan Green Coffee | Imperion Global Holdings" description="Request the current Kenyan green coffee offer sheet: grades, regions, quantities and cup notes." />
      <section className="bg-darkgreen text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">Kenyan green coffee</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none md:text-6xl">Offered by crop and by request.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">Availability changes with each crop, region and week, so we do not list every lot on a website. Request our offer sheet and we will send the current picture: grades, regions, quantities, cupping scores and price basis, ready to compare.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="cta-primary">Request the current offer sheet</Link>
            <Link href="/samples" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold">Request samples</Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="section-title">What the offer sheet covers</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Grade and screen size", "Region and variety", "Process and moisture", "Cupping score and notes", "Quantity available", "Packaging", "Price basis", "FOB Mombasa, CIF or CFR"].map((item) => (
            <article key={item} className="premium-card p-5 text-sm font-semibold text-forest">{item}</article>
          ))}
        </div>
        <p className="mt-8 text-sm text-stone">We confirm response and offer-sheet timing with each buyer enquiry.</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/coffee/grades-and-varieties" className="cta-secondary">Grades and varieties</Link>
          <Link href="/coffee/regions-and-harvest" className="cta-secondary">Regions and harvest</Link>
          <Link href="/coffee/flavour-guide" className="cta-secondary">Flavour guide</Link>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ContactForm title="Request the current offer sheet" formType="offer-sheet" />
      </section>
    </>
  );
}
