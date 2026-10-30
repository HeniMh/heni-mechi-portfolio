import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  return (
    <section className="border-y border-ink/15 bg-paper2">
      <div className="shell grid lg:grid-cols-3">
        {portfolio.testimonials.map(([title, text], index) => (
          <figure key={title} data-reveal className={`py-14 lg:px-10 lg:py-20 ${index > 0 ? 'border-t border-ink/15 lg:border-l lg:border-t-0' : 'lg:pl-0'} ${index === 2 ? 'lg:pr-0' : ''}`}>
            <span className="font-display text-6xl leading-none text-clay" aria-hidden="true">“</span>
            <blockquote className="mt-2 font-display text-[1.35rem] italic leading-snug">{text}</blockquote>
            <figcaption className="mt-6 font-mono text-[10px] uppercase tracking-[.14em] text-muted">Principle 0{index + 1} — {title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
