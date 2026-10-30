import { portfolio } from '@/data/portfolio';
import { Icon, type IconName } from '@/components/ui/Icon';

const icons: IconName[] = ['code','layers','ai','rocket','audit','speed'];

export function Services() {
  return (
    <section id="expertise" className="mx-auto w-[min(1180px,calc(100%-32px))] py-28">
      <div data-reveal className="w-full text-center">
        <div className="mx-auto w-full">
          <span className="section-kicker">01 / Expertise</span>
          <h2 className="section-title mx-auto mt-5">From interface to infrastructure.</h2>
        </div>
        <p className="mx-auto mt-5 w-full max-w-2xl text-base leading-8 text-black/70 dark:text-white/70">I work across the product stack: React and Next.js interfaces, Node.js and NestJS APIs, databases, testing, performance and CI/CD. The goal is not more technology — it is a cleaner, faster and more reliable product.</p>
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map(([title, text], index) => (
          <article key={title} data-reveal className="card group p-7 transition duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20">
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#111318] text-[#d9ff63] dark:bg-[#d9ff63] dark:text-[#111318]"><Icon name={icons[index]} className="h-5 w-5" /></div>
              <span className="text-xs font-bold tabular-nums text-black/45 dark:text-white/45">0{index + 1}</span>
            </div>
            <h3 className="mt-8 text-xl font-bold tracking-[-.02em]">{title}</h3>
            <p className="mt-3 text-[15px] leading-7 text-black/70 dark:text-white/70">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
