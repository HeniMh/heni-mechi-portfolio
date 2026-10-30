import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-28">
      <div data-reveal className="grid gap-5 lg:grid-cols-3">
        {portfolio.testimonials.map(([title, text], index) => (
          <article key={title} className="card p-7">
            <span className="text-[11px] font-bold uppercase tracking-[.15em] text-black/70 dark:text-white/70">Principle 0{index + 1}</span>
            <h3 className="mt-8 text-2xl font-bold tracking-[-.03em] text-[#111318] dark:text-white">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-black/70 dark:text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
