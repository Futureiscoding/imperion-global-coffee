import Seo from "@/components/Seo";
import ContactForm from "@/components/ContactForm";

export default function MacadamiaPage() {
  return (
    <>
      <Seo title="Kenyan Macadamia Kernel | Developing" description="Register interest in Kenyan processed macadamia kernel." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="section-label">Developing</p>
        <h1 className="section-title">Kenyan macadamia kernel, sourced with the same discipline.</h1>
        <p className="section-copy">We plan to offer processed kernel only. Kenya bans export of raw in-shell nuts, and we do not offer them. Styles, packaging and processing partners remain to be confirmed.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Why Kenya", "Kenya is a significant macadamia producer. Current market ranking must be confirmed before publication."],
            ["Growing areas", "Embu, Meru, Kiambu, Tharaka Nithi, Murang'a, Kirinyaga and Nyeri, with growth in Uasin Gishu, Nandi, Machakos and Taita Taveta."],
            ["Harvest and rules", "Harvest generally runs from about March to October. The regulator may close harvesting and trade seasonally; we follow every closure."],
            ["Kernel styles", "Styles remain to be confirmed with processing partners."],
            ["Packaging", "Packaging remains to be confirmed."],
            ["Processing partners", "Partner names will be published only after confirmation."],
          ].map(([title, copy]) => (
            <article key={title} className="premium-card p-6">
              <h2 className="text-xl font-semibold text-forest">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-stone">{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <ContactForm title="Register macadamia interest" formType="macadamia-interest" />
      </section>
    </>
  );
}
