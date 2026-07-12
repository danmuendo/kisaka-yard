export type Material = {
  name: string;
  unit: string;
  quantityOnHand: number;
  reorderThreshold: number;
  supplier: string;
};

export const materials: Material[] = [
  { name: "Mahogany planks (2x8, 3m)", unit: "planks", quantityOnHand: 42, reorderThreshold: 15, supplier: "Timber Yard Ltd" },
  { name: "Mvule planks (2x8, 3m)", unit: "planks", quantityOnHand: 12, reorderThreshold: 15, supplier: "Timber Yard Ltd" },
  { name: "Cedar planks (2x6, 3m)", unit: "planks", quantityOnHand: 19, reorderThreshold: 10, supplier: "Coastal Timber Co" },
  { name: "High-density foam (sheet)", unit: "sheets", quantityOnHand: 5, reorderThreshold: 8, supplier: "Foam & Fabric Supplies" },
  { name: "Upholstery fabric", unit: "meters", quantityOnHand: 34, reorderThreshold: 20, supplier: "Foam & Fabric Supplies" },
  { name: "Wood screws (box)", unit: "boxes", quantityOnHand: 12, reorderThreshold: 5, supplier: "Hardware Plus" },
  { name: "Wood glue", unit: "liters", quantityOnHand: 9, reorderThreshold: 4, supplier: "Hardware Plus" },
  { name: "Danish oil finish", unit: "liters", quantityOnHand: 2, reorderThreshold: 3, supplier: "Finishing Supplies Co" },
];

export type OrderStatus = "new" | "in_progress" | "ready" | "delivered";

export type Order = {
  id: string;
  customerName: string;
  phone: string;
  productName: string;
  status: OrderStatus;
  createdAt: string;
};

export const orders: Order[] = [
  { id: "ORD-1042", customerName: "Grace Wanjiru", phone: "0722 111 222", productName: "Mahogany Dining Table", status: "in_progress", createdAt: "2026-07-06" },
  { id: "ORD-1041", customerName: "Kevin Otieno", phone: "0733 444 555", productName: "Harbor 3-Seater Sofa Set", status: "new", createdAt: "2026-07-08" },
  { id: "ORD-1040", customerName: "Amina Hassan", phone: "0711 222 333", productName: "Workshop Sideboard", status: "ready", createdAt: "2026-07-02" },
  { id: "ORD-1039", customerName: "Peter Kamau", phone: "0700 999 888", productName: "Yard Console Bed Frame", status: "delivered", createdAt: "2026-06-28" },
  { id: "ORD-1038", customerName: "Faith Njeri", phone: "0755 222 111", productName: "Oakline Coffee Table", status: "delivered", createdAt: "2026-06-24" },
];
