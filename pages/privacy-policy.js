import Seo from "@/components/Seo";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <Seo title="Privacy Policy | Imperion Global Holdings" description="How Imperion collects and uses website and buyer inquiry information." />
      <p className="section-label">Privacy Policy</p>
      <h1 className="section-title">Privacy at Imperion</h1>
      <div className="mt-8 space-y-6 text-sm leading-8 text-stone">
        <p>We collect the information submitted through our forms for buyer verification, quotation, sample and export communication. We do not sell personal information.</p>
        <p>Form submissions may be stored and transmitted to the relevant private company inbox. Third-party delivery, analytics or protection services may process data only as needed to operate the website.</p>
        <p>Company documents are not published. Requests are verified before documents are sent from an official @imperionglobalholdings.co.ke address or discussed on a video call.</p>
        <p>For privacy questions, contact info@imperionglobalholdings.co.ke.</p>
      </div>
    </section>
  );
}
