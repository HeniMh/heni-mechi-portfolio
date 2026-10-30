/** Canonical site URL — used for SEO, sitemap, and structured data */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.henimechi.com').replace(/\/+$/, '');

export const SEO = {
  siteName: 'Heni Mechi — Portfolio',
  title: 'Heni Mechi | Senior Full-Stack Developer — React, Next.js, NestJS',
  description:
    'Heni Mechi is a senior full-stack developer with 5+ years of experience: React.js, Next.js, TypeScript, Node.js, Express.js, NestJS, PostgreSQL. Freelance, remote or in France.',
  keywords: [
    'Heni Mechi',
    'Heni Mechi developer',
    'Heni Mechi React',
    'React developer France',
    'freelance React developer',
    'Next.js developer',
    'full-stack developer portfolio',
    'NestJS developer',
    'développeur React freelance'
  ],
  locale: 'en_FR',
  twitter: '@henimechi',
  image: `${SITE_URL}/assets/profile.png`
} as const;
