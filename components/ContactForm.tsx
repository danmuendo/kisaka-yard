"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-moss/30 bg-moss/5 rounded-sm p-8 text-center">
        <p className="font-display text-2xl mb-2">Message sent.</p>
        <p className="text-walnut/70 font-mono text-sm">
          We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
            Name
          </label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
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
            className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Email
        </label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass"
        />
      </div>

      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Service interested in
        </label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 font-body focus:outline-none focus:border-brass"
        >
          <option value="">Select a service</option>
          <option value="Custom Furniture">Custom Furniture</option>
          <option value="Decks & Outdoor">Decks & Outdoor</option>
          <option value="Framing & Construction">Framing & Construction</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-[11px] uppercase tracking-[0.15em] text-muted mb-1.5">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-strong bg-transparent rounded-sm px-3 py-2.5 focus:outline-none focus:border-brass resize-none"
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-[12px] text-rust">
          Something went wrong — please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-walnut text-sawdust font-mono text-[13px] uppercase tracking-[0.15em] px-6 py-3.5 rounded-sm hover:bg-charcoal transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
