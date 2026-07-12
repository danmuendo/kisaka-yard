import { AdminDashboard } from "@/components/AdminDashboard";

export default function AdminPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <p className="font-mono text-[12px] uppercase tracking-[0.25em] text-brass mb-3">
        Yard Dashboard
      </p>
      <h1 className="font-display text-4xl tracking-tight mb-2">
        Orders &amp; inventory
      </h1>
      <p className="text-walnut/70 mb-10">
        Sample data shown below. Connect Supabase and add login to see live
        orders and stock levels here — see README for setup.
      </p>
      <AdminDashboard />
    </main>
  );
}
