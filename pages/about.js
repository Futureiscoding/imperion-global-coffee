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
              <div className="aspect-[4/3] rounded-lg bg-mist">
                {person.name === "Brian Mwangi" ? (
                  <img src="/images/brian-mwangi.jpeg" alt="Brian Mwangi" className="h-full w-full rounded-lg object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-stone">
                    Portrait to be supplied
                  </div>
                )}
              </div>
              <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-goldtext">{person.title}</p>
              <h2 className="mt-2 text-3xl font-semibold text-forest">{person.name}</h2>
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

      <section className="bg-beige/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="section-label">Operating approach</p>
          <h2 className="section-title">Evidence before commitment.</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["Integrity", "Clear terms, documented decisions and direct buyer communication."],
              ["Quality", "Grade, physical checks and cupping context before a shipment decision."],
              ["Traceability", "Origin and supply information presented without unsupported claims."],
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
