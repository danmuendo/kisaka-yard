"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("product") ?? "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    product_slug: preselected,
    customer_name: "",
    phone: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    if (!isSupabaseConfigured) {
      // Demo mode: no Supabase project connected yet.
      await new Promise((r) => setTimeout(r, 600));
      setStatus("sent");
      return;
    }

    const { error } = await supabase.from("quote_requests").insert([form]);
    setStatus(error ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-moss/30 bg-moss/5 rounded-sm p-8 text-center">
        <p className="font-display text-2xl mb-2">Request received.</p>
        <p className="text-walnut/70 font-mono text-sm">
          We will call or WhatsApp you within one business day to confirm details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Which piece?
        </label>
        <select
          value={form.product_slug}
          onChange={(e) => setForm({ ...form, product_slug: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 font-body focus:outline-none focus:border-brass"
        >
          <option value="">Something custom / not listed</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
            Your name
          </label>
          <input
            required
            value={form.customer_name}
            onChange={(e) => setForm({ ...form, customer_name: e.target.value })}
            className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass"
          />
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
            Phone
          </label>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="07xx xxx xxx"
            className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Email (optional)
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass"
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Details — dimensions, wood, colour, deadline
        </label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass resize-none"
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-[12px] text-rust">
          Something went wrong sending that — please try again or call us directly.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending…" : "Send request"}
        </button>
        <a
          href="https://wa.me/254723360384"
          className="border border-strong text-walnut font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:border-brass hover:text-brass transition-colors"
        >
          WhatsApp instead
        </a>
      </div>

      {!isSupabaseConfigured && (
        <p className="font-mono text-[11px] text-walnut/40">
          Demo mode — connect Supabase to start receiving real requests (see README).
        </p>
      )}
    </form>
  );
}
