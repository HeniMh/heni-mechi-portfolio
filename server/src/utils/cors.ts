import { env } from './env.js';

const RENDER_ORIGIN = 'https://heni-mechi-portfolio.onrender.com';

/** protocol + host only (ignores trailing slashes and paths) */
export function normalizeOrigin(value: string): string {
  try {
    const url = new URL(value.trim());
    return `${url.protocol}//${url.host}`;
  } catch {
    return value.trim().replace(/\/+$/, '');
  }
}

function buildAllowedOrigins(): Set<string> {
  const origins = new Set<string>();
  const add = (value?: string) => {
    if (!value?.trim()) return;
    origins.add(normalizeOrigin(value));
  };

  add(env.clientUrl);
  add(RENDER_ORIGIN);
  add('http://localhost:5173');
  add('http://127.0.0.1:5173');

  for (const part of (process.env.ALLOWED_ORIGINS || '').split(',')) {
    add(part);
  }

  return origins;
}

const allowedOrigins = buildAllowedOrigins();

const devPorts = new Set(['5173', '4173', '3000']);

function isPrivateNetworkHost(hostname: string) {
  return (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    /^192\.168\.\d{1,3}\.\d{1,3}$/.test(hostname) ||
    /^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}$/.test(hostname)
  );
}

function isVercelHost(hostname: string) {
  return hostname === 'vercel.app' || hostname.endsWith('.vercel.app');
}

export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return true;

  if (allowedOrigins.has(normalizeOrigin(origin))) return true;

  try {
    const { hostname } = new URL(origin);
    if (isVercelHost(hostname)) return true;
  } catch {
    return false;
  }

  if (process.env.NODE_ENV !== 'production') {
    try {
      const { hostname, port } = new URL(origin);
      if (!isPrivateNetworkHost(hostname)) return false;
      return !port || devPorts.has(port);
    } catch {
      return false;
    }
  }

  return false;
}
