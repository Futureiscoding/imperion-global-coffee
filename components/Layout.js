import Link from "next/link";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/coffee", label: "Coffee" },
  { href: "/buyers", label: "Media" },
  { href: "/about", label: "About" },
  { href: "/avocado", label: "Avocado" },
  { href: "/macadamia", label: "Macadamia" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/254748167811?text=Hello%20this%20is%20Simon%20Njuguna%20from%20Imperion%20Global%20Holdings%20Limited",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.47 1.33 4.98L2 22l5.25-1.38a9.95 9.95 0 0 0 4.77 1.22h.01c5.47 0 9.92-4.45 9.92-9.92a9.86 9.86 0 0 0-2.9-7.01ZM12.03 20.16h-.01a8.23 8.23 0 0 1-4.19-1.14l-.3-.18-3.12.82.84-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.53 3.7-8.23 8.24-8.23a8.17 8.17 0 0 1 5.82 2.41 8.16 8.16 0 0 1 2.4 5.82c0 4.54-3.69 8.23-8.22 8.23Zm4.51-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.49-1.41-1.74-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.43-.43-.57-.44h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.59.21-1.09.15-1.19-.07-.11-.23-.17-.48-.3Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/imperion-global-holdings-limited/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3Zm14.69 9.86c0-3.46-1.85-5.07-4.32-5.07-1.99 0-2.88 1.1-3.37 1.87V8.5H8.87c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93.27-.69.89-1.41 1.93-1.41 1.36 0 1.91 1.04 1.91 2.56V20h3.38v-7.14Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ImperionGlobalHoldingsLimited/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M13.5 21v-8.03h2.7l.4-3.13h-3.1V7.84c0-.91.25-1.52 1.56-1.52H16.9V3.53A24.2 24.2 0 0 0 14.2 3c-2.67 0-4.5 1.63-4.5 4.62v2.22H6.67v3.13H9.7V21h3.8Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/imperion_global/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
      </svg>
    ),
  },
];

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-beige">
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-beige/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-forest">
              <img src="/logo.png" alt="Imperion Global Holdings logo" className="h-11 w-11 rounded-full object-cover" />
              <span>Imperion Global Holdings</span>
            </Link>
            <p className="text-sm text-ink/70">Traceable Origin. Measurable Quality. Reliable Global Supply.</p>
          </div>
          <nav className="flex flex-wrap gap-2 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/coffee"
                    ? "rounded-full bg-gold/20 px-4 py-2 text-forest hover:bg-gold/35"
                    : "rounded-full px-4 py-2 text-ink/80 hover:bg-forest/8 hover:text-forest"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-forest/10 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h2 className="text-lg font-semibold text-forest">Imperion Global Holdings Limited</h2>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Buyer-focused agricultural exports with transparent sourcing, quality assurance, and export
              documentation support.
            </p>
            <p className="mt-4 text-sm leading-6 text-ink/75">
              Main Office: Ruiru, Kiambu County
              <br />
              P.O BOX 964-00232, Ruiru, Kenya
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
            <div className="mt-3 space-y-2 text-sm text-ink/75">
              <p>Phone: +254 748 167 811</p>
              <p>
                <a href="mailto:info@imperionglobalholdings.co.ke" className="hover:text-forest">
                  info@imperionglobalholdings.co.ke
                </a>
              </p>
              <p>
                <a href="mailto:sales@imperionglobalholdings.co.ke" className="hover:text-forest">
                  sales@imperionglobalholdings.co.ke
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Office Hours</h3>
            <div className="mt-3 space-y-2 text-sm text-ink/75">
              <p>Monday-Saturday: 8:00 AM - 6:00 PM (EAT)</p>
              <p>Sunday: Closed (By appointment only)</p>
            </div>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Social</h3>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  title={item.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 bg-beige text-forest transition hover:border-gold hover:bg-gold/15 hover:text-gold"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Data Protection</h3>
            <p className="mt-3 text-sm leading-6 text-ink/75">
              Imperion Global Holdings Ltd handles business contact details responsibly and only uses shared
              information for legitimate communication, trade engagement, order support, and client relationship
              management.
            </p>
            <Link href="/contact" className="mt-4 inline-flex text-sm font-semibold text-forest hover:text-gold">
              Request samples or pricing
            </Link>
          </div>
        </div>
        <div className="border-t border-forest/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
            <p>Copyright © Imperion Global Holdings Ltd | All Rights Reserved</p>
            <p>Your data is treated with care and kept confidential within our normal business and compliance processes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
