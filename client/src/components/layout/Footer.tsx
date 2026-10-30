import { portfolio } from '@/data/portfolio';
import { Khatam } from '@/components/ui/Ornaments';

export function Footer() {
  return (
    <footer className="border-t border-ink/15" role="contentinfo">
      <div className="shell py-14">
        <p className="font-display text-[clamp(3rem,11vw,9.5rem)] font-light leading-[.9] tracking-[-.04em]" aria-hidden="true">
          Heni <em className="italic text-clay">Mechi</em><span className="text-azur">.</span>
        </p>
        <div className="mt-10 flex flex-col gap-4 border-t border-ink/15 pt-6 font-mono text-[10px] uppercase tracking-[.14em] text-muted md:flex-row md:items-center md:justify-between">
          <span className="flex items-center gap-3"><Khatam filled className="h-3 w-3 text-clay" />{portfolio.name} · {portfolio.role}</span>
          <span>Made in Sousse · © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
