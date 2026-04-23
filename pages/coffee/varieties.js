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
          title="Sample lot visibility for buyers evaluating profile, process, and quality fit."
          body="The table below includes six placeholder entries that can be replaced with live inventory from your master document. It is structured to support roaster, importer, and trading desk review."
        />
        <div className="mt-10">
          <VarietiesTable />
        </div>
      </section>
    </>
  );
}
