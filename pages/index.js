import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import { brand, people, samples } from "@/content/rebuild-kit";

const coffeeGuides = [
  {
    href: "/coffee/grades-and-varieties",
    number: "01",
    title: "Grades and varieties",
    description: "Get familiar with the language used to describe Kenyan coffee.",
  },
  {
    href: "/coffee/regions-and-harvest",
    number: "02",
    title: "Regions and harvest",
    description: "Explore Kenya's coffee-growing regions and the crop calendar.",
  },
  {
    href: "/coffee/flavour-guide",
    number: "03",
    title: "Flavour guide",
    description: "A guide to coffee flavour and the language used to describe it.",
  },
  {
    href: "/quality-traceability",
    number: "04",
    title: "Quality and traceability",
    description: "Learn about our approach and the information buyers can request.",
  },
];

const buyerJourney = [
  ["01", "Start with context", "Share the coffee profile, volume and destination you have in mind."],
  ["02", "Compare the details", "Use grade, variety, process and cup notes to shape your enquiry."],
  ["03", "Request an offer", "Ask us for current availability and commercial details directly."],
];

export default function HomePage() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: `https://${brand.domain}`,
    telephone: brand.phone,
  };

  return (
    <>
      <Seo
        title="Kenyan Coffee Exporter | Imperion Global Holdings Limited"
        description="Imperion Global Holdings Limited is a Kenyan coffee exporter serving international roasters and importers. Request samples or a current offer."
        structuredData={organization}
      />

      <section className="overflow-hidden bg-forest text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-goldlight">Kenyan coffee · International trade</p>
            <h1 className="mt-5 font-serif text-[2.75rem] font-medium leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Traceable Kenyan green coffee,
              <span className="block text-goldlight">from slope to roaster.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Washed Arabica for international roasters and importers, graded, cupped and documented before it ships.
            </p>
            <p className="mt-5 font-serif text-xl text-goldlight">{brand.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/samples" className="cta-primary">
                Request samples
              </Link>
              <Link
                href="/coffee"
                className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:border-goldlight hover:text-goldlight"
              >
                Request an offer
              </Link>
            </div>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.14em] text-white/60">
              Ruiru, Kiambu County, Kenya
            </p>
          </div>

          <figure className="relative min-h-[300px] overflow-hidden rounded-lg border border-white/15 bg-darkgreen sm:min-h-[420px]">
            <Image
              src="/images/coffee-farm-hero.jpg"
              alt="A coffee grower among coffee plants in Kenya"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 46vw"
              className="object-cover object-center"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-darkgreen/90 px-5 py-4 text-sm text-white sm:px-7">
              <span>At origin in Kenya</span>
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-goldlight">Imperion</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section aria-label="Coffee enquiry essentials" className="border-b border-forest/10 bg-beige">
        <div className="mx-auto grid max-w-7xl divide-y divide-forest/10 px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="py-5 sm:px-6 sm:first:pl-0">
            <p className="font-mono text-xl text-goldtext">200 g</p>
            <p className="mt-1 text-sm font-semibold text-forest">Free samples; the buyer pays the courier.</p>
          </div>
          <div className="py-5 sm:px-6">
            <p className="font-mono text-sm text-goldtext">NAMED TEAM</p>
            <p className="mt-1 text-sm font-semibold text-forest">{people.managingDirector.name}, Managing Director and Brian Mwangi.</p>
          </div>
          <div className="py-5 sm:px-6 sm:pr-0">
            <p className="font-mono text-sm text-goldtext">BUYER DOCUMENTS</p>
            <p className="mt-1 text-sm font-semibold text-forest">Company documents shared with verified buyers on request.</p>
          </div>
          <div className="py-5 sm:px-6 sm:pr-0">
            <p className="font-mono text-sm text-goldtext">FOB MOMBASA</p>
            <p className="mt-1 text-sm font-semibold text-forest">CIF or CFR discussed for each offer.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-forest/10 bg-beige">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
          <p className="section-label">Working with Kenya's trade framework</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-forest">
            We work within the coffee and trade authorities that apply.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-stone">
            Licence numbers and certificates are not published. Exact relationships and verified statuses are shared directly with verified buyers on request.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Coffee Board of Kenya",
              "Kenya Plant Health Inspectorate Service",
              "KenTrade",
              "Made in Kenya",
            ].map((authority) => (
              <article key={authority} className="min-h-28 border border-forest/10 bg-white p-5">
                <p className="text-sm font-bold text-forest">{authority}</p>
                <p className="mt-3 text-xs leading-5 text-stone">Authority or mark status to be confirmed.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <p className="section-label">What we do</p>
        <h2 className="section-title">One coffee specialist, five connected services.</h2>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Sourcing", "Washed Kenyan Arabica from verified sourcing regions."],
            ["Quality", "Measured and cupped before a coffee is offered."],
            ["Export documents", "Paperwork prepared before loading."],
            ["Logistics", "Road to Mombasa and ocean freight, discussed per order."],
            ["Geo-mapping", "Plot-level mapping work is being strengthened."],
          ].map(([title, copy], index) => (
            <article key={title} className="min-h-44 border-t-2 border-gold bg-white p-5 shadow-soft">
              <p className="font-mono text-xs text-goldtext">0{index + 1}</p>
              <h3 className="mt-5 font-serif text-xl text-forest">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          <article className="premium-card grid gap-6 p-6 sm:grid-cols-[170px_1fr]">
            <div className="relative flex min-h-44 items-center justify-center rounded-md bg-mist px-4 text-center">
              <p className="text-sm font-semibold text-stone">Portrait to be supplied</p>
            </div>
            <div>
              <p className="eyebrow text-goldtext">Managing Director</p>
              <h2 className="mt-2 font-serif text-3xl text-forest">{people.managingDirector.name}</h2>
              <p className="mt-4 text-sm leading-7 text-stone">
                “Imperion exists to make buying Kenyan coffee simple and safe: a precise specification, honest availability and a person you can call.”
              </p>
              <Link href="/about" className="mt-5 inline-flex min-h-11 items-center font-bold text-forest underline decoration-gold underline-offset-4">
                Read full message
              </Link>
            </div>
          </article>
          <article className="premium-card grid gap-6 p-6 sm:grid-cols-[170px_1fr]">
            <div className="relative min-h-44 overflow-hidden rounded-md bg-mist">
              <Image
                src="/images/brian-mwangi.jpeg"
                alt="Brian Mwangi at the coffee quality desk"
                fill
                sizes="170px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="eyebrow text-goldtext">Quality Assurance and Q Grader</p>
              <h2 className="mt-2 font-serif text-3xl text-forest">{people.brian.name}</h2>
              <p className="mt-4 text-sm leading-7 text-stone">
                “Every coffee we offer is measured and cupped before it is described.”
              </p>
              <Link href="/quality-traceability" className="mt-5 inline-flex min-h-11 items-center font-bold text-forest underline decoration-gold underline-offset-4">
                Read about quality
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="section-label">A considered first step</p>
          <h2 className="section-title">Start with the coffee you need.</h2>
          <p className="section-copy">
            Share your requirements with us, explore the Kenyan coffee guide, or request a sample before moving to an offer.
            We do not publish live lots or unverified stock availability.
          </p>
          <Link href="/coffee" className="cta-secondary mt-6">
            Explore Kenyan coffee
          </Link>
        </div>
        <aside className="border-l-2 border-gold bg-white px-6 py-7 shadow-soft sm:px-8">
          <p className="eyebrow text-goldtext">Sample terms</p>
          <p className="mt-3 font-serif text-2xl leading-snug text-forest">200 g to begin the conversation.</p>
          <p className="mt-3 text-sm leading-7 text-stone">{samples.term}</p>
          <Link href="/samples" className="mt-5 inline-flex min-h-11 items-center font-bold text-forest underline decoration-gold underline-offset-4">
            How sample requests work
          </Link>
        </aside>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="section-label">A buyer's path</p>
            <h2 className="section-title">From first questions to an offer.</h2>
            <p className="section-copy">
              Every enquiry is different. These guideposts help you decide what to ask and what to compare.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">
              <Image
                src="/images/gallery/cupping-session.jpg"
                alt="Green coffee samples and cups arranged for a cupping session"
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
              <p className="absolute bottom-4 left-4 rounded-sm bg-ivory/95 px-3 py-2 text-xs font-semibold text-forest">
                Compare what matters to your roast
              </p>
            </div>
            <ol className="divide-y divide-forest/10">
              {buyerJourney.map(([number, title, copy]) => (
                <li key={number} className="grid gap-3 py-5 sm:grid-cols-[4rem_1fr]">
                  <span className="font-mono text-sm text-goldtext">{number}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-forest">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Learn Kenyan coffee</p>
            <h2 className="section-title">A useful guide for your next enquiry.</h2>
          </div>
          <Link href="/coffee" className="min-h-11 self-start font-semibold text-forest underline decoration-gold underline-offset-4 sm:self-auto">
            All coffee information
          </Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coffeeGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group min-h-48 border border-forest/10 bg-white p-5 transition hover:-translate-y-1 hover:border-forest/30 hover:shadow-soft"
            >
              <span className="font-mono text-xs text-goldtext">{guide.number}</span>
              <h3 className="mt-6 font-serif text-2xl text-forest group-hover:text-leaf">{guide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-forest/10 bg-beige">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="section-label">A developing second line</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-forest sm:text-4xl">
              Macadamia kernels, in development.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone">
              Coffee remains our primary product. Our macadamia offering is developing; specifications and availability are not yet published.
            </p>
          </div>
          <Link href="/macadamia" className="cta-secondary">
            Explore macadamia
          </Link>
        </div>
      </section>

      <section className="bg-forest text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-14 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <span className="font-mono text-sm uppercase tracking-[0.16em] text-goldlight">EU due diligence</span>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl">Geo-mapping work is being strengthened.</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/75">
              We are strengthening plot-level geo-mapping in our sourcing regions to support EU buyers' due diligence. This is not a claim of full EUDR compliance.
            </p>
          </div>
          <Link href="/quality-traceability" className="min-h-11 self-start font-semibold text-goldlight underline decoration-gold underline-offset-4 lg:self-center">
            Our approach
          </Link>
        </div>
      </section>

      <section className="bg-darkgreen text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-goldlight">Begin a conversation</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
              Tell us what you are looking for.
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/75">
              Request a coffee sample, ask for a current offer, or get in touch with the Imperion team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/samples" className="cta-primary">Request samples</Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:border-goldlight hover:text-goldlight"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
