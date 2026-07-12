import { createClient } from "@supabase/supabase-js";

// These come from your Supabase project settings (Project Settings > API).
// Create a .env.local file (see .env.local.example) with:
//   NEXT_PUBLIC_SUPABASE_URL=...
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// During local/demo use without Supabase configured yet, this client is
// created but calls will simply fail gracefully — the site falls back to
// mock data in lib/data.ts so the catalog still works out of the box.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);
