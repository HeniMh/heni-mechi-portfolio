import { portfolio } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/[.06]" role="contentinfo">
      <div className="shell pt-16">
        <div className="flex flex-col gap-4 font-mono text-[11px] uppercase tracking-[.14em] text-muted md:flex-row md:items-center md:justify-between">
          <span>{portfolio.name} · {portfolio.role}</span>
          <span>Sousse ↔ Paris · © {new Date().getFullYear()}</span>
        </div>
        <p className="text-fade mt-10 select-none whitespace-nowrap text-[clamp(4rem,17vw,15.5rem)] font-semibold leading-[.8] tracking-[-.07em] opacity-[.14]" aria-hidden="true">
          Heni Mechi
        </p>
      </div>
    </footer>
  );
}
