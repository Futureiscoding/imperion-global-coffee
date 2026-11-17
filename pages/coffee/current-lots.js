import Link from "next/link";
import CoffeeLotsTable from "@/components/CoffeeLotsTable";
import Seo from "@/components/Seo";
import SectionIntro from "@/components/SectionIntro";

export default function CurrentCoffeeLotsPage() {
  return (
    <>
      <Seo
        title="Current Kenyan Coffee Lots | Imperion Global Holdings"
        description="View available and indicative Kenyan coffee lots by region, grade, process, moisture, screen size, cupping score, and buyer status."
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionIntro
          eyebrow="Current Coffee Lots"
          title="Evaluate Kenyan coffee lots before requesting samples or quotations."
          body="This table gives roasters, importers, distributors, and green coffee buyers a practical view of lot structure, quality indicators, packaging, price basis, and buyer status."
        />
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact#inquiry-form" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
            Request Coffee Samples
          </Link>
          <Link href="/how-to-buy" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
            How to Buy
          </Link>
        </div>
        <div className="mt-10">
          <CoffeeLotsTable />
        </div>
        <p className="mt-6 rounded-[1.25rem] bg-white p-5 text-sm leading-7 text-ink/75 shadow-soft">
          Availability changes with auction cycles, sourcing windows, milling schedules, and buyer reservations.
          Final confirmation is provided through an official offer, pro forma invoice, or buyer-specific quotation.
        </p>
      </section>
    </>
  );
}
