import Image from "next/image";
import Link from "next/link";
import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

const kernelStyles = [
  "Style 0",
  "Style 1 Large",
  "Style 4 Large",
  "Style 1 Small",
  "Style 4 Small",
  "Style 5",
  "Style 6",
  "Commercial Wholes & Halves",
];

const documents = [
  "Bill of Lading",
  "Commercial invoice",
  "Certificate of Analysis (COA)",
  "Packing list",
  "Certificate of Origin",
];

function ImagePanel({ src, alt, className = "" }) {
  return (
    <div className={`relative min-h-[260px] overflow-hidden rounded-2xl ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
    </div>
  );
}

export default function MacadamiaPage() {
  return (
    <>
      <Seo
        title="Kenyan Macadamia Kernels | Buyer Information | Imperion"
        description="Explore macadamia kernel styles, packaging, order quantities, sampling, quality checks and export documentation. Availability is confirmed per order."
        keywords="Kenyan macadamia kernels, macadamia kernel styles, macadamia export, macadamia samples"
        image="/images/macadamia/macadamia-kernel-grades.webp"
        imageAlt="Macadamia kernels for buyer review"
      />

      <section className="bg-darkgreen text-white">
        <div className="container-shell grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow text-goldlight">Kenyan Macadamia · Buyer Information</p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] md:text-6xl">
              Macadamia kernels, prepared around your order.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Review the styles and export details currently shared with buyers. Product specifications and
              availability are confirmed for each order following sample review.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#inquiry" className="cta-primary">Discuss an order</a>
              <Link href="/export" className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Export information
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/65">
              Samples are free; courier charges are paid at cost.
            </p>
          </div>
          <ImagePanel
            src="/images/macadamia/macadamia-kernel-grades.webp"
            alt="Macadamia kernels presented for buyer review"
            className="min-h-[320px] md:min-h-[440px]"
          />
        </div>
      </section>

      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label">Current catalogue</p>
            <h2 className="section-title">Styles shared for order review</h2>
          </div>
          <p className="section-copy">
            The current catalogue is to be confirmed after receiving and evaluating samples. The grades below
            are reported as currently available, subject to confirmation of the specification and availability
            for your order.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kernelStyles.map((style) => (
            <div key={style} className="rounded-xl border border-forest/10 bg-white px-5 py-4 font-semibold text-forest shadow-sm">
              {style}
              <span className="mt-1 block text-xs font-normal text-stone">Subject to order confirmation</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <ImagePanel
            src="/images/media-macadamia-field.jpg"
            alt="Macadamia field in Kenya"
            className="min-h-[300px]"
          />
          <ImagePanel
            src="/images/media-macadamia-factory.jpg"
            alt="Macadamia processing facility"
            className="min-h-[300px]"
          />
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-shell">
          <p className="section-label">Order planning</p>
          <h2 className="section-title">Packing, quantities and samples</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Standard packing", "11.34 kg aluminum pouches packed with nitrogen gas."],
              ["Bulk and retail", "Other bulk and retail pack sizes can be discussed based on the order."],
              ["Standard MOQ", "1,650 cartons per 40-ft container, equivalent to 18,711 kg."],
              ["Trial orders", "Trial orders may be possible from a minimum of 1,350 cartons."],
            ].map(([title, copy]) => (
              <article key={title} className="premium-card p-6">
                <h3 className="text-xl font-semibold text-forest">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-stone">
            Free samples are available; courier is paid at cost. Confirm sample and order arrangements with us
            before dispatch.
          </p>
        </div>
      </section>

      <section className="container-shell grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_.85fr]">
        <div>
          <p className="section-label">Quality and handling</p>
          <h2 className="section-title">Clear checks before shipment</h2>
          <div className="mt-7 space-y-5 text-sm leading-7 text-stone">
            <p>
              An independent pre-shipment composite analysis is mandatory. SGS is one example of an
              independent testing provider; no SGS affiliation is implied.
            </p>
            <p>
              Stated shelf life is 2 years when stored under controlled-temperature conditions. Confirm the
              applicable handling requirements for your shipment.
            </p>
            <p><strong className="text-forest">Ingredients, oil, seasonings and additives:</strong> N/A.</p>
            <p>
              Private-label packing may be available for future orders, subject to confirmation.
            </p>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <ImagePanel
              src="/images/macadamia/macadamia-kernel-processing.webp"
              alt="Macadamia kernel processing"
              className="min-h-[300px]"
            />
          </div>
        </div>
        <aside className="rounded-2xl bg-ivory p-7 md:p-9">
          <p className="section-label">Export documentation</p>
          <h2 className="mt-3 font-serif text-3xl text-forest">Documents for shipment</h2>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-stone">
            {documents.map((document) => <li key={document} className="flex gap-3"><span className="text-gold">•</span>{document}</li>)}
          </ul>
          <div className="mt-8 border-t border-forest/10 pt-6">
            <h3 className="font-semibold text-forest">Nuts-in-shell (NIS)</h3>
            <p className="mt-3 text-sm leading-7 text-stone">
              We have been advised that the government has lifted the export ban on NIS. This update is not a
              confirmation of eligibility for a particular shipment: current export eligibility, documentation
              and any permit requirements must be confirmed before an order or shipment.
            </p>
          </div>
        </aside>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-shell grid items-center gap-10 md:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="section-label">Our partners</p>
            <h2 className="section-title">Tesco Matt Limited</h2>
            <p className="mt-4 text-sm leading-7 text-stone">
              Tesco Matt Limited is our partner.
            </p>
          </div>
          <div className="flex min-h-[190px] items-center justify-center rounded-2xl border border-forest/10 bg-white p-8">
            <Image
              src="/images/partners/tesco-matt-limited.png"
              alt="Tesco Matt Limited logo"
              width={420}
              height={180}
              sizes="(max-width: 768px) 80vw, 420px"
              className="h-auto max-h-36 w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="section-label">Next steps</p>
          <h2 className="section-title">Tell us what you need</h2>
          <p className="mt-4 text-sm leading-7 text-stone">
            Share a style, expected quantity and target timing. We will follow up to review the current
            catalogue and confirm details for your enquiry.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-forest">
            <Link href="/coffee">Explore coffee</Link>
            <Link href="/samples">Sample information</Link>
            <Link href="/contact">Contact us</Link>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <ImagePanel
              src="/images/macadamia/macadamia-kernel-export.webp"
              alt="Macadamia kernels ready for export order review"
              className="min-h-[260px]"
            />
          </div>
        </div>
        <div id="inquiry">
          <ContactForm title="Send a macadamia inquiry" formType="macadamia-interest" />
        </div>
      </section>
    </>
  );
}
