import { portfolio } from '@/data/portfolio';

const groups = [
  { title: 'Frontend', match: ['React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Tailwind CSS','Sass','HTML5','CSS3'] },
  { title: 'Backend & APIs', match: ['Node.js','Express','NestJS','REST APIs','OpenAI API'] },
  { title: 'Data', match: ['PostgreSQL','MySQL','MongoDB','Prisma'] },
  { title: 'Testing', match: ['Jest','React Testing Library','Vitest','Cypress','Playwright'] },
  { title: 'Automation & CRM', match: ['n8n','Make','Zapier','HubSpot CRM'] },
  { title: 'Platforms & delivery', match: ['Drupal','Twig','Hybris','Git','Docker','Webpack','Jira','Cursor','Claude AI'] }
];

export function Skills() {
  return (
    <section id="stack" className="mx-auto w-[min(1180px,calc(100%-32px))] py-28">
      <div data-reveal className="grid gap-6 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
        <div>
          <span className="section-kicker">03 / Stack</span>
          <h2 className="section-title mt-5">Front-end first, with strong supporting technical breadth.</h2>
        </div>
        <p className="max-w-2xl text-base font-medium leading-8 text-black/55 dark:text-white/55 lg:justify-self-end">The core focus stays on front-end excellence — React, Next.js, TypeScript, UI engineering, performance and accessibility — with Node.js, NestJS, CRM automation, testing and databases as complementary strengths.</p>
      </div>

      <div className="mt-14 grid gap-3 lg:grid-cols-2">
        {groups.map((group, index) => (
          <article key={group.title} data-reveal className={`rounded-[2rem] border border-black/10 p-6 dark:border-white/10 ${index === 1 || index === 4 ? 'bg-[#efe7ff] text-black dark:bg-[#211c2c] dark:text-white' : 'bg-white/45 text-[#111318] dark:bg-white/[.035] dark:text-white'}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold tracking-tight">{group.title}</h3>
              <span className="rounded-full border border-current/10 px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.12em] opacity-45">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.match.filter(skill => portfolio.skills.includes(skill)).map(skill => <span key={skill} className="rounded-full border border-current/10 bg-white/35 px-3 py-2 text-xs font-extrabold dark:bg-white/5">{skill}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
