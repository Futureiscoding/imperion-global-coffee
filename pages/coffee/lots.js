import Link from "next/link";
import Seo from "@/components/Seo";
import SamplePolicy from "@/components/SamplePolicy";
import DownloadAssets from "@/components/DownloadAssets";

const lots = [
  {
    grade: "AA",
    screen: "17-19",
    region: "Nyeri / Kirinyaga",
    process: "Washed",
    cup: "Citrus, blackcurrant, floral",
    moisture: "10-11.5%",
    bags: "Update weekly",
  },
  {
    grade: "AB",
    screen: "15-16",
    region: "Mt. Kenya",
    process: "Washed",
    cup: "Caramel, cocoa, spice",
    moisture: "10-11.5%",
    bags: "Update weekly",
  },
  {
    grade: "PB",
    screen: "Peaberry",
    region: "Selected lots",
    process: "Washed",
    cup: "Fruit-forward, sweet, rare",
    moisture: "10-11.5%",
    bags: "Limited",
  },
  {
    grade: "C",
    screen: "13-14",
    region: "Kenya",
    process: "Washed",
    cup: "Mild, nutty, bulk blends",
    moisture: "10-11.5%",
    bags: "Available",
  },
];

export default function AvailableLotsPage() {
  return (
    <>
      <Seo
        title="Available Coffee Lots | Imperion Global Holdings"
        description="Available Kenyan coffee lots by grade, screen, region, process, cup profile, moisture, and bags."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Available Coffee Lots</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-forest md:text-5xl">
            Current Kenyan coffee grades prepared for buyer review.
          </h1>
          <p className="mt-5 text-base leading-8 text-ink/75">
            Lot details are updated as availability changes. Request the current lot sheet for exact bag counts,
            sample options, pricing, and shipment timing.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-forest/10 bg-white shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-forest text-white">
                <tr>
                  {["Grade", "Screen", "Region", "Process", "Cup Profile", "Moisture", "Bags"].map((heading) => (
                    <th key={heading} className="px-5 py-4 font-semibold">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lots.map((lot) => (
                  <tr key={lot.grade} className="border-t border-forest/10">
                    <td className="px-5 py-4 text-lg font-semibold text-forest">{lot.grade}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.screen}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.region}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.process}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.cup}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.moisture}</td>
                    <td className="px-5 py-4 text-ink/75">{lot.bags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="inline-flex rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
            Request Lot Sheet
          </Link>
          <a href="/coffee-lot-sheet.pdf" className="inline-flex rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold">
            Download Coffee Lot Sheet
          </a>
        </div>
      </section>

      <SamplePolicy />
      <DownloadAssets />
    </>
  );
}
