import { portfolio } from '@/data/portfolio';

const groups = [
  { title: 'Front end', match: ['React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Sass','HTML5','CSS3'] },
  { title: 'Back end & APIs', match: ['Node.js','Express','NestJS','REST APIs','TypeORM'] },
  { title: 'Data', match: ['PostgreSQL','MySQL','MongoDB'] },
  { title: 'Testing', match: ['Jest','React Testing Library'] },
  { title: 'DevOps & tooling', match: ['Git','GitHub Actions','GitLab CI','Docker','Webpack','Jira'] },
  { title: 'CMS, commerce & AI', match: ['Drupal','Twig','Hybris','Cursor','Claude AI'] }
];

export function Skills() {
  return (
    <section id="stack" className="shell py-24 md:py-32">
      <div data-reveal className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <p className="kicker">§ 03 — Stack</p>
          <h2 className="chapter-title mt-6">The <em>spec sheet.</em></h2>
        </div>
        <p className="max-w-[52ch] leading-8 text-ink/70">
          React.js, Next.js and TypeScript on the front end; Node.js, Express.js and NestJS with PostgreSQL, MySQL and MongoDB on the back end — backed by tests, CI/CD and Docker.
        </p>
      </div>

      <dl className="mt-14 border-t-2 border-ink">
        {groups.map((group, index) => (
          <div key={group.title} data-reveal className="grid gap-3 border-b border-ink/15 py-6 md:grid-cols-[3rem_16rem_1fr] md:items-baseline md:gap-4">
            <span className="hidden font-mono text-xs text-clay md:block">{String(index + 1).padStart(2, '0')}</span>
            <dt className="font-display text-2xl italic">{group.title}</dt>
            <dd className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[13px] leading-7 text-ink/80">
              {group.match.filter(skill => portfolio.skills.includes(skill)).map((skill, i) => (
                <span key={skill}>{i > 0 && <span className="mr-2 text-clay/70">/</span>}{skill}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
