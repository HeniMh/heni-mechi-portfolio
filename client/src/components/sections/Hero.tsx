import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';
import { ArchPortrait, Khatam } from '@/components/ui/Ornaments';

export function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-24">
      <div className="shell grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <div data-reveal>
          <p className="kicker flex items-center gap-3">
            <span>§ 00</span>
            <span className="h-px w-10 bg-azur/50" />
            <span>Portfolio — 2026 edition</span>
          </p>

          <h1 className="mt-8 font-display text-[clamp(3rem,7.4vw,6.6rem)] font-light leading-[.94] tracking-[-.035em]" style={{ fontVariationSettings: "'opsz' 144" }}>
            Senior <em className="font-normal italic text-clay">Full-Stack</em>
            <br />
            Developer<span className="text-azur">.</span>
          </h1>

          <p className="mt-6 font-display text-[clamp(1.15rem,2vw,1.5rem)] italic text-muted">
            Between Sousse and Paris — React, Next.js, Node.js &amp; NestJS.
          </p>

          <p className="mt-8 max-w-[58ch] text-[1.02rem] leading-8 text-ink/75">{portfolio.hero.subtitle}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a href="#work" className="btn-solid">{portfolio.hero.cta1}<Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#contact" className="btn-link">{portfolio.hero.cta2}</a>
          </div>

          <p className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.14em] text-muted">
            <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-clay/60" /><span className="relative h-2 w-2 rounded-full bg-clay" /></span>
            {portfolio.hero.badge}
          </p>
        </div>

        <div data-reveal>
          <ArchPortrait src="/assets/heni-real-photo.png" webp="/assets/heni-real-photo.webp" alt="Heni Mechi, Senior Full-Stack Developer" />
          <p className="mx-auto mt-8 max-w-[420px] border-t border-ink/20 pt-3 font-mono text-[10px] uppercase leading-5 tracking-[.14em] text-muted">
            <span className="text-ink">Fig. 01</span> — Heni Mechi, Sousse (TN).<br />Building web products since 2019.
          </p>
        </div>
      </div>

      <div className="shell grid grid-cols-2 border-y border-ink/15 lg:grid-cols-4">
        {portfolio.stats.map(([value, label], i) => (
          <div key={label} data-reveal className={`px-4 py-8 md:px-6 ${i % 2 ? 'border-l' : ''} ${i === 2 ? 'border-t lg:border-l lg:border-t-0' : ''} ${i === 3 ? 'border-t lg:border-t-0' : ''} border-ink/15`}>
            <strong className="block font-display text-[clamp(2.4rem,4.5vw,3.6rem)] font-light leading-none tracking-[-.03em] text-azur">{value}</strong>
            <span className="mt-3 block max-w-[24ch] font-mono text-[10px] uppercase leading-5 tracking-[.12em] text-muted">{label}</span>
          </div>
        ))}
      </div>

      <div className="shell py-10">
        <p className="kicker text-center !text-muted">They trusted the work</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 font-display text-[clamp(1.2rem,2.2vw,1.7rem)] italic">
          {portfolio.brands.map((brand, i) => (
            <li key={brand} className="flex items-center gap-5">
              {i > 0 && <Khatam filled className="h-3 w-3 text-clay" />}
              <span>{brand}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
