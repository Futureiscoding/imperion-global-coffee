import Link from "next/link";
import Seo from "@/components/Seo";

const values = ["Integrity", "Traceability", "Quality", "Accountability", "Long-term partnerships", "Farmer and origin respect"];

const trustDetails = [
  "Based in Ruiru, Kiambu County, Kenya",
  "Main office address: P.O. Box 964-00232, Ruiru, Kenya",
  "Phone: +254 748 167 811",
  "Website: www.imperionglobalholdings.co.ke",
  "Main product focus: Premium Kenyan green coffee exports",
];

export default function AboutUsPage() {
  return (
    <>
      <Seo
        title="About Imperion Global Holdings Limited | Kenyan Export Company"
        description="Learn about Imperion Global Holdings Limited, a Kenya-based export company focused on traceable coffee, quality assurance, and buyer-focused agricultural trade."
        image="/images/simon-njuguna.jpg"
        imageAlt="Simon Njuguna, founder of Imperion Global Holdings Limited"
      />

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21, 58, 43, 0.66), rgba(21, 58, 43, 0.78)), url('/images/media-coffee-field.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">About Imperion</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Founder-led Kenyan coffee export discipline.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Imperion Global Holdings Limited connects international buyers with traceable Kenyan coffee and
              agricultural products through ethical sourcing, quality assurance, and reliable export coordination.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="overflow-hidden rounded-[2rem] border border-forest/10 bg-white shadow-soft">
            <div className="aspect-[4/5] bg-beige">
              <img src="/images/simon-njuguna.jpg" alt="Simon Njuguna, founder of Imperion Global Holdings Limited" className="h-full w-full object-cover" />
            </div>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Founder Profile</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Founder-Led Export Discipline</h2>
            <p className="mt-5 text-sm leading-8 text-ink/75">
              Imperion Global Holdings Limited is led by Simon Njuguna, whose background combines business
              development, export coordination, technology, compliance awareness, and a practical understanding of
              Kenya's agricultural value chains. The company was built to connect global buyers with Kenyan products
              through transparency, disciplined communication, and quality-focused sourcing.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-[1.5rem] bg-beige/60 p-6">
                <h3 className="text-lg font-semibold text-forest">Company Mission</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">
                  To connect international buyers with traceable Kenyan coffee and agricultural products through
                  ethical sourcing, quality assurance, and reliable export coordination.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-beige/60 p-6">
                <h3 className="text-lg font-semibold text-forest">Company Vision</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">
                  To become a trusted Kenyan export partner known for integrity, measurable quality, and long-term
                  buyer relationships.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Values</p>
          <h2 className="mt-3 text-3xl font-semibold text-forest">How Imperion approaches buyer relationships.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value} className="rounded-[1.25rem] bg-beige/60 p-5">
                <h3 className="text-lg font-semibold text-forest">{value}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Trust Details</p>
            <h2 className="mt-3 text-3xl font-semibold">Clear company details for buyer review.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/85">
              {trustDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 text-sm leading-7 text-white/85">
              <p>
                Email: <a href="mailto:info@imperionglobalholdings.co.ke" className="font-semibold text-gold">info@imperionglobalholdings.co.ke</a>
              </p>
              <p>
                Sales: <a href="mailto:sales@imperionglobalholdings.co.ke" className="font-semibold text-gold">sales@imperionglobalholdings.co.ke</a>
              </p>
            </div>
          </article>

          <article className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Export Focus</p>
            <h2 className="mt-3 text-3xl font-semibold text-forest">Coffee first, with broader Kenya supply support.</h2>
            <p className="mt-4 text-sm leading-8 text-ink/75">
              The company is positioned around premium Kenyan coffee exports for roasters, green coffee importers,
              distributors, traders, and buyers seeking origin transparency. Avocado and macadamia remain available
              for qualified buyers developing broader Kenya sourcing programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/coffee" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                Explore Coffee Program
              </Link>
              <Link href="/contact#inquiry-form" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
                Submit Buyer Inquiry
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
