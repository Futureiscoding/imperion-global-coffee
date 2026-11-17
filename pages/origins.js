import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";

const originRegions = [
  { name: "Nyeri", description: "High-altitude coffees with vibrant acidity and floral structure." },
  { name: "Kirinyaga", description: "Balanced, clean coffees with sweetness and layered complexity." },
  { name: "Kiambu", description: "Well-rounded lots with commercial reliability and clarity." },
  { name: "Embu", description: "Fruit-forward profiles suited to specialty and blend programs." },
  { name: "Meru", description: "Distinctive cup character with bright florals and citrus depth." },
  { name: "Bungoma", description: "Diverse regional expressions with strong consistency." },
  { name: "Mt. Elgon", description: "Highland lots with dense sweetness and structure." },
  { name: "Machakos", description: "Traceable origin lots supporting niche buyer programs." },
];

const supplyFlow = [
  { step: "01", title: "Farm", text: "Coffee is sourced from verified Kenyan growing regions and producer relationships." },
  { step: "02", title: "Processing", text: "Washed, natural and other processing styles are selected to match buyer preferences." },
  { step: "03", title: "Quality Control", text: "Lots are checked for grade, screen size, moisture, defects, and cupping profile." },
  { step: "04", title: "Export", text: "Documentation, packing, and logistics are coordinated with buyer requirements." },
  { step: "05", title: "Roaster", text: "Coffee moves from Kenya toward the buyer's roastery, importer or trading program." },
];

export default function OriginsPage() {
  return (
    <>
      <Seo
        title="Kenyan Coffee Origins | Imperion Global Holdings"
        description="Explore Kenyan coffee-growing regions and the farm-to-roaster journey behind Imperion's traceable green coffee supply."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Origins</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl">
              Kenyan coffee from known regions, known quality standards.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink/75">
              The story behind every lot starts with origin. Imperion works with Kenyan coffee-growing regions where climate, altitude,
              processing discipline and traceable supply create the foundation for premium green coffee programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/coffee" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                Explore Our Coffee
              </Link>
              <Link href="/contact#inquiry-form" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
                Request Samples
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-forest/10 bg-white p-3 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
              <Image src="/images/media-coffee-field.jpg" alt="Kenyan coffee-growing landscape" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Regional focus</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest md:text-4xl">Traceable Kenyan origin at the lot level.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {originRegions.map((region) => (
            <article key={region.name} className="rounded-[1.5rem] border border-forest/10 bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-semibold text-forest">{region.name}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{region.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Farm to roaster</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest md:text-4xl">From origin story to international buyer delivery.</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {supplyFlow.map((item) => (
            <article key={item.step} className="rounded-[1.5rem] border border-gold/30 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{item.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-forest">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
