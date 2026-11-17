import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

const mediaBlocks = [
  {
    title: "Coffee sourcing and origin engagement",
    image: "/images/media-coffee-field.jpg",
    alt: "Kenyan coffee origin engagement and sourcing visibility",
    body: "Field visibility helps buyers understand origin context, producer engagement, sourcing windows, and the early controls that shape lot identity.",
  },
  {
    title: "Green coffee grading and sample preparation",
    image: "/images/media-coffee-factory.jpg",
    alt: "Green coffee grading and sample preparation for buyer review",
    body: "Grading and sample preparation support buyer review of screen size, visual quality, moisture, cup profile, and lot suitability.",
  },
  {
    title: "Cupping and quality review",
    image: "/images/coffee-grade-aa.jpg",
    alt: "Kenyan green coffee beans prepared for cupping review",
    body: "Representative samples can be roasted and cupped to support profile review, quotation discussions, and commercial decision-making.",
  },
  {
    title: "Export packaging and storage",
    image: "/images/Warehouse.jpg",
    alt: "Export-ready coffee storage and packed cargo preparation",
    body: "Export preparation includes bagging, labelling, storage coordination, documentation review, and shipment planning through Kenya.",
  },
  {
    title: "Avocado and macadamia supply visibility",
    image: "/images/media-avocado-field.jpg",
    alt: "Kenyan avocado field visibility for secondary export supply",
    body: "Avocado and macadamia remain secondary export lines for qualified buyers seeking broader Kenyan agricultural sourcing programs.",
  },
  {
    title: "Buyer communication and documentation",
    image: "/images/coffee export.jpg",
    alt: "Coffee export documentation and buyer communication preparation",
    body: "Clear buyer communication supports sample requests, lot confirmation, pro forma invoice review, freight planning, and document pack preparation.",
  },
];

export default function MediaPage() {
  return (
    <>
      <Seo
        title="Field Visibility & Coffee Export Preparation | Imperion Global Holdings"
        description="See sourcing activity, coffee handling, quality checks, packaging, and export preparation as Imperion builds transparent coffee supply relationships from Kenya."
        image="/images/media-coffee-field.jpg"
        imageAlt="Kenyan coffee sourcing field visibility"
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Proof & Field Visibility"
          title="Field Visibility, Coffee Handling & Export Preparation"
          body="Buyers need more than promises. This section is designed to show sourcing activity, coffee handling, quality checks, packaging, and export preparation as Imperion builds transparent supply relationships from Kenya to international markets."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaBlocks.map((block) => (
            <article key={block.title} className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
              <div className="relative aspect-[4/3] bg-beige">
                <Image src={block.image} alt={block.alt} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-forest">{block.title}</h2>
                <p className="mt-4 text-sm leading-7 text-ink/75">{block.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-forest p-8 text-white shadow-soft">
          <h2 className="text-3xl font-semibold">Need current proof for a buyer file?</h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-white/80">
            Request recent lot photos, sample preparation details, packaging notes, or documentation support for the
            coffee program you are evaluating.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90">
              Submit Buyer Inquiry
            </Link>
            <Link href="/coffee/current-lots" className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold">
              View Current Coffee Lots
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
