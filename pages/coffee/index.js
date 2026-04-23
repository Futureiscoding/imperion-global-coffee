import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Imperion Coffee Export Program",
  brand: "Imperion Global Holdings Limited",
  description:
    "Premium Kenyan Arabica coffee sourced, graded, and exported for international buyers seeking traceability, consistency, and quality assurance.",
  category: "Green Coffee Beans",
  material: "Kenyan Arabica coffee",
};

const featureLists = [
  {
    title: "Why Kenyan Coffee Stands Above the Rest",
    body:
      "Kenyan coffee is globally recognized for its vibrant acidity, berry sweetness, wine-like complexity, and clean finish. Grown on volcanic soils under optimal rainfall and sunshine, it consistently ranks among the top specialty coffees in the world.",
    items: [
      "High-altitude cultivation (1,400-2,100 MASL)",
      "Volcanic-rich soil that enhances flavor intensity",
      "Strict factory processing using the fully washed method",
      "Globally recognized varieties such as SL28, SL34, Batian, and Ruiru 11",
    ],
  },
  {
    title: "Processing Methods",
    body: "We export a range of carefully processed coffees based on buyer requirements.",
    items: [
      "Fully Washed: classic Kenyan clean cup, bright acidity, floral and berry notes",
      "Natural: fruity, complex cup profile with heavier body",
      "Honey Process: sweet, balanced, caramel-toned profile",
      "Double Fermentation: signature high-clarity Kenyan profile",
    ],
    footnote:
      "Each processing style is managed with controlled fermentation, clean water handling, and disciplined drying practices to preserve cup clarity and consistency.",
  },
  {
    title: "Available Grades",
    body: "We supply all Kenyan export-grade classifications.",
    items: [
      "AA: large size, top quality",
      "AB: balanced profile, widely preferred",
      "PB (Peaberry)",
      "C: small screen, commercial grade",
      "TT: light density beans",
      "T: fragments and smaller beans",
    ],
    footnote:
      "Specialty and premium estate grades typically score between 84 and 89+ SCA points depending on lot and region.",
  },
  {
    title: "Our Sourcing Regions",
    body: "We source from the most reputable coffee-growing zones in Kenya, each with its own flavor signature.",
    items: [
      "Nyeri: bright acidity, berry profiles",
      "Kirinyaga: floral, complex, silky body",
      "Embu: sweet, well-rounded cups",
      "Murang'a: bold flavor, winey notes",
      "Kiambu: earthy, chocolate tones",
      "Meru: fruity, spicy notes",
    ],
  },
  {
    title: "Export Packaging Options",
    items: [
      "60kg jute bags with GrainPro liners",
      "Palletized and shrink-wrapped consignments",
      "Custom labeling including lot number, factory name, and grade",
    ],
  },
];

const documents = [
  "Certificate of Origin",
  "Moisture report",
  "Grading and screening report",
  "Sample approval form",
  "Quality consistency report",
];

const gradeCards = [
  {
    title: "AA",
    description: "Large screen size with premium export positioning and top-tier presentation for buyers seeking standout lots.",
    image: "/images/grade-placeholder-aa.jpg",
  },
  {
    title: "AB",
    description: "Balanced, widely preferred grade with strong market familiarity across specialty and commercial programs.",
    image: "/images/grade-placeholder-ab.jpg",
  },
  {
    title: "PB (Peaberry)",
    description: "Distinctive peaberry separation often sought for focused roasting programs and unique cup expression.",
    image: "/images/grade-placeholder-pb.jpg",
  },
  {
    title: "C",
    description: "Smaller screen commercial grade suited to buyers working across value-driven or blended coffee programs.",
    image: "/images/grade-placeholder-c.jpg",
  },
  {
    title: "TT",
    description: "Light-density beans separated during grading, useful where profile fit matters more than top screen size.",
    image: "/images/grade-placeholder-tt.jpg",
  },
  {
    title: "T",
    description: "Smaller fragments and bean pieces typically positioned for specific commercial uses and lower-grade programs.",
    image: "/images/grade-placeholder-t.jpg",
  },
];

const qcChecks = [
  "Moisture analysis (10-12%)",
  "Defect count grading",
  "SCA cupping profiles",
  "Screen size distribution",
  "Physical bean analysis",
  "Color uniformity checks",
];

export default function CoffeePage() {
  return (
    <>
      <Seo
        title="Coffee Exports | Imperion Global Holdings"
        description="Premium Kenyan coffee exports for international buyers, roasters, traders, and compliance teams seeking traceability, grading precision, and export-ready documentation."
        structuredData={productSchema}
      />

      <div className="bg-beige">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/coffee-farm-hero.jpg"
              alt="Coffee farm landscape placeholder background"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/45 via-white/18 to-white/8" />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
            <div className="relative z-10">
              <div className="max-w-3xl rounded-[2rem] border border-white/60 bg-white/92 p-8 shadow-soft backdrop-blur-md md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Flagship Coffee Program</p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl lg:text-6xl">
                  Kenyan coffee at the heart of Imperion Global.
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/90">
                  At Imperion Global Holdings Limited, coffee is not just a product. It is the foundation of our
                  business, our heritage, and our identity. We specialize in sourcing, grading, and exporting premium
                  Kenyan Arabica coffee from renowned high-altitude regions. Our role is to connect international buyers
                  with origin coffee that is clearly presented, professionally prepared, and export-ready.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                  >
                    Request Coffee Samples
                  </Link>
                  <Link
                    href="/coffee/catalog"
                    className="inline-flex rounded-full border border-forest/20 bg-white px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
                  >
                    View Coffee Catalogue
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative z-10 rounded-[2rem] border border-white/60 bg-white/94 p-8 shadow-soft backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Buyer Snapshot</p>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-3xl font-semibold text-forest">1,400-2,100</p>
                  <p className="mt-1 text-sm text-ink/70">MASL sourcing range across Kenya's premium coffee zones</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-forest">84-89+</p>
                  <p className="mt-1 text-sm text-ink/70">Target specialty score range for premium estate lots</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-forest">24h</p>
                  <p className="mt-1 text-sm text-ink/70">Response window target for sample and pricing inquiries</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-gold/40 bg-white p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-forest">Coffee Varieties We Export</h2>
              <p className="mt-4 text-sm leading-8 text-ink/75">
                We supply both specialty and commercial grade coffees sourced from cooperative societies, estates, and
                privately-owned farms, giving buyers flexibility across profile, grade, and volume requirements.
              </p>
              <h3 className="mt-6 text-lg font-semibold text-forest">Primary Varieties</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {["SL28", "SL34", "Ruiru 11", "Batian", "K7", "Peaberry (PB)"].map((item) => (
                  <span key={item} className="rounded-full bg-beige px-4 py-2 text-sm font-medium text-forest">
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-forest">Specialty Microlots</h3>
              <p className="mt-3 text-sm leading-8 text-ink/75">
                On request, we offer estate microlots with unique processing styles, higher cupping scores, and full
                traceability from single farms.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/coffee/varieties"
                  className="inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest hover:bg-gold/90"
                >
                  View Varieties & Microlots
                </Link>
              </div>
            </article>

            <article className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
              <h2 className="text-2xl font-semibold">Unmatched Quality Assurance</h2>
              <p className="mt-4 text-sm leading-8 text-white/80">
                Every coffee lot is reviewed before export through physical analysis, moisture checks, and sensory
                evaluation. The goal is simple: give buyers a clearer picture of the lot before shipment decisions are
                made.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Pre-Export QC</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80">
                    {qcChecks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Buyer Documents</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-white/80">
                    {documents.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {featureLists.map((section) => {
              if (section.title === "Available Grades") {
                return (
                  <article
                    key={section.title}
                    className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft lg:col-span-2"
                  >
                    <h2 className="text-2xl font-semibold text-forest">{section.title}</h2>
                    {section.body ? <p className="mt-4 text-sm leading-8 text-ink/75">{section.body}</p> : null}
                    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {gradeCards.map((grade) => (
                        <div
                          key={grade.title}
                          className="overflow-hidden rounded-[1.5rem] border border-forest/10 bg-beige/30"
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={grade.image}
                              alt={`${grade.title} coffee grade placeholder`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-semibold text-forest">{grade.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-ink/75">{grade.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {section.footnote ? <p className="mt-6 text-sm leading-8 text-ink/75">{section.footnote}</p> : null}
                  </article>
                );
              }

              return (
                <article key={section.title} className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
                  <h2 className="text-2xl font-semibold text-forest">{section.title}</h2>
                  {section.body ? <p className="mt-4 text-sm leading-8 text-ink/75">{section.body}</p> : null}
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-ink/75">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {section.footnote ? <p className="mt-6 text-sm leading-8 text-ink/75">{section.footnote}</p> : null}
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] bg-forest p-10 text-white shadow-soft">
            <h2 className="text-3xl font-semibold">Ready to import premium Kenyan coffee?</h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/80">
              Contact our export team to request pricing, samples, or full specifications. Share your market,
              preferred grades, and target volumes, and we will respond with the most relevant next steps.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-forest hover:bg-gold/90"
              >
                Request a Quote
              </Link>
              <Link
                href="/coffee/catalog"
                className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-gold hover:text-gold"
              >
                Get Coffee Samples
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
