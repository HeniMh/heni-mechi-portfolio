import { useState } from 'react';
import { portfolio } from '@/data/portfolio';
import { ChevronDown } from 'lucide-react';
import { Icon, type IconName } from '@/components/ui/Icon';

const icons: IconName[] = ['audit', 'design', 'code', 'speed'];

export function Process() {
  const [open, setOpen] = useState(0);
  return (
    <section id="process" className="mx-auto w-[min(1120px,calc(100%-32px))] py-24">
      <div data-reveal className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-black uppercase tracking-[.22em] text-blue-600 dark:text-blue-300">Process</span>
        <h2 className="mt-4 font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-[-0.04em] text-slate-950 dark:text-white">Simple, professional and transparent workflow</h2>
      </div>
      <div data-reveal className="mt-12 divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
        {portfolio.process.map((p, index) => (
          <article key={p[1]} className="group">
            <button type="button" onClick={() => setOpen(open === index ? -1 : index)} className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 py-6 text-left">
              <span className="hidden text-sm font-black text-blue-600 dark:text-blue-300 sm:block">{p[0]}</span>
              <span className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300"><Icon name={icons[index]} className="h-6 w-6" /></span>
                <strong className="text-xl font-black tracking-tight text-slate-950 dark:text-white">{p[1]}</strong>
              </span>
              <span className={`ml-auto grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition duration-300 dark:border-white/10 dark:text-white ${open === index ? 'rotate-180 bg-blue-600 text-white dark:bg-blue-600' : 'rotate-0'}`}>
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="max-w-3xl pl-16 text-sm font-medium leading-7 text-slate-600 dark:text-slate-300 sm:pl-24">{p[2]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
