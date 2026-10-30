import { portfolio } from '@/data/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Process() {
  return (
    <section id="process" className="section-shell">
      <SectionHeader
        index="04"
        label="Process"
        title="A disciplined workflow, from brief to production."
        lead="A clear, repeatable process keeps the work focused, testable and aligned with the product goal."
      />
      <ol className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {portfolio.process.map(([number, title, text]) => (
          <li key={title} data-reveal className="card group relative p-7 transition duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111318] text-sm font-bold tabular-nums text-[#d9ff63] dark:bg-[#d9ff63] dark:text-[#111318]">{number}</span>
            <h3 className="mt-8 text-xl font-bold tracking-[-.02em]">{title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-black/70 dark:text-white/70">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
