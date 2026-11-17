import Link from "next/link";
import { coffeeLots, coffeeLotHeadings } from "@/data/coffeeLots";

export default function CoffeeLotsTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-[1280px] text-left text-sm">
          <thead className="bg-forest text-white">
            <tr>
              {coffeeLotHeadings.map(([, label]) => (
                <th key={label} className="px-4 py-4 font-semibold">
                  {label}
                </th>
              ))}
              <th className="px-4 py-4 font-semibold">CTA</th>
            </tr>
          </thead>
          <tbody>
            {coffeeLots.map((lot, index) => (
              <tr key={lot.lotId} className={index % 2 === 0 ? "bg-white" : "bg-beige/35"}>
                {coffeeLotHeadings.map(([key]) => (
                  <td key={`${lot.lotId}-${key}`} className="px-4 py-4 align-top text-ink/80">
                    {lot[key]}
                  </td>
                ))}
                <td className="px-4 py-4 align-top">
                  <Link
                    href={`/contact?lot=${encodeURIComponent(lot.lotId)}#inquiry-form`}
                    className="inline-flex whitespace-nowrap rounded-full bg-gold px-4 py-2 text-xs font-semibold text-forest hover:bg-gold/90"
                  >
                    {lot.cta}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
