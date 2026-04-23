const lots = [
  ["IGC-001", "Nyeri", "SL28/SL34", "1,850m", "Washed", "Blackcurrant, citrus, florals", "15+", "10.3%", "86.25"],
  ["IGC-002", "Kirinyaga", "Ruiru 11", "1,720m", "Washed", "Red apple, caramel, bergamot", "15", "10.8%", "84.75"],
  ["IGC-003", "Murang'a", "Batian", "1,680m", "Natural", "Strawberry, cacao nib, jammy", "16", "10.9%", "85.50"],
  ["IGC-004", "Embu", "SL28/Batian", "1,740m", "Honey", "Peach, cane sugar, jasmine", "15+", "10.5%", "85.00"],
  ["IGC-005", "Kericho", "Ruiru 11/Batian", "1,950m", "Washed", "Orange zest, tea rose, honey", "16+", "10.1%", "86.00"],
  ["IGC-006", "Bungoma", "SL34", "1,600m", "Natural", "Plum, molasses, spice", "15", "11.0%", "84.50"],
];

const headings = [
  "Lot ID",
  "Region",
  "Variety",
  "Elevation",
  "Processing",
  "Cup Notes",
  "Screen Size",
  "Moisture %",
  "Cupping Score",
];

export default function VarietiesTable() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-forest text-white">
            <tr>
              {headings.map((heading) => (
                <th key={heading} className="px-4 py-4 font-semibold">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lots.map((lot, index) => (
              <tr key={lot[0]} className={index % 2 === 0 ? "bg-white" : "bg-beige/35"}>
                {lot.map((value) => (
                  <td key={`${lot[0]}-${value}`} className="px-4 py-4 align-top text-ink/80">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
