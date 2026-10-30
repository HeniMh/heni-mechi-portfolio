import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { Khatam, Zellige } from '@/components/ui/Ornaments';

export function Freelance() {
  return (
    <section className="relative overflow-hidden bg-azur text-paper">
      <Zellige className="pointer-events-none absolute inset-0 text-paper/[.09]" />
      <div className="shell relative grid gap-12 py-24 md:py-28 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-[.16em] text-paper/70">Freelance — since August 2026</p>
          <h2 className="chapter-title mt-6">From requirements <em className="!text-paper">to production.</em></h2>
          <p className="mt-8 max-w-[44ch] leading-8 text-paper/80">I build the interface, the API and the database together — tested, containerized with Docker and deployed through CI/CD.</p>
          <a href="#contact" className="mt-10 inline-flex items-center gap-3 bg-paper px-6 py-4 font-mono text-xs font-medium uppercase tracking-[.14em] text-azur transition hover:bg-ink hover:text-paper">
            Discuss a project <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-px self-start border border-paper/25 bg-paper/25 sm:grid-cols-2">
          {portfolio.freelance.slice(0, 4).map(([title, text]) => (
            <li key={title} data-reveal className="bg-azur p-6 md:p-7">
              <Khatam className="h-6 w-6 text-paper/80" />
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-paper/75">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
