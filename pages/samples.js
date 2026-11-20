import Link from "next/link";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

export default function SamplesPage() {
  return (
    <>
      <Seo title="Free Kenyan Coffee Samples | Imperion" description="Request a free 200 g Kenyan green coffee sample. The buyer pays the courier cost, credited against the first invoice." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">Samples</p>
        <h1 className="section-title">Taste before you commit. Samples are free.</h1>
        <p className="section-copy">Samples are 200 g and free. The buyer pays the courier. Imperion credits the courier cost against the buyer's first invoice once the buyer places an order for their first consignment.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["1", "Choose a grade or ask for the offer sheet."],
            ["2", "Send your delivery address and courier account number if you have one."],
            ["3", "We confirm dispatch timing after the business address and courier are verified."],
            ["4", "You cup it and tell us what you think."],
            ["5", "We issue an offer and pro forma invoice."],
            ["6", "Your first consignment order confirms the courier credit."],
          ].map(([number, text]) => (
            <article key={number} className="premium-card p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-goldtext">Step {number}</p>
              <p className="mt-3 text-sm leading-7 text-ink/80">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <article className="premium-card p-8">
            <h2 className="text-2xl font-semibold text-forest">Sample terms</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div><dt className="font-bold text-forest">Sample cost</dt><dd>Free</dd></div>
              <div><dt className="font-bold text-forest">Size</dt><dd>200 g</dd></div>
              <div><dt className="font-bold text-forest">Courier</dt><dd>Paid by the buyer</dd></div>
              <div><dt className="font-bold text-forest">Courier credit</dt><dd>Credited on the first invoice after the first consignment order is confirmed</dd></div>
            </dl>
          </article>
          <ContactForm title="Request a 200 g sample" formType="sample" showSampleTerms />
        </div>
      </section>
    </>
  );
}
