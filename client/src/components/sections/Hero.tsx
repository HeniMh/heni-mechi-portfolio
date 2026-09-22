import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-[74px]">
      <div className="ai-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-25" />
      <div className="mx-auto grid min-h-[calc(100vh-74px)] w-[min(1180px,calc(100%-32px))] items-center gap-10 py-14 lg:grid-cols-[1.08fr_.92fr] lg:py-16">
        <div data-reveal className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/55 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[.17em] text-black/60 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60">
            <span className="h-2 w-2 rounded-full bg-[#89b927] shadow-[0_0_0_6px_rgba(137,185,39,.12)] dark:bg-[#d9ff63]" />
            {portfolio.hero.badge}
          </div>

          <p className="mb-4 text-sm font-extrabold uppercase tracking-[.22em] text-black/35 dark:text-white/35">Senior front-end developer</p>
          <h1 className="max-w-[760px] font-display text-[clamp(2.85rem,6.5vw,6.2rem)] font-extrabold leading-[.92] tracking-[-0.055em] text-[#111318] dark:text-white">
            Senior Front-End <span className="text-outline">Developer.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-[clamp(1rem,1.5vw,1.18rem)] font-medium leading-8 text-black/[.58] dark:text-white/[.58]">{portfolio.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-[#111318] px-6 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-1 dark:bg-[#d9ff63] dark:text-black">{portfolio.hero.cta1}<Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-6 py-3.5 text-sm font-extrabold text-[#111318] backdrop-blur transition hover:-translate-y-1 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">{portfolio.hero.cta2}</a>
          </div>

          <div className="mt-10 grid max-w-[720px] grid-cols-1 gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
            {portfolio.stats.map(([value, label]) => (
              <div key={label} className="flex min-h-[118px] flex-col justify-center bg-[#f5f2ea] px-5 py-5 dark:bg-[#0a0b0d] sm:px-6 sm:py-6">
                <strong className="block text-xl font-extrabold tracking-[-0.02em] text-[#111318] dark:text-white">{value}</strong>
                <span className="mt-2 block max-w-[260px] text-[11px] font-bold uppercase leading-[1.55] tracking-[.11em] text-black/40 dark:text-white/40">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-[450px] lg:mr-0 xl:max-w-[470px]">
          <div className="absolute left-3 top-4 z-20 rounded-2xl md:-left-5 md:top-10 border border-black/10 bg-[#d9ff63] px-4 py-3 text-black shadow-xl dark:border-white/10">
            <span className="block text-[9px] font-extrabold uppercase tracking-[.15em] opacity-55">Currently building with</span>
            <strong className="mt-1 block text-sm font-extrabold">React · Node.js · NestJS · CRM</strong>
          </div>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-black/10 bg-[#17191d] p-3 shadow-[0_40px_120px_rgba(0,0,0,.22)] dark:border-white/10">
            <div className="absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/25 to-transparent" />
            <picture>
              <source srcSet="/assets/heni-real-photo.webp" type="image/webp" />
              <img src="/assets/heni-real-photo.png" alt="Heni Mechi — Senior Front-End Developer" width={1122} height={1402} className="aspect-[4/5] w-full rounded-[1.8rem] object-cover object-[50%_18%]" fetchPriority="high" />
            </picture>
            <div className="absolute inset-x-6 bottom-6 z-20 rounded-2xl border border-white/15 bg-black/55 p-4 text-white backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-extrabold uppercase tracking-[.16em] text-white/50">Profile</span>
                  <strong className="mt-1 block text-base font-extrabold">{portfolio.role}</strong>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-black"><Icon name="code" className="h-5 w-5" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-black/10 bg-[#111318] py-4 text-white dark:border-white/10">
        <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] gap-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[...portfolio.brands, ...portfolio.brands].map((brand, i) => <span key={`${brand}-${i}`} className="text-xs font-extrabold uppercase tracking-[.15em] text-white/55">{brand}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
