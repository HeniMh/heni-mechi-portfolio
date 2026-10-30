import { portfolio } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Testimonials() {
  return (
    <section className="section-shell pt-0">
      <SectionHeader index="05" label="Principles" title="How I work with teams." />
      <div className="mt-14 grid gap-3 lg:grid-cols-3">
        {portfolio.testimonials.map(([title, text]) => (
          <article key={title} data-reveal className="card p-7">
            <span className="block text-5xl font-bold leading-none text-[#89b927] dark:text-[#d9ff63]" aria-hidden="true">“</span>
            <h3 className="mt-4 text-xl font-bold tracking-[-.02em]">{title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-black/70 dark:text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
