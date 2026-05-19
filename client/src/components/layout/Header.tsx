import { useEffect, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';

const links = [
  ['#services', 'Services'],
  ['#work', 'Projects'],
  ['#freelance', 'Freelance'],
  ['#process', 'Process'],
  ['#contact', 'Contact']
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('hm-theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('hm-theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className="fixed left-1/2 top-4 z-[100] w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 rounded-[1.8rem] border border-white/60 bg-white/70 px-3 py-3 shadow-[0_22px_80px_rgba(15,23,42,.12)] backdrop-blur-2xl backdrop-saturate-150 transition-colors dark:border-white/10 dark:bg-slate-950/70 dark:shadow-[0_22px_90px_rgba(0,0,0,.42)]">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
            <Logo className="transition-transform duration-300 group-hover:scale-105" />
            <span className="leading-tight sm:block">
              <span className="block text-sm font-extrabold text-slate-950 dark:text-white">{portfolio.name}</span>
              <span className="block text-[11px] font-semibold text-slate-600 dark:text-slate-300">Freelance & Open to Work</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setDark(v => !v)} className="grid h-11 w-11 place-items-center rounded-2xl border border-slate-200/80 bg-white/70 text-slate-800 shadow-sm backdrop-blur transition hover:scale-105 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15" aria-label="Toggle dark mode">
              <Icon name={dark ? 'sun' : 'moon'} className="h-5 w-5" />
            </button>
            <a href="#contact" className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex">Hire / Recruit me</a>
            <button type="button" onClick={() => setOpen(v => !v)} className="relative grid h-11 w-11 place-items-center rounded-2xl border border-slate-200/80 bg-white/70 text-slate-950 shadow-sm backdrop-blur transition hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav">
              <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${open ? 'translate-y-0 rotate-45' : '-translate-y-1.5 rotate-0'}`} />
              <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
              <span className={`absolute h-0.5 w-5 rounded-full bg-current transition duration-300 ${open ? 'translate-y-0 -rotate-45' : 'translate-y-1.5 rotate-0'}`} />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-slate-950/20 transition-opacity duration-300 dark:bg-black/35 lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setOpen(false)} />
      <div id="mobile-nav" className={`fixed right-4 left-auto translate-x-0 top-[5.6rem] z-50 w-[calc(100%-28px)] max-w-md  overflow-hidden rounded-[1.8rem] border border-slate-200/80 bg-white/95 p-3 shadow-[0_30px_90px_rgba(15,23,42,.22)] backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-slate-950/95 lg:hidden ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'}`}>
        <nav className="grid gap-1" aria-label="Mobile navigation">
          {links.map(([href, label], index) => (
            <a key={href} href={href} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${index * 40}ms` : '0ms' }} className={`rounded-2xl px-5 py-4 text-center text-base font-extrabold text-slate-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-white dark:hover:bg-white/10 ${open ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
