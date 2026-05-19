import { env } from './env.js';

const RENDER_ORIGIN = 'https://heni-mechi-portfolio.onrender.com';
const SITE_ORIGINS = [
  'https://henimechi.com',
  'https://www.henimechi.com',
  'http://henimechi.com',
  'http://www.henimechi.com'
];

/** protocol + host only (ignores trailing slashes and paths) */
export function normalizeOrigin(value: string): string {
  try {
    const url = new URL(value.trim());
    return `${url.protocol}//${url.host}`;
  } catch {
    return value.trim().replace(/\/+$/, '');
  }
}

function addOrigin(origins: Set<string>, value?: string) {
  if (!value?.trim()) return;
  const normalized = normalizeOrigin(value);
  origins.add(normalized);

  try {
    const { protocol, hostname } = new URL(normalized);
    if (hostname.startsWith('www.')) {
      origins.add(`${protocol}//${hostname.slice(4)}`);
    } else {
      origins.add(`${protocol}//www.${hostname}`);
    }
  } catch {
    /* ignore */
  }
}

function buildAllowedOrigins(): Set<string> {
  const origins = new Set<string>();

  addOrigin(origins, env.clientUrl);
  addOrigin(origins, RENDER_ORIGIN);

  for (const site of SITE_ORIGINS) origins.add(site);
  origins.add('http://localhost:5173');
  origins.add('http://127.0.0.1:5173');

  for (const part of (process.env.ALLOWED_ORIGINS || '').split(',')) {
    addOrigin(origins, part);
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

function isHenimechiHost(hostname: string) {
  return hostname === 'henimechi.com' || hostname === 'www.henimechi.com';
}

export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return true;

  if (allowedOrigins.has(normalizeOrigin(origin))) return true;

  try {
    const { hostname } = new URL(origin);
    if (isHenimechiHost(hostname) || isVercelHost(hostname)) return true;
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
