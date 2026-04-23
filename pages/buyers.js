import Image from "next/image";
import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

const mediaBlocks = [
  {
    title: "Coffee in the Field",
    image: "/images/media-coffee-field.jpg",
    body:
      "Placeholder for field engagement images showing sourcing visits, cherry assessment, farm relationships, and direct interaction with coffee-growing partners before harvest decisions move into lot preparation.",
  },
  {
    title: "Coffee at the Factory",
    image: "/images/media-coffee-factory.jpg",
    body:
      "Placeholder for early coffee processing imagery covering intake, sorting, pulping, washing, drying preparation, and the first quality checkpoints that shape export readiness.",
  },
  {
    title: "Avocado in the Field",
    image: "/images/media-avocado-field.jpg",
    body:
      "Placeholder for orchard engagement, maturity assessment, grower coordination, and sourcing activity around export-grade avocado selection and harvest planning.",
  },
  {
    title: "Avocado at the Packhouse",
    image: "/images/media-avocado-factory.jpg",
    body:
      "Placeholder for sorting, grading, packing, and handling workflows that show how avocado moves from orchard sourcing into export preparation.",
  },
  {
    title: "Macadamia in the Field",
    image: "/images/media-macadamia-field.jpg",
    body:
      "Placeholder for grower visits, orchard observation, crop readiness checks, and sourcing engagement across macadamia-producing areas.",
  },
  {
    title: "Macadamia in Processing",
    image: "/images/media-macadamia-factory.jpg",
    body:
      "Placeholder for receiving, drying, cracking, sorting, and early processing activity that helps buyers understand how macadamia transitions into exportable product.",
  },
];

export default function MediaPage() {
  return (
    <>
      <Seo
        title="Media | Imperion Global Holdings"
        description="See Imperion Global Holdings in the field with farmers and at the processing stage for coffee, avocado, and macadamia."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Media"
          title="Media — Where Origin Becomes Visible"
          body="This is where our supply chain moves from narrative to proof. The Media page offers a transparent, visual record of how our products begin their journey—from direct farm engagement through the earliest stages of processing. It captures the real conditions, people, and practices behind our coffee, avocados, and macadamia."
        />

        <div className="mt-8 rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Here, buyers can observe</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["On-the-ground sourcing", "Direct interaction with farmers and producer groups."],
              ["Harvest and handling practices", "How crops are picked, sorted, and prepared."],
              ["Early-stage processing", "Wet mills, drying beds, collection points, and aggregation."],
              ["Traceability in action", "The first controlled steps that shape quality and consistency."],
            ].map(([title, body]) => (
              <article key={title} className="rounded-[1.5rem] bg-beige/50 p-5">
                <h2 className="text-base font-semibold text-forest">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-ink/75">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-ink/75">
            Every image and video serves a purpose: to demonstrate integrity at origin, validate our sourcing
            standards, and provide buyers with confidence that what is promised is exactly what is delivered.
          </p>
          <p className="mt-3 text-sm font-semibold text-forest">
            This is not curated marketing—this is operational visibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaBlocks.map((block) => (
            <article key={block.title} className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3] bg-beige">
                <Image src={block.image} alt={block.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-forest">{block.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/75">{block.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
