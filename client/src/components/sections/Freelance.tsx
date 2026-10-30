import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Freelance() {
  return (
    <section className="shell pb-24 md:pb-32">
      <div data-reveal data-spot className="spot relative overflow-hidden rounded-[2rem] border border-ink/[.08] bg-surface">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" aria-hidden="true" />
        <div className="relative grid gap-12 p-7 md:p-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="eyebrow">Freelance — since August 2026</p>
              <h2 className="title mt-5">From requirements <span className="title-dim">to production.</span></h2>
              <p className="mt-6 max-w-[44ch] leading-7 text-muted">I build the interface, the API and the database together — tested, containerized with Docker and deployed through CI/CD.</p>
            </div>
            <a href="#contact" className="btn-primary self-start">Discuss a project <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <ul className="grid gap-px self-start overflow-hidden rounded-2xl border border-ink/[.08] bg-ink/[.08] sm:grid-cols-2">
            {portfolio.freelance.slice(0, 4).map(([title, text], index) => (
              <li key={title} className="bg-surface p-6 transition hover:bg-raised">
                <span className="font-mono text-xs text-accent">0{index + 1}</span>
                <h3 className="mt-5 font-semibold tracking-[-.02em]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
