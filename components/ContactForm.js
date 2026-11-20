import { useEffect, useState } from "react";

export default function ContactForm({
  title = "Request samples or pricing",
  formType = "general",
  showSampleTerms = false,
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    message: "",
    shipToAddress: "",
    courierAccount: "",
    courierTermsAccepted: false,
    port: "",
    interest: "coffee",
    grades: "",
    volume: "",
    website: "",
    documents: "",
    reason: "",
    style: "",
    targetStart: "",
    turnstileToken: "",
    honeypot: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey) return undefined;
    window.imperionTurnstileSuccess = (token) => update("turnstileToken", token);
    if (document.querySelector('script[data-imperion-turnstile]')) return undefined;
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    script.dataset.imperionTurnstile = "true";
    document.head.appendChild(script);
    return () => {
      delete window.imperionTurnstileSuccess;
    };
  }, [turnstileSiteKey]);

  const update = (name, value) => setValues((current) => ({ ...current, [name]: value }));

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus({ type: "", message: "" });
        try {
          const response = await fetch("/api/inquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formType, ...values }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.message || "Submission failed.");
          setStatus({ type: "success", message: data.message });
          setValues({
            name: "",
            email: "",
            company: "",
            country: "",
            phone: "",
            message: "",
            shipToAddress: "",
            courierAccount: "",
            courierTermsAccepted: false,
            port: "",
            interest: "coffee",
            grades: "",
            volume: "",
            website: "",
            documents: "",
            reason: "",
            style: "",
            targetStart: "",
            turnstileToken: "",
            honeypot: "",
          });
        } catch (error) {
          setStatus({ type: "error", message: error.message || "Submission failed." });
        } finally {
          setSubmitting(false);
        }
      }}
      className="rounded-[2rem] border border-forest/10 bg-white p-6 shadow-soft md:p-8"
    >
      <h2 className="text-2xl font-semibold text-forest">{title}</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {[
          ["name", "Contact person", "text", true],
          ["email", "Business email", "email", true],
          ["company", "Company", "text", true],
          ["country", "Country", "text", true],
          ["phone", "Phone / WhatsApp", "tel", false],
          ...(formType === "offer-sheet" || formType === "general"
            ? [["port", "Destination port", "text", false]]
            : []),
          ...(formType === "offer-sheet"
            ? [
                ["grades", "Grades of interest", "text", false],
                ["volume", "Expected volume", "text", false],
              ]
            : []),
          ...(formType === "documents-request"
            ? [
                ["website", "Company website", "url", false],
                ["documents", "Documents requested", "text", true],
                ["reason", "Reason for request", "text", true],
              ]
            : []),
          ...(formType === "macadamia-interest"
            ? [
                ["style", "Kernel style of interest", "text", false],
                ["volume", "Expected volume", "text", false],
                ["targetStart", "Target start date", "text", false],
              ]
            : []),
        ].map(([field, label, type, required]) => (
          <label key={field} className="text-sm font-semibold text-ink/80">
            {label}{required ? " *" : ""}
            <input
              required={required}
              type={type}
              value={values[field]}
              onChange={(event) => update(field, event.target.value)}
              className="mt-2 w-full rounded-lg border border-forest/15 bg-ivory px-4 py-3 font-normal outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            />
          </label>
        ))}
      </div>

      {showSampleTerms ? (
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <label className="text-sm font-semibold text-ink/80">
            Ship-to business address *
            <textarea
              required
              rows="3"
              value={values.shipToAddress}
              onChange={(event) => update("shipToAddress", event.target.value)}
              className="mt-2 w-full rounded-lg border border-forest/15 bg-ivory px-4 py-3 font-normal outline-none focus:border-gold"
            />
          </label>
          <label className="text-sm font-semibold text-ink/80">
            Courier account number (optional)
            <input
              value={values.courierAccount}
              onChange={(event) => update("courierAccount", event.target.value)}
              className="mt-2 w-full rounded-lg border border-forest/15 bg-ivory px-4 py-3 font-normal outline-none focus:border-gold"
            />
          </label>
        </div>
      ) : null}

      <label className="mt-5 block text-sm font-semibold text-ink/80">
        Message *
        <textarea
          required
          rows="5"
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full rounded-lg border border-forest/15 bg-ivory px-4 py-3 font-normal outline-none focus:border-gold"
        />
      </label>

      {showSampleTerms ? (
        <label className="mt-5 flex gap-3 text-sm leading-6 text-stone">
          <input
            required
            type="checkbox"
            checked={values.courierTermsAccepted}
            onChange={(event) => update("courierTermsAccepted", event.target.checked)}
            className="mt-1 h-4 w-4 accent-[#153A2B]"
          />
          <span>I understand that samples are 200 g and free, that I pay the courier, and that the courier cost is credited against my first invoice once I place an order for my first consignment.</span>
        </label>
      ) : null}

      <input
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        value={values.honeypot}
        onChange={(event) => update("honeypot", event.target.value)}
        className="hidden"
      />

      {turnstileSiteKey ? (
        <div
          className="cf-turnstile mt-5"
          data-sitekey={turnstileSiteKey}
          data-theme="light"
          data-callback="imperionTurnstileSuccess"
        />
      ) : null}

      {status.message ? (
        <p className={`mt-5 text-sm ${status.type === "success" ? "text-forest" : "text-cherry"}`} role="status">
          {status.message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="cta-primary mt-6 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit inquiry"}
      </button>
    </form>
  );
}
