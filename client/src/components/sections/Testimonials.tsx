import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-28">
      <div data-reveal className="grid gap-5 lg:grid-cols-3">
        {portfolio.testimonials.map(([title, text], index) => (
          <article key={title} className="rounded-[2rem] border border-black/10 bg-white/45 p-7 dark:border-white/10 dark:bg-white/[.035]">
            <span className="text-[10px] font-extrabold uppercase tracking-[.15em] text-black/30 dark:text-white/30">Principle 0{index + 1}</span>
            <h3 className="mt-8 text-2xl font-extrabold tracking-[-.03em] text-[#111318] dark:text-white">{title}</h3>
            <p className="mt-4 text-sm font-medium leading-7 text-black/50 dark:text-white/50">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
