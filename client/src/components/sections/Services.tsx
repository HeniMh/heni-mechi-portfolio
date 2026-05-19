import { portfolio } from '@/data/portfolio';
import { Icon, type IconName } from '@/components/ui/Icon';

const icons: IconName[] = ['code', 'design', 'layers', 'speed', 'monitor', 'support'];

export function Services() {
  return (
    <section id="services" className="mx-auto w-[min(1120px,calc(100%-32px))] py-24">
      <div data-reveal className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">What I deliver</span>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[-0.04em] text-slate-950 dark:text-white">Freelance services and company-ready front-end expertise</h2>
        <p className="mt-4 text-base font-medium leading-8 text-slate-600 dark:text-slate-300">Modern React development, clean UI integration, performance, responsive design and long-term collaboration.</p>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map(([title, text], index) => (
          <article key={title} data-reveal className="text-center group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-soft dark:border-white/10 dark:bg-white/[.04] dark:hover:border-blue-400/30">
            <div className="mb-10 ml-auto mr-auto grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300">
              <Icon name={icons[index]} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
