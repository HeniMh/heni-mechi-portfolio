import type { PortfolioData } from '@/types/portfolio';

export const portfolio: PortfolioData = {
  name: 'Heni Mechi',
  role: 'Senior Full-Stack Developer',
  email: 'hanimechi96@gmail.com',
  phone: '+21629002187',
  whatsapp: '+330651835413',
  linkedin: 'Heni Mechi',
  linkedinUrl: 'https://www.linkedin.com/in/heni-mechi-431919177',
  hero: {
    title: 'I design, build and maintain fast, reliable full-stack web applications.',
    subtitle: 'Senior Full-Stack Developer with 5+ years of experience — React.js, Next.js and TypeScript on the front end, Node.js, Express.js and NestJS for back-end services and REST APIs. High-traffic e-commerce, booking platforms and institutional sites for clients like Conforama, Accor and Michelin.',
    badge: 'Based in Sousse (Tunisia) · remote or relocation to France',
    cta1: 'Explore selected work',
    cta2: 'Start a conversation'
  },
  stats: [
    ['5+', 'years building production web applications'],
    ['7', 'major client environments'],
    ['95%', 'test coverage reached on Astore (Accor)'],
    ['96/100', 'Lighthouse on Conforama product pages']
  ],
  brands: ['Accor', 'Comédie-Française', 'Conforama', 'Michelin', 'Macif', 'STEF', 'La Maison du Chocolat'],
  situations: [
    ['Full-stack product engineering', 'React and Next.js interfaces backed by Node.js and NestJS REST APIs, with clean data models, authentication and authorization.'],
    ['High-traffic e-commerce', 'Customer journeys, Core Web Vitals and technical SEO on a platform serving 5 to 10 million visits per month.'],
    ['Quality & team practices', 'Unit and integration tests, code reviews, production incident fixing and mentoring junior developers in Agile/Scrum teams.']
  ],
  services: [
    ['Front-end product engineering', 'React.js, Next.js (SSR/SSG) and TypeScript applications with reusable components, Redux Toolkit and React Query.'],
    ['Back-end & REST APIs', 'Node.js, Express.js and NestJS services, TypeORM data modeling, authentication, authorization, error handling and integrations.'],
    ['E-commerce & payments', 'BFF layers on SAP Commerce Cloud (Hybris) OCC APIs, MongoDB caching and server-side Monext payment integration.'],
    ['Testing & quality', 'Unit and integration tests with Jest and React Testing Library, code reviews, debugging and corrective maintenance.'],
    ['Performance & SEO', 'Core Web Vitals, lazy loading, code splitting, interface optimization and technical SEO.'],
    ['DevOps & AI-assisted delivery', 'Docker, CI/CD with GitHub Actions and GitLab CI, and AI assistants like Claude and Cursor to speed up delivery.']
  ],
  projects: [
    { title:'Astore Procurement (Accor)', image:'/assets/astore.png', role:'Full-Stack Developer', period:'2025 – 2026', place:'Remote', highlight:'95% test coverage', description:'Procurement platform for hospitality professionals: Next.js SSR features, NestJS/TypeORM/PostgreSQL REST APIs with authentication and authorization, React Query data layer and test coverage raised to 95%.', tags:['Next.js','React','TypeScript','React Query','NestJS','PostgreSQL','Jest'] },
    { title:'Comédie-Française', image:'/assets/comedie.png', role:'Full-Stack Developer', period:'2025', place:'Remote', highlight:'Online ticketing + Monext payments', description:'Redesign of the institutional site and online booking and ticketing platform: responsive React interfaces, Redux Toolkit state, Node.js booking APIs and server-side Monext payments.', tags:['React','TypeScript','Redux Toolkit','Node.js','REST','Monext'] },
    { title:'Conforama', image:'/assets/conforama.png', role:'Full-Stack Developer', period:'2022 – 2024', place:'Paris, on-site', highlight:'Lighthouse 96/100 · 5–10M visits/month', description:'E-commerce platform with 5 to 10 million monthly visits: reusable React components, Lighthouse 96/100 on product pages and a Node.js/Express BFF on SAP Commerce Cloud OCC APIs with MongoDB caching.', tags:['React','TypeScript','Node.js','Express','MongoDB','Hybris'] },
    { title:'Michelin / Digital Week', image:'/assets/digitalweek.png', role:'Full-Stack Developer', period:'2021 – 2022', place:'Tunis, hybrid', highlight:'React pages + Node.js REST APIs', description:'Responsive React pages and components faithful to UI/UX mockups, powered by REST APIs built with Node.js, Express.js and MySQL.', tags:['React','JavaScript','Node.js','Express','MySQL','Sass'] },
    { title:'Macif', image:'/assets/macif.png', role:'Full-Stack Developer', period:'2020 – 2021', place:'Tunis, hybrid', highlight:'Quote simulators + pricing BFF', description:'Quote simulators and forms in React integrated into Drupal/Twig templates, with a Node.js/Express BFF to pricing services and MySQL storage.', tags:['React','Node.js','Express','MySQL','Drupal','Twig'] },
    { title:'STEF', image:'/assets/stef.png', role:'Web Developer', period:'2019 – 2020', place:'Tunis, hybrid', highlight:'Drupal multisite platform', description:'Institutional sites and multisite platform for a European temperature-controlled logistics group, with responsive Drupal/Twig pages maintained under Docker.', tags:['Drupal','Twig','JavaScript','jQuery','Docker'] },
    { title:'La Maison du Chocolat', role:'Web Developer', period:'2019', place:'Tunis, hybrid', highlight:'First mission · luxury e-commerce', description:'E-commerce site for a high-end French chocolatier: pages in JavaScript, jQuery, HTML5 and CSS3 faithful to the mockups and brand identity, with customized Drupal/Twig templates adapted to every screen size.', tags:['JavaScript','jQuery','Drupal','Twig','Gulp.js'] }
  ],
  process: [
    ['01', 'Understand', 'Analyze functional needs, users, business constraints and technical context to design a solution that fits the project goals.'],
    ['02', 'Architect', 'Define the component model, data flow, API contracts, data models, authentication and testing strategy before implementation gets complex.'],
    ['03', 'Build', 'Develop front end and back end iteratively with React / Next.js, Node.js / NestJS and typed contracts, with code reviews along the way.'],
    ['04', 'Validate & ship', 'Cover critical flows with tests, optimize performance, containerize with Docker and automate deployments with CI/CD.']
  ],
  skills: [
    'React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Sass','HTML5','CSS3',
    'Node.js','Express','NestJS','REST APIs','TypeORM',
    'PostgreSQL','MySQL','MongoDB',
    'Jest','React Testing Library',
    'Git','GitHub Actions','GitLab CI','Docker','Webpack','Jira',
    'Drupal','Twig','Hybris','Cursor','Claude AI'
  ],
  freelance: [
    ['Custom web applications', 'From requirements to production: analysis, React/Next.js front end, NestJS or Node.js back end and deployment.'],
    ['Full-stack feature delivery', 'Own a feature end-to-end: UI, API, validation, database integration, tests and production polish.'],
    ['APIs & integrations', 'REST APIs with authentication and authorization, third-party services and payment integrations.'],
    ['Frontend modernization', 'Refactor legacy interfaces into faster, cleaner and more maintainable component systems without losing business functionality.'],
    ['Quality & test coverage', 'Add pragmatic unit and integration tests around critical user flows with Jest and React Testing Library.'],
    ['Performance & SEO', 'Improve Core Web Vitals, technical SEO, responsive quality and usability across devices.']
  ],
  packages: [
    { name: 'Product Sprint', price: 'Scoped project', description: 'A focused implementation sprint for a feature, flow or product milestone.', items: ['React / Next.js delivery', 'API integration', 'Responsive QA', 'Technical handover'] },
    { name: 'Full-Stack Build', price: 'Scoped project', description: 'A complete web application, from requirements to production.', items: ['Next.js + NestJS', 'PostgreSQL / MongoDB', 'Tests & CI/CD', 'Docker deployment'] },
    { name: 'Embedded Developer', price: 'Monthly / contract', description: 'Longer collaboration inside an existing product or engineering team.', items: ['Feature delivery', 'Architecture & refactoring', 'Testing & performance', 'Code reviews & mentoring'] }
  ],
  testimonials: [
    ['Senior delivery mindset', 'Comfortable moving from UI detail to architecture, APIs and production constraints without losing sight of the user experience.'],
    ['Quality-driven engineering', 'Tests, code reviews and performance are part of the work, not an afterthought — with AI tools used to accelerate, not replace, judgment.'],
    ['Business-aware implementation', 'Technical choices are tied to speed, maintainability, conversion, accessibility and the operational reality of the product.']
  ]
};
