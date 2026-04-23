export default function TrustElements() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Compliance Support</p>
        <h2 className="mt-3 text-3xl font-semibold text-forest">Documentation built for importer due diligence.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["Phytosanitary", "Pre-shipment plant health documentation placeholder."],
            ["Certificate of Origin", "Country-of-origin paperwork for customs and traceability."],
            ["Certificate of Analysis", "Lot-specific moisture, defects, and quality checks."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-[1.5rem] bg-beige/50 p-5">
              <h3 className="text-base font-semibold text-forest">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/75">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quality Assurance</p>
        <div className="mt-5 overflow-hidden rounded-[1.5rem]">
          <img
            src="/images/qa-officer-placeholder.svg"
            alt="Placeholder portrait for Imperion's quality assurance officer"
            className="h-auto w-full"
          />
        </div>
        <h3 className="mt-5 text-xl font-semibold text-forest">QA Officer Profile</h3>
        <p className="mt-2 text-sm leading-7 text-ink/75">
          Placeholder profile: a quality assurance lead overseeing sample review, moisture checks, grading,
          documentation, and buyer specification matching before shipment.
        </p>
      </div>
    </section>
  );
}
