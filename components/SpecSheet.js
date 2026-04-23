export default function SpecSheet({ title = "Coffee Spec Sheet Template", description }) {
  return (
    <div className="rounded-[1.75rem] border border-forest/10 bg-white p-8 shadow-soft">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Download</p>
      <h3 className="mt-3 text-2xl font-semibold text-forest">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/75">
        {description ||
          "Use this placeholder PDF for buyer-facing technical details including moisture, screen size, defect count, crop year, packaging, and shipment readiness."}
      </p>
      <a
        href="/spec-sheet-template.pdf"
        className="mt-6 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-forest hover:bg-gold/90"
      >
        Download PDF
      </a>
    </div>
  );
}
