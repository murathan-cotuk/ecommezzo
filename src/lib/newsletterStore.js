import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { getSupabaseClient } from './supabase';

const BLOB_PATHNAME = 'data/newsletter_subscribers.json';
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
    record_type: record.record_type || record.recordType || 'newsletter',
    subscribed_at: record.subscribed_at || record.subscribedAt,
    subscribedAt: record.subscribed_at || record.subscribedAt,
    unsubscribed_at: record.unsubscribed_at || record.unsubscribedAt || null,
    unsubscribedAt: record.unsubscribed_at || record.unsubscribedAt || null,
    unsubscribe_token: record.unsubscribe_token || record.unsubscribeToken || null,
    phone: record.phone || '',
    company: record.company || '',
    message: record.message || '',
    project_type: record.project_type || record.projectType || '',
    budget: record.budget || '',
    timeline: record.timeline || '',
    newsletter_opt_in: Boolean(record.newsletter_opt_in ?? record.newsletterOptIn),
  };
}

async function getStorageBackend() {
  if (hasBlobStorage()) {
    return 'blob';
  }
  if (await isSupabaseReachable()) {
    return 'supabase';
  }
  return 'file';
}

export function getStorageInfo() {
  if (hasBlobStorage()) {
    return { backend: 'blob', persistent: true };
  }
  if (process.env.VERCEL) {
    return { backend: 'ephemeral', persistent: false };
  }
  return { backend: 'file', persistent: true };
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
    recordType: sub.record_type || sub.recordType || 'newsletter',
    subscribedAt: sub.subscribed_at || sub.subscribedAt,
    unsubscribedAt: sub.unsubscribed_at || sub.unsubscribedAt || null,
    unsubscribeToken: sub.unsubscribe_token || sub.unsubscribeToken || null,
    phone: sub.phone || '',
    company: sub.company || '',
    message: sub.message || '',
    projectType: sub.project_type || sub.projectType || '',
    budget: sub.budget || '',
    timeline: sub.timeline || '',
    newsletterOptIn: Boolean(sub.newsletter_opt_in ?? sub.newsletterOptIn),
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

function getBlobToken() {
  return process.env.BLOB_READ_WRITE_TOKEN;
}

async function readBlobSubscribers() {
  const token = getBlobToken();
  if (!token) {
    return [];
  }

  try {
    const { head } = await import('@vercel/blob');
    const blob = await head(BLOB_PATHNAME, { token });
    const response = await fetch(blob.url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      return [];
    }

    const parsed = await response.json();
    return Array.isArray(parsed) ? parsed.map(fromDbSubscriber) : [];
  } catch (error) {
    if (error?.message?.includes('not found') || error?.status === 404) {
      return [];
    }
    console.warn('Blob newsletter read failed:', error.message);
    return [];
  }
}

async function writeBlobSubscribers(subscribers) {
  const token = getBlobToken();
  if (!token) {
    return false;
  }

  try {
    const { put } = await import('@vercel/blob');
    await put(BLOB_PATHNAME, JSON.stringify(serializeSubscribers(subscribers), null, 2), {
      access: 'private',
      token,
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

async function seedBlobFromBundledIfEmpty() {
  if (!hasBlobStorage()) {
    return;
  }

  const blobData = await readBlobSubscribers();
  if (blobData.length > 0) {
    return;
  }

  const bundled = await readBundledSubscribers();
  if (bundled.length > 0) {
    await writeBlobSubscribers(bundled);
  }
}

async function readFileSubscribers() {
  await seedBlobFromBundledIfEmpty();

  const [blob, local, bundled] = await Promise.all([
    readBlobSubscribers(),
    readLocalFileSubscribers(),
    readBundledSubscribers(),
  ]);

  return mergeSubscribers(blob, local, bundled);
}

async function writeAllSubscribers(subscribers) {
  const backend = await getStorageBackend();

  if (backend === 'blob') {
    const written = await writeBlobSubscribers(subscribers);
    if (written) {
      return;
    }
  }

  if (backend === 'supabase') {
    try {
      await syncSubscribersToSupabase(subscribers);
      return;
    } catch (error) {
      console.warn('Supabase sync failed, using file storage:', error.message);
    }
  }

  const payload = serializeSubscribers(subscribers);
  const dataFile = getDataFilePath();
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(payload, null, 2), 'utf8');

  if (backend !== 'blob') {
    await writeBlobSubscribers(subscribers);
  }

  if (!process.env.VERCEL) {
    await fs.writeFile(BUNDLED_DATA_FILE, JSON.stringify(payload, null, 2), 'utf8');
  }
}

async function syncSubscribersToSupabase(subscribers) {
  const supabase = getSupabaseClient();
  for (const sub of subscribers) {
    const row = toDbSubscriber(sub);
    const { error } = await supabase.from('newsletter_subscribers').upsert(
      {
        email: row.email,
        name: row.name,
        source: row.source,
        status: row.status,
        subscribed_at: row.subscribed_at,
        unsubscribed_at: row.unsubscribed_at,
        unsubscribe_token: row.unsubscribe_token,
      },
      { onConflict: 'email' }
    );
    if (error) {
      throw error;
    }
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
        record_type: 'newsletter',
        subscribed_at: now,
        unsubscribe_token: generateUnsubscribeToken(normalizedEmail),
      })
    );
  }

  await writeAllSubscribers(subscribers);

  return {
    ok: true,
    subscriber: {
      email: normalizedEmail,
      subscribedAt: now,
    },
  };
}

export async function saveContactLead(formData) {
  const normalizedEmail = formData.email?.toLowerCase().trim();
  if (!normalizedEmail) {
    return { ok: false, status: 400, message: 'E-Mail ist erforderlich' };
  }

  const subscribers = await readFileSubscribers();
  const existing = subscribers.find((sub) => sub.email === normalizedEmail);
  const now = new Date().toISOString();

  const projectType = Array.isArray(formData.projectType)
    ? formData.projectType.join(', ')
    : formData.projectType || '';
  const budget = Array.isArray(formData.budget)
    ? formData.budget.join(', ')
    : formData.budget || '';
  const timeline = Array.isArray(formData.timeline)
    ? formData.timeline.join(', ')
    : formData.timeline || '';

  const lead = fromDbSubscriber({
    email: normalizedEmail,
    name: formData.name?.trim() || '',
    source: 'contact_form',
    status: 'active',
    record_type: 'contact',
    subscribed_at: existing?.subscribed_at || existing?.subscribedAt || now,
    phone: formData.phone || '',
    company: formData.company || '',
    message: formData.message || '',
    project_type: projectType,
    budget,
    timeline,
    newsletter_opt_in: Boolean(
      formData.newsletterOptIn ?? formData.newsletterSubscription
    ),
    unsubscribe_token:
      existing?.unsubscribe_token ||
      existing?.unsubscribeToken ||
      generateUnsubscribeToken(normalizedEmail),
  });

  if (existing) {
    Object.assign(existing, lead);
  } else {
    subscribers.push(lead);
  }

  await writeAllSubscribers(subscribers);

  if (lead.newsletter_opt_in) {
    await subscribeToNewsletter({
      email: normalizedEmail,
      name: formData.name,
      source: 'contact_form',
    });
  }

  return { ok: true };
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
  const backend = await getStorageBackend();

  if (backend === 'supabase') {
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
  await writeAllSubscribers(subscribers);

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
    const backend = await getStorageBackend();

    if (backend === 'supabase') {
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
          const fileSubs = await readFileSubscribers();
          return filterSubscribers(
            mergeSubscribers((data || []).map(fromDbSubscriber), fileSubs),
            { status, source }
          );
        }
      } catch (error) {
        console.warn('Supabase newsletter list failed, using file storage:', error.message);
      }
    }

    const subscribers = await readFileSubscribers();

    if (backend === 'blob' && subscribers.length > 0) {
      return filterSubscribers(subscribers, { status, source });
    }

    return filterSubscribers(subscribers, { status, source });
  } catch (error) {
    console.error('listNewsletterSubscribers error:', error);
    return [];
  }
}
