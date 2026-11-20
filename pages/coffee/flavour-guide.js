import Seo from "@/components/Seo";

const descriptors = {
  Fruit: ["Blackcurrant", "Grapefruit", "Red apple", "Stone fruit", "Citrus", "Citrus peel"],
  Floral: ["Jasmine", "Tea rose", "Bergamot"],
  Sweet: ["Caramel", "Cane sugar", "Cocoa"],
  Spice: ["Mild spice"],
};

export default function FlavourGuidePage() {
  return (
    <>
      <Seo title="Kenyan Coffee Flavour Guide | Imperion" description="Explore flavours recorded in Imperion cupping notes: fruit, floral, sweet and spice descriptors." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">Flavour Guide</p>
        <h1 className="section-title">Flavours recorded by our cuppers.</h1>
        <p className="section-copy">Kenyan washed coffees are known for bright acidity and fruit character. Instead of a generic wheel, this guide presents descriptor families that we use when summarizing cupping notes.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {Object.entries(descriptors).map(([group, items]) => (
            <article key={group} className="premium-card p-6">
              <h2 className="text-xl font-semibold text-forest">{group}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => <span key={item} className="rounded-full border border-forest/15 bg-beige/60 px-4 py-2 text-sm">{item}</span>)}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/70">Cup scores: [CONFIRM: THE 100-POINT SCA SCALE]. The Kenya Coffee Flavor Map is a related public project whose atlas is planned for 2027; we will link to it when published.</p>
      </section>
    </>
  );
}
