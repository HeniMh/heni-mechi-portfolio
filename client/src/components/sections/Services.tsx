import { portfolio } from '@/data/portfolio';
import { Icon, type IconName } from '@/components/ui/Icon';

const icons: IconName[] = ['code', 'rest', 'layers', 'testing', 'speed', 'rocket'];
const spans = ['lg:col-span-2', '', '', 'lg:col-span-2', '', 'lg:col-span-2'];

export function Services() {
  return (
    <section id="expertise" className="shell py-24 md:py-32">
      <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <p className="eyebrow">01 — Expertise</p>
          <h2 className="title mt-5">From interface <span className="title-dim">to infrastructure.</span></h2>
        </div>
        <p className="max-w-[50ch] leading-7 text-muted lg:justify-self-end">React and Next.js interfaces, Node.js and NestJS APIs, databases, testing, performance and CI/CD — for a cleaner, faster and more reliable product.</p>
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map(([title, text], index) => (
          <article key={title} data-reveal data-spot className={`spot card group flex min-h-[250px] flex-col justify-between p-7 ${spans[index]}`}>
            <div className="flex items-start justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-ink/10 bg-raised text-ink transition group-hover:border-accent/50 group-hover:text-accent">
                <Icon name={icons[index]} className="h-5 w-5" />
              </span>
              <span className="font-mono text-xs text-ink/25">0{index + 1}</span>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold tracking-[-.03em]">{title}</h3>
              <p className="mt-2 max-w-[52ch] text-sm leading-6 text-muted">{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
