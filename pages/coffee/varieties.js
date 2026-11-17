import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";
import VarietiesTable from "@/components/VarietiesTable";

export default function CoffeeVarietiesPage() {
  return (
    <>
      <Seo
        title="Coffee Varieties & Microlots | Imperion Global Holdings"
        description="Review coffee lot examples with region, variety, elevation, process, cup notes, screen size, moisture, and cupping scores."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Varieties & Microlots"
          title="Lot visibility for buyers evaluating profile, process, and quality fit."
          body="This lot visibility table is designed to help roasters, importers, and green coffee buyers quickly evaluate origin, process, screen size, moisture, cup profile, and availability before requesting samples or commercial quotations."
        />
        <div className="mt-10">
          <VarietiesTable />
        </div>
      </section>
    </>
  );
}
