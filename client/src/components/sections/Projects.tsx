import { portfolio } from '@/data/portfolio';

export function Projects() {
  const total = String(portfolio.projects.length).padStart(2, '0');

  return (
    <section id="work" className="relative border-y border-ink/[.06] bg-surface/40 py-24 md:py-32">
      <div className="shell">
        <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
          <div>
            <p className="eyebrow">02 — Selected work</p>
            <h2 className="title mt-5">Production platforms, <span className="title-dim">2019 → 2026.</span></h2>
          </div>
          <p className="max-w-[50ch] leading-7 text-muted lg:justify-self-end">Hospitality, culture, e-commerce, insurance and logistics — at Symdrik, then as a freelancer.</p>
        </div>

        <div className="mt-14 grid gap-6">
          {portfolio.projects.map((project, index) => (
            <article
              key={project.title}
              data-spot
              className="spot card grid gap-8 overflow-hidden p-4 md:sticky md:grid-cols-[1.15fr_1fr] md:p-5 md:shadow-[0_-30px_60px_rgb(0_0_0/.55)]"
              style={{ top: `${96 + index * 18}px` }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-ink/[.06] bg-raised">
                <img src={project.image} alt={`${project.title} — project screenshot`} width={900} height={560} loading="lazy" className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex flex-col justify-between gap-8 px-2 pb-3 md:py-4 md:pr-4">
                <div className="flex items-center justify-between font-mono text-xs text-muted">
                  <span><span className="text-accent">{String(index + 1).padStart(2, '0')}</span> / {total}</span>
                  <span>{project.period}</span>
                </div>
                <div>
                  <p className="text-sm text-muted">{project.role} · {project.place}</p>
                  <h3 className="mt-2 text-[clamp(1.8rem,3.4vw,2.8rem)] font-semibold leading-[1] tracking-[-.05em]">{project.title}</h3>
                  <p className="mt-5 text-[15px] leading-7 text-ink/70">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <li key={tag} className="chip">{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
