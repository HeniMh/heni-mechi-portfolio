import { portfolio } from '@/data/portfolio';
import { Icon, skillIconNames } from '@/components/ui/Icon';

export function Skills() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-white/[.03]">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))]">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">
            Tech stack
          </span>

          <h2 className="mt-4 font-display text-[clamp(1.7rem,3vw,2.45rem)] font-black tracking-[-0.04em] text-slate-950 dark:text-white">
            Modern tools for scalable front-end projects
          </h2>
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {portfolio.skills.map((skill) => (
            <span
              key={skill}
              className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 dark:border-white/10 dark:bg-white/[.05] dark:text-slate-200 dark:hover:border-blue-400/40 dark:hover:text-blue-200"
            >
              <Icon
                name={skillIconNames[skill] ?? 'code'}
                className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:text-blue-300"
              />

              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
