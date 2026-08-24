import { Metadata } from "next";
import Link from "next/link";
import { Hammer, Trees, Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Isabera Yard",
  description:
    "Custom furniture, decks and outdoor structures, and framing/construction services built to last.",
};

const services = [
  {
    icon: Ruler,
    title: "Custom Furniture",
    description:
      "Tables, chairs, beds, storage, and built-ins designed around your space. Solid wood, durable finishes, and joinery built to outlive trends.",
  },
  {
    icon: Trees,
    title: "Decks & Outdoor",
    description:
      "Decking, pergolas, outdoor seating, and garden structures using rot-resistant timber and weather-tested fixings.",
  },
  {
    icon: Hammer,
    title: "Framing & Construction",
    description:
      "Structural timber framing, formwork, and general carpentry for residential and light commercial builds.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-12">
        <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-4">
          What we do
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-5">
          Services
        </h1>
        <p className="text-body leading-relaxed">
          From a single table to an entire outdoor structure, we cover the full
          range of general carpentry — tailored to your measurements, budget, and
          timeline.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="border border-strong bg-sawdust-2/40 rounded-sm p-7 hover:border-brass transition-colors"
          >
            <s.icon className="text-brass mb-4" size={28} />
            <h2 className="font-display text-2xl tracking-tight mb-2">
              {s.title}
            </h2>
            <p className="text-body leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-strong pt-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-muted mb-3">
          Not sure which service fits?
        </p>
        <p className="text-body leading-relaxed mb-5 max-w-2xl">
          Tell us what you need and we’ll recommend the right approach — no
          obligation.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors"
        >
          Contact us
        </Link>
      </div>
    </main>
  );
}
