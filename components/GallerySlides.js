import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    type: "image",
    src: "/images/gallery/cupping-session.jpg",
    alt: "Coffee samples and cups arranged for a cupping session",
    title: "Cupping sessions",
    description: "Comparing roasted samples and brewed cups as part of coffee evaluation.",
  },
  {
    type: "image",
    src: "/images/gallery/farm-sourcing-1.jpeg",
    alt: "Imperion team member visiting a coffee farm with a grower",
    title: "Farm sourcing",
    description: "Talking with growers among coffee trees and cherries.",
  },
  {
    type: "image",
    src: "/images/gallery/farm-sourcing-2.jpeg",
    alt: "Coffee grower showing cherries on a coffee tree during a farm visit",
    title: "At origin",
    description: "A closer look at coffee plants during a sourcing visit.",
  },
  {
    type: "image",
    src: "/images/gallery/expo-team.jpg",
    alt: "Imperion representatives at the Africa Food Show Kenya",
    title: "Meeting the industry",
    description: "The team attending the Africa Food Show Kenya.",
  },
  {
    type: "image",
    src: "/images/gallery/quality-sorting.jpeg",
    alt: "Coffee samples displayed in trays for quality review",
    title: "Quality review",
    description: "Reviewing green coffee samples side by side.",
  },
  {
    type: "image",
    src: "/images/events/africa-food-show-opening-ceremony.jpeg",
    alt: "Delegates at the Africa Food Show Kenya opening ceremony",
    title: "Africa Food Show Kenya",
    description: "A moment from the opening ceremony at an agricultural trade event.",
  },
  {
    type: "video",
    src: "/videos/shamba-coffee-event.mp4",
    poster: "/images/events/coffee-origin-event-10.jpeg",
    title: "Shamba event",
    description: "Event footage from a gathering connected with coffee and agriculture.",
  },
  {
    type: "video",
    src: "/videos/coffee-cupping-evaluation.mp4",
    poster: "/images/gallery/cupping-session.jpg",
    title: "Coffee sample evaluation",
    description: "A closer look at coffee evaluation and the cupping process.",
  },
  {
    type: "video",
    src: "/videos/coffee-work-2026-09.mp4",
    poster: "/images/gallery/farm-sourcing-1.jpeg",
    title: "Roasting and sample preparation",
    description: "See the coffee process beyond the farm visit and sample review.",
  },
  {
    type: "video",
    src: "/videos/coffee-work-2026-10.mp4",
    poster: "/images/gallery/quality-sorting.jpeg",
    title: "Sourcing and due diligence",
    description: "A closer look at the work behind responsible sourcing and buyer review.",
  },
];

export default function GallerySlides() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  const showSlide = (index) => setActiveIndex((index + slides.length) % slides.length);

  return (
    <section className="bg-darkgreen text-white" aria-label="Imperion in practice">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label text-gold">How we work</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">From farm visits to the cupping table.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Explore sourcing, cupping, roasting, quality checks, buyer due diligence and the expos where we meet the coffee trade.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => showSlide(activeIndex - 1)}
              aria-label="Show previous photo or video"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span aria-hidden="true">←</span>
            </button>
            <p className="min-w-16 text-center font-mono text-sm" aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={() => showSlide(activeIndex + 1)}
              aria-label="Show next photo or video"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <article className="mt-8 grid overflow-hidden rounded-xl border border-white/10 bg-white/5 md:grid-cols-[1.4fr_0.6fr]">
          <div className="relative aspect-[4/3] bg-black md:aspect-[16/10]">
            {slide.type === "video" ? (
              <video
                key={slide.src}
                className="h-full w-full object-contain"
                aria-label={slide.title}
                controls
                playsInline
                preload="metadata"
                poster={slide.poster}
              >
                <source src={slide.src} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 65vw"
                className="object-contain"
                priority={activeIndex === 0}
              />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
              {slide.type === "video" ? "Video" : "Photo"} · {String(activeIndex + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-semibold">{slide.title}</h3>
            <p className="mt-3 text-sm leading-7 text-white/75">{slide.description}</p>
          </div>
        </article>

        <div className="mt-5 flex flex-wrap justify-center gap-2" role="group" aria-label="Choose a gallery slide">
          {slides.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => showSlide(index)}
              aria-label={`Show slide ${index + 1}: ${item.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
                index === activeIndex ? "w-8 bg-gold" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
