import { createClient } from '@supabase/supabase-js';

// Supabase environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Server-side operations için

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

// Client-side ve server-side için Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side operations için service role key kullanan client (admin işlemleri için)
export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

// Helper function: Server-side için Supabase client döndürür
export function getSupabaseClient() {
  // Server-side'da service role key varsa onu kullan, yoksa anon key kullan
  if (supabaseServiceKey && supabaseAdmin) {
    return supabaseAdmin;
  }
  return supabase;
}

