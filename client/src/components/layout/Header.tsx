import { useEffect, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';

const links = [
  ['#expertise', '01', 'Expertise'],
  ['#work', '02', 'Work'],
  ['#stack', '03', 'Stack'],
  ['#process', '04', 'Process'],
  ['#contact', '05', 'Contact']
];

function useSousseTime() {
  const format = () => new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Tunis' }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 30_000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('hm-theme') !== 'light');
  const time = useSousseTime();

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
      <header className="fixed inset-x-0 top-0 z-[100] border-b border-ink/15 bg-paper/90 backdrop-blur-md">
        <div className="hidden border-b border-ink/10 md:block">
          <div className="shell flex h-8 items-center justify-between font-mono text-[10px] uppercase tracking-[.16em] text-muted">
            <span>Sousse 35.82°N 10.63°E <span className="text-clay">↔</span> Paris 48.85°N 2.35°E</span>
            <span><span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-clay" />Sousse, {time} · available for missions</span>
          </div>
        </div>
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
            <Logo />
            <span className="leading-tight">
              <strong className="block font-display text-lg font-medium tracking-tight">{portfolio.name}</strong>
              <span className="hidden font-mono text-[10px] uppercase tracking-[.14em] text-muted sm:block">{portfolio.role}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {links.map(([href, num, label]) => (
              <a key={href} href={href} className="group font-mono text-[11px] uppercase tracking-[.14em] text-muted transition hover:text-ink">
                <span className="mr-1.5 text-clay">{num}</span>
                <span className="border-b border-transparent pb-0.5 group-hover:border-ink">{label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setDark(v => !v)} className="flex h-9 items-center gap-2 border border-ink/20 px-3 font-mono text-[10px] uppercase tracking-[.14em] text-ink transition hover:border-ink" aria-label="Toggle dark mode">
              <Icon name={dark ? 'sun' : 'moon'} className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{dark ? 'Day' : 'Night'}</span>
            </button>
            <button type="button" onClick={() => setOpen(v => !v)} className="grid h-9 w-9 place-items-center border border-ink/20 text-ink lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              <Icon name={open ? 'x' : 'menu'} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-40 bg-ink/30 transition lg:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={() => setOpen(false)} />
      <nav className={`fixed inset-x-0 top-16 md:top-24 z-50 border-b border-ink/15 bg-paper transition duration-300 lg:hidden ${open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'}`} aria-label="Mobile navigation">
        <div className="shell py-4">
          {links.map(([href, num, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 border-b border-ink/10 py-4 last:border-0">
              <span className="font-mono text-xs text-clay">{num}</span>
              <span className="font-display text-3xl">{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
