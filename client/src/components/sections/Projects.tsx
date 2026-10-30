import { portfolio } from '@/data/portfolio';
import type { Project } from '@/types/portfolio';
import { Icon } from '@/components/ui/Icon';

function ProjectMeta({ project, index }: { project: Project; index: number }) {
  return (
    <div className="flex items-center justify-between gap-3 text-xs font-bold">
      <span className="flex items-center gap-2 text-white/60">
        <span className="tabular-nums text-[#d9ff63]">{String(index + 1).padStart(2, '0')}</span>
        <span className="h-px w-6 bg-white/20" />
        {project.role}
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 tabular-nums text-white/75">{project.period}</span>
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <li key={tag} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-semibold text-white/75">{tag}</li>
      ))}
    </ul>
  );
}

function Shot({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.4rem] bg-[#f5f2ea] ${className}`}>
      <img
        src={project.image}
        alt={`${project.title} — project screenshot`}
        width={900}
        height={560}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
      />
      <span className="absolute right-4 top-4 grid h-10 w-10 -rotate-45 place-items-center rounded-full bg-[#111318]/85 text-white opacity-0 backdrop-blur transition duration-500 group-hover:rotate-0 group-hover:bg-[#d9ff63] group-hover:text-[#111318] group-hover:opacity-100">
        <Icon name="arrow" className="h-4 w-4" />
      </span>
    </div>
  );
}

const cardClass = 'group rounded-[2rem] border border-white/10 bg-white/[.035] p-3 transition duration-500 hover:-translate-y-1 hover:border-[#d9ff63]/50 hover:bg-white/[.06]';

export function Projects() {
  const [featured, ...others] = portfolio.projects;

  return (
    <section id="work" className="bg-[#111318] py-28 text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div data-reveal className="w-full text-center">
          <span className="section-kicker !border-white/10 !bg-white/5 !text-white/70">02 / Selected work</span>
          <h2 className="section-title mx-auto mt-5 !text-white">Projects shaped in real production environments.</h2>
          <p className="mx-auto mt-5 w-full max-w-2xl text-base leading-7 text-white/70">Hospitality, culture, e-commerce, insurance and logistics platforms — from 2019 to today.</p>
        </div>

        <article data-reveal className={`${cardClass} mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:gap-8`}>
          <Shot project={featured} className="aspect-[16/10]" />
          <div className="flex flex-col justify-between gap-8 p-4 lg:py-6 lg:pr-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#d9ff63] px-3 py-1 text-[11px] font-bold uppercase tracking-[.14em] text-[#111318]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#111318]" />
                Latest mission
              </span>
              <h3 className="mt-6 text-3xl font-bold tracking-[-.035em] md:text-[2.6rem] md:leading-[1.05]">{featured.title}</h3>
              <p className="mt-2 text-sm font-semibold text-white/60">{featured.role} · {featured.period} · {featured.place}</p>
              <p className="mt-5 text-[15px] leading-7 text-white/75">{featured.description}</p>
            </div>
            <Tags tags={featured.tags} />
          </div>
        </article>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {others.map((project, i) => {
            const wide = others.length % 2 === 1 && i === others.length - 1;
            return (
            <article key={project.title} data-reveal className={`${cardClass} flex flex-col ${wide ? 'md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr] md:gap-8' : ''}`}>
              <Shot project={project} className="aspect-[16/10]" />
              <div className={`flex flex-1 flex-col gap-5 p-4 pt-6 ${wide ? 'md:py-6 md:pr-6' : ''}`}>
                <ProjectMeta project={project} index={i + 1} />
                <div>
                  <h3 className="text-2xl font-bold tracking-[-.03em]">{project.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-white/70">{project.description}</p>
                </div>
                <div className="mt-auto"><Tags tags={project.tags} /></div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
