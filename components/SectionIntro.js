export default function SectionIntro({ eyebrow, title, body, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-forest md:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink/75">{body}</p>
    </div>
  );
}
