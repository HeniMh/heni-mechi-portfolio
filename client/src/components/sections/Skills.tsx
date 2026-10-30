import { portfolio } from '@/data/portfolio';
import { SkillIcon } from '@/components/ui/Icon';

const groups = [
  { title: 'Frontend', match: ['React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Tailwind CSS','Sass','HTML5','CSS3'] },
  { title: 'Backend & APIs', match: ['Node.js','Express','NestJS','REST APIs','TypeORM'] },
  { title: 'Data', match: ['PostgreSQL','MySQL','MongoDB'] },
  { title: 'Testing', match: ['Jest','React Testing Library'] },
  { title: 'DevOps & CI/CD', match: ['Git','GitHub Actions','GitLab CI','Docker','Webpack','Jira'] },
  { title: 'CMS, e-commerce & AI', match: ['Drupal','Twig','Hybris','Cursor','Claude AI'] }
];

export function Skills() {
  return (
    <section id="stack" className="mx-auto w-[min(1180px,calc(100%-32px))] py-28">
      <div data-reveal className="w-full text-center">
        <div className="mx-auto w-full">
          <span className="section-kicker">03 / Stack</span>
          <h2 className="section-title mx-auto mt-5">Full-stack, from React interfaces to NestJS APIs.</h2>
        </div>
        <p className="mx-auto mt-5 w-full max-w-2xl text-base leading-8 text-black/70 dark:text-white/70">React.js, Next.js and TypeScript on the front end; Node.js, Express.js and NestJS with PostgreSQL, MySQL and MongoDB on the back end — backed by tests, CI/CD and Docker.</p>
      </div>

      <div className="mt-14 grid gap-3 lg:grid-cols-2">
        {groups.map((group, index) => (
          <article key={group.title} data-reveal className="card p-6">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-bold tracking-tight">{group.title}</h3>
              <span className="text-xs font-bold tabular-nums text-black/45 dark:text-white/45">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.match.filter(skill => portfolio.skills.includes(skill)).map(skill => (
                <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[13px] font-semibold text-[#111318] dark:border-white/10 dark:bg-white/5 dark:text-white">
                  <SkillIcon skill={skill} className="h-3.5 w-3.5 shrink-0" />
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
