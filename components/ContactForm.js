export default function ContactForm({ title = "Request Samples or Pricing" }) {
  return (
    <form className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-forest">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-ink/75">
        Share your sourcing needs and required documents. This form is a front-end placeholder ready to connect
        to your preferred CRM, email, or API workflow.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/80">
          Company Name
          <input className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="Importer, roastery, or trading company" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Contact Person
          <input className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="Full name" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Email Address
          <input type="email" className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="buyer@company.com" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Country / Destination Port
          <input className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="Country and preferred port" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Product Interest
          <select className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold">
            <option>Coffee</option>
            <option>Avocado</option>
            <option>Macadamia</option>
            <option>Mixed Inquiry</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80">
          Documents Required
          <input className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="COA, COO, phytosanitary, organic, etc." />
        </label>
        <label className="text-sm font-medium text-ink/80 md:col-span-2">
          Volume and Sample Request
          <textarea rows="5" className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold" placeholder="Tell us your target volume, preferred cup profile, crop timing, packaging, and whether you want green or roasted samples." />
        </label>
      </div>
      <button type="submit" className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90">
        Send Inquiry
      </button>
    </form>
  );
}
