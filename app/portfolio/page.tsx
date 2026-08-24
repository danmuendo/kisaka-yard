import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Isabera Yard",
  description:
    "Before and after projects from our carpentry yard: furniture, decks, and framing work.",
};

const projects = [
  {
    title: "Mahogany Dining Set",
    category: "Custom Furniture",
    before: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    after: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
  },
  {
    title: "Backyard Deck",
    category: "Decks & Outdoor",
    before: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    after: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
  },
  {
    title: "Open-Plan Extension Frame",
    category: "Framing & Construction",
    before: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Built-In Storage Wall",
    category: "Custom Furniture",
    before: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
    after: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-4">
          Our work
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-5">
          Portfolio
        </h1>
        <p className="text-body leading-relaxed">
          A selection of recent jobs — from raw materials to finished spaces.
          Replace these placeholders with your own before/after photos.
        </p>
      </div>

      <div className="grid gap-10">
        {projects.map((p) => (
          <div key={p.title} className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative aspect-[4/3] bg-charcoal/5 rounded-sm overflow-hidden border border-strong">
              <img
                src={p.before}
                alt={`${p.title} — before`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-charcoal/70 text-sawdust px-3 py-1 rounded-sm">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3] bg-charcoal/5 rounded-sm overflow-hidden border border-strong">
              <img
                src={p.after}
                alt={`${p.title} — after`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-moss/80 text-sawdust px-3 py-1 rounded-sm">
                After
              </span>
            </div>
            <div className="md:col-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-1">
                {p.category}
              </p>
              <h2 className="font-display text-2xl tracking-tight">{p.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
