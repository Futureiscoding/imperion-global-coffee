import Seo from "@/components/Seo";

const regions = [
  ["Central", "Nyeri, Kirinyaga, Murang'a, Kiambu", "Oct-Dec", "Apr-Aug"],
  ["Rift Valley", "Nakuru, Kericho, Bomet, Baringo, Nandi", "Oct-Dec", "Apr-Aug"],
  ["Eastern", "Embu, Meru, Tharaka Nithi, Machakos", "Apr-Jul in drier lowlands", "Varies"],
  ["Western and Nyanza", "Bungoma, Kakamega, Kisii, Nyamira, Migori", "Aug-Dec", "Apr-Jul"],
];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const harvestBands = [
  { name: "Central", main: [8,9,10,11], early: [3,4,5,6,7] },
  { name: "Rift Valley", main: [8,9,10,11], early: [3,4,5,6,7] },
  { name: "Eastern", main: [10,11], early: [3,4,5,6] },
  { name: "Western and Nyanza", main: [7,8,9,10,11], early: [3,4,5,6] },
];

export default function RegionsPage() {
  return (
    <>
      <Seo title="Kenyan Coffee Regions and Harvest | Imperion" description="Explore Kenyan growing regions and the indicative main and early coffee crop calendar." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">Regions and Harvest</p>
        <h1 className="section-title">Altitude, rainfall and flowering set the harvest.</h1>
        <p className="section-copy">Kenyan coffee grows from the slopes of Mount Kenya to the western highlands. The months below are indicative; dry years can reduce or remove the fly crop.</p>
        <div className="mt-8 overflow-x-auto border border-forest/10 bg-white p-5">
          <p className="mb-5 text-sm font-bold text-forest">Indicative harvest calendar</p>
          {harvestBands.map((band) => (
            <div key={band.name} className="mb-5 grid min-w-[760px] grid-cols-[150px_repeat(12,minmax(42px,1fr))] items-center gap-1">
              <p className="text-sm font-semibold text-forest">{band.name}</p>
              {months.map((month, index) => (
                <span
                  key={month}
                  title={`${month}: ${band.main.includes(index) ? "main crop" : band.early.includes(index) ? "early or fly crop" : "outside main period"}`}
                  className={`flex h-9 items-center justify-center rounded-sm font-mono text-[11px] ${
                    band.main.includes(index)
                      ? "bg-forest text-white"
                      : band.early.includes(index)
                        ? "bg-gold text-darkgreen"
                        : "bg-mist text-stone"
                  }`}
                  aria-label={`${band.name}, ${month}, ${band.main.includes(index) ? "main crop" : band.early.includes(index) ? "fly or early crop" : "no main season shown"}`}
                >
                  {month}
                </span>
              ))}
            </div>
          ))}
          <p className="text-xs text-stone">Green: main crop. Gold: fly or early crop. Grey: outside the indicative period.</p>
        </div>
        <div className="mt-10 overflow-x-auto rounded-[1.5rem] border border-forest/10 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-forest/10 bg-beige/60">
              <tr><th className="p-5">Area</th><th className="p-5">Counties</th><th className="p-5">Main crop</th><th className="p-5">Fly crop</th></tr>
            </thead>
            <tbody>
              {regions.map(([area, counties, main, fly]) => (
                <tr key={area} className="border-b border-forest/10 last:border-0">
                  <th className="p-5 text-forest">{area}</th><td className="p-5">{counties}</td><td className="p-5">{main}</td><td className="p-5">{fly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-ink/75">Sourcing regions and typical availability are confirmed in a direct buyer offer.</p>
      </section>
    </>
  );
}
