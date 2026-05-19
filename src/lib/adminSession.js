import crypto from 'crypto';

function getSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD ||
    'ecommezzo-admin-fallback-secret'
  );
}

export function createAdminSession(username) {
  const expiresAt = Date.now() + 24 * 60 * 60 * 1000;
  const payload = JSON.stringify({ username, exp: expiresAt });
  const signature = crypto
    .createHmac('sha256', getSecret())
    .update(payload)
    .digest('base64url');
  const token = `${Buffer.from(payload).toString('base64url')}.${signature}`;

  return {
    token,
    expiresAt: new Date(expiresAt).toISOString(),
  };
}

export function verifyAdminSession(token) {
  if (!token || typeof token !== 'string') {
    return null;
  }

  const [payloadB64, signature] = token.split('.');
  if (!payloadB64 || !signature) {
    return null;
  }

  try {
    const payload = Buffer.from(payloadB64, 'base64url').toString('utf8');
    const expected = crypto
      .createHmac('sha256', getSecret())
      .update(payload)
      .digest('base64url');

    if (signature !== expected) {
      return null;
    }

    const data = JSON.parse(payload);
    if (!data.exp || Date.now() > data.exp) {
      return null;
    }

    return {
      username: data.username,
      expiresAt: new Date(data.exp).toISOString(),
    };
  } catch {
    return null;
  }
}

export function getAdminSessionFromRequest(request) {
  const headerToken = request.headers.get('x-admin-session');
  if (headerToken) {
    return verifyAdminSession(headerToken);
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    return verifyAdminSession(authHeader.slice(7));
  }

  return null;
}
