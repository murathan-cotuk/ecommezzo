import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { getSupabaseClient } from './supabase';

const BLOB_PATHNAME = 'newsletter_subscribers.json';
const BUNDLED_DATA_FILE = path.join(process.cwd(), 'data', 'newsletter_subscribers.json');

function getDataFilePath() {
  if (process.env.VERCEL) {
    return path.join('/tmp', 'newsletter_subscribers.json');
  }
  return path.join(process.cwd(), 'data', 'newsletter_subscribers.json');
}

function hasBlobStorage() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

let supabaseReachableCache = null;
let supabaseReachableCheckedAt = 0;
const REACHABILITY_TTL_MS = 60_000;

function generateUnsubscribeToken(email) {
  return crypto
    .createHash('sha256')
    .update(`${email}${Date.now()}`)
    .digest('hex')
    .substring(0, 32);
}

function toDbSubscriber(record) {
  return {
    email: record.email,
    name: record.name || '',
    source: record.source || 'contact_form',
    status: record.status || 'active',
    subscribed_at: record.subscribed_at || record.subscribedAt || new Date().toISOString(),
    unsubscribed_at: record.unsubscribed_at || record.unsubscribedAt || null,
    unsubscribe_token: record.unsubscribe_token || record.unsubscribeToken || null,
  };
}

function fromDbSubscriber(record) {
  return {
    email: record.email,
    name: record.name || '',
    source: record.source || 'contact_form',
    status: record.status || 'active',
    subscribed_at: record.subscribed_at || record.subscribedAt,
    subscribedAt: record.subscribed_at || record.subscribedAt,
    unsubscribed_at: record.unsubscribed_at || record.unsubscribedAt || null,
    unsubscribedAt: record.unsubscribed_at || record.unsubscribedAt || null,
    unsubscribe_token: record.unsubscribe_token || record.unsubscribeToken || null,
  };
}

async function isSupabaseReachable() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  if (!url || !key) {
    return false;
  }

  const now = Date.now();
  if (
    supabaseReachableCache !== null &&
    now - supabaseReachableCheckedAt < REACHABILITY_TTL_MS
  ) {
    return supabaseReachableCache;
  }

  try {
    const hostname = new URL(url).hostname;
    if (!hostname.endsWith('.supabase.co')) {
      supabaseReachableCache = false;
    } else {
      const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/`, {
        method: 'HEAD',
        headers: { apikey: key },
        signal: AbortSignal.timeout(1500),
      });
      supabaseReachableCache = response.status < 500;
    }
  } catch {
    supabaseReachableCache = false;
  }

  supabaseReachableCheckedAt = now;
  return supabaseReachableCache;
}

function serializeSubscribers(subscribers) {
  return subscribers.map((sub) => ({
    email: sub.email,
    name: sub.name || '',
    source: sub.source || 'contact_form',
    status: sub.status || 'active',
    subscribedAt: sub.subscribed_at || sub.subscribedAt,
    unsubscribedAt: sub.unsubscribed_at || sub.unsubscribedAt || null,
    unsubscribeToken: sub.unsubscribe_token || sub.unsubscribeToken || null,
  }));
}

function mergeSubscribers(...lists) {
  const byEmail = new Map();

  for (const list of lists) {
    for (const sub of list) {
      if (!sub?.email) continue;
      const email = sub.email.toLowerCase().trim();
      const existing = byEmail.get(email);
      const next = fromDbSubscriber(sub);

      if (!existing) {
        byEmail.set(email, next);
        continue;
      }

      const existingDate = new Date(
        existing.subscribed_at || existing.subscribedAt || 0
      ).getTime();
      const nextDate = new Date(
        next.subscribed_at || next.subscribedAt || 0
      ).getTime();

      if (nextDate >= existingDate) {
        byEmail.set(email, { ...existing, ...next, email });
      }
    }
  }

  return Array.from(byEmail.values());
}

async function readBlobSubscribers() {
  if (!hasBlobStorage()) {
    return [];
  }

  try {
    const { list } = await import('@vercel/blob');
    const { blobs } = await list({ prefix: BLOB_PATHNAME, limit: 1 });
    if (!blobs.length) {
      return [];
    }

    const response = await fetch(blobs[0].url);
    if (!response.ok) {
      return [];
    }

    const parsed = await response.json();
    return Array.isArray(parsed) ? parsed.map(fromDbSubscriber) : [];
  } catch (error) {
    console.warn('Blob newsletter read failed:', error.message);
    return [];
  }
}

async function writeBlobSubscribers(subscribers) {
  if (!hasBlobStorage()) {
    return false;
  }

  try {
    const { put } = await import('@vercel/blob');
    await put(BLOB_PATHNAME, JSON.stringify(serializeSubscribers(subscribers), null, 2), {
      access: 'private',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'application/json',
    });
    return true;
  } catch (error) {
    console.warn('Blob newsletter write failed:', error.message);
    return false;
  }
}

async function readBundledSubscribers() {
  try {
    const raw = await fs.readFile(BUNDLED_DATA_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(fromDbSubscriber) : [];
  } catch {
    return [];
  }
}

async function readLocalFileSubscribers() {
  const dataFile = getDataFilePath();

  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(fromDbSubscriber) : [];
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
    return [];
  }
}

async function readFileSubscribers() {
  const [blob, local, bundled] = await Promise.all([
    readBlobSubscribers(),
    readLocalFileSubscribers(),
    readBundledSubscribers(),
  ]);

  return mergeSubscribers(blob, local, bundled);
}

async function writeFileSubscribers(subscribers) {
  const payload = serializeSubscribers(subscribers);
  const dataFile = getDataFilePath();

  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(payload, null, 2), 'utf8');
  await writeBlobSubscribers(subscribers);

  if (!process.env.VERCEL) {
    await fs.writeFile(BUNDLED_DATA_FILE, JSON.stringify(payload, null, 2), 'utf8');
  }
}

async function subscribeWithFile({ email, name, source }) {
  const normalizedEmail = email.toLowerCase().trim();
  const subscribers = await readFileSubscribers();
  const existing = subscribers.find((sub) => sub.email === normalizedEmail);

  if (existing?.status === 'active') {
    return {
      ok: false,
      status: 409,
      message: 'Diese E-Mail-Adresse ist bereits angemeldet',
    };
  }

  const now = new Date().toISOString();

  if (existing) {
    existing.status = 'active';
    existing.name = name?.trim() || existing.name || '';
    existing.source = source;
    existing.subscribed_at = now;
    existing.subscribedAt = now;
    existing.unsubscribed_at = null;
    existing.unsubscribedAt = null;
  } else {
    subscribers.push(
      fromDbSubscriber({
        email: normalizedEmail,
        name: name?.trim() || '',
        source,
        status: 'active',
        subscribed_at: now,
        unsubscribe_token: generateUnsubscribeToken(normalizedEmail),
      })
    );
  }

  await writeFileSubscribers(subscribers);

  return {
    ok: true,
    subscriber: {
      email: normalizedEmail,
      subscribedAt: now,
    },
  };
}

async function subscribeWithSupabase({ email, name, source }) {
  const supabase = getSupabaseClient();
  const normalizedEmail = email.toLowerCase().trim();

  const { data: existingSubscriber, error: fetchError } = await supabase
    .from('newsletter_subscribers')
    .select('*')
    .eq('email', normalizedEmail)
    .maybeSingle();

  if (fetchError) {
    throw fetchError;
  }

  if (existingSubscriber) {
    if (existingSubscriber.status === 'active') {
      return {
        ok: false,
        status: 409,
        message: 'Diese E-Mail-Adresse ist bereits angemeldet',
      };
    }

    const { error: updateError } = await supabase
      .from('newsletter_subscribers')
      .update({
        status: 'active',
        subscribed_at: new Date().toISOString(),
        source,
        name: name?.trim() || existingSubscriber.name || '',
        unsubscribed_at: null,
      })
      .eq('email', normalizedEmail);

    if (updateError) {
      throw updateError;
    }

    return {
      ok: true,
      subscriber: {
        email: normalizedEmail,
        subscribedAt: new Date().toISOString(),
      },
    };
  }

  const subscriber = toDbSubscriber({
    email: normalizedEmail,
    name: name?.trim() || '',
    source,
    subscribed_at: new Date().toISOString(),
    status: 'active',
    unsubscribe_token: generateUnsubscribeToken(normalizedEmail),
  });

  const { data: newSubscriber, error: insertError } = await supabase
    .from('newsletter_subscribers')
    .insert(subscriber)
    .select()
    .single();

  if (insertError) {
    if (insertError.code === '23505') {
      return {
        ok: false,
        status: 409,
        message: 'Diese E-Mail-Adresse ist bereits angemeldet',
      };
    }
    throw insertError;
  }

  return {
    ok: true,
    subscriber: {
      email: newSubscriber.email,
      subscribedAt: newSubscriber.subscribed_at,
    },
  };
}

export async function subscribeToNewsletter({ email, name, source }) {
  const useSupabase = await isSupabaseReachable();

  if (useSupabase) {
    try {
      return await subscribeWithSupabase({ email, name, source });
    } catch (error) {
      console.warn('Supabase newsletter subscribe failed, using file storage:', error.message);
    }
  }

  return subscribeWithFile({ email, name, source });
}

export async function unsubscribeFromNewsletter({ email, token }) {
  const normalizedEmail = email.toLowerCase().trim();
  const useSupabase = await isSupabaseReachable();

  if (useSupabase) {
    try {
      const supabase = getSupabaseClient();
      const { data: subscriber, error: fetchError } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', normalizedEmail)
        .maybeSingle();

      if (fetchError) {
        throw fetchError;
      }

      if (!subscriber) {
        return { ok: false, status: 404, message: 'E-Mail-Adresse nicht gefunden' };
      }

      if (token && subscriber.unsubscribe_token !== token) {
        return { ok: false, status: 401, message: 'Ungültiger Token' };
      }

      const { error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString(),
        })
        .eq('email', normalizedEmail);

      if (updateError) {
        throw updateError;
      }

      return { ok: true };
    } catch (error) {
      console.warn('Supabase newsletter unsubscribe failed, using file storage:', error.message);
    }
  }

  const subscribers = await readFileSubscribers();
  const subscriber = subscribers.find((sub) => sub.email === normalizedEmail);

  if (!subscriber) {
    return { ok: false, status: 404, message: 'E-Mail-Adresse nicht gefunden' };
  }

  if (token && subscriber.unsubscribe_token !== token) {
    return { ok: false, status: 401, message: 'Ungültiger Token' };
  }

  subscriber.status = 'unsubscribed';
  const now = new Date().toISOString();
  subscriber.unsubscribed_at = now;
  subscriber.unsubscribedAt = now;
  await writeFileSubscribers(subscribers);

  return { ok: true };
}

function filterSubscribers(subscribers, { status, source }) {
  let filtered = subscribers;

  if (status !== 'all') {
    filtered = filtered.filter((sub) => sub.status === status);
  }
  if (source !== 'all') {
    filtered = filtered.filter((sub) => sub.source === source);
  }

  return filtered.sort(
    (a, b) =>
      new Date(b.subscribed_at || b.subscribedAt).getTime() -
      new Date(a.subscribed_at || a.subscribedAt).getTime()
  );
}

export async function listNewsletterSubscribers({ status = 'all', source = 'all' } = {}) {
  try {
    const useSupabase = await isSupabaseReachable();

    if (useSupabase) {
      try {
        const supabase = getSupabaseClient();
        let query = supabase.from('newsletter_subscribers').select('*');

        if (status !== 'all') {
          query = query.eq('status', status);
        }
        if (source !== 'all') {
          query = query.eq('source', source);
        }

        const { data, error } = await query.order('subscribed_at', { ascending: false });
        if (!error && data?.length) {
          return (data || []).map(fromDbSubscriber);
        }
      } catch (error) {
        console.warn('Supabase newsletter list failed, using file storage:', error.message);
      }
    }

    const subscribers = await readFileSubscribers();
    return filterSubscribers(subscribers, { status, source });
  } catch (error) {
    console.error('listNewsletterSubscribers error:', error);
    return [];
  }
}
