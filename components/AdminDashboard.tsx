"use client";

import { useState } from "react";
import { materials, orders, type OrderStatus } from "@/lib/adminData";
import { DimDivider } from "@/components/DimDivider";

const statusStyles: Record<OrderStatus, string> = {
  new: "bg-brass/15 text-walnut",
  in_progress: "bg-moss/15 text-moss",
  ready: "bg-rust/15 text-rust",
  delivered: "bg-walnut/10 text-walnut/50",
};

const statusLabels: Record<OrderStatus, string> = {
  new: "New",
  in_progress: "In progress",
  ready: "Ready",
  delivered: "Delivered",
};

export function AdminDashboard() {
  const [tab, setTab] = useState<"inventory" | "orders">("orders");

  const lowStock = materials.filter((m) => m.quantityOnHand <= m.reorderThreshold);

  return (
    <div>
      {lowStock.length > 0 && (
        <div className="border border-rust/30 bg-rust/5 rounded-sm px-5 py-4 mb-8 font-mono text-[13px]">
          <p className="text-rust mb-1">
            {lowStock.length} material{lowStock.length > 1 ? "s" : ""} at or below reorder level
          </p>
          <p className="text-walnut/70">
            {lowStock.map((m) => m.name).join(" · ")}
          </p>
        </div>
      )}

      <div className="flex gap-2 mb-8">
        {(["orders", "inventory"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`font-mono text-[12px] uppercase tracking-[0.15em] px-4 py-2 rounded-sm border transition-colors ${
              tab === t
                ? "bg-walnut text-sawdust border-walnut"
                : "border-walnut/30 text-walnut hover:border-walnut"
            }`}
          >
            {t === "orders" ? "Orders & Quotes" : "Materials Inventory"}
          </button>
        ))}
      </div>

      {tab === "orders" ? (
        <div className="border border-walnut/15 rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-charcoal text-sawdust font-mono text-[11px] uppercase tracking-[0.1em]">
              <tr>
                <th className="text-left px-4 py-3">Order</th>
                <th className="text-left px-4 py-3">Customer</th>
                <th className="text-left px-4 py-3">Piece</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <tr
                  key={o.id}
                  className={i % 2 ? "bg-sawdust-2/30" : "bg-transparent"}
                >
                  <td className="px-4 py-3 font-mono text-[12px] text-walnut/60">{o.id}</td>
                  <td className="px-4 py-3">
                    {o.customerName}
                    <div className="font-mono text-[11px] text-walnut/50">{o.phone}</div>
                  </td>
                  <td className="px-4 py-3">{o.productName}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-[0.1em] px-2 py-1 rounded-sm ${statusStyles[o.status]}`}
                    >
                      {statusLabels[o.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px] text-walnut/50">
                    {o.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="border border-walnut/15 rounded-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-charcoal text-sawdust font-mono text-[11px] uppercase tracking-[0.1em]">
              <tr>
                <th className="text-left px-4 py-3">Material</th>
                <th className="text-left px-4 py-3">On hand</th>
                <th className="text-left px-4 py-3">Reorder at</th>
                <th className="text-left px-4 py-3">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m, i) => {
                const low = m.quantityOnHand <= m.reorderThreshold;
                return (
                  <tr key={m.name} className={i % 2 ? "bg-sawdust-2/30" : "bg-transparent"}>
                    <td className="px-4 py-3">{m.name}</td>
                    <td className={`px-4 py-3 font-mono ${low ? "text-rust" : "text-walnut"}`}>
                      {m.quantityOnHand} {m.unit}
                    </td>
                    <td className="px-4 py-3 font-mono text-walnut/50">
                      {m.reorderThreshold} {m.unit}
                    </td>
                    <td className="px-4 py-3 text-walnut/70">{m.supplier}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-10">
        <DimDivider label="Connected to Supabase — see README to go live" />
      </div>
    </div>
  );
}
