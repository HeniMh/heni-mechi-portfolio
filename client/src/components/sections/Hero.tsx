import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { CountUp } from '@/components/ui/CountUp';

const core = ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'PostgreSQL'];

export function Hero() {
  return (
    <section id="home" data-spot className="relative overflow-hidden pt-[72px]">
      <div className="glow-follow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" aria-hidden="true" />

      <div className="shell relative grid items-center gap-14 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.25fr_.75fr] lg:gap-10">
        <div>
          <p className="eyebrow" style={{ animation: 'panelIn .8s ease both' }}>Available for freelance missions</p>

          <h1 className="mt-7">
            <span className="line-mask"><span className="text-fade text-[clamp(3.6rem,11vw,9.5rem)] font-semibold leading-[.88] tracking-[-.065em]">Heni Mechi</span></span>
            <span className="line-mask mt-3"><span className="text-[clamp(1.7rem,4vw,3.3rem)] font-medium leading-[1.05] tracking-[-.045em] text-ink/40" style={{ animationDelay: '.12s' }}>
              Senior <span className="text-ink">Full-Stack</span> Developer<span className="text-accent">.</span>
            </span></span>
          </h1>

          <p className="mt-8 max-w-[58ch] text-[1.05rem] leading-8 text-muted" style={{ animation: 'panelIn 1s .25s ease both' }}>{portfolio.hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap gap-3" style={{ animation: 'panelIn 1s .35s ease both' }}>
            <a href="#work" className="btn-primary">{portfolio.hero.cta1}<Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#contact" className="btn-ghost">{portfolio.hero.cta2}</a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs text-muted" style={{ animation: 'panelIn 1s .45s ease both' }}>
            {core.map(item => <li key={item} className="flex items-center gap-2"><span className="h-px w-3 bg-ink/25" />{item}</li>)}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[380px]" style={{ animation: 'panelIn 1.2s .2s ease both' }}>
          <div className="arch absolute -inset-3 border border-accent/40" aria-hidden="true" />
          <div className="arch absolute -inset-6 border border-ink/[.06]" aria-hidden="true" />
          <div className="group arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-surface">
            <picture>
              <source srcSet="/assets/heni-real-photo.webp" type="image/webp" />
              <img src="/assets/heni-real-photo.png" alt="Heni Mechi, Senior Full-Stack Developer" width={1122} height={1402} fetchPriority="high" className="h-full w-full object-cover object-[50%_20%] grayscale transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0" />
            </picture>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night via-night/40 to-transparent" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-night/70 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.16em] text-muted">Based in</p>
                <p className="text-sm font-semibold">Sousse, TN <span className="text-muted">→</span> Remote / France</p>
              </div>
              <span className="pulse-dot h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>

      <div className="shell relative grid grid-cols-2 gap-3 lg:grid-cols-4">
        {portfolio.stats.map(([value, label]) => (
          <div key={label} data-reveal data-spot className="spot card p-6">
            <CountUp value={value} className="block text-[clamp(2.2rem,4vw,3.2rem)] font-semibold leading-none tracking-[-.05em]" />
            <span className="mt-3 block text-[13px] leading-5 text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="shell relative py-16">
        <p className="text-center font-mono text-[11px] uppercase tracking-[.18em] text-muted">Trusted by teams at</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {portfolio.brands.map(brand => (
            <li key={brand} className="text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold tracking-[-.03em] text-ink/35 transition hover:text-ink">{brand}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
