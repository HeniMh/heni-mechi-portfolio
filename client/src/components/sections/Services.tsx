import { portfolio } from '@/data/portfolio';
import { Khatam } from '@/components/ui/Ornaments';

const numerals = ['i', 'ii', 'iii', 'iv', 'v', 'vi'];

export function Services() {
  return (
    <section id="expertise" className="shell grid gap-12 py-24 md:py-32 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
      <div data-reveal className="lg:sticky lg:top-36 lg:self-start">
        <p className="kicker">§ 01 — Expertise</p>
        <h2 className="chapter-title mt-6">From interface <em>to</em> infrastructure.</h2>
        <p className="mt-8 max-w-[46ch] leading-8 text-ink/70">
          React and Next.js interfaces, Node.js and NestJS APIs, databases, testing, performance and CI/CD. The goal is not more technology — it is a cleaner, faster and more reliable product.
        </p>
        <Khatam className="mt-10 h-14 w-14 text-clay/70" />
      </div>

      <ol className="border-t border-ink/15">
        {portfolio.services.map(([title, text], index) => (
          <li key={title} data-reveal className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/15 py-8 md:grid-cols-[4rem_1fr]">
            <span className="pt-2 font-mono text-xs text-clay">{numerals[index]}.</span>
            <div>
              <h3 className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-tight transition group-hover:text-azur">{title}</h3>
              <p className="mt-3 max-w-[56ch] leading-7 text-ink/65">{text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
