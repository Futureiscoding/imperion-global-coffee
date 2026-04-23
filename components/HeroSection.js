import Link from "next/link";

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  primaryCta = { href: "/contact", label: "Request Samples" },
  secondaryCta,
}) {
  return (
    <section className="bg-hero-radial">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <div>
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
          ) : null}
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-forest md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/80">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white shadow-soft hover:bg-forest/90"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="rounded-[2rem] border border-forest/10 bg-white/80 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Buyer Snapshot</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-3xl font-semibold text-forest">6</p>
              <p className="mt-1 text-sm text-ink/70">Sample coffee lots featured for importer review</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-forest">12</p>
              <p className="mt-1 text-sm text-ink/70">Traceable process checkpoints from harvest to export</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-forest">3</p>
              <p className="mt-1 text-sm text-ink/70">Core certificate placeholders for compliance workflows</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-forest">72h</p>
              <p className="mt-1 text-sm text-ink/70">Target response window for sample and pricing inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
