import { useState } from "react";

const initialValues = {
  companyName: "",
  contactPerson: "",
  emailAddress: "",
  phoneWhatsapp: "",
  country: "",
  destinationPort: "",
  buyerType: "Roaster",
  productInterest: "Coffee",
  coffeeGradeInterest: "Mixed",
  estimatedQuantity: "",
  requiredIncoterm: "FOB Mombasa",
  sampleRequired: "Yes",
  requiredDocuments: "",
  message: "",
};

const buyerTypes = ["Roaster", "Importer", "Distributor", "Trader", "Manufacturer", "Retail Brand", "Other"];
const productInterests = ["Coffee", "Avocado", "Macadamia", "Mixed Inquiry"];
const coffeeGrades = ["AA", "AB", "PB", "C", "Mixed", "Not Sure"];
const incoterms = ["FOB Mombasa", "CIF", "CFR", "EXW/FOT Nairobi", "Not Sure"];
const sampleOptions = ["Yes", "No", "Discuss first"];

function Field({ label, children, required = false }) {
  return (
    <label className="text-sm font-medium text-ink/80">
      {label} {required ? <span className="text-red-700">*</span> : null}
      {children}
    </label>
  );
}

const inputClasses = "mt-2 w-full rounded-2xl border border-forest/15 px-4 py-3 outline-none ring-0 focus:border-gold";

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

    const detailLines = [
      `Phone / WhatsApp: ${values.phoneWhatsapp || "Not provided"}`,
      `Country: ${values.country}`,
      `Destination Port: ${values.destinationPort || "Not provided"}`,
      `Buyer Type: ${values.buyerType}`,
      `Product Interest: ${values.productInterest}`,
      `Coffee Grade Interest: ${values.coffeeGradeInterest}`,
      `Estimated Quantity: ${values.estimatedQuantity || "Not provided"}`,
      `Required Incoterm: ${values.requiredIncoterm}`,
      `Sample Required: ${values.sampleRequired}`,
      `Required Documents: ${values.requiredDocuments || "Not specified"}`,
      "",
      values.message,
    ];

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.contactPerson,
          email: values.emailAddress,
          company: values.companyName,
          country: values.country,
          phone: values.phoneWhatsapp,
          interest: `${values.productInterest} | Grade: ${values.coffeeGradeInterest} | Incoterm: ${values.requiredIncoterm}`,
          message: detailLines.join("\n"),
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
          data.message ||
          "Thank you. Your inquiry has been received. Our team will review your requirements and respond with the most relevant next steps.",
      });
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
        Share your company details, destination, grade interest, quantity, sample needs, and required documents so our
        export team can respond with relevant next steps.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Company Name" required>
          <input required value={values.companyName} onChange={(event) => handleChange("companyName", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Contact Person" required>
          <input required value={values.contactPerson} onChange={(event) => handleChange("contactPerson", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Email" required>
          <input required type="email" value={values.emailAddress} onChange={(event) => handleChange("emailAddress", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Phone / WhatsApp">
          <input value={values.phoneWhatsapp} onChange={(event) => handleChange("phoneWhatsapp", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Country" required>
          <input required value={values.country} onChange={(event) => handleChange("country", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Destination Port">
          <input value={values.destinationPort} onChange={(event) => handleChange("destinationPort", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Buyer Type">
          <select value={values.buyerType} onChange={(event) => handleChange("buyerType", event.target.value)} className={inputClasses}>
            {buyerTypes.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Product Interest">
          <select value={values.productInterest} onChange={(event) => handleChange("productInterest", event.target.value)} className={inputClasses}>
            {productInterests.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Coffee Grade Interest">
          <select value={values.coffeeGradeInterest} onChange={(event) => handleChange("coffeeGradeInterest", event.target.value)} className={inputClasses}>
            {coffeeGrades.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Estimated Quantity">
          <input value={values.estimatedQuantity} onChange={(event) => handleChange("estimatedQuantity", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Required Incoterm">
          <select value={values.requiredIncoterm} onChange={(event) => handleChange("requiredIncoterm", event.target.value)} className={inputClasses}>
            {incoterms.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Sample Required?">
          <select value={values.sampleRequired} onChange={(event) => handleChange("sampleRequired", event.target.value)} className={inputClasses}>
            {sampleOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
        <Field label="Required Documents">
          <input value={values.requiredDocuments} onChange={(event) => handleChange("requiredDocuments", event.target.value)} className={inputClasses} />
        </Field>
        <Field label="Message" required>
          <textarea required rows="5" value={values.message} onChange={(event) => handleChange("message", event.target.value)} className={inputClasses} />
        </Field>
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
        {isSubmitting ? "Sending..." : "Submit Buyer Inquiry"}
      </button>
    </form>
  );
}
