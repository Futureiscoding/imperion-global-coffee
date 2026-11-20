import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Seo from "@/components/Seo";

const photos = [
  { src: "/images/gallery/farm-sourcing-1.jpeg", alt: "Imperion team member visiting a coffee farm with a grower", category: "Origin", title: "Farm sourcing", caption: "Coffee origin visit, Kenya" },
  { src: "/images/gallery/farm-sourcing-2.jpeg", alt: "Coffee grower showing ripe cherries on a coffee tree", category: "Origin", title: "At origin", caption: "Coffee grower visit, Kenya" },
  { src: "/images/gallery/quality-sorting.jpeg", alt: "Green coffee samples arranged in trays for quality review", category: "Quality desk", title: "Quality review", caption: "Green coffee sample review" },
  { src: "/images/gallery/cupping-session.jpg", alt: "Coffee cups and samples arranged for a cupping session", category: "Quality desk", title: "Cupping table", caption: "Cupping and sample evaluation" },
  { src: "/images/gallery/expo-team.jpg", alt: "Imperion representatives meeting trade buyers", category: "Team", title: "Trade team", caption: "Industry event in Kenya" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const filtered = filter === "All" ? photos : photos.filter((photo) => photo.category === filter);

  useEffect(() => {
    if (active === null) return;
    closeRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value + 1) % filtered.length);
      if (event.key === "ArrowLeft") setActive((value) => (value - 1 + filtered.length) % filtered.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, filtered.length]);

  return (
    <>
      <Seo title="Imperion Gallery | Kenyan Coffee" description="Real Imperion photography from sourcing, quality review and the coffee trade." />
      <section className="bg-darkgreen text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Gallery</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl">Proof you can see.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">Photos from our sourcing regions, quality work and team meetings.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {["All", "Origin", "Processing", "Quality desk", "Shipping", "Team"].map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${filter === item ? "border-forest bg-forest text-white" : "border-forest/15 bg-white text-forest"}`}>{item}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((photo, index) => (
            <button key={photo.src} type="button" onClick={() => setActive(index)} className="group overflow-hidden border border-forest/10 bg-white text-left">
              <div className="relative aspect-[4/3]"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-[1.02]" /></div>
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-goldtext">{photo.category}</p><h2 className="mt-2 text-xl font-semibold text-forest">{photo.title}</h2><p className="mt-2 text-sm text-stone">{photo.caption}</p></div>
            </button>
          ))}
        </div>
      </section>
      {active !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-darkgreen/95 p-4" role="dialog" aria-modal="true" aria-label="Gallery photo">
          <button ref={closeRef} type="button" onClick={() => setActive(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white" aria-label="Close photo">×</button>
          <figure className="max-h-[85vh] max-w-5xl">
            <div className="relative h-[70vh] w-[90vw] max-w-5xl"><Image src={filtered[active].src} alt={filtered[active].alt} fill sizes="90vw" className="object-contain" /></div>
            <figcaption className="mt-3 text-center text-sm text-white">{filtered[active].title} · {filtered[active].caption}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
