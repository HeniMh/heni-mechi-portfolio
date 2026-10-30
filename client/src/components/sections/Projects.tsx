import { useEffect, useRef, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

const startYear = (period: string) => period.split('–')[0].trim();

/** Height (px) of the timeline line that should be filled, based on scroll position. */
function useTimelineFill(listRef: React.RefObject<HTMLOListElement>) {
  const [fill, setFill] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      setFill(Math.max(0, Math.min(rect.height, window.innerHeight * 0.6 - rect.top)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [listRef]);
  return fill;
}

export function Projects() {
  const [open, setOpen] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const fill = useTimelineFill(listRef);
  const reached = (i: number) => {
    const el = itemRefs.current[i];
    return el ? el.offsetTop + 30 <= fill : false;
  };

  return (
    <section id="work" className="bg-[#111318] py-28 text-white">
      <div className="mx-auto w-[min(1080px,calc(100%-32px))]">
        <div data-reveal className="w-full text-center">
          <span className="section-kicker !border-white/10 !bg-white/5 !text-white/70">02 / Career & selected work</span>
          <h2 className="section-title mx-auto mt-5 !text-white">Seven years, seven production platforms.</h2>
          <p className="mx-auto mt-5 w-full max-w-2xl text-base leading-7 text-white/70">From my first e-commerce mission in 2019 to full-stack delivery for Accor today. Open any step to see the project.</p>
        </div>

        <ol ref={listRef} className="relative mt-16">
          {/* Track and scroll-driven fill */}
          <span className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 md:left-[135px]" aria-hidden="true" />
          <span className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-[#d9ff63] to-[#d9ff63]/60 shadow-[0_0_12px_rgba(217,255,99,.6)] transition-[height] duration-150 md:left-[135px]" style={{ height: fill }} aria-hidden="true" />

          {/* Now */}
          <li ref={el => { itemRefs.current[0] = el; }} className="relative grid gap-3 pb-12 pl-12 md:grid-cols-[110px_1fr] md:gap-14 md:pl-0">
            <div className="md:pt-1 md:text-right">
              <span className="text-3xl font-bold tracking-[-.04em] text-[#d9ff63]">Now</span>
            </div>
            <span className="absolute left-[8px] top-2 grid h-[15px] w-[15px] place-items-center md:left-[128px]" aria-hidden="true">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#d9ff63]/50" />
              <span className="relative h-[15px] w-[15px] rounded-full border-[3px] border-[#111318] bg-[#d9ff63]" />
            </span>
            <div className="rounded-[1.6rem] border border-[#d9ff63]/40 bg-[#d9ff63]/[.07] p-6">
              <p className="text-xs font-bold uppercase tracking-[.16em] text-[#d9ff63]">Since August 2026 · Remote</p>
              <h3 className="mt-2 text-2xl font-bold tracking-[-.03em]">Freelance Full-Stack Developer</h3>
              <p className="mt-2 text-[15px] leading-7 text-white/75">Custom web applications from requirements to production — React, Next.js, NestJS, PostgreSQL, Docker and GitHub Actions. Recent client: Accor.</p>
            </div>
          </li>

          {portfolio.projects.map((project, index) => {
            const i = index + 1;
            const isOpen = open === index;
            const isReached = reached(i);
            const panelId = `career-${index}`;
            return (
              <li key={project.title} ref={el => { itemRefs.current[i] = el; }} className="relative grid gap-3 pb-6 pl-12 md:grid-cols-[110px_1fr] md:gap-14 md:pl-0">
                <div className="md:pt-5 md:text-right">
                  <span className={`text-3xl font-bold tabular-nums tracking-[-.04em] transition-colors duration-500 ${isReached ? 'text-white' : 'text-white/30'}`}>{startYear(project.period)}</span>
                  {project.period.includes('–') && <span className="ml-3 text-xs font-semibold text-white/50 md:ml-0 md:mt-1 md:block">{project.period}</span>}
                </div>
                <span className={`absolute left-[9px] top-2 h-[13px] w-[13px] rounded-full border-[3px] border-[#111318] transition duration-500 md:left-[129px] md:top-7 ${isReached ? 'bg-[#d9ff63] shadow-[0_0_0_4px_rgba(217,255,99,.15)]' : 'bg-white/25'}`} aria-hidden="true" />

                <article className={`overflow-hidden rounded-[1.6rem] border transition duration-500 ${isOpen ? 'border-white/20 bg-white/[.06]' : 'border-white/10 bg-white/[.03] hover:border-white/20 hover:bg-white/[.05]'}`}>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : index)} aria-expanded={isOpen} aria-controls={panelId} className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6">
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold tracking-[-.03em] md:text-2xl">{project.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-white/60">{project.role} · {project.place}</p>
                      <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#d9ff63]/10 px-3 py-1 text-xs font-bold text-[#d9ff63]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d9ff63]" />
                        {project.highlight}
                      </span>
                    </div>
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${isOpen ? 'rotate-45 border-[#d9ff63] bg-[#d9ff63] text-[#111318]' : 'border-white/15 text-white'}`}>
                      <Icon name="x" className="h-4 w-4 rotate-45" />
                    </span>
                  </button>

                  <div id={panelId} role="region" aria-label={project.title} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className={`grid gap-6 px-5 pb-6 md:px-6 ${project.image ? 'md:grid-cols-[1.1fr_1fr]' : ''}`}>
                        {project.image && (
                          <div className="overflow-hidden rounded-2xl bg-[#f5f2ea]">
                            <img src={project.image} alt={`${project.title} — project screenshot`} width={900} height={560} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                          </div>
                        )}
                        <div className="flex flex-col justify-between gap-5">
                          <p className="text-[15px] leading-7 text-white/75">{project.description}</p>
                          <ul className="flex flex-wrap gap-2">
                            {project.tags.map(tag => <li key={tag} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-semibold text-white/75">{tag}</li>)}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>

        <div data-reveal className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.6rem] border border-white/10 bg-white/[.03] p-6 text-center md:ml-[166px] md:flex-row md:text-left">
          <div>
            <p className="text-lg font-bold tracking-[-.02em]">Hiring a senior full-stack developer?</p>
            <p className="mt-1 text-sm text-white/65">Available for freelance missions and senior roles — remote or in France.</p>
          </div>
          <a href="#contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#d9ff63] px-6 py-3 text-sm font-bold text-[#111318] transition hover:-translate-y-0.5">Let’s talk <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
