import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const phoneDisplay = "+254 723 360384";
const phoneHref = "tel:+254723360384";
const whatsappHref = "https://wa.me/254723360384";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal/95 text-sawdust border-b border-brass/20 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="22" height="22" viewBox="0 0 22 22" className="text-brass-light">
            <path
              d="M3 19 L11 3 L19 19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <line x1="6.5" y1="12" x2="15.5" y2="12" stroke="currentColor" strokeWidth="1.6" />
          </svg>
          <span className="font-display text-lg tracking-tight group-hover:text-brass-light transition-colors">
            Kisaka Yard
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 font-mono text-[12px] uppercase tracking-[0.15em]">
          <Link href="/#catalog" className="hover:text-brass-light transition-colors">
            Catalog
          </Link>
          <Link href="/quote" className="hover:text-brass-light transition-colors">
            Request a Quote
          </Link>
          <a href={whatsappHref} className="hover:text-brass-light transition-colors">
            WhatsApp
          </a>
          <Link
            href="/admin"
            className="text-charcoal bg-brass-light px-3 py-1.5 rounded-sm hover:bg-brass transition-colors"
          >
            Yard Dashboard
          </Link>
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <a
            href={phoneHref}
            className="h-9 w-9 grid place-items-center border border-sawdust/20 rounded-sm text-brass-light"
            aria-label="Call Kisaka Yard"
          >
            <Phone size={17} />
          </a>
          <Link
            href="/quote"
            className="bg-brass-light text-charcoal font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-2 rounded-sm"
          >
            Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal text-sawdust/70 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr] font-mono text-[12px]">
        <div>
          <p className="font-display text-lg text-sawdust mb-2 tracking-tight">
            Kisaka Yard
          </p>
          <p className="leading-relaxed">
            Custom tables, sofa sets, beds and storage,
            <br />
            built to order in Kiunduani.
          </p>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-brass-light mb-2">Visit</p>
          <p className="leading-relaxed">
            Kiunduani
            <br />
            Mombasa Road Town
          </p>
        </div>
        <div>
          <p className="uppercase tracking-[0.2em] text-brass-light mb-2">Reach us</p>
          <div className="flex flex-wrap gap-2 mb-3">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 border border-sawdust/20 px-3 py-2 rounded-sm text-sawdust hover:border-brass-light hover:text-brass-light transition-colors"
            >
              <Phone size={14} />
              {phoneDisplay}
            </a>
            <a
              href={whatsappHref}
              className="inline-flex items-center gap-2 bg-brass-light text-charcoal px-3 py-2 rounded-sm hover:bg-sawdust transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          </div>
          <p className="leading-relaxed">orders@kisakayard.co.ke</p>
        </div>
      </div>
      <div className="border-t border-sawdust/10 px-6 py-4 text-center text-[11px] tracking-wide">
        © {new Date().getFullYear()} Kisaka Yard. Built to measure.
      </div>
    </footer>
  );
}
