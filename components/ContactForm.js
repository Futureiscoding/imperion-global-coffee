import { useState } from "react";

const initialValues = {
  companyName: "",
  contactPerson: "",
  emailAddress: "",
  destination: "",
  productInterest: "Coffee",
  documentsRequired: "",
  inquiryDetails: "",
};

export default function ContactForm({ title = "Request Samples or Pricing" }) {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.contactPerson,
          email: values.emailAddress,
          company: values.companyName,
          country: values.destination,
          interest: `${values.productInterest} | Documents: ${values.documentsRequired || "None specified"}`,
          message: values.inquiryDetails,
          source: "Contact Form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed.");
      }

      setStatus({ type: "success", message: data.message || "Inquiry sent successfully." });
      setValues(initialValues);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Email sending failed." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-forest">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-ink/75">
        Share your sourcing needs and required documents. Your inquiry will be sent directly through the website
        submission system.
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
      {status.message ? (
        <p className={`mt-5 text-sm ${status.type === "success" ? "text-forest" : "text-red-700"}`}>
          {status.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
