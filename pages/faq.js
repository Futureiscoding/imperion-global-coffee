import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

const faqs = [
  ["What grades of Kenyan coffee do you supply?", "We support Kenyan green coffee supply conversations for AA, AB, PB, and C grades, subject to availability, sourcing window, milling schedule, and buyer requirements."],
  ["Do you supply green or roasted coffee?", "Our export focus is green coffee for roasters, importers, traders, distributors, and green coffee buyers. Roasted coffee requests can be discussed case by case."],
  ["Can buyers request samples?", "Yes. Qualified buyers may request curated green coffee samples before committing to commercial volumes. Available sample grades depend on current lots and sourcing windows."],
  ["What is your sample credit policy?", "Sample costs and courier charges may be credited against the first confirmed commercial order, subject to prior agreement between Imperion and the buyer."],
  ["Do you provide SCA cupping scores?", "Where cupping has been completed, we can share cupping notes and score references. Final buyer approval should be based on the buyer's own sample review and commercial confirmation."],
  ["Are the coffees traceable?", "We support traceability through origin records, lot identification, processing observations, milling details, and buyer-specific documentation where available for the selected lot."],
  ["What is the usual packaging?", "Common coffee packaging includes 60kg jute bags, with GrainPro liner options where available or requested. Packaging is confirmed per lot, buyer requirement, and quotation."],
  ["How is coffee priced?", "Coffee pricing depends on grade, cup profile, volume, availability, quality indicators, market conditions, packaging, and shipment terms."],
  ["Do you quote FOB Mombasa?", "Yes. FOB Mombasa is a standard quotation basis for Kenyan coffee export discussions."],
  ["Can you quote CIF?", "Yes. CIF quotations can be supported when the buyer provides destination port, quantity, shipment timing, and documentation requirements."],
  ["Are prices fixed or subject to market availability?", "Prices are subject to lot availability, market movement, buyer reservation, milling schedules, and final confirmation through an official offer or pro forma invoice."],
  ["What documents can be provided?", "Document support may include commercial invoice, packing list, certificate of origin, phytosanitary certificate, quality or grading report where applicable, and other buyer-specific export documents."],
  ["Which countries do you export to?", "Imperion can discuss supply for buyers in Europe, the United States, Asia, the Middle East, Africa, and other markets where import requirements are clear and commercially workable."],
  ["How long does shipment take?", "Shipment timing depends on sampling, buyer approval, milling, packaging, document preparation, vessel schedule, and destination. The team will confirm realistic timing during quotation."],
  ["Can you support first-time buyers?", "Yes. We can explain the sourcing path, samples, documentation, Incoterms, and shipment steps so first-time buyers understand the commercial process before committing."],
  ["What payment terms do you accept?", "Payment terms are agreed per buyer and transaction. They may depend on order size, buyer history, risk review, and the commercial structure confirmed in the pro forma invoice."],
  ["Do you support LC transactions?", "LC transactions can be discussed for suitable commercial orders when the issuing bank, documentation requirements, and terms are acceptable to both parties."],
  ["Can payment terms vary by buyer?", "Yes. Payment terms can vary by buyer, order size, risk profile, destination, product, and transaction history."],
];

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Coffee Export FAQ | Imperion Global Holdings"
        description="Buyer-focused FAQ covering Kenyan coffee grades, green coffee samples, pricing, FOB Mombasa, CIF support, export documents, shipment timing, and payment terms."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionIntro
          eyebrow="FAQ"
          title="Coffee Buyer Questions"
          body="Careful answers for roasters, importers, distributors, traders, and new buyers evaluating Kenyan green coffee from Imperion."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft open:border-gold/40">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <h2 className="text-lg font-semibold text-forest">{question}</h2>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-beige text-2xl leading-none text-forest transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-ink/75">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
