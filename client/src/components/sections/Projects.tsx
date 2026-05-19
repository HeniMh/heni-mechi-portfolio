import { useEffect, useRef, useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Icon } from '@/components/ui/Icon';

export function Projects() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<number | null>(null);
  const lockedRef = useRef(false);
  const project = portfolio.projects[active];

  function clearAutoSwipe() {
    if (timerRef.current) window.clearTimeout(timerRef.current);
  }

  function scheduleAutoSwipe() {
    clearAutoSwipe();
    timerRef.current = window.setTimeout(() => {
      setActive(v => (v + 1) % portfolio.projects.length);
    }, 5600);
  }

  function goToProject(index: number) {
    if (lockedRef.current) return;
    lockedRef.current = true;
    setActive((index + portfolio.projects.length) % portfolio.projects.length);
    scheduleAutoSwipe();
    window.setTimeout(() => { lockedRef.current = false; }, 520);
  }

  useEffect(() => {
    scheduleAutoSwipe();
    return clearAutoSwipe;
  }, [active]);

  return (
    <section id="work" className="bg-slate-50 py-24 text-slate-950 dark:bg-slate-950 dark:text-white">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">Featured work</span>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.7rem)] font-black tracking-[-0.04em]">Real-world front-end projects delivered for e-commerce, hospitality and enterprise clients.</h2>
        </div>

        <div data-reveal className="mt-12 overflow-hidden rounded-[2.2rem] border border-slate-200 bg-white p-4 shadow-soft dark:border-white/10 dark:bg-white/[.04] md:p-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
              <img
                key={project.image}
                src={project.image}
                alt={`${project.title} — ${project.role} front-end project`}
                width={800}
                height={450}
                loading="lazy"
                className="h-[320px] w-full animate-[fadeZoom_.7s_ease_both] object-cover md:h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent dark:from-slate-950/60" />
            </div>
            <div className="space-y-6 p-2 md:p-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-blue-700 dark:bg-blue-500/10 dark:text-blue-200">
                <Icon name="briefcase" className="h-4 w-4" /> {project.role}
              </div>
              <h3 key={project.title} className="animate-[slideUp_.55s_ease_both] font-display text-[clamp(1.8rem,3.5vw,3rem)] font-black tracking-[-0.04em]">{project.title}</h3>
              <p className="text-base font-medium leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">{tag}</span>)}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button onClick={() => goToProject(active - 1)} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10" aria-label="Previous project"><ChevronLeft className="h-5 w-5" /></button>
                <button onClick={() => goToProject(active + 1)} className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:-translate-y-0.5 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10" aria-label="Next project"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {portfolio.projects.map((item, index) => (
              <button key={item.title} onClick={() => goToProject(index)} className={`cursor-pointer rounded-2xl border p-3 text-center transition ${active === index ? 'border-blue-400 bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-white' : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[.03] dark:text-slate-400 dark:hover:bg-white/[.06]'}`}>
                <span className="block truncate text-sm font-black">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
