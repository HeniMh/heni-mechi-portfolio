import { portfolio } from '@/data/portfolio';
import { Khatam } from '@/components/ui/Ornaments';

export function Process() {
  return (
    <section id="process" className="shell py-24 md:py-32">
      <div data-reveal className="max-w-3xl">
        <p className="kicker">§ 04 — Process</p>
        <h2 className="chapter-title mt-6">Four steps, <em>every time.</em></h2>
        <p className="mt-8 max-w-[52ch] leading-8 text-ink/70">A clear, repeatable process keeps the work focused, testable and aligned with the product goal.</p>
      </div>

      <ol className="relative mt-16 grid gap-12 lg:grid-cols-4 lg:gap-8">
        <span className="absolute left-[11px] top-3 h-[calc(100%-1.5rem)] w-px bg-ink/20 lg:left-3 lg:right-0 lg:top-[11px] lg:h-px lg:w-auto" aria-hidden="true" />
        {portfolio.process.map(([number, title, text]) => (
          <li key={title} data-reveal className="relative pl-12 lg:pl-0 lg:pt-14">
            <span className="absolute left-0 top-0 bg-paper text-clay"><Khatam filled className="h-6 w-6" /></span>
            <span className="font-mono text-xs text-muted">Step {number}</span>
            <h3 className="mt-2 font-display text-3xl">{title}</h3>
            <p className="mt-4 leading-7 text-ink/65">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
