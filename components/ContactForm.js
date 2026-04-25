import { useState } from "react";

const initialValues = {
  buyerName: "",
  company: "",
  email: "",
  country: "",
  productInterest: "Coffee",
  coffeeGrade: "AA",
  quantity: "",
  sampleRequest: "Yes",
  incoterm: "FOB",
  message: "",
};

export default function ContactForm({ title = "Buyer Inquiry Form" }) {
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
          name: values.buyerName,
          email: values.email,
          company: values.company,
          country: values.country,
          interest: `${values.productInterest} | Grade: ${values.coffeeGrade} | Sample: ${values.sampleRequest} | Incoterm: ${values.incoterm}`,
          message: `Quantity / estimated bags: ${values.quantity || "Not provided"}\n\n${values.message}`,
          source: "Buyer Inquiry Form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed.");
      }

      setStatus({
        type: "success",
        message:
          "Thank you for your inquiry. Our export team will review your request and respond with the relevant coffee details, sample options, or quotation information.",
      });
      setValues(initialValues);
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Email sending failed." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "mt-2 w-full rounded-lg border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold";

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-forest/10 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-forest">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-ink/75">
        Share your buyer details, coffee needs, sample request, and preferred trade terms.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-ink/80">
          Buyer name
          <input value={values.buyerName} onChange={(event) => handleChange("buyerName", event.target.value)} className={inputClass} placeholder="Full name" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Company
          <input value={values.company} onChange={(event) => handleChange("company", event.target.value)} className={inputClass} placeholder="Roastery, importer, or trading company" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Email
          <input type="email" value={values.email} onChange={(event) => handleChange("email", event.target.value)} className={inputClass} placeholder="buyer@company.com" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Country
          <input value={values.country} onChange={(event) => handleChange("country", event.target.value)} className={inputClass} placeholder="Destination country" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Product interest
          <select value={values.productInterest} onChange={(event) => handleChange("productInterest", event.target.value)} className={inputClass}>
            <option>Coffee</option>
            <option>Avocado</option>
            <option>Macadamia</option>
            <option>Mixed Inquiry</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80">
          Coffee grade needed
          <select value={values.coffeeGrade} onChange={(event) => handleChange("coffeeGrade", event.target.value)} className={inputClass}>
            <option>AA</option>
            <option>AB</option>
            <option>PB</option>
            <option>C</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80">
          Quantity / estimated bags
          <input value={values.quantity} onChange={(event) => handleChange("quantity", event.target.value)} className={inputClass} placeholder="Example: 10 bags, pallet, container" />
        </label>
        <label className="text-sm font-medium text-ink/80">
          Sample request
          <select value={values.sampleRequest} onChange={(event) => handleChange("sampleRequest", event.target.value)} className={inputClass}>
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80">
          Preferred Incoterm
          <select value={values.incoterm} onChange={(event) => handleChange("incoterm", event.target.value)} className={inputClass}>
            <option>FOB</option>
            <option>CIF</option>
            <option>Other</option>
          </select>
        </label>
        <label className="text-sm font-medium text-ink/80 md:col-span-2">
          Message
          <textarea rows="5" value={values.message} onChange={(event) => handleChange("message", event.target.value)} className={inputClass} placeholder="Preferred cup profile, delivery market, target timing, documents, or quotation notes." />
        </label>
      </div>
      {status.message ? (
        <p className={`mt-5 text-sm leading-7 ${status.type === "success" ? "text-forest" : "text-red-700"}`}>
          {status.message}
        </p>
      ) : null}
      <button type="submit" disabled={isSubmitting} className="mt-6 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white hover:bg-forest/90 disabled:cursor-not-allowed disabled:opacity-70">
        {isSubmitting ? "Sending..." : "Send Buyer Inquiry"}
      </button>
    </form>
  );
}
