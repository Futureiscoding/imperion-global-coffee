import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Seo from "@/components/Seo";

const photos = [
  { src: "/images/gallery/farm-sourcing-1.jpeg", alt: "Imperion team member visiting a coffee farm with a grower", category: "Origin", title: "Farm sourcing", caption: "Coffee origin visit, Kenya" },
  { src: "/images/gallery/farm-sourcing-2.jpeg", alt: "Coffee grower showing ripe cherries on a coffee tree", category: "Origin", title: "At origin", caption: "Coffee grower visit, Kenya" },
  { src: "/images/events/coffee-origin-event-10.jpeg", alt: "A person pictured among coffee plants", category: "Origin", title: "Coffee plants at origin", caption: "A visit among coffee plants" },
  { src: "/images/gallery/quality-sorting.jpeg", alt: "Green coffee samples arranged in trays for quality review", category: "Quality desk", title: "Quality review", caption: "Green coffee sample review" },
  { src: "/images/gallery/cupping-session.jpg", alt: "Coffee cups and samples arranged for a cupping session", category: "Quality desk", title: "Cupping table", caption: "Cupping and sample evaluation" },
  { type: "video", src: "/videos/coffee-cupping-evaluation.mp4", poster: "/images/gallery/cupping-session.jpg", alt: "Coffee sample evaluation and cupping footage", category: "Quality desk", title: "Coffee sample evaluation", caption: "Cupping and coffee evaluation" },
  { src: "/images/gallery/expo-team.jpg", alt: "Imperion representatives meeting trade buyers", category: "Team", title: "Trade team", caption: "Industry event in Kenya" },
  { src: "/images/events/africa-food-show-opening-ceremony.jpeg", alt: "Delegates at the Africa Food Show Kenya opening ceremony", category: "Events", title: "Africa Food Show Kenya", caption: "Opening ceremony" },
  { src: "/images/events/africa-food-show-speaker.jpeg", alt: "A speaker at the Africa Food Show Kenya", category: "Events", title: "Africa Food Show Kenya", caption: "Conference session" },
  { type: "video", src: "/videos/shamba-coffee-event.mp4", poster: "/images/events/coffee-origin-event-10.jpeg", alt: "Video from the Shamba event", category: "Events", title: "Shamba event", caption: "Event footage" },
  { type: "instagram", src: "https://www.instagram.com/reel/DfuzWOFRkSu/embed/", poster: "/images/events/africa-food-show-opening-ceremony.jpeg", alt: "Instagram event reel; open the player to load it", category: "Events", title: "Event reel", caption: "Instagram video · user-initiated playback" },
  { type: "video", src: "/videos/coffee-work-2026-09.mp4", poster: "/images/gallery/cupping-session.jpg", alt: "Coffee quality work and sample preparation", category: "Processing", title: "Coffee work", caption: "Coffee processing and sample preparation" },
  { type: "video", src: "/videos/coffee-work-2026-10.mp4", poster: "/images/coffee export.jpg", alt: "Coffee export preparation and sourcing footage", category: "Shipping", title: "Export preparation", caption: "Sourcing, preparation, and trade coordination" },
  ...[1, 2, 3, 4].map((number) => ({
    type: "video",
    src: `/videos/dubai-delivery-roasting-${number}.mp4`,
    poster: "/images/coffee export.jpg",
    alt: `Customer roasting coffee delivered to Dubai, video ${number}`,
    category: "Shipping",
    title: `Dubai delivery · Video ${number}`,
    caption: "Coffee delivered to Dubai and being roasted by the customer",
  })),
];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const [instagramLoaded, setInstagramLoaded] = useState(false);
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
          {["All", "Origin", "Processing", "Quality desk", "Shipping", "Team", "Events"].map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={`min-h-11 rounded-full border px-4 text-sm font-bold ${filter === item ? "border-forest bg-forest text-white" : "border-forest/15 bg-white text-forest"}`}>{item}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((photo, index) => (
            <button key={photo.src} type="button" onClick={() => { setInstagramLoaded(false); setActive(index); }} className="group overflow-hidden border border-forest/10 bg-white text-left">
              <div className="relative aspect-[4/3]">
                {photo.type === "video" ? (
                  <video muted loop playsInline preload="metadata" poster={photo.poster} className="h-full w-full object-cover" aria-label={photo.alt}>
                    <source src={photo.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image src={photo.type === "instagram" ? photo.poster : photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-300 group-hover:scale-[1.02]" />
                )}
                {photo.type === "instagram" ? <span className="absolute inset-0 flex items-center justify-center bg-darkgreen/30 text-4xl text-white" aria-hidden="true">▶</span> : null}
              </div>
              <div className="p-5"><p className="text-xs font-bold uppercase tracking-[0.16em] text-goldtext">{photo.category}</p><h2 className="mt-2 text-xl font-semibold text-forest">{photo.title}</h2><p className="mt-2 text-sm text-stone">{photo.caption}</p></div>
            </button>
          ))}
        </div>
      </section>
      {active !== null ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-darkgreen/95 p-4" role="dialog" aria-modal="true" aria-label="Gallery media">
          <button ref={closeRef} type="button" onClick={() => { setActive(null); setInstagramLoaded(false); }} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white" aria-label="Close media">×</button>
          <figure className="max-h-[85vh] max-w-5xl">
            <div className={`relative mx-auto w-[90vw] max-w-5xl ${filtered[active].type === "instagram" ? "aspect-[9/16] max-h-[70vh] max-w-sm" : "h-[70vh]"}`}>
              {filtered[active].type === "video" ? (
                <video controls autoPlay muted playsInline preload="metadata" poster={filtered[active].poster} className="h-full w-full object-contain" aria-label={filtered[active].alt}>
                  <source src={filtered[active].src} type="video/mp4" />
                </video>
              ) : filtered[active].type === "instagram" ? (
                instagramLoaded ? (
                  <iframe
                    title="Instagram event reel"
                    src={filtered[active].src}
                    className="h-full w-full border-0 bg-white"
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-4 bg-white p-8 text-center text-darkgreen">
                    <p className="max-w-xs text-sm leading-6">Load the reel, then start playback in Instagram when ready. The embed is not configured to autoplay; audio behavior is controlled by Instagram.</p>
                    <button type="button" onClick={() => setInstagramLoaded(true)} className="cta-primary">Load Instagram reel</button>
                  </div>
                )
              ) : (
                <Image src={filtered[active].src} alt={filtered[active].alt} fill sizes="90vw" className="object-contain" />
              )}
            </div>
            <figcaption className="mt-3 text-center text-sm text-white">{filtered[active].title} · {filtered[active].caption}{filtered[active].type === "instagram" ? <> · <a href="https://www.instagram.com/reel/DfuzWOFRkSu/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Open on Instagram</a></> : null}</figcaption>
          </figure>
        </div>
      ) : null}
    </>
  );
}
