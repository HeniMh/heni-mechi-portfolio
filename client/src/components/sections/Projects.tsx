import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section id="work" className="bg-paper2 py-24 md:py-32">
      <div className="shell">
        <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="kicker">§ 02 — Selected work</p>
            <h2 className="chapter-title mt-6 max-w-[16ch]">An index of <em>production</em> platforms.</h2>
          </div>
          <p className="max-w-[40ch] font-mono text-[11px] uppercase leading-6 tracking-[.12em] text-muted">
            2019 → 2026 · Symdrik, then freelance.<br />Hospitality, culture, commerce, insurance and logistics.
          </p>
        </div>

        <div className="mt-14 hidden grid-cols-[3rem_1.4fr_1fr_.8fr_2.5rem] gap-4 border-b border-ink/30 pb-3 font-mono text-[10px] uppercase tracking-[.14em] text-muted md:grid">
          <span>No.</span><span>Client</span><span>Role</span><span>Years</span><span />
        </div>

        <ul data-reveal className="border-t border-ink/30 md:border-t-0">
          {portfolio.projects.map((project, index) => {
            const isOpen = active === index;
            const panelId = `project-panel-${index}`;
            return (
              <li key={project.title} className="border-b border-ink/15">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="group grid w-full grid-cols-[2.5rem_1fr_2rem] items-baseline gap-4 py-6 text-left md:grid-cols-[3rem_1.4fr_1fr_.8fr_2.5rem]"
                >
                  <span className="font-mono text-xs text-clay">{String(index + 1).padStart(2, '0')}</span>
                  <span className={`font-display text-[clamp(1.6rem,3.4vw,2.7rem)] leading-none tracking-[-.02em] transition ${isOpen ? 'italic text-azur' : 'group-hover:italic'}`}>{project.title}</span>
                  <span className="hidden text-sm text-ink/70 md:block">{project.role}</span>
                  <span className="hidden font-mono text-xs text-muted md:block">{project.period}</span>
                  <span className={`grid h-8 w-8 place-items-center border border-ink/20 transition ${isOpen ? 'rotate-90 border-azur bg-azur text-paper' : 'group-hover:border-ink'}`}>
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </button>

                <div id={panelId} role="region" aria-label={project.title} hidden={!isOpen} className="pb-10">
                  <div className="grid gap-8 md:grid-cols-[3rem_1fr_1fr] md:gap-4">
                    <span className="hidden md:block" />
                    <div className="animate-[panelIn_.5s_ease_both] border border-ink/15 bg-paper p-2">
                      <img src={project.image} alt={`${project.title} — project screenshot`} width={900} height={520} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                    </div>
                    <div className="animate-[panelIn_.6s_ease_both] md:pl-8">
                      <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted md:hidden">{project.role} · {project.period}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[.14em] text-muted">{project.place}</p>
                      <p className="mt-4 text-[1.02rem] leading-8 text-ink/80">{project.description}</p>
                      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-azur">
                        {project.tags.map(tag => <li key={tag}>/{tag.toLowerCase().replace(/\s+/g, '-')}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
