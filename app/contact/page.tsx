import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Isabera Yard",
  description:
    "Get in touch for quotes, questions, or project advice.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-4">
            Reach us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl tracking-tight mb-5">
            Contact
          </h1>
          <p className="text-body leading-relaxed mb-8">
            Tell us about your project and we’ll get back to you within one
            business day. For urgent jobs, call or WhatsApp directly.
          </p>

          <div className="space-y-3 text-sm">
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted block mb-1">
                Phone
              </span>
              <a href="tel:+254700000000" className="text-body hover:text-brass transition-colors">
                +254 700 000 000
              </a>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted block mb-1">
                WhatsApp
              </span>
              <a
                href="https://wa.me/254700000000"
                className="text-body hover:text-brass transition-colors"
              >
                +254 700 000 000
              </a>
            </p>
            <p>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted block mb-1">
                Email
              </span>
              <a
                href="mailto:hello@isaberayard.co.ke"
                className="text-body hover:text-brass transition-colors"
              >
                hello@isaberayard.co.ke
              </a>
            </p>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
