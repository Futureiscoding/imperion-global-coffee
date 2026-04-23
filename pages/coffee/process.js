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
          title="Twelve checkpoints that show buyers how product quality is protected."
          body="This workflow is written for international buyers who need operational confidence, not marketing fluff. Each step can be expanded later with photos, documents, or lot-specific SOPs."
        />
        <div className="mt-10">
          <ProcessFlow />
        </div>
      </section>
    </>
  );
}
