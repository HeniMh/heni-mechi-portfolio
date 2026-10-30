import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Freelance() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))]">
      <div data-reveal className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#d9ff63] text-black dark:border-white/10">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#111318] px-3 py-1 text-[11px] font-bold uppercase tracking-[.16em] text-[#d9ff63]">Freelance · since Aug 2026</span>
            <h2 className="mt-5 max-w-md font-display text-[clamp(2rem,3.4vw,3.2rem)] font-bold leading-[1.08] tracking-[-.03em]">From requirements to production.</h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-black/75">I build the interface, the API and the database together — tested, containerized with Docker and deployed through CI/CD.</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1">Discuss a project <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolio.freelance.slice(0,4).map(([title, text], index) => (
              <article key={title} className="rounded-[1.2rem] border border-black/10 bg-white/55 p-5">
                <span className="text-xs font-bold tabular-nums text-black/55">0{index + 1}</span>
                <h3 className="mt-3 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-black/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
