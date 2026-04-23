import Seo from "@/components/Seo";

const sourcingRegions = {
  coffee: [
    "Nyeri — bright acidity, berry notes",
    "Kirinyaga — floral, complex",
    "Murang'a — wine-like depth",
    "Kiambu — chocolate & nutty tones",
    "Embu — balanced sweetness",
    "Rift Valley Highlands — bold, rich body",
  ],
  avocado: ["Murang'a", "Meru", "Kiambu", "Nyeri"],
  macadamia: ["Embu", "Kirinyaga", "Meru", "Kiambu"],
};

const qaSteps = [
  {
    title: "1. Farm Level Selection",
    body:
      "We work directly with farmers and cooperatives to ensure proper picking — only ripe red cherries are harvested to maintain cup quality.",
  },
  {
    title: "2. Factory Processing",
    body:
      "Coffee is pulped, fermented, washed, and dried on raised beds under strict moisture control to produce clean, consistent green coffee.",
  },
  {
    title: "3. Grading & Sorting",
    body:
      "Beans are separated by size (AA, AB, PB, etc.), density, and appearance to meet international classification standards.",
  },
  {
    title: "4. Sensory Evaluation",
    body:
      "Brian and our QC team conduct cupping, moisture analysis, defect identification, and flavor profiling to determine specialty scores.",
    highlight: "SCA scoring: 84–89+ specialty microlots",
  },
  {
    title: "5. Documentation",
    body:
      "All lots receive full traceability documents, including moisture reports, COA, quality certificates, and export paperwork.",
  },
  {
    title: "6. Export & Delivery",
    body:
      "We ensure timely shipment through Mombasa Port with palletized packaging, GrainPro liners, and buyer-preferred logistics routes.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Seo
        title="About Imperion Global Holdings | Our Story"
        description="Learn about Imperion Global Holdings Limited, our founder Simon Njuguna, our quality-led export team, sourcing regions, and our farm-to-export quality assurance cycle."
      />

      <div className="bg-beige/30">
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21, 58, 43, 0.62), rgba(21, 58, 43, 0.76)), url('/images/media-coffee-field.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">About Us</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                About Imperion Global Holdings
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/85">
                Imperion Global Holdings Limited is a premium export company specializing in Kenyan specialty
                coffee, Hass avocados, and macadamia nuts. We operate with a singular principle — integrity from
                farm to table.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
              <div className="aspect-[4/5] bg-beige">
                <img src="/images/simon-njuguna.jpg" alt="Simon Njuguna" className="h-full w-full object-cover" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Meet Our Founder</p>
              <h2 className="mt-3 text-3xl font-semibold text-forest">Simon Njuguna</h2>
              <p className="mt-5 text-sm leading-8 text-ink/75">
                Simon Njuguna is the founder of Imperion Global Holdings and a dedicated Kenyan coffee farmer.
                His journey began with a passion for agriculture and a deep respect for the farmers who shape
                the future of Kenyan produce. Growing up around coffee communities and later working in export
                logistics, Simon recognized a widening gap between Kenya&apos;s exceptional agricultural quality and
                the way it was represented to global markets.
              </p>
              <p className="mt-4 text-sm leading-8 text-ink/75">
                As both a producer and exporter, Simon understands the full value chain — from nurturing coffee
                trees to navigating international compliance. Imperion Global was built to bridge farmers and
                buyers through transparency, traceability, and ethical trade.
              </p>
              <div className="mt-6 rounded-[1.5rem] bg-beige/60 p-6">
                <h3 className="text-lg font-semibold text-forest">Vision</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">
                  To position Kenyan agricultural products — especially specialty coffee — as some of the most
                  trusted, traceable, and high-quality exports in the global marketplace.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <article className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
              <div className="aspect-[4/5] bg-beige">
                <img src="/images/brian-mwangi.jpeg" alt="Brian Mwangi" className="h-full w-full object-cover" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Quality-Led Team</p>
              <h2 className="mt-3 text-3xl font-semibold">Brian Mwangi — Quality Assurance Officer</h2>
              <p className="mt-5 max-w-4xl text-sm leading-8 text-white/85">
                Brian is responsible for ensuring every lot of coffee meets the highest international standards.
                With hands-on experience in sensory analysis, laboratory testing, and green bean grading, he
                manages:
              </p>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/85 md:grid-cols-2">
                <li>Moisture content testing (10–12% target)</li>
                <li>Defect screening and classification</li>
                <li>Physical grading and screen size evaluation</li>
                <li>Cupping coordination and profiling</li>
                <li>Traceability record keeping</li>
                <li>Certification and export compliance</li>
              </ul>
              <p className="mt-6 max-w-4xl text-sm leading-8 text-white/85">
                His expertise ensures that every microlot we ship delivers consistent quality, integrity, and full
                transparency.
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Primary Sourcing Regions</p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <article className="rounded-[1.75rem] bg-beige/50 p-6">
                <h2 className="text-2xl font-semibold text-forest">Coffee</h2>
                <p className="mt-3 text-sm leading-7 text-ink/75">
                  Sourced from high-altitude regions known globally for exceptional cup profiles:
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/75">
                  {sourcingRegions.coffee.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.75rem] bg-beige/50 p-6">
                <h2 className="text-2xl font-semibold text-forest">Avocado (Hass)</h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/75">
                  {sourcingRegions.avocado.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-[1.75rem] bg-beige/50 p-6">
                <h2 className="text-2xl font-semibold text-forest">Macadamia</h2>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-ink/75">
                  {sourcingRegions.macadamia.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Our Quality Assurance Cycle</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">
              Farm → Factory → Grading → Cupping → Export → Delivery
            </h2>
            <p className="mt-4 max-w-4xl text-sm leading-8 text-ink/75">
              We maintain full integrity through every step of our supply chain — from the farm all the way to
              the buyer&apos;s warehouse.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {qaSteps.map((step) => (
                <article key={step.title} className="rounded-[1.75rem] border border-forest/10 bg-beige/40 p-6">
                  <h3 className="text-xl font-semibold text-forest">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/75">{step.body}</p>
                  {step.highlight ? <p className="mt-4 text-sm font-semibold text-forest">{step.highlight}</p> : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
