const assets = [
  { label: "Company Profile PDF", href: "/company-profile.pdf" },
  { label: "Coffee Lot Sheet", href: "/coffee-lot-sheet.pdf" },
  { label: "Sample Policy PDF", href: "/sample-policy.pdf" },
  { label: "Export Process Guide", href: "/export-process-guide.pdf" },
  { label: "Buyer Inquiry Form", href: "/buyer-inquiry-form.pdf" },
];

export default function DownloadAssets({ compact = false }) {
  return (
    <section className={compact ? "" : "mx-auto max-w-7xl px-6 pb-16"}>
      <div className="rounded-[1.5rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Trade Assets</p>
        <h2 className="mt-3 text-2xl font-semibold">Downloadable buyer documents.</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {assets.map((asset) => (
            <a
              key={asset.label}
              href={asset.href}
              className="inline-flex min-h-16 items-center justify-center rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-semibold text-white hover:border-gold hover:text-gold"
            >
              {asset.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
