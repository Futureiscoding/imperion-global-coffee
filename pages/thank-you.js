import Link from "next/link";
import Seo from "@/components/Seo";

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <Seo title="Thank you | Imperion" description="Your inquiry has been received." />
      <p className="section-label">Inquiry received</p>
      <h1 className="mt-4 font-serif text-5xl text-forest">Thank you</h1>
      <p className="mt-5 text-stone">Our team will review your request and reply from an official @imperionglobalholdings.co.ke address.</p>
      <Link href="/" className="cta-primary mt-8">Return home</Link>
    </section>
  );
}
