import { Star } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  return (
    <section className="mx-auto w-[min(1120px,calc(100%-32px))] py-24">
      <div data-reveal className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">Why clients trust me</span>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[-0.04em] text-slate-950 dark:text-white">Professional collaboration focused on quality</h2>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {portfolio.testimonials.map(([title, text]) => (
          <article key={title} data-reveal className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[.04]">
            <div className="mb-5 flex gap-1 text-blue-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <h3 className="text-lg font-black text-slate-950 dark:text-white">{title}</h3>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
