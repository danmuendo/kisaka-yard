import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { DimDivider } from "@/components/DimDivider";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen bg-charcoal text-sawdust overflow-hidden pt-16">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
          alt="Carpentry workshop"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex items-center min-h-[calc(100vh-4rem)]">
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass-light mb-5">
              Isabera Yard · Kiunduani Town, Mombasa Road
            </p>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] tracking-tight mb-6">
              Built to measure, built to last.
            </h1>
            <p className="text-sawdust/90 text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
              Custom furniture, decks and outdoor structures, and framing for
              homes and businesses. Honest quotes, clear timelines, tidy sites.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="bg-brass-light text-charcoal font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-sawdust transition-colors"
              >
                Our services
              </Link>
              <a
                href="https://wa.me/254700000000"
                className="inline-flex items-center gap-2 border border-sawdust/35 font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass-light hover:text-brass-light transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="tel:+254700000000"
                className="inline-flex items-center gap-2 border border-sawdust/20 font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass-light hover:text-brass-light transition-colors"
              >
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-strong bg-sawdust-2/35">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
          {[
            ["Made to measure", "Share dimensions, reference photos, or sketches and we size it properly."],
            ["Local & reliable", "Based in your town with service across your area. We show up when we say we will."],
            ["Clear pricing", "Itemized quotes with materials, labor, and markup shown. No hidden costs."],
          ].map(([title, copy]) => (
            <div key={title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-2">
                {title}
              </p>
              <p className="text-body leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Carpentry detail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <DimDivider label="What we build" />
            <h2 className="font-display text-4xl tracking-tight mt-7 mb-5">
              Furniture, decks, and structural carpentry — done properly.
            </h2>
            <p className="text-body leading-relaxed mb-6">
              From a custom dining table to a full deck or a timber frame, we
              bring the same attention to joinery, finish, and cleanup. Browse
              our services or jump straight to a quote.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services"
                className="inline-block bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors"
              >
                View services
              </Link>
              <Link
                href="/quote"
                className="inline-block border border-strong text-walnut font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass hover:text-brass transition-colors"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-8">
          <DimDivider label="Recent work" />
          <h2 className="font-display text-4xl tracking-tight mt-6">
            Portfolio
          </h2>
          <p className="text-body leading-relaxed max-w-md mt-2">
            A selection of recent jobs — before and after. Swap in your own
            photos when ready.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Mahogany Dining Set",
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            },
            {
              title: "Backyard Deck",
              img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
            },
            {
              title: "Extension Frame",
              img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href="/portfolio"
              className="group border border-strong bg-sawdust-2/50 hover:border-brass transition-colors rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-charcoal/[0.04] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="font-display text-xl leading-tight group-hover:text-rust transition-colors">
                  {item.title}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brass mt-1">
                  View project
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/portfolio"
            className="inline-block bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors"
          >
            See all projects
          </Link>
        </div>
      </section>
    </main>
  );
}
