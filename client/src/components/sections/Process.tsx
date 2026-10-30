import { portfolio } from '@/data/portfolio';

export function Process() {
  return (
    <section id="process" className="shell pb-24 md:pb-32">
      <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <p className="eyebrow">04 — Process</p>
          <h2 className="title mt-5">Four steps, <span className="title-dim">every time.</span></h2>
        </div>
        <p className="max-w-[50ch] leading-7 text-muted lg:justify-self-end">A clear, repeatable process keeps the work focused, testable and aligned with the product goal.</p>
      </div>

      <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.process.map(([number, title, text]) => (
          <li key={title} data-reveal className="group relative border-t border-ink/10 pt-6">
            <span className="absolute -top-px left-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full" aria-hidden="true" />
            <span className="text-outline block text-7xl font-semibold leading-none tracking-[-.06em] transition group-hover:[-webkit-text-stroke-color:rgb(var(--accent))]">{number}</span>
            <h3 className="mt-6 text-xl font-semibold tracking-[-.03em]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
