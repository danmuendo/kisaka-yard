-- Run this in the Supabase SQL editor (Project > SQL Editor > New query)
-- to set up the tables the site and admin dashboard expect.

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('Tables', 'Sofa Sets', 'Beds', 'Storage')),
  price numeric(10, 2) not null,
  wood text not null,
  width_cm numeric(6, 1) not null,
  depth_cm numeric(6, 1) not null,
  height_cm numeric(6, 1) not null,
  lead_time_days int not null default 14,
  in_stock int not null default 0,
  description text,
  image_url text,
  created_at timestamptz not null default now()
);

-- Raw materials used to build products (wood stock, foam, fabric, hardware, etc.)
create table if not exists materials (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  unit text not null default 'pcs', -- e.g. 'planks', 'meters', 'liters', 'pcs'
  quantity_on_hand numeric(10, 2) not null default 0,
  reorder_threshold numeric(10, 2) not null default 0,
  supplier text,
  updated_at timestamptz not null default now()
);

-- Customer quote / order requests submitted from the site
create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  product_slug text references products(slug),
  customer_name text not null,
  phone text not null,
  email text,
  message text,
  status text not null default 'new' check (status in ('new', 'in_progress', 'ready', 'delivered', 'cancelled')),
  created_at timestamptz not null default now()
);

-- Enable Row Level Security. Public site can read products, but only
-- authenticated (admin) users can read/write materials and orders.
alter table products enable row level security;
alter table materials enable row level security;
alter table quote_requests enable row level security;

create policy "Public can view products" on products
  for select using (true);

create policy "Anyone can submit a quote request" on quote_requests
  for insert with check (true);

create policy "Only authenticated users manage materials" on materials
  for all using (auth.role() = 'authenticated');

create policy "Only authenticated users manage products" on products
  for insert with check (auth.role() = 'authenticated');
create policy "Only authenticated users update products" on products
  for update using (auth.role() = 'authenticated');
create policy "Only authenticated users delete products" on products
  for delete using (auth.role() = 'authenticated');

create policy "Only authenticated users view quote requests" on quote_requests
  for select using (auth.role() = 'authenticated');
create policy "Only authenticated users update quote requests" on quote_requests
  for update using (auth.role() = 'authenticated');

-- Seed data matching lib/data.ts, so the live site and the demo look the same
insert into products (slug, name, category, price, wood, width_cm, depth_cm, height_cm, lead_time_days, in_stock, description)
values
  ('mahogany-dining-table', 'Mahogany Dining Table', 'Tables', 45000, 'Mahogany', 180, 90, 76, 14, 2, 'Solid mahogany dining table seating six, hand-rubbed oil finish, mortise-and-tenon joinery.'),
  ('oakline-coffee-table', 'Oakline Coffee Table', 'Tables', 14500, 'Mvule', 110, 55, 42, 7, 5, 'Low, wide coffee table in mvule with a live-edge front rail.'),
  ('harbor-3-seater-sofa', 'Harbor 3-Seater Sofa Set', 'Sofa Sets', 68000, 'Cypress frame', 210, 90, 85, 21, 1, 'Kiln-dried cypress frame, 3+2+1 set, upholstery chosen at order time.'),
  ('yard-console-bed', 'Yard Console Bed Frame', 'Beds', 38000, 'Cedar', 160, 200, 100, 18, 3, 'Queen-size cedar bed frame with integrated slatted headboard.'),
  ('workshop-sideboard', 'Workshop Sideboard', 'Storage', 29500, 'Mahogany', 150, 45, 80, 12, 4, 'Three-door sideboard with adjustable shelving and brass sled handles.'),
  ('bench-run-dining', 'Bench Run Dining Bench', 'Tables', 12000, 'Mvule', 150, 35, 45, 7, 6, 'Companion bench for the dining line.')
on conflict (slug) do nothing;

insert into materials (name, unit, quantity_on_hand, reorder_threshold, supplier)
values
  ('Mahogany planks (2x8, 3m)', 'planks', 42, 15, 'Timber Yard Ltd'),
  ('Mvule planks (2x8, 3m)', 'planks', 28, 15, 'Timber Yard Ltd'),
  ('Cedar planks (2x6, 3m)', 'planks', 19, 10, 'Coastal Timber Co'),
  ('High-density foam (sheet)', 'sheets', 6, 8, 'Foam & Fabric Supplies'),
  ('Upholstery fabric', 'meters', 34, 20, 'Foam & Fabric Supplies'),
  ('Wood screws (box)', 'boxes', 12, 5, 'Hardware Plus'),
  ('Wood glue', 'liters', 9, 4, 'Hardware Plus'),
  ('Danish oil finish', 'liters', 5, 3, 'Finishing Supplies Co')
on conflict do nothing;
