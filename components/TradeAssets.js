import Link from "next/link";

const tradeAssets = [
  {
    label: "Kenya Coffee Sourcing Guide PDF",
    href: "/images/Kenya-Coffee-Sourcing-Guide.pdf",
    status: "Download the sourcing guide",
    download: true,
  },
  {
    label: "Company Profile PDF",
    href: "/company-profile.pdf",
    status: "Ready for download",
    download: true,
  },
  {
    label: "Coffee Catalogue PDF",
    href: "/coffee/catalog",
    status: "Online catalogue available",
  },
  {
    label: "Coffee Spec Sheet",
    href: "/spec-sheet-template.pdf",
    status: "Ready for download",
    download: true,
  },
  {
    label: "Sample Request Form",
    href: "/contact#inquiry-form",
    status: "Submit online",
  },
  {
    label: "Buyer Inquiry Form",
    href: "/contact#inquiry-form",
    status: "Submit online",
  },
  {
    label: "Export Documentation Checklist",
    href: "/contact#inquiry-form",
    status: "Request latest copy from sales",
  },
];

function AssetLink({ asset }) {
  const classes =
    "flex min-h-32 flex-col justify-between rounded-[1.25rem] border border-white/18 bg-white/8 p-5 text-left transition hover:border-gold hover:bg-white/12";

  const content = (
    <>
      <span className="text-base font-semibold text-white">{asset.label}</span>
      <span className="mt-4 text-sm leading-6 text-white/75">{asset.status}</span>
    </>
  );

  if (asset.download) {
    return (
      <a href={asset.href} download className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={asset.href} className={classes}>
      {content}
    </Link>
  );
}

export default function TradeAssets({ compact = false }) {
  return (
    <section className={compact ? "" : "mx-auto max-w-7xl px-6 pb-16"}>
      <div className="rounded-[2rem] border border-forest/10 bg-forest p-8 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Trade Assets</p>
        <h2 className="mt-3 text-3xl font-semibold">Buyer documents and request forms.</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/78">
          Download available trade materials or request the latest buyer-specific documents from the sales team.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tradeAssets.map((asset) => (
            <AssetLink key={asset.label} asset={asset} />
          ))}
        </div>
      </div>
    </section>
  );
}
