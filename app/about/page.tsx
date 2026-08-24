import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Isabera Yard",
  description:
    "Learn more about our carpentry yard, team, and approach to building furniture, decks, and structural carpentry.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-4">
          Who we are
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-5">
          About
        </h1>
      </div>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center mb-14">
        <div className="relative aspect-[4/3] bg-charcoal/5 rounded-sm overflow-hidden border border-strong">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="Carpentry yard workshop"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display text-3xl tracking-tight mb-4">
            Built by hand, measured twice.
          </h2>
          <p className="text-body leading-relaxed mb-4">
            We’re a small carpentry team focused on honest construction and
            clear communication. Every job starts with dimensions and ends with
            cleanup — no vague quotes, no surprise invoices.
          </p>
          <p className="text-body leading-relaxed">
            Replace this placeholder with your real story: how long you’ve been
            in business, what drives you, and what clients can expect when they
            work with your yard.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 border-t border-strong pt-10">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-2">
            Experience
          </p>
          <p className="text-body leading-relaxed">
            X+ years across furniture making, decking, and residential framing.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-2">
            Team
          </p>
          <p className="text-body leading-relaxed">
            2–5 carpenters depending on project load. Crew details go here.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-2">
            Coverage
          </p>
          <p className="text-body leading-relaxed">
            Based in your town — service area radius or city list goes here.
          </p>
        </div>
      </div>
    </main>
  );
}
