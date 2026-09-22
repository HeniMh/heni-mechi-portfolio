import type { PortfolioData } from '@/types/portfolio';

export const portfolio: PortfolioData = {
  name: 'Heni Mechi',
  role: 'Senior Front-End Developer',
  email: 'hanimechi96@gmail.com',
  phone: '+21629002187',
  whatsapp: '+330651835413',
  linkedin: 'Heni Mechi',
  linkedinUrl: 'https://www.linkedin.com/in/heni-mechi-431919177',
  hero: {
    title: 'I design and build clean, high-performance front-end experiences.',
    subtitle: 'Senior Front-End Developer specialized in React, Next.js and modern UI engineering — with solid experience in Node.js, NestJS, CRM automation, testing and databases to support end-to-end product delivery.',
    badge: 'Available for product teams · freelance · long-term missions',
    cta1: 'Explore selected work',
    cta2: 'Start a conversation'
  },
  stats: [
    ['6+', 'years building production interfaces'],
    ['7', 'major client environments'],
    ['Front-end', 'performance, UI & accessibility'],
    ['Beyond front-end', 'Node.js, NestJS, data & automation']
  ],
  brands: ['Accor Hotels', 'Comédie-Française', 'Conforama', 'Michelin', 'Macif', 'STEF', 'La Maison du Chocolat'],
  situations: [
    ['Front-end product engineering', 'Design systems, complex React interfaces, state management, responsive behavior and maintainable UI architecture.'],
    ['Modern delivery workflow', 'React, Next.js and TypeScript delivery supported by AI-assisted workflows for faster refactoring, component generation and quality improvement.'],
    ['Automation & CRM', 'Workflow orchestration with n8n, Make, Zapier and CRM integrations to connect forms, leads, notifications and business processes.']
  ],
  services: [
    ['Front-end product engineering', 'React, Next.js and TypeScript applications with robust component architecture, state management and responsive UI.'],
    ['Full-stack development', 'Node.js, Express and NestJS services, REST APIs, authentication, data flows and third-party integrations.'],
    ['AI-assisted engineering', 'Practical AI integration and AI-augmented development using OpenAI APIs, Claude and Cursor while keeping engineering quality in control.'],
    ['CRM & workflow automation', 'n8n, Make, Zapier and CRM-oriented automations for lead capture, notifications, data synchronization and operations.'],
    ['Testing & quality', 'Unit, integration and end-to-end testing with Jest, React Testing Library, Vitest, Cypress and Playwright.'],
    ['Performance & accessibility', 'Core Web Vitals, image and bundle optimization, semantic HTML, responsive behavior and accessibility-focused implementation.']
  ],
  projects: [
    { title:'Accor Hotels', image:'/assets/astore.png', role:'Front-End / Client Project Lead', description:'Multilingual and multi-region hospitality interfaces, reusable components, responsive adaptation, performance optimization and API-connected experiences.', tags:['React','JavaScript','Node.js','Drupal','Twig','AI-assisted workflow'] },
    { title:'Comédie-Française', image:'/assets/comedie.png', role:'Full-Stack Developer', description:'Website and ticketing redesign with modern React interfaces, reservation flows, payment integration, API services and performance improvements.', tags:['React','Redux Toolkit','React Query','Node.js','REST','Monext'] },
    { title:'Conforama', image:'/assets/conforama.png', role:'Full-Stack Developer', description:'Large-scale e-commerce modernization with TypeScript, reusable React architecture, service integrations, data validation and Core Web Vitals optimization.', tags:['React','TypeScript','Node.js','MongoDB','Redux Toolkit','Hybris'] },
    { title:'Michelin / Digital Week', image:'/assets/digitalweek.png', role:'Front-End Developer', description:'Responsive corporate experience delivered for an international brand with structured front-end integration and polished interactions.', tags:['HTML5','Sass','JavaScript','jQuery','Gulp'] },
    { title:'Macif', image:'/assets/macif.png', role:'Front-End Developer', description:'Reusable pages and design-system components integrated into a Drupal ecosystem with responsive, accessible front-end implementation.', tags:['Drupal','Twig','Bootstrap','JavaScript'] },
    { title:'STEF', image:'/assets/stef.png', role:'Front-End Developer', description:'Drupal multisite blocks and corporate interface work for a logistics platform, with reusable templates and responsive behavior.', tags:['Drupal','Twig','Docker','JavaScript'] }
  ],
  process: [
    ['01', 'Understand', 'Clarify the product goal, users, business constraints, technical context and the parts where AI or automation can create real leverage.'],
    ['02', 'Architect', 'Define the component model, data flow, API boundaries, testing strategy and automation touchpoints before implementation gets complex.'],
    ['03', 'Build', 'Develop iteratively with React / Next.js, Node / NestJS, typed contracts and AI-assisted engineering used as an accelerator — not a substitute for judgment.'],
    ['04', 'Validate & ship', 'Test critical flows, optimize performance and accessibility, verify responsive behavior and deliver a maintainable production-ready result.']
  ],
  skills: [
    'React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Tailwind CSS','Sass','HTML5','CSS3',
    'Node.js','Express','NestJS','REST APIs','OpenAI API',
    'PostgreSQL','MySQL','MongoDB','Prisma',
    'Jest','React Testing Library','Vitest','Cypress','Playwright',
    'n8n','Make','Zapier','HubSpot CRM',
    'Drupal','Twig','Hybris','Git','Docker','Webpack','Jira','Cursor','Claude AI'
  ],
  freelance: [
    ['AI-ready product development', 'Build or modernize a web product with a clean React/Next.js foundation and room for AI features, automation and data integrations.'],
    ['CRM automation systems', 'Connect forms, CRM, email, internal tools and notifications with n8n, Make or Zapier to reduce repetitive manual work.'],
    ['Full-stack feature delivery', 'Own a feature end-to-end: UI, API, validation, database integration, tests and production polish.'],
    ['Frontend modernization', 'Refactor legacy interfaces into faster, cleaner and more maintainable component systems without losing business functionality.'],
    ['Quality & test coverage', 'Add pragmatic testing around critical user flows using unit, integration and end-to-end tooling.'],
    ['Performance & accessibility', 'Improve Core Web Vitals, responsive quality, semantic structure and usability across devices.']
  ],
  packages: [
    { name: 'Product Sprint', price: 'Scoped project', description: 'A focused implementation sprint for a feature, flow or product milestone.', items: ['React / Next.js delivery', 'API integration', 'Responsive QA', 'Technical handover'] },
    { name: 'Automation Sprint', price: 'Scoped project', description: 'Connect your website, CRM and operational tools into one reliable workflow.', items: ['n8n / Make / Zapier', 'CRM + forms', 'Notifications & sync', 'Failure-path checks'] },
    { name: 'Embedded Developer', price: 'Monthly / contract', description: 'Longer collaboration inside an existing product or engineering team.', items: ['Feature delivery', 'Architecture & refactoring', 'Testing & performance', 'AI-augmented workflow'] }
  ],
  testimonials: [
    ['Senior delivery mindset', 'Comfortable moving from UI detail to architecture, APIs and production constraints without losing sight of the user experience.'],
    ['Modern engineering workflow', 'AI tools are used to accelerate exploration and execution while code quality, testing and decisions stay engineering-led.'],
    ['Business-aware implementation', 'Technical choices are tied to speed, maintainability, conversion, accessibility and the operational reality of the product.']
  ]
};
