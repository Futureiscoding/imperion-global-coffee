import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const slides = [
  {
    src: "/videos/coffee-work-2026-09.mp4",
    poster: "/images/coffee-farm-hero.jpg",
    eyebrow: "Kenyan origin · Global supply",
    title: "Exceptional Kenyan Origin. Reliable Global Supply.",
    copy: "We connect international buyers with traceable Kenyan agricultural products through sourcing, quality assurance, and export coordination.",
  },
  {
    src: "/videos/coffee-work-2026-10.mp4",
    poster: "/images/gallery/farm-sourcing-1.jpeg",
    eyebrow: "Sourcing at origin",
    title: "Quality Begins at Origin.",
    copy: "Buyer-focused sourcing begins with the right farms, growers, growing regions, handling, and specifications.",
  },
  {
    src: "/videos/coffee-work-2026-09.mp4",
    poster: "/images/gallery/cupping-session.jpg",
    eyebrow: "Evaluation and grading",
    title: "Quality You Can Evaluate.",
    copy: "Physical inspection, moisture analysis, grading, and cupping provide relevant context before buyer approval.",
  },
  {
    src: "/videos/coffee-work-2026-10.mp4",
    poster: "/images/coffee export.jpg",
    eyebrow: "Export coordination",
    title: "From Kenyan Origin to Global Markets.",
    copy: "We coordinate buyer specifications, packaging, export information, and shipment communication for international trade.",
  },
];

export default function VideoHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef(null);
  const slide = slides[active];

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8000);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.currentTime = 0;
    const play = video.play();
    if (play !== undefined) play.catch(() => {});
    return () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [active]);

  const show = (index) => setActive((index + slides.length) % slides.length);

  return (
    <section className="relative h-[620px] max-h-[78vh] min-h-[560px] overflow-hidden bg-darkgreen text-white" aria-roledescription="carousel" aria-label="Imperion export highlights">
      {slides.map((item, index) => (
        <video
          key={`${item.src}-${index}`}
          ref={index === active ? videoRef : undefined}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
          muted
          loop
          playsInline
          preload={index === active ? "metadata" : "none"}
          poster={item.poster}
          aria-hidden={index !== active}
          tabIndex={-1}
        >
          {index === active ? <source src={item.src} type="video/mp4" /> : null}
        </video>
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,47,35,.92)_0%,rgba(9,47,35,.72)_48%,rgba(9,47,35,.18)_100%)]" />
      <div className="container-shell relative z-10 flex h-full items-center">
        <div key={active} className="max-w-3xl animate-[fadeUp_.7s_ease-out]">
          <p className="eyebrow text-goldlight">{slide.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.05] sm:text-6xl lg:text-[4.5rem]">{slide.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">{slide.copy}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/coffee" className="cta-primary">Explore Our Products</Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-sm font-bold hover:border-goldlight hover:text-goldlight">Partner With Imperion</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/15 bg-darkgreen/70 px-3 py-2 backdrop-blur">
        <button type="button" onClick={() => show(active - 1)} aria-label="Previous slide" className="flex h-9 w-9 items-center justify-center rounded-full text-lg hover:text-goldlight">←</button>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-xs">{paused ? "▶" : "Ⅱ"}</button>
        <div className="flex gap-2" role="group" aria-label="Choose slide">
          {slides.map((item, index) => (
            <button key={item.title} type="button" onClick={() => show(index)} aria-label={`Show slide ${index + 1}`} aria-current={index === active} className={`h-2 rounded-full ${index === active ? "w-7 bg-gold" : "w-2 bg-white/50"}`} />
          ))}
        </div>
        <button type="button" onClick={() => show(active + 1)} aria-label="Next slide" className="flex h-9 w-9 items-center justify-center rounded-full text-lg hover:text-goldlight">→</button>
      </div>
    </section>
  );
}
