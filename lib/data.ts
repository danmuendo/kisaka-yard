export type Product = {
  slug: string;
  name: string;
  category: "Tables" | "Sofa Sets" | "Beds" | "Storage";
  price: number;
  wood: string;
  width: number; // cm
  depth: number; // cm
  height: number; // cm
  leadTimeDays: number;
  inStock: number;
  description: string;
  image: string;
  photo?: string;
};

export const products: Product[] = [
  {
    slug: "mahogany-dining-table",
    name: "Mahogany Dining Table",
    category: "Tables",
    price: 45000,
    wood: "Mahogany",
    width: 180,
    depth: 90,
    height: 76,
    leadTimeDays: 14,
    inStock: 2,
    description:
      "Solid mahogany dining table seating six, with a hand-rubbed oil finish that deepens the grain over time. Mortise-and-tenon joinery throughout — no screws in sight.",
    image: "table",
    photo: "/products/Mahogany Dining Table.jpg",
  },
  {
    slug: "oakline-coffee-table",
    name: "Oakline Coffee Table",
    category: "Tables",
    price: 14500,
    wood: "Mvule",
    width: 110,
    depth: 55,
    height: 42,
    leadTimeDays: 7,
    inStock: 5,
    description:
      "Low, wide coffee table in mvule with a live-edge front rail. Built to take a tray, a stack of books, and propped-up feet in equal measure.",
    image: "coffee-table",
    photo: "/products/Oakline Coffee Table.jpg",
  },
  {
    slug: "harbor-3-seater-sofa",
    name: "Harbor 3-Seater Sofa Set",
    category: "Sofa Sets",
    price: 68000,
    wood: "Cypress frame",
    width: 210,
    depth: 90,
    height: 85,
    leadTimeDays: 21,
    inStock: 1,
    description:
      "Kiln-dried cypress frame set on a high-density foam and webbed-spring base. Comes as a 3+2+1 set, upholstery fabric chosen at order time.",
    image: "sofa",
    photo: "/products/Harbor 3-Seater Sofa Set.jpg",
  },
  {
    slug: "yard-console-bed",
    name: "Yard Console Bed Frame",
    category: "Beds",
    price: 38000,
    wood: "Cedar",
    width: 160,
    depth: 200,
    height: 100,
    leadTimeDays: 18,
    inStock: 3,
    description:
      "Queen-size cedar bed frame with an integrated slatted headboard and under-bed clearance built for storage bins.",
    image: "bed",
    photo: "/products/Yard Console Bed Frame.jpg",
  },
  {
    slug: "workshop-sideboard",
    name: "Workshop Sideboard",
    category: "Storage",
    price: 29500,
    wood: "Mahogany",
    width: 150,
    depth: 45,
    height: 80,
    leadTimeDays: 12,
    inStock: 4,
    description:
      "Three-door sideboard with adjustable interior shelving and brass sled handles. Finished to match the dining line.",
    image: "sideboard",
    photo: "/products/Workshop Sideboard.jpg",
  },
  {
    slug: "bench-run-dining",
    name: "Bench Run Dining Bench",
    category: "Tables",
    price: 12000,
    wood: "Mvule",
    width: 150,
    depth: 35,
    height: 45,
    leadTimeDays: 7,
    inStock: 6,
    description:
      "A companion bench for the dining line, or a stand-alone entryway seat. Same joinery, same finish, half the wait.",
    image: "bench",
    photo: "/products/Bench Run Dining Bench.png",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const categories = ["All", "Tables", "Sofa Sets", "Beds", "Storage"] as const;
