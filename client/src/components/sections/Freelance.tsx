import { portfolio } from '@/data/portfolio';
import { Icon, type IconName } from '@/components/ui/Icon';

const icons: IconName[] = ['rocket', 'code', 'speed'];

export function Freelance() {
  return (
    <section id="freelance" className="mx-auto w-[min(1120px,calc(100%-32px))] py-24">
      <div data-reveal className="grid overflow-hidden rounded-[2.6rem] border border-slate-200 bg-white shadow-soft dark:border-white/10 dark:bg-white/[.04] lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-slate-950 p-8 text-white md:p-10">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
          <span className="text-xs font-black uppercase tracking-[.22em] text-blue-200">Freelance offers</span>
          <h2 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-black tracking-[-0.04em]">Clear services, clean delivery and transparent pricing</h2>
          <p className="mt-4 text-sm font-medium leading-7 text-slate-300">Perfect for Upwork clients, direct freelance projects, startups and companies looking for a reliable React developer.</p>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-slate-950 transition hover:-translate-y-1">
            Discuss my project <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
        <div className="divide-y divide-slate-200 dark:divide-white/10">
          {portfolio.packages.map((pkg, index) => (
            <article key={pkg.name} className="group grid gap-4 p-6 transition hover:bg-blue-50/60 dark:hover:bg-white/[.04] md:grid-cols-[1fr_auto] md:p-7">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-300">
                  <Icon name={icons[index]} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-black tracking-tight text-slate-950 dark:text-white">{pkg.name}</h3>
                  <p className="mt-2 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{pkg.description}</p>
                  <ul className="mt-3 grid gap-2">
                    {pkg.items.map(item => <li key={item} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300"><Icon name="check" className="h-4 w-4 text-blue-600" />{item}</li>)}
                  </ul>
                </div>
              </div>
              <strong className="self-start rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white dark:bg-white dark:text-slate-950">{pkg.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
