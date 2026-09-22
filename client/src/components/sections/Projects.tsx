import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Projects() {
  const [active, setActive] = useState(0);
  const project = portfolio.projects[active];

  return (
    <section id="work" className="bg-[#111318] py-28 text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div data-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-kicker !text-white/40">02 / Selected work</span>
            <h2 className="section-title mt-5 !text-white">Projects shaped in real production environments.</h2>
          </div>
          <p className="max-w-xl text-sm font-medium leading-7 text-white/50">Enterprise, e-commerce, hospitality and cultural platforms where responsive quality, maintainability, performance and business constraints all matter.</p>
        </div>

        <div data-reveal className="mt-14 grid gap-4 lg:grid-cols-[.34fr_.66fr]">
          <div className="grid content-start gap-2">
            {portfolio.projects.map((item, index) => (
              <button key={item.title} onClick={() => setActive(index)} className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${active === index ? 'border-[#d9ff63]/50 bg-[#d9ff63] text-black' : 'border-white/10 bg-white/[.035] text-white/60 hover:bg-white/[.07] hover:text-white'}`}>
                <span>
                  <span className="block text-[9px] font-extrabold uppercase tracking-[.15em] opacity-45">0{index + 1}</span>
                  <strong className="mt-1 block text-sm font-extrabold">{item.title}</strong>
                </span>
                <Icon name="arrow" className={`h-4 w-4 transition ${active === index ? 'rotate-0' : '-rotate-45 opacity-30 group-hover:rotate-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          <article className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[.035]">
            <div className="relative overflow-hidden">
              <img key={project.image} src={project.image} alt={`${project.title} project`} width={900} height={520} className="h-[300px] w-full animate-[fadeZoom_.55s_ease_both] object-cover md:h-[440px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-white/80 backdrop-blur">{project.role}</span>
            </div>
            <div className="grid gap-7 p-6 md:grid-cols-[1fr_auto] md:p-8">
              <div>
                <h3 className="text-3xl font-extrabold tracking-[-.035em] md:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/55">{project.description}</p>
              </div>
              <div className="flex max-w-[260px] flex-wrap content-start gap-2 md:justify-end">
                {project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[.045] px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.08em] text-white/60">{tag}</span>)}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
