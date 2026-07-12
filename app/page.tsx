import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { DimDivider } from "@/components/DimDivider";
import { CatalogGrid } from "@/components/CatalogGrid";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[calc(100vh-4rem)] bg-charcoal text-sawdust overflow-hidden">
        <Image
          src="/products/Mahogany Dining Table.jpg"
          alt="Mahogany dining table made by Kisaka Yard"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/20" />
        <div className="relative max-w-6xl mx-auto px-6 min-h-[calc(100vh-4rem)] py-16 flex items-center">
          <div className="max-w-2xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass-light mb-5">
              Kisaka Yard · Kiunduani, Mombasa Road Town
            </p>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] tracking-tight mb-6">
              Custom furniture built for your space.
            </h1>
            <p className="text-sawdust/78 text-lg sm:text-xl leading-relaxed max-w-xl mb-8">
              Tables, sofa sets, beds and storage made to order with clear
              dimensions, practical finishes and direct yard communication.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#catalog"
                className="bg-brass-light text-charcoal font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-sawdust transition-colors"
              >
                Browse catalog
              </Link>
              <a
                href="https://wa.me/254723360384"
                className="inline-flex items-center gap-2 border border-sawdust/35 font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass-light hover:text-brass-light transition-colors"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href="tel:+254723360384"
                className="inline-flex items-center gap-2 border border-sawdust/20 font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass-light hover:text-brass-light transition-colors"
              >
                <Phone size={16} />
                Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-walnut/10 bg-sawdust-2/35">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
          {[
            ["Made to measure", "Share a room size, reference photo or catalog piece and we size it properly."],
            ["Local delivery", "Built in Kiunduani with delivery coordination around Mombasa Road Town."],
            ["Direct updates", "Call or WhatsApp the yard for measurements, finish choices and lead time."],
          ].map(([title, copy]) => (
            <div key={title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-2">
                {title}
              </p>
              <p className="text-walnut/75 leading-relaxed">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-charcoal">
            <Image
              src="/products/Harbor 3-Seater Sofa Set.jpg"
              alt="Custom sofa set from Kisaka Yard"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <DimDivider label="What we build" />
            <h2 className="font-display text-4xl tracking-tight mt-7 mb-5">
              Furniture that starts with the room, not a showroom template.
            </h2>
            <p className="text-walnut/75 leading-relaxed mb-6">
              Choose from the catalog or request a custom size. Kisaka Yard can
              quote tables, sofa sets, beds, storage units and related carpentry
              work based on your dimensions, material choice and deadline.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors"
            >
              Request custom work
            </Link>
          </div>
        </div>
      </section>

      <section id="catalog" className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <DimDivider label="Catalog" />
            <h2 className="font-display text-4xl tracking-tight mt-6">
              Popular pieces
            </h2>
          </div>
          <p className="text-walnut/65 leading-relaxed max-w-md">
            Prices are guide prices. Final quote depends on size, finish,
            fabric, delivery and material availability.
          </p>
        </div>
        <CatalogGrid />
      </section>
    </main>
  );
}
