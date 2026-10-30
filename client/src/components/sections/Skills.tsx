import { portfolio } from '@/data/portfolio';
import { SkillIcon } from '@/components/ui/Icon';

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
      <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <p className="eyebrow">03 — Stack</p>
          <h2 className="title mt-5">The tools <span className="title-dim">I ship with.</span></h2>
        </div>
        <p className="max-w-[50ch] leading-7 text-muted lg:justify-self-end">React.js, Next.js and TypeScript on the front end; Node.js, Express.js and NestJS with PostgreSQL, MySQL and MongoDB on the back end — backed by tests, CI/CD and Docker.</p>
      </div>

      <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((group, index) => (
          <article key={group.title} data-reveal data-spot className="spot card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold tracking-[-.02em]">{group.title}</h3>
              <span className="font-mono text-xs text-ink/25">0{index + 1}</span>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.match.filter(skill => portfolio.skills.includes(skill)).map(skill => (
                <li key={skill} className="chip group transition hover:border-ink/25 hover:text-ink">
                  <SkillIcon skill={skill} className="h-3.5 w-3.5 shrink-0 opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
