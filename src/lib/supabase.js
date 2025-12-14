import { createClient } from '@supabase/supabase-js';

// Lazy initialization - build zamanında hata vermemesi için
let supabaseClient = null;
let supabaseAdminClient = null;

function getSupabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

function getSupabaseAnonKey() {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
}

function getSupabaseServiceKey() {
  return process.env.SUPABASE_SERVICE_ROLE_KEY;
}

// Client-side ve server-side için Supabase client (lazy initialization)
export function getSupabase() {
  if (!supabaseClient) {
    const url = getSupabaseUrl();
    const key = getSupabaseAnonKey();
    
    if (!url || !key) {
      throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY');
    }
    
    supabaseClient = createClient(url, key);
  }
  return supabaseClient;
}

// Server-side operations için service role key kullanan client (admin işlemleri için)
export function getSupabaseAdmin() {
  const serviceKey = getSupabaseServiceKey();
  const url = getSupabaseUrl();
  
  if (!serviceKey || !url) {
    // Service key yoksa anon key ile client döndür
    return getSupabase();
  }
  
  if (!supabaseAdminClient) {
    supabaseAdminClient = createClient(url, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });
  }
  return supabaseAdminClient;
}

// Helper function: Server-side için Supabase client döndürür
export function getSupabaseClient() {
  // Server-side'da service role key varsa onu kullan, yoksa anon key kullan
  const serviceKey = getSupabaseServiceKey();
  if (serviceKey) {
    return getSupabaseAdmin();
  }
  return getSupabase();
}

