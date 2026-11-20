import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/content/rebuild-kit";

const coffeeLinks = [
  ["/coffee", "Kenyan coffee"],
  ["/coffee/grades-and-varieties", "Grades and varieties"],
  ["/coffee/regions-and-harvest", "Regions and harvest"],
  ["/coffee/flavour-guide", "Flavour guide"],
];

function NavigationLinks({ onNavigate, mobile = false }) {
  return (
    <>
      <Link href="/about" onClick={onNavigate} className="navigation-link">
        About
      </Link>
      <details className="navigation-coffee">
        <summary className="navigation-link" aria-label="Coffee pages">
          Coffee <span className="ml-2 text-xs" aria-hidden="true">⌄</span>
        </summary>
        <div className="navigation-dropdown">
          {coffeeLinks.map(([href, label]) => (
            <Link key={href} href={href} onClick={onNavigate}>
              {label}
            </Link>
          ))}
        </div>
      </details>
      <Link href="/macadamia" onClick={onNavigate} className="navigation-link">
        Macadamia
        <span className="ml-2 rounded-sm bg-mist px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-forest">
          Developing
        </span>
      </Link>
      <Link href="/quality-traceability" onClick={onNavigate} className="navigation-link">
        Quality
      </Link>
      <Link href="/samples" onClick={onNavigate} className="navigation-link">
        Samples
      </Link>
      <Link href="/export" onClick={onNavigate} className="navigation-link">
        Export
      </Link>
      <Link href="/contact" onClick={onNavigate} className="navigation-link">
        Contact
      </Link>
      {mobile ? (
        <Link href="/gallery" onClick={onNavigate} className="navigation-link">
          Gallery
        </Link>
      ) : null}
    </>
  );
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), summary'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Imperion, I would like to discuss Kenyan coffee."
  )}`;

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[76px] max-w-[1600px] items-center gap-5 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mr-auto flex shrink-0 items-center gap-3 text-forest"
            aria-label={`${brand.name} home`}
          >
            <Image src="/logo.png" alt="" width={44} height={44} priority className="h-11 w-11 rounded-full object-cover" />
            <span className="hidden text-[13px] font-extrabold leading-tight sm:block">
              Imperion
              <span className="block font-medium text-stone">Global Holdings</span>
            </span>
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 2xl:flex"
          >
            <NavigationLinks />
          </nav>

          <Link href="/samples" className="cta-primary hidden shrink-0 md:inline-flex">
            Request samples
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-forest/20 text-forest 2xl:hidden"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span aria-hidden="true" className="h-px w-5 bg-current" />
            <span aria-hidden="true" className="h-px w-5 bg-current" />
            <span aria-hidden="true" className="h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      {menuOpen ? (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="fixed inset-0 z-[60] overflow-y-auto bg-darkgreen text-white 2xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex min-h-[76px] items-center justify-between border-b border-white/15 px-5">
            <Link href="/" onClick={closeMenu} className="font-serif text-xl text-white">
              Imperion
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/25 text-2xl"
              aria-label="Close menu"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <nav
            aria-label="Mobile navigation"
            className="main-navigation--mobile flex flex-col items-start gap-1 px-5 py-5"
          >
            <NavigationLinks onNavigate={closeMenu} mobile />
          </nav>
          <div className="grid gap-3 px-5 pb-10">
            <Link href="/coffee" onClick={closeMenu} className="cta-primary w-full">
              Request an offer
            </Link>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="py-2 text-sm text-white/85">
              Call {brand.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="py-2 text-sm text-white/85">
              Message us on WhatsApp
            </a>
          </div>
        </div>
      ) : null}

      <main id="main-content">{children}</main>

      <footer className="bg-darkgreen text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <p className="font-serif text-2xl">{brand.name}</p>
            <p className="mt-2 text-sm font-medium text-goldlight">{brand.tagline}</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Kenyan coffee exporter serving international roasters and importers.
            </p>
            <p className="mt-4 text-sm text-white/75">{brand.location}</p>
            <div className="mt-4 flex flex-col items-start gap-2 text-sm">
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-goldlight">
                {brand.phone}
              </a>
              <a href="mailto:info@imperionglobalholdings.co.ke" className="hover:text-goldlight">
                info@imperionglobalholdings.co.ke
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-goldlight">
                WhatsApp
              </a>
            </div>
          </div>
          <div>
            <h2 className="eyebrow text-goldlight">Company</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/75">
              <Link href="/about">About</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/contact">Contact us</Link>
            </div>
          </div>
          <div>
            <h2 className="eyebrow text-goldlight">Kenyan coffee</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/75">
              {coffeeLinks.map(([href, label]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
              <Link href="/samples">Request samples</Link>
            </div>
          </div>
          <div>
            <h2 className="eyebrow text-goldlight">More</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-white/75">
              <Link href="/quality-traceability">Quality and traceability</Link>
              <Link href="/export">Export and logistics</Link>
              <Link href="/macadamia">Macadamia</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/privacy-policy">Privacy policy</Link>
              <Link href="/terms">Terms and conditions</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-white/65 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} {brand.name}</p>
            <p>Company documents are shared with verified buyers on request.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
