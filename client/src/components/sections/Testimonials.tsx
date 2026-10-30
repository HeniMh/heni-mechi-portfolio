import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  return (
    <section className="shell pb-24 md:pb-32">
      <div className="grid gap-3 lg:grid-cols-3">
        {portfolio.testimonials.map(([title, text], index) => (
          <figure key={title} data-reveal data-spot className="spot card flex flex-col justify-between gap-10 p-7">
            <blockquote className="text-lg leading-8 tracking-[-.015em] text-ink/85">“{text}”</blockquote>
            <figcaption className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[.14em] text-muted">
              <span>{title}</span>
              <span className="text-accent">0{index + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
