import { portfolio } from '@/data/portfolio';
import { Icon } from '@/components/ui/Icon';

export function Freelance() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] pb-28">
      <div data-reveal className="overflow-hidden rounded-[2.4rem] border border-black/10 bg-[#d9ff63] text-black dark:border-white/10">
        <div className="grid gap-8 p-7 md:p-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-[.18em] opacity-45">AI + automation layer</span>
            <h2 className="mt-5 max-w-md font-display text-[clamp(2.3rem,4vw,4.5rem)] font-extrabold leading-[.98] tracking-[-.045em]">Less repetitive work. More product leverage.</h2>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 opacity-65">I can connect product interfaces with CRM, APIs, AI services and workflow automation — without turning the architecture into a black box.</p>
            <a href="#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-extrabold text-white transition hover:-translate-y-1">Discuss an automation <Icon name="arrow" className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {portfolio.freelance.slice(0,4).map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-black/10 bg-white/45 p-5 backdrop-blur">
                <span className="text-[9px] font-extrabold uppercase tracking-[.14em] opacity-35">0{index + 1}</span>
                <h3 className="mt-3 text-base font-extrabold">{title}</h3>
                <p className="mt-2 text-xs font-semibold leading-6 opacity-60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
