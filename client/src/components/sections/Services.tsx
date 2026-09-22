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
        <p className="mx-auto mt-5 w-full max-w-4xl text-base font-medium leading-8 text-black/55 dark:text-white/55">I work across the product stack: high-quality front-end, backend services, AI-assisted engineering, automation, testing and data. The goal is not more technology — it is a cleaner, faster and more reliable product.</p>
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {portfolio.services.map(([title, text], index) => (
          <article key={title} data-reveal className={`group min-h-[270px] rounded-[2rem] border border-black/10 p-7 transition duration-300 hover:-translate-y-1 dark:border-white/10 ${index === 0 ? 'bg-[#111318] text-white' : index === 3 ? 'bg-[#d9ff63] text-black' : 'bg-white/45 text-[#111318] dark:bg-white/[.035] dark:text-white'}`}>
            <div className={`grid h-12 w-12 place-items-center rounded-2xl border ${index === 0 ? 'border-white/15 bg-white/10' : 'border-black/10 bg-white/45 dark:border-white/10 dark:bg-white/5'}`}><Icon name={icons[index]} className="h-5 w-5" /></div>
            <span className="mt-10 block text-[10px] font-extrabold uppercase tracking-[.16em] opacity-40">0{index + 1}</span>
            <h3 className="mt-3 text-xl font-extrabold tracking-[-.025em]">{title}</h3>
            <p className="mt-3 text-sm font-medium leading-7 opacity-[.62]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
