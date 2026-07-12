import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { getProduct, products } from "@/lib/data";
import { ProductGraphic } from "@/components/ProductGraphic";
import { DimDivider } from "@/components/DimDivider";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return notFound();

  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <Link
        href="/#catalog"
        className="font-mono text-[12px] uppercase tracking-[0.15em] text-walnut/60 hover:text-brass"
      >
        ← Back to catalog
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start">
        <div className="relative border border-walnut/15 bg-sawdust-2/40 rounded-sm aspect-square flex items-center justify-center overflow-hidden text-walnut/70">
          {product.photo ? (
            <Image
              src={product.photo}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="h-full w-full p-12">
              <ProductGraphic type={product.image} className="w-full h-full" />
            </div>
          )}
        </div>

        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-moss mb-2">
            {product.category} · {product.wood}
          </p>
          <h1 className="font-display text-5xl leading-tight mb-4 tracking-tight">
            {product.name}
          </h1>
          <p className="text-walnut/80 text-lg leading-relaxed mb-6">
            {product.description}
          </p>

          <div className="mb-6">
            <DimDivider label="Specification" />
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 font-mono text-[13px] mb-8">
            <dt className="text-walnut/50 uppercase tracking-[0.12em]">Dimensions</dt>
            <dd className="text-right sm:text-left">
              {product.width} × {product.depth} × {product.height} cm
            </dd>
            <dt className="text-walnut/50 uppercase tracking-[0.12em]">Wood</dt>
            <dd className="text-right sm:text-left">{product.wood}</dd>
            <dt className="text-walnut/50 uppercase tracking-[0.12em]">Lead time</dt>
            <dd className="text-right sm:text-left">{product.leadTimeDays} days</dd>
            <dt className="text-walnut/50 uppercase tracking-[0.12em]">Availability</dt>
            <dd className="text-right sm:text-left">
              {product.inStock > 0
                ? `${product.inStock} ready in the yard`
                : "Made to order"}
            </dd>
            <dt className="text-walnut/50 uppercase tracking-[0.12em]">Guide price</dt>
            <dd className="text-lg text-right sm:text-left">KES {product.price.toLocaleString()}</dd>
          </dl>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/quote?product=${product.slug}`}
              className="inline-block bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors"
            >
              Request this piece
            </Link>
            <a
              href={`https://wa.me/254723360384?text=Hello%20Kisaka%20Yard,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}.`}
              className="inline-flex items-center gap-2 border border-walnut/25 text-walnut font-mono text-[13px] uppercase tracking-[0.15em] px-5 py-3.5 rounded-sm hover:border-brass hover:text-brass transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="tel:+254723360384"
              className="inline-flex items-center gap-2 border border-walnut/25 text-walnut font-mono text-[13px] uppercase tracking-[0.15em] px-5 py-3.5 rounded-sm hover:border-brass hover:text-brass transition-colors"
            >
              <Phone size={16} />
              Call
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
