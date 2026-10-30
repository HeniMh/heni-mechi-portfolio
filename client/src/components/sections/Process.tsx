import { portfolio } from '@/data/portfolio';

export function Process() {
  return (
    <section id="process" className="bg-[#ebe7dc] py-28 dark:bg-[#0f1013]">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <div data-reveal className="w-full text-center">
          <span className="section-kicker">04 / Process</span>
          <h2 className="section-title mx-auto mt-5">A disciplined workflow, even when AI makes everything faster.</h2>
          <p className="mx-auto mt-5 w-full max-w-4xl text-base font-medium leading-8 text-black/55 dark:text-white/55">A clear, repeatable process keeps the work focused, testable and aligned with the product goal.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4">
          {portfolio.process.map(([number, title, text]) => (
            <article key={title} data-reveal className="min-h-[300px] bg-[#f5f2ea] p-6 dark:bg-[#111318]">
              <span className="text-[10px] font-extrabold uppercase tracking-[.16em] text-black/35 dark:text-white/35">{number}</span>
              <h3 className="mt-16 text-2xl font-extrabold tracking-[-.03em] text-[#111318] dark:text-white">{title}</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-black/50 dark:text-white/50">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
