import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Hero() {
  return (
    <>
      <section id="home" className="relative mx-auto grid min-h-[82vh] w-[min(1120px,calc(100%-32px))] grid-cols-1 items-center gap-10 overflow-hidden pb-14 pt-32 lg:grid-cols-[1.05fr_.95fr] lg:pt-28">
        <div className="absolute left-[48%] top-20 -z-10 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-blue-400/14 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute right-0 top-48 -z-10 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

        <div data-reveal className="space-y-5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_7px_rgba(16,185,129,.14)]" />
            {portfolio.hero.badge}
          </div>

          <h1 className="mx-auto max-w-2xl font-display text-[clamp(2rem,3.75vw,3.55rem)] font-black leading-[1.04] tracking-[-0.052em] text-slate-950 dark:text-white lg:mx-0">
            {portfolio.hero.title}
          </h1>

          <p className="mx-auto max-w-xl text-[clamp(.95rem,1.15vw,1.08rem)] font-semibold leading-8 text-slate-600 dark:text-slate-300 lg:mx-0">
            {portfolio.hero.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#work" className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
              {portfolio.hero.cta1} <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
              {portfolio.hero.cta2}
            </a>
          </div>

          <div className="grid grid-cols-2 justify-center gap-3 pt-3 sm:flex sm:flex-wrap sm:items-center sm:gap-3 lg:justify-start">
            {portfolio.stats.slice(0, 3).map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-3 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 dark:border-white/10 dark:bg-white/[.05]">
                <strong className="block text-xl font-black text-blue-600 dark:text-blue-300">{value}</strong>
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-[390px] lg:max-w-[430px]">
          <div className="absolute left-1/2 top-10 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10" />
          <p className="mb-4 text-center text-xs font-black uppercase tracking-[.18em] text-slate-500 dark:text-slate-400">5+ years experience</p>
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[.06]">
            <img
              src="/assets/profile.png"
              alt="Portrait of Heni Mechi, senior React front-end developer"
              width={430}
              height={410}
              fetchPriority="high"
              className="h-[340px] w-full rounded-[1.55rem] object-cover object-center sm:h-[410px]"
            />
            <div className="absolute left-5 bottom-7 max-w-[220px] rounded-3xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-950/90">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white"><Icon name="rocket" className="h-4 w-4" /></span>
                <div className="leading-tight">
                  <strong className="block text-sm font-black text-slate-950 dark:text-white">React Front-End</strong>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Freelance & company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,calc(100%-32px))] overflow-hidden border-y border-slate-200 bg-white/70 py-5 dark:border-white/10 dark:bg-white/[.03]">
        <div className="flex w-max animate-marquee gap-4 whitespace-nowrap">
          {[...portfolio.brands, ...portfolio.brands].map((brand, i) => (
            <span key={`${brand}-${i}`} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-black text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[.05] dark:text-slate-300">{brand}</span>
          ))}
        </div>
      </section>
    </>
  );
}
