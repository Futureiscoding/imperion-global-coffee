import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";
import SpecSheet from "@/components/SpecSheet";
import ContactForm from "@/components/ContactForm";
import CoffeeLotsTable from "@/components/CoffeeLotsTable";

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
        title="Coffee Catalogue | Imperion Global Holdings"
        description="Review Imperion coffee specifications, lot visibility, cupping guidance, and importer-focused inquiry options for Kenyan green coffee."
        structuredData={productSchema}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Product Catalog"
          title="Specification-driven coffee selling materials for technical buyer review."
          body="This page combines downloadable specifications, lot visibility, cupping guidance, and a buyer inquiry form for roasters, importers, and green coffee trading teams."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <SpecSheet
              title="Coffee Catalog Spec Sheet"
              description="Buyer-facing PDF for green grade, crop year, moisture, defects, bagging, screen size, availability window, and target FOB terms."
            />
            <div className="rounded-[1.75rem] border border-forest/10 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Cupping Snapshot</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-ink/75">
                <li>Indicative score band: 84.5 to 86.25 depending on lot and crop timing</li>
                <li>Common profiles: citrus, blackcurrant, caramel, florals, stone fruit</li>
                <li>Formats: washed, natural, and honey-processed samples</li>
                <li>Packaging: GrainPro-lined jute or buyer-specified equivalent where available</li>
              </ul>
            </div>
          </div>
          <ContactForm title="Request Coffee Samples" />
        </div>
        <div className="mt-10">
          <CoffeeLotsTable />
        </div>
      </section>
    </>
  );
}
