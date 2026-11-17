import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";
import ProcessFlow from "@/components/ProcessFlow";

export default function CoffeeProcessPage() {
  return (
    <>
      <Seo
        title="Farm to Cup Process | Imperion Global Holdings Coffee"
        description="See Imperion's 12-step farm-to-cup workflow, designed to reassure buyers on traceability, quality control, and export readiness."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Farm to Cup"
          title="Twelve process checkpoints that protect quality from origin to shipment."
          body="This workflow shows how buyer requirements, origin controls, moisture discipline, cupping review, packaging, documentation, and shipment updates work together before coffee leaves Kenya."
        />
        <div className="mt-10">
          <ProcessFlow />
        </div>
        <div className="mt-10 rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Checkpoints Across the Chain</p>
          <h2 className="mt-3 text-3xl font-semibold">Controls buyers can ask about before confirming shipment.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Origin records",
              "Processing observations",
              "Moisture readings",
              "Screen size verification",
              "Cupping notes",
              "Packaging checks",
              "Export document review",
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/15 bg-white/8 p-5 text-sm font-semibold leading-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
