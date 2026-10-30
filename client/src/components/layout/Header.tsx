import { useEffect, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';

const links = [
  ['#expertise', 'Expertise'],
  ['#work', 'Work'],
  ['#stack', 'Stack'],
  ['#process', 'Process'],
  ['#contact', 'Contact']
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
  const [scrolled, setScrolled] = useState(false);
  const time = useSousseTime();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[100] transition duration-500 ${scrolled || open ? 'border-b border-ink/[.06] bg-night/75 backdrop-blur-xl' : 'border-b border-transparent'}`}>
        <div className="shell flex h-[72px] items-center justify-between gap-4">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to homepage">
            <Logo />
            <span className="text-[15px] font-semibold tracking-[-.02em]">Heni Mechi</span>
          </a>

          <nav className="hidden items-center gap-1 rounded-full border border-ink/[.07] bg-surface/60 p-1 backdrop-blur lg:flex" aria-label="Primary navigation">
            {links.map(([href, label]) => (
              <a key={href} href={href} className="rounded-full px-4 py-1.5 text-[13px] font-medium text-muted transition hover:bg-ink/[.06] hover:text-ink">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[11px] text-muted md:flex">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              Sousse {time}
            </span>
            <a href="#contact" className="hidden rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-night transition hover:bg-accent sm:inline-flex">Let’s talk</a>
            <button type="button" onClick={() => setOpen(v => !v)} className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-ink lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
              <Icon name={open ? 'x' : 'menu'} className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <nav className={`fixed inset-0 z-[90] bg-night/95 pt-[72px] backdrop-blur-xl transition duration-300 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`} aria-label="Mobile navigation">
        <div className="shell grid gap-1 py-8">
          {links.map(([href, label], i) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-ink/[.07] py-5 text-4xl font-semibold tracking-[-.04em]">
              {label}
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
