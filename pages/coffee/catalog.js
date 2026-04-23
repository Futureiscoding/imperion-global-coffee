import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";
import SpecSheet from "@/components/SpecSheet";
import ContactForm from "@/components/ContactForm";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Imperion Coffee Catalog",
  brand: "Imperion Global Holdings Limited",
  description: "Coffee product catalog with spec sheets, cupping score examples, and importer inquiry form.",
  category: "Green Coffee Beans",
};

export default function CoffeeCatalogPage() {
  return (
    <>
      <Seo
        title="Coffee Catalog | Imperion Global Holdings"
        description="Browse coffee catalog placeholders, download a spec sheet template, and send an importer-focused inquiry."
        structuredData={productSchema}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Product Catalog"
          title="Specification-driven coffee selling materials for technical buyer review."
          body="This page combines a downloadable spec sheet, sample cupping guidance, and an inquiry form. Replace the placeholder blocks with your live crop, microlot, and contract offer data."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SpecSheet
              title="Coffee Catalog Spec Sheet"
              description="Placeholder PDF for green grade, crop year, moisture, defects, bagging, screen size, availability window, and target FOB terms."
            />
            <div className="rounded-[1.75rem] border border-forest/10 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Cupping Snapshot</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
                <li>Score band placeholder: 84.5 to 86.25</li>
                <li>Common profiles: citrus, blackcurrant, caramel, florals, stone fruit</li>
                <li>Formats: washed, natural, and honey-processed samples</li>
                <li>Packaging placeholder: GrainPro-lined jute or buyer-specified equivalent</li>
              </ul>
            </div>
          </div>
          <ContactForm title="Request Coffee Samples" />
        </div>
      </section>
    </>
  );
}
