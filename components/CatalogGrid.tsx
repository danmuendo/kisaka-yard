"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/data";
import { ProductGraphic } from "@/components/ProductGraphic";
import { DimTag } from "@/components/DimDivider";

export function CatalogGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const visible =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`font-mono text-[12px] uppercase tracking-[0.15em] px-4 py-2 rounded-sm border transition-colors ${
              active === c
                ? "bg-walnut text-sawdust border-walnut"
                : "border-walnut/30 text-walnut hover:border-walnut"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((p) => (
          <Link
            key={p.slug}
            href={`/product/${p.slug}`}
            className="group border border-walnut/15 bg-sawdust-2/50 hover:border-brass transition-colors rounded-sm overflow-hidden"
          >
            <div className="relative aspect-[4/3] bg-charcoal/[0.04] flex items-center justify-center text-walnut/60 group-hover:text-brass transition-colors overflow-hidden">
              {p.photo ? (
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="h-full w-full p-8">
                  <ProductGraphic type={p.image} className="w-full h-full" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-2">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-moss">
                  {p.category}
                </p>
                {p.inStock <= 2 && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-rust">
                    {p.inStock} in stock
                  </p>
                )}
              </div>
              <h3 className="font-display text-2xl leading-tight mb-2 group-hover:text-rust transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-walnut/65 mb-4">{p.wood}</p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <DimTag width={p.width} depth={p.depth} height={p.height} />
                <span className="font-mono text-sm text-walnut font-semibold">
                  KES {p.price.toLocaleString()}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
