import { Suspense } from "react";
import { DimDivider } from "@/components/DimDivider";
import { QuoteForm } from "@/components/QuoteForm";

export default function QuotePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-3">
            Custom order
          </p>
          <h1 className="font-display text-5xl tracking-tight mb-4">
            Request a quote
          </h1>
          <p className="text-walnut/70 text-lg leading-relaxed mb-8">
            Tell us what you need, whether it is a catalog piece or furniture
            built to your own dimensions. We confirm price and lead time before
            anything is cut.
          </p>
          <div className="mb-8">
            <DimDivider />
          </div>
          <div className="space-y-5 text-sm text-walnut/75">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-1">
                Fastest response
              </p>
              <a href="tel:+254723360384" className="text-walnut hover:text-brass">
                +254 723 360384
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-1">
                Location
              </p>
              <p>Kiunduani, Mombasa Road Town</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brass mb-1">
                Helpful details
              </p>
              <p>
                Share dimensions, preferred wood, finish color, fabric choice,
                delivery area and deadline.
              </p>
            </div>
          </div>
        </div>
        <section className="border border-walnut/15 bg-sawdust-2/45 rounded-sm p-6 sm:p-8">
          <Suspense fallback={null}>
            <QuoteForm />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
