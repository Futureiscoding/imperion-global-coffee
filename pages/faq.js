import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";
import SamplePolicy from "@/components/SamplePolicy";

const faqs = [
  {
    question: "What grades of Kenyan coffee do you supply?",
    answer:
      "We supply Kenyan AA, AB, PB, and C grades depending on current availability, buyer requirements, cup profile, and intended market.",
  },
  {
    question: "Can I request samples before ordering?",
    answer:
      "Yes. Qualified buyers may request selected green coffee samples before commercial orders so they can evaluate grade, cup, and suitability.",
  },
  {
    question: "What is your sample policy?",
    answer:
      "Our typical sample pack includes 3 x 250g green coffee samples shipped by DHL or express courier. Sample cost is credited against the first confirmed commercial order.",
  },
  {
    question: "Do you provide moisture and quality details?",
    answer:
      "Yes. We provide available moisture, screen, cup, grade, and documentation details so buyers can review quality before confirming volume.",
  },
  {
    question: "What documents can you support?",
    answer:
      "We can support commercial invoice, packing list, Certificate of Origin, phytosanitary documentation, moisture details, quality notes, and other destination-specific export support where applicable.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "MOQ depends on grade, lot size, and buyer program. Share your target bag count and market, and we will respond with available options.",
  },
  {
    question: "Do you ship FOB Mombasa or CIF?",
    answer:
      "Yes. We can support FOB Mombasa and CIF quotation discussions depending on destination, shipping route, and buyer requirements.",
  },
  {
    question: "How do you ensure the sample matches the final shipment?",
    answer:
      "We align samples to identifiable lots where possible, review grade and moisture before shipment, and communicate lot details before commercial confirmation.",
  },
];

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Buyer FAQ | Imperion Global Holdings"
        description="Buyer FAQ covering Kenyan coffee grades, samples, sample policy, documents, MOQ, Incoterms, and sample-to-shipment consistency."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionIntro
          eyebrow="Buyer FAQ"
          title="Questions green coffee buyers ask before importing."
          body="Clear answers for roasters, importers, and traders evaluating Kenyan coffee supply from Imperion Global Holdings."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="group rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft open:border-gold/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <h2 className="text-lg font-semibold text-forest">{item.question}</h2>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-beige text-2xl leading-none text-forest transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <SamplePolicy compact />
      </section>
    </>
  );
}
