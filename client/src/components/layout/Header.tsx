import { useEffect, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';

const links = [
  ['#expertise', 'Expertise'],
  ['#work', 'Work'],
  ['#stack', 'Stack'],
  ['#process', 'Process'],
  ['#contact', 'Contact']
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('hm-theme') !== 'light');

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
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-black/5 bg-[#f5f2ea]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0b0d]/80">
        <div className="mx-auto flex h-[74px] w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
            <Logo />
            <span className="leading-tight">
              <strong className="block text-sm font-extrabold tracking-tight text-[#111318] dark:text-white">{portfolio.name}</strong>
              <span className="hidden text-[10px] font-bold uppercase tracking-[.14em] text-black/45 dark:text-white/45 sm:block">Senior Front-End Developer</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-black/60 transition hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setDark(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-black transition hover:scale-105 dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Toggle dark mode">
              <Icon name={dark ? 'sun' : 'moon'} className="h-4 w-4" />
            </button>
            <a href="#contact" className="hidden rounded-full bg-[#111318] px-5 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 dark:bg-[#d9ff63] dark:text-black md:inline-flex">Let’s work together</a>
            <button type="button" onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-black dark:border-white/10 dark:bg-white/5 dark:text-white lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-black/35 backdrop-blur-sm transition lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setOpen(false)} />
      <nav className={`fixed left-4 right-4 top-[86px] z-50 grid gap-1 rounded-3xl border border-black/10 bg-[#f5f2ea] p-3 shadow-2xl transition duration-300 dark:border-white/10 dark:bg-[#111318] lg:hidden ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'}`} aria-label="Mobile navigation">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-5 py-4 text-center text-base font-extrabold text-[#111318] hover:bg-black/5 dark:text-white dark:hover:bg-white/10">{label}</a>
        ))}
      </nav>
    </>
  );
}
