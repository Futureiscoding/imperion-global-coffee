import { useState } from "react";

const mainMenu = [
  { id: "samples", label: "Request Coffee Samples" },
  { id: "lots", label: "View Current Coffee Lots" },
  { id: "pricing", label: "Ask About Pricing" },
  { id: "profile", label: "Download Company Profile" },
  { id: "logistics", label: "Export & Logistics Info" },
  { id: "sales", label: "Speak to Sales" },
];

const sampleFields = [
  { name: "name", label: "Your name", type: "text", placeholder: "Full name" },
  { name: "company", label: "Company name", type: "text", placeholder: "Company name" },
  { name: "country", label: "Country", type: "text", placeholder: "Country" },
  { name: "email", label: "Email", type: "email", placeholder: "buyer@company.com" },
  {
    name: "buyerType",
    label: "Buyer type",
    type: "select",
    options: ["Roaster", "Importer", "Trader", "Distributor"],
  },
  {
    name: "coffeeInterest",
    label: "Coffee interest",
    type: "select",
    options: ["AA", "AB", "PB", "Microlots"],
  },
  { name: "volume", label: "Estimated volume", type: "text", placeholder: "e.g. 5 bags / 1 container" },
];

const pricingFields = [
  { name: "grade", label: "Grade required", type: "text", placeholder: "AA / AB / PB / microlots" },
  { name: "quantity", label: "Quantity required", type: "text", placeholder: "Target quantity" },
  { name: "destination", label: "Destination country / port", type: "text", placeholder: "Country / port" },
  {
    name: "incoterm",
    label: "Preferred Incoterm",
    type: "select",
    options: ["FOB", "CIF", "EXW"],
  },
  { name: "timeline", label: "Timeline for purchase", type: "text", placeholder: "e.g. within 30 days" },
];

const salesFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Full name" },
  { name: "company", label: "Company", type: "text", placeholder: "Company name" },
  { name: "email", label: "Email", type: "email", placeholder: "Email address" },
  { name: "whatsapp", label: "WhatsApp number", type: "text", placeholder: "WhatsApp number" },
  { name: "country", label: "Country", type: "text", placeholder: "Country" },
  { name: "message", label: "Message", type: "textarea", placeholder: "Tell us how we can help" },
];

const initialFormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  buyerType: "Roaster",
  coffeeInterest: "AA",
  volume: "",
  grade: "",
  quantity: "",
  destination: "",
  incoterm: "FOB",
  timeline: "",
  whatsapp: "",
  message: "",
};

const salesEmail = "sales@imperionglobalholdings.co.ke";
const whatsappNumber = "254748167811";

const encode = (value) => encodeURIComponent(value);

const buildMailtoLink = (subject, body) =>
  `mailto:${salesEmail}?subject=${encode(subject)}&body=${encode(body)}`;

const buildWhatsAppLink = (message) =>
  `https://wa.me/${whatsappNumber}?text=${encode(message)}`;

function FormField({ field, value, onChange }) {
  if (field.type === "select") {
    return (
      <label className="block text-sm font-medium text-ink/80">
        {field.label}
        <select
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
        >
          {field.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  if (field.type === "textarea") {
    return (
      <label className="block text-sm font-medium text-ink/80">
        {field.label}
        <textarea
          rows="4"
          value={value}
          onChange={(event) => onChange(field.name, event.target.value)}
          placeholder={field.placeholder}
          className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
        />
      </label>
    );
  }

  return (
    <label className="block text-sm font-medium text-ink/80">
      {field.label}
      <input
        type={field.type}
        value={value}
        onChange={(event) => onChange(field.name, event.target.value)}
        placeholder={field.placeholder}
        className="mt-2 w-full rounded-2xl border border-forest/15 bg-white px-4 py-3 outline-none focus:border-gold"
      />
    </label>
  );
}

function MenuButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-2xl border border-forest/10 bg-white px-4 py-3 text-left text-sm font-medium text-forest transition hover:border-gold hover:bg-gold/10"
    >
      {children}
    </button>
  );
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const [screen, setScreen] = useState("menu");
  const [formValues, setFormValues] = useState(initialFormState);

  const handleFieldChange = (name, value) => {
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const resetToMenu = () => {
    setScreen("menu");
  };

  const submitForm = (nextScreen) => {
    setScreen(nextScreen);
  };

  const sampleEmailBody = `Coffee Sample Request

Name: ${formValues.name}
Company: ${formValues.company}
Country: ${formValues.country}
Email: ${formValues.email}
Buyer Type: ${formValues.buyerType}
Coffee Interest: ${formValues.coffeeInterest}
Estimated Volume: ${formValues.volume}`;

  const pricingEmailBody = `Pricing Request

Grade Required: ${formValues.grade}
Quantity Required: ${formValues.quantity}
Destination Country/Port: ${formValues.destination}
Preferred Incoterm: ${formValues.incoterm}
Timeline for Purchase: ${formValues.timeline}`;

  const salesEmailBody = `Sales Inquiry

Name: ${formValues.name}
Company: ${formValues.company}
Email: ${formValues.email}
WhatsApp: ${formValues.whatsapp}
Country: ${formValues.country}
Message: ${formValues.message}`;

  const sampleWhatsAppMessage = `Hello Imperion Global Holdings. I would like to request coffee samples.
Name: ${formValues.name}
Company: ${formValues.company}
Country: ${formValues.country}
Email: ${formValues.email}
Buyer Type: ${formValues.buyerType}
Coffee Interest: ${formValues.coffeeInterest}
Estimated Volume: ${formValues.volume}`;

  const pricingWhatsAppMessage = `Hello Imperion Global Holdings. I would like to request pricing.
Grade Required: ${formValues.grade}
Quantity Required: ${formValues.quantity}
Destination Country/Port: ${formValues.destination}
Preferred Incoterm: ${formValues.incoterm}
Timeline for Purchase: ${formValues.timeline}`;

  const salesWhatsAppMessage = `Hello Imperion Global Holdings. I would like to speak to sales.
Name: ${formValues.name}
Company: ${formValues.company}
Email: ${formValues.email}
WhatsApp: ${formValues.whatsapp}
Country: ${formValues.country}
Message: ${formValues.message}`;

  return (
    <div className="fixed bottom-4 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:right-6">
      {isOpen ? (
        <div className="overflow-hidden rounded-[2rem] border border-forest/15 bg-beige shadow-[0_24px_60px_rgba(20,91,58,0.2)]">
          <div className="flex items-center justify-between bg-forest px-5 py-4 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Imperion Assistant</p>
              <p className="mt-1 text-sm text-white/80">Buyer support chatbot</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-lg text-white/80 hover:text-white"
              aria-label="Close chatbot"
            >
              x
            </button>
          </div>

          <div className="max-h-[75vh] overflow-y-auto px-4 py-4 sm:px-5">
            {(screen === "menu" || screen === "lotsFollowUp" || screen === "profileFollowUp" || screen === "logisticsFollowUp") && (
              <>
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  <p className="font-semibold text-forest">Welcome to Imperion Global Holdings.</p>
                  <p>
                    Looking to source premium Kenyan coffee? I can help you request samples, view current lots,
                    understand pricing, or connect with our export team.
                  </p>
                  <p className="mt-3 font-medium text-forest">What would you like help with today?</p>
                </div>

                <div className="mt-4 space-y-3">
                  {mainMenu.map((item) => (
                    <MenuButton key={item.id} onClick={() => setScreen(item.id)}>
                      {item.label}
                    </MenuButton>
                  ))}
                </div>
              </>
            )}

            {screen === "samples" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Great. We provide samples for serious buyers, roasters, importers, and distributors.
                </div>
                <div className="space-y-4">
                  {sampleFields.map((field) => (
                    <FormField key={field.name} field={field} value={formValues[field.name]} onChange={handleFieldChange} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => submitForm("samplesSubmitted")}
                  className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                >
                  Submit Sample Request
                </button>
                <button type="button" onClick={resetToMenu} className="w-full text-sm font-medium text-forest hover:text-gold">
                  Back to main menu
                </button>
              </div>
            )}

            {screen === "samplesSubmitted" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Thank you. Our team will review your request and contact you with available sample options,
                  cupping notes, and shipping details.
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={buildMailtoLink("Coffee Sample Request", sampleEmailBody)}
                    className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                  >
                    Send by Email
                  </a>
                  <a
                    href={buildWhatsAppLink(sampleWhatsAppMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
                  >
                    Send by WhatsApp
                  </a>
                </div>
                <button type="button" onClick={resetToMenu} className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                  Return to Main Menu
                </button>
              </div>
            )}

            {screen === "lots" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Our available lots may include Kenyan AA, AB, PB, washed coffees, natural coffees, and selected microlots.
                  <p className="mt-3 font-medium text-forest">Would you like to receive the current offer sheet?</p>
                </div>
                <div className="space-y-3">
                  <MenuButton onClick={() => setScreen("sales")}>Yes, send offer sheet</MenuButton>
                  <MenuButton onClick={() => setScreen("pricing")}>Ask about specific grade</MenuButton>
                  <MenuButton onClick={() => setScreen("sales")}>Speak to sales</MenuButton>
                </div>
                <button type="button" onClick={resetToMenu} className="w-full text-sm font-medium text-forest hover:text-gold">
                  Back to main menu
                </button>
              </div>
            )}

            {screen === "pricing" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Coffee pricing depends on grade, cup profile, volume, shipment terms, and current market conditions.
                  <p className="mt-3">To prepare an accurate quotation, please share:</p>
                </div>
                <div className="space-y-4">
                  {pricingFields.map((field) => (
                    <FormField key={field.name} field={field} value={formValues[field.name]} onChange={handleFieldChange} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => submitForm("pricingSubmitted")}
                  className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                >
                  Request Pricing
                </button>
                <button type="button" onClick={resetToMenu} className="w-full text-sm font-medium text-forest hover:text-gold">
                  Back to main menu
                </button>
              </div>
            )}

            {screen === "pricingSubmitted" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Thank you. We will prepare pricing based on your requirements.
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={buildMailtoLink("Pricing Request", pricingEmailBody)}
                    className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                  >
                    Send by Email
                  </a>
                  <a
                    href={buildWhatsAppLink(pricingWhatsAppMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
                  >
                    Send by WhatsApp
                  </a>
                </div>
                <button type="button" onClick={resetToMenu} className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                  Return to Main Menu
                </button>
              </div>
            )}

            {screen === "profile" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  You can download our company profile here:
                  <div className="mt-3">
                    <a
                      href="/company-profile.pdf"
                      className="inline-flex rounded-full bg-gold px-4 py-2 font-semibold text-forest hover:bg-gold/90"
                    >
                      Download Company Profile
                    </a>
                  </div>
                  <p className="mt-4 font-medium text-forest">Would you also like the coffee offer sheet?</p>
                </div>
                <div className="space-y-3">
                  <MenuButton onClick={() => setScreen("sales")}>Yes, send offer sheet</MenuButton>
                  <MenuButton onClick={resetToMenu}>No, continue browsing</MenuButton>
                </div>
              </div>
            )}

            {screen === "logistics" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  <p>We export through the Port of Mombasa and can support FOB or CIF shipments depending on buyer requirements.</p>
                  <p className="mt-3">Typical export documents include:</p>
                  <ul className="mt-3 space-y-1">
                    <li>Commercial Invoice</li>
                    <li>Packing List</li>
                    <li>Certificate of Origin</li>
                    <li>Phytosanitary Certificate</li>
                    <li>Quality / grading report where applicable</li>
                  </ul>
                  <p className="mt-4 font-medium text-forest">Would you like to discuss shipment options?</p>
                </div>
                <div className="space-y-3">
                  <MenuButton onClick={() => setScreen("sales")}>Yes, speak to sales</MenuButton>
                  <MenuButton onClick={() => setScreen("pricing")}>Request quotation</MenuButton>
                </div>
                <button type="button" onClick={resetToMenu} className="w-full text-sm font-medium text-forest hover:text-gold">
                  Back to main menu
                </button>
              </div>
            )}

            {screen === "sales" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Sure. Please leave your details and our team will contact you.
                </div>
                <div className="space-y-4">
                  {salesFields.map((field) => (
                    <FormField key={field.name} field={field} value={formValues[field.name]} onChange={handleFieldChange} />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => submitForm("salesSubmitted")}
                  className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                >
                  Send to Sales
                </button>
                <button type="button" onClick={resetToMenu} className="w-full text-sm font-medium text-forest hover:text-gold">
                  Back to main menu
                </button>
              </div>
            )}

            {screen === "salesSubmitted" && (
              <div className="space-y-4">
                <div className="rounded-[1.5rem] bg-white p-4 text-sm leading-7 text-ink/75">
                  Thank you for contacting Imperion Global Holdings. We have received your inquiry and will respond
                  shortly with the next steps.
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={buildMailtoLink("Sales Inquiry", salesEmailBody)}
                    className="inline-flex items-center justify-center rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90"
                  >
                    Send by Email
                  </a>
                  <a
                    href={buildWhatsAppLink(salesWhatsAppMessage)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-forest/20 px-5 py-3 text-sm font-semibold text-forest hover:border-gold hover:text-gold"
                  >
                    Send by WhatsApp
                  </a>
                </div>
                <button type="button" onClick={resetToMenu} className="w-full rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white hover:bg-forest/90">
                  Return to Main Menu
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="ml-auto inline-flex items-center gap-3 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(20,91,58,0.28)] hover:bg-forest/90"
        >
          <span className="inline-flex h-3 w-3 rounded-full bg-gold" />
          Chat with Imperion
        </button>
      )}
    </div>
  );
}
