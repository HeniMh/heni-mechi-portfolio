import { portfolio } from '@/data/portfolio';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col items-center justify-between gap-4 border-t border-slate-200 py-8 text-center dark:border-white/10 md:flex-row md:text-left">
      <a href="#home" className="flex items-center gap-3">
        <Logo className="h-10 w-10 rounded-xl" />
        <span>
          <strong className="block text-sm font-extrabold text-slate-950 dark:text-white">{portfolio.name}</strong>
          <small className="text-xs font-semibold text-slate-500 dark:text-slate-400">Freelance React Developer · Open to Work</small>
        </span>
      </a>
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Heni Mechi •  React.js • Next.js • TypeScript • Modern UI Engineering</p>
    </footer>
  );
}
