import Seo from "@/components/Seo";
import Link from "next/link";

const grades = [
  ["AA", "Screens 17 and 18, the largest standard beans"],
  ["AB", "Screens 15 and 16, usually the most plentiful grade"],
  ["PB", "Peaberry: a single rounded bean in the cherry"],
  ["C", "Smaller beans below AB, around screen 14"],
  ["E", "Elephant: very large beans, rare"],
  ["TT", "Lighter beans separated from AA, AB and E by air"],
  ["T", "Lightest, broken and small beans separated from C"],
  ["MH / ML", "Mbuni Heavy and Light: dry-processed coffee"],
  ["UG", "Ungraded: coffee that fits no official grade"],
];

export default function GradesPage() {
  return (
    <>
      <Seo title="Kenyan Coffee Grades and Varieties | Imperion" description="Understand Kenyan AA, AB, PB and other coffee grades and major Arabica varieties." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">Grades and Varieties</p>
        <h1 className="section-title">Read Kenyan grades before you compare offers.</h1>
        <p className="section-copy">Kenyan grades describe bean size and density. The cup score describes taste. Screen sizes are indicative until checked against the current Coffee Board of Kenya standard.</p>
        <div className="mt-10 grid gap-3">
          {grades.map(([grade, meaning]) => (
            <article key={grade} className="premium-card grid items-center gap-4 p-5 md:grid-cols-[120px_1fr]">
              <p className="font-mono text-2xl font-bold text-forest">{grade}</p>
              <p className="text-sm leading-7 text-ink/75">{meaning}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-goldtext">Available grades: request the current offer sheet.</p>
      </section>
      <section className="bg-beige/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="section-title">Varieties</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["SL28", "Selected in the 1930s, known for bright, distinctive cup character."],
              ["SL34", "Selected in the 1930s, associated with rich Kenyan character."],
              ["Ruiru 11", "Bred for disease resistance, including coffee berry disease and leaf rust."],
              ["Batian", "Bred for disease resistance and a range of growing conditions."],
              ["K7", "A Kenyan variety grown in several regions."],
              ["SL14", "A Kenyan-grown variety also found in some origin programs."],
            ].map(([name, copy]) => (
              <article key={name} className="premium-card p-6">
                <h3 className="text-xl font-semibold text-forest">{name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/75">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm font-semibold text-goldtext">Handled varieties are confirmed for each current offer.</p>
          <Link href="/coffee" className="cta-primary mt-8">Request the offer sheet</Link>
        </div>
      </section>
    </>
  );
}
