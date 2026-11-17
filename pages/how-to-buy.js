import Link from "next/link";
import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

const steps = [
  "Submit buyer inquiry",
  "Confirm grade, quantity, destination, and documentation needs",
  "Receive available lots or indicative offer",
  "Request samples",
  "Approve sample and commercial terms",
  "Receive pro forma invoice",
  "Confirm payment method or LC terms",
  "Coffee is prepared, checked, packed, and documented",
  "Shipment is booked",
  "Buyer receives dispatch updates and document pack",
];

export default function HowToBuyPage() {
  return (
    <>
      <Seo
        title="How to Source Coffee from Imperion | Buyer Process"
        description="Understand how international buyers source Kenyan coffee from Imperion, from inquiry and samples to pro forma invoice, export preparation, shipment, and documents."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="How to Buy"
          title="How to Source Coffee from Imperion"
          body="A clear purchase journey helps new and experienced buyers understand the steps from first inquiry to dispatch updates and export document handover."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <article key={step} className="rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Step {index + 1}</p>
              <h2 className="mt-3 text-xl font-semibold text-forest">{step}</h2>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-[2rem] bg-forest p-8 text-white shadow-soft">
          <h2 className="text-3xl font-semibold">Ready to start a coffee sourcing conversation?</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              Request Coffee Samples
            </Link>
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              Submit Buyer Inquiry
            </Link>
            <a href="https://wa.me/254748167811?text=Hello%20Imperion%20Global%20Holdings%2C%20I%20would%20like%20to%20discuss%20Kenyan%20coffee%20sourcing." className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              Speak to Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
