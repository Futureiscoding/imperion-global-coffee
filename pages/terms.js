import Seo from "@/components/Seo";

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Seo title="Website Terms | Imperion Global Holdings" description="Terms for using the Imperion Global Holdings website." />
      <p className="section-label">Terms</p>
      <h1 className="section-title">Website terms</h1>
      <div className="mt-8 space-y-6 text-sm leading-8 text-stone">
        <p>Website information is general export-market information and is not a binding offer. Availability, specifications, prices and terms are confirmed through an offer sheet or contract.</p>
        <p>Sample requests are subject to buyer verification, a 200 g sample quantity and courier arrangements. The buyer pays the courier and receives the stated credit against the first invoice after confirming the first consignment order.</p>
        <p>Macadamia information is developing. No processed kernel specification or availability is offered unless confirmed through a direct buyer communication.</p>
        <p>For contract terms, contact the sales desk through the official company channels.</p>
      </div>
    </section>
  );
}
