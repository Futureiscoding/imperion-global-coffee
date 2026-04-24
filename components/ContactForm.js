import { useState } from "react";

const salesEmail = "sales@imperionglobalholdings.co.ke";
const whatsappNumber = "254748167811";

const initialValues = {
  companyName: "",
  contactPerson: "",
  emailAddress: "",
  destination: "",
  productInterest: "Coffee",
  documentsRequired: "",
  inquiryDetails: "",
};

const encode = (value) => encodeURIComponent(value);

export default function ContactForm({ title = "Request Samples or Pricing" }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const message = `Imperion Global Holdings Inquiry

Company Name: ${values.companyName}
Contact Person: ${values.contactPerson}
Email Address: ${values.emailAddress}
Country / Destination Port: ${values.destination}
Product Interest: ${values.productInterest}
Documents Required: ${values.documentsRequired}
Volume and Sample Request: ${values.inquiryDetails}`;

  const mailtoLink = `mailto:${salesEmail}?subject=${encode("Website Inquiry")}&body=${encode(message)}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encode(message)}`;

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft"
    >
      <h2 className="text-2xl font-semibold text-forest">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-ink/75">
        Share your sourcing needs and required documents. You can send the completed inquiry directly by email
        or WhatsApp.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/80">
          Company Name
          <input
            value={values.companyName}
            onChange={(event) => handleChange("companyName", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="Importer, roastery, or trading company"
          />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Contact Person
          <input
            value={values.contactPerson}
            onChange={(event) => handleChange("contactPerson", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="Full name"
          />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Email Address
          <input
            type="email"
            value={values.emailAddress}
            onChange={(event) => handleChange("emailAddress", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="buyer@company.com"
          />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Country / Destination Port
          <input
            value={values.destination}
            onChange={(event) => handleChange("destination", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="Country and preferred port"
          />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Product Interest
          <select
            value={values.productInterest}
            onChange={(event) => handleChange("productInterest", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
          >
            <option>Coffee</option>
            <option>Avocado</option>
            <option>Macadamia</option>
            <option>Mixed Inquiry</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80">
          Documents Required
          <input
            value={values.documentsRequired}
            onChange={(event) => handleChange("documentsRequired", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="COA, COO, phytosanitary, organic, etc."
          />
        </label>
        <label className="text-sm font-medium text-ink/80 md:col-span-2">
          Volume and Sample Request
          <textarea
            rows="5"
            value={values.inquiryDetails}
            onChange={(event) => handleChange("inquiryDetails", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold"
            placeholder="Tell us your target volume, preferred cup profile, crop timing, packaging, and whether you want green or roasted samples."
          />
        </label>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={mailtoLink}
          className="inline-flex items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90"
        >
          Send Inquiry by Email
        </a>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-forest/20 px-6 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
        >
          Send Inquiry by WhatsApp
        </a>
      </div>
    </form>
  );
}
