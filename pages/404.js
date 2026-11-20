import Link from "next/link";
import Seo from "@/components/Seo";

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <Seo title="Page not found | Imperion" description="The page could not be found." />
      <p className="section-label">404</p>
      <h1 className="mt-4 font-serif text-5xl text-forest">Page not found</h1>
      <p className="mt-5 text-stone">Return to the coffee program or contact our export desk.</p>
      <div className="mt-8 flex justify-center gap-4">
        <Link href="/" className="cta-primary">Home</Link>
        <Link href="/coffee" className="cta-secondary">Coffee</Link>
      </div>
    </section>
  );
}
