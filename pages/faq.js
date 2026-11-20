import Seo from "@/components/Seo";

const faqs = [
  ["Are samples really free?", "Samples are 200 g and free. The buyer pays the courier. Imperion credits the courier cost against the buyer's first invoice once the buyer places an order for their first consignment."],
  ["Can I see company documents?", "Licences and company documents are shared directly with verified buyers on request. We verify the buyer, then send documents from our official address or show them on a call."],
  ["How do I know this is the real Imperion?", "Use our official channels. We write only from @imperionglobalholdings.co.ke addresses and call or message from +254 748 167 811. We never ask for payment to a personal account."],
  ["Which grades do you offer?", "Available grades are confirmed in the current offer sheet. Ask for the sheet to see what is available for your requirements."],
  ["When is the harvest?", "The main crop is about October to December and the fly crop about April to August, varying by region and year."],
  ["Do you support EUDR?", "We are strengthening geo-mapping in our sourcing regions. Ask us for the current status by region. The EU buyer retains responsibility for its due diligence statement."],
  ["What is the minimum order?", "The minimum order is confirmed for each commercial offer."],
  ["How do I pay?", "Payment terms are agreed and confirmed in writing for each transaction."],
  ["Which Incoterms do you use?", "FOB Mombasa; CIF or CFR on request."],
  ["Do you sell macadamia?", "It is developing. We plan to offer processed kernel only. Register your interest; specifications are not published yet."],
];

export default function FaqPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  return (
    <>
      <Seo title="Buyer FAQ | Imperion Global Holdings" description="Answers about samples, verification, Kenyan coffee, EUDR and macadamia." structuredData={structuredData} />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="section-label">Buyer FAQ</p>
        <h1 className="section-title">Questions buyers ask before a shipment.</h1>
        <div className="mt-10 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="premium-card p-6">
              <summary className="cursor-pointer list-none text-lg font-semibold text-forest">{question}</summary>
              <p className="mt-4 text-sm leading-7 text-stone">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
