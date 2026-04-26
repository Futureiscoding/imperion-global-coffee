import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

const faqs = [
  {
    question: "1. What types of Kenyan coffee do you export?",
    answer: [
      "We export high-quality Arabica from Kenya's premier growing regions, including Nyeri, Kirinyaga, Embu, Murang'a, Kiambu, and selected Rift Valley highlands.",
      "Our catalog includes:",
      "Specialty microlots (SL28, SL34, Ruiru 11, Batian)",
      "Commercial AA, AB, PB, C grades",
      "Fully washed, natural, and honey-processed lots",
      "We provide full traceability, cupping scores, and detailed specs for every lot.",
    ],
  },
  {
    question: "2. Do you provide samples before placing an order?",
    answer: [
      "Yes. We offer green coffee samples (100g-300g) for specialty buyers and quality-grade samples for avocado and macadamia buyers.",
      "Shipping can be arranged via DHL, FedEx, or your preferred courier.",
    ],
  },
  {
    question: "3. What is your minimum order quantity (MOQ)?",
    answer: [
      "Coffee: Minimum 1 full bag (60-70 kg) for microlots; full container shipments for commercial coffee.",
      "Avocados: 4,000-5,000 kg per shipment (depending on size and season).",
      "Macadamia Nuts: 25 kg minimum for samples; commercial bulk orders start from 1 ton.",
    ],
  },
  {
    question: "4. What certifications and documents do you provide?",
    answer: [
      "Every shipment includes:",
      "Phytosanitary Certificate (KEPHIS)",
      "Certificate of Origin",
      "Commercial Invoice & Packing List",
      "Fumigation Certificate (if required)",
      "Moisture & Quality Analysis Report",
      "Cupping Report (SCA format) for coffee",
      "Additional export documents can be arranged based on destination requirements.",
    ],
  },
  {
    question: "5. What payment terms do you offer?",
    answer: [
      "We support:",
      "FOB Mombasa and CIF/CFR shipping options",
      "Advance payment + balance on documentation",
      "LC (Letter of Credit) for bulk orders",
      "Payment terms vary depending on product type and volume.",
    ],
  },
  {
    question: "6. How long does it take to process and ship an order?",
    answer: [
      "Coffee microlots: 5-10 days (sampling, contracting, milling, QC).",
      "Commercial coffee: 10-20 days, depending on milling schedule.",
      "Avocado shipments: 3-5 days post-harvest (sorting, cooling, packing).",
      "Macadamia nuts: 7-14 days (grading and packing).",
      "Transit time varies by destination.",
    ],
  },
  {
    question: "7. Do you handle international logistics?",
    answer: [
      "Yes. We coordinate with trusted freight forwarders, shipping lines, and clearing agents to ensure smooth movement from Kenya to your destination port.",
      "Buyers may also choose to use their own logistics company.",
    ],
  },
  {
    question: "8. What packaging options are available?",
    answer: [
      "Coffee",
      "Jute bags with GrainPro liners",
      "Vacuum-sealed bags for microlots",
      "60-70 kg standard export bags",
      "Avocado",
      "4kg and 10kg cartons",
      "Pre-cooled and ventilated packaging",
      "Macadamia Nuts",
      "10kg, 20kg, or 25kg vacuum-sealed food-grade bags",
    ],
  },
  {
    question: "9. Which countries do you ship to?",
    answer: [
      "We currently ship to:",
      "Europe (Germany, France, Netherlands, Belgium, Norway)",
      "United States & Canada",
      "Middle East (UAE, Saudi Arabia, Qatar, Oman)",
      "Asia (Japan, South Korea, China)",
      "Africa (South Africa, Egypt, Morocco)",
      "We can export to any country with clear import regulations.",
    ],
  },
  {
    question: "10. Can you provide full traceability for coffee?",
    answer: [
      "Yes. Each lot includes:",
      "Farm or cooperative details",
      "Altitude, variety, and processing information",
      "Traceability documents",
      "Cupping notes & scores",
      "Lot ID, milling details, and quality reports",
      "For microlots, we provide individual farm profiles upon request.",
    ],
  },
];

const isListIntro = (line) =>
  line.endsWith(":") ||
  line === "Our catalog includes:" ||
  line === "Every shipment includes:" ||
  line === "We support:" ||
  line === "We currently ship to:" ||
  line === "Yes. Each lot includes:" ||
  line === "Coffee" ||
  line === "Avocado" ||
  line === "Macadamia Nuts";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Importer FAQ | Imperion Global Holdings"
        description="Frequently asked questions for international buyers and importers covering coffee exports, documentation, logistics, samples, and order terms."
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionIntro
          eyebrow="FAQ"
          title="Frequently Asked Questions (FAQ)"
          body="For international buyers and importers. Open each question to view the detailed answer."
          centered
        />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft open:border-gold/40"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <h2 className="text-lg font-semibold text-forest">{item.question}</h2>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-beige text-2xl leading-none text-forest transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="mt-4 space-y-3 text-sm leading-7 text-ink/75">
                {item.answer.map((line, index) =>
                  isListIntro(line) ? (
                    <p key={`${item.question}-${index}`} className="font-medium text-forest">
                      {line}
                    </p>
                  ) : (
                    <p key={`${item.question}-${index}`}>{line}</p>
                  )
                )}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
