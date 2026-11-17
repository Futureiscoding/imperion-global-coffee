import Link from "next/link";
import ChatbotWidget from "@/components/ChatbotWidget";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/coffee", label: "Our Coffee" },
  { href: "/origins", label: "Origins" },
  { href: "/quality-traceability", label: "Quality & Traceability" },
  { href: "/export", label: "Export" },
  { href: "/about", label: "About Imperion" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { name: "WhatsApp", href: "https://wa.me/254748167811?text=Hello%20Imperion%20Global%20Holdings%2C%20I%20would%20like%20to%20request%20Kenyan%20coffee%20samples.", icon: "✆" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/imperion-global-holdings-limited/", icon: "in" },
  { name: "Facebook", href: "https://www.facebook.com/ImperionGlobalHoldingsLimited/", icon: "f" },
  { name: "Email", href: "mailto:info@imperionglobalholdings.co.ke", icon: "@" },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-beige text-ink">
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-[#f7f3ea]/90 backdrop-blur-md">
        <div className="container-shell flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-3 text-lg font-extrabold tracking-tight text-forest">
              <img src="/logo.png" alt="Imperion Global Holdings logo" className="h-11 w-11 rounded-full object-cover" />
              <span className="leading-tight">
                Imperion <span className="text-gold">Coffee</span>
              </span>
            </Link>
          </div>

          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-ink/80">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 hover:bg-forest/5 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact#inquiry-form" className="cta-primary">Request Samples</Link>
          </div>
        </div>
      </header>

      <main>{children}</main>
      <ChatbotWidget />

      <footer className="border-t border-forest/10 bg-[#fbf9f4]">
        <div className="container-shell grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-forest">Imperion Global Holdings Limited</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              Kenyan specialty coffee exporter connecting international roasters and importers with traceable, quality-led green coffee and export support.
            </p>
            <p className="mt-4 text-sm leading-7 text-ink/75">
              Kenya<br />
              Email: <a href="mailto:info@imperionglobalholdings.co.ke" className="font-semibold text-forest hover:text-gold">info@imperionglobalholdings.co.ke</a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-forest">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <div className="mt-4 space-y-3 text-sm text-ink/75">
              <p>Phone: +254 748 167 811</p>
              <p>
                <a href="mailto:info@imperionglobalholdings.co.ke" className="hover:text-forest">info@imperionglobalholdings.co.ke</a>
              </p>
              <p>
                <a href="https://imperionglobalholdings.co.ke" className="hover:text-forest">imperionglobalholdings.co.ke</a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 bg-white text-sm font-bold text-forest hover:border-gold hover:text-gold"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-gold">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li><Link href="/privacy-policy" className="hover:text-forest">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-forest">Terms</Link></li>
              <li><Link href="/contact" className="hover:text-forest">Request Samples</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest/10">
          <div className="container-shell flex flex-col gap-3 py-5 text-sm text-ink/65 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Imperion Global Holdings Limited. All rights reserved.</p>
            <p>Trusted Kenyan coffee sourcing and export support.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
