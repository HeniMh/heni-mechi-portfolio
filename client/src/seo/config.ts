/** Canonical site URL — used for SEO, sitemap, and structured data */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.henimechi.com').replace(/\/+$/, '');

export const SEO = {
  siteName: 'Heni Mechi — Portfolio',
  title: 'Heni Mechi | Senior React Front-End Developer — Freelance & Open to Work',
  description:
    'Heni Mechi is a senior React & Next.js front-end developer in France. Freelance missions, Upwork, and open to work. React, TypeScript, performance, UI/UX, e-commerce.',
  keywords: [
    'Heni Mechi',
    'Heni Mechi developer',
    'Heni Mechi React',
    'React developer France',
    'freelance React developer',
    'Next.js developer',
    'front-end developer portfolio',
    'développeur React freelance'
  ],
  locale: 'en_FR',
  twitter: '@henimechi',
  image: `${SITE_URL}/assets/profile.png`
} as const;
