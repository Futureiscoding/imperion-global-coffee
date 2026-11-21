import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import { people } from "@/content/rebuild-kit";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Imperion Global Holdings | Kenyan Coffee Exporter"
        description="Meet the team and operating approach behind Imperion's Kenyan coffee export service."
        image="/images/coffee export.jpg"
      />
      <section className="bg-darkgreen text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-gold">About</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none md:text-6xl">A Kenyan export team built for clear, buyer-led decisions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">Imperion coordinates Kenyan green coffee sourcing, evaluation and export communication for roasters, importers and green coffee traders.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            people.managingDirector,
            people.brian,
          ].map((person) => (
            <article key={person.name} className="premium-card p-8">
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-lg bg-mist">
                <Image
                  src={person.name === "Brian Mwangi" ? "/images/brian-mwangi.jpeg" : "/images/simon-njuguna-portrait.jpeg"}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 85vw, 40vw"
                  className="object-contain object-center"
                />
              </div>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-goldtext">{person.title}</p>
              <h2 className="mt-2 text-3xl font-semibold text-forest">{person.name}</h2>
              <p className="mt-4 text-sm leading-7 text-stone">
                {person.name === "Brian Mwangi"
                  ? "Brian's Quality Assurance and Q Grader role focuses on reviewing samples, recording physical and cup observations, and relating evaluation findings to buyer specifications. This work gives buyers useful quality context without replacing their own approval against agreed samples and requirements."
                  : "As Managing Director, Simon Njuguna guides Imperion's buyer-led work connecting Kenyan supply channels with international coffee buyers. The company's focus is on clear sourcing conversations, quality evaluation, and practical coordination from requirements through export preparation."}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone">Email: {person.email}</p>
              {person.linkedin.startsWith("http") ? (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-forest underline decoration-gold underline-offset-4">LinkedIn</a>
              ) : (
                <p className="mt-3 text-sm text-stone">LinkedIn: {person.linkedin}</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="section-label">Our story</p>
            <h2 className="section-title">A practical link between Kenyan supply and global buyers</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-stone">
              <p>Imperion Global Holdings Limited is a Kenya-based agricultural export and trading company. It serves coffee roasters, importers, and green coffee traders seeking Kenyan coffee, and coordinates agricultural product inquiries around buyer requirements.</p>
              <p>The work starts with a buyer's destination, volume, grade, processing, packaging, and timing requirements. Imperion discusses available supply, shares relevant specifications or samples where applicable, and coordinates evaluation, documentation, and shipment communication as a transaction progresses.</p>
              <p>Buyers work with Imperion for direct communication, quality information grounded in evaluation, and a clear view of sourcing and export steps. Availability and commercial details are confirmed for each inquiry rather than assumed in advance.</p>
            </div>
          </div>
          <div className="grid gap-5">
            <article className="premium-card p-6">
              <p className="eyebrow text-goldtext">Our mission</p>
              <p className="mt-3 text-sm leading-7 text-stone">Make Kenyan coffee and agricultural products easier for international buyers to source through clear, buyer-led coordination of supply, quality evaluation, and export preparation.</p>
            </article>
            <article className="premium-card p-6">
              <p className="eyebrow text-goldtext">Our vision</p>
              <p className="mt-3 text-sm leading-7 text-stone">Be a trusted Kenya-based link for buyers seeking transparent, well-coordinated access to Kenyan agricultural products.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-beige/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="section-label">Operating approach</p>
          <h2 className="section-title">How buyers work with Imperion</h2>
          <p className="section-copy">Buyer requirements guide sourcing and evaluation. Where applicable, sample review and specification alignment inform approval before commercial details, documentation, and shipment coordination are confirmed.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Clear communication", "Requirements, availability, and transaction details discussed directly with buyers."],
              ["Quality context", "Grade, physical checks, and cupping information shared where applicable."],
              ["Coordinated export steps", "Relevant documentation and shipment communication organized around each transaction."],
            ].map(([title, copy]) => (
              <article key={title} className="premium-card p-6">
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{copy}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="cta-primary mt-8">Contact the team</Link>
        </div>
      </section>
    </>
  );
}
