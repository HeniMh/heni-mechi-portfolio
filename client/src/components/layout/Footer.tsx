import { portfolio } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-8 dark:border-white/10" role="contentinfo">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <strong className="text-sm font-extrabold text-[#111318] dark:text-white">{portfolio.name}</strong>
          <span className="ml-2 text-xs font-bold text-black/35 dark:text-white/35">Senior Front-End Developer</span>
        </div>
        <p className="text-xs font-bold text-black/35 dark:text-white/35">© {new Date().getFullYear()} · React · Next.js · Node.js · NestJS · CRM Automation · Testing · Databases</p>
      </div>
    </footer>
  );
}
