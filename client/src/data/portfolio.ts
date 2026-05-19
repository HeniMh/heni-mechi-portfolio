import type { PortfolioData } from '@/types/portfolio';

export const portfolio: PortfolioData = {
  name: 'Heni Mechi',
  role: 'Senior React Front-End Developer',
  email: 'hanimechi96@gmail.com',
  phone: '+33 7 80 91 05 95',
  linkedin: 'Heni Mechi',
  linkedinUrl: 'https://www.linkedin.com/in/heni-mechi-431919177',
  hero: {
    title: 'Senior React Front-End Developer available for freelance missions and long-term opportunities',
    subtitle: 'I build modern, fast and responsive interfaces for freelance clients, Upwork projects and product teams. React js, Next js, JavaScript, TypeScript, performance and clean UI.',
    badge: 'Freelance available · Open to work in company',
    cta1: 'View projects',
    cta2: 'Contact me'
  },
  stats: [['5+', 'years experience'], ['20+', 'projects delivered'], ['95+', 'performance target'], ['100%', 'responsive & clean code']],
  brands: ['Accor Hotels', 'Comédie-Française', 'Conforama', 'Michelin', 'Macif', 'STEF', 'La Maison du Chocolat'],
  situations: [
    ['Need a senior front-end developer you can trust?', 'I handle UI integration, React components and front-end optimization with a clear and professional workflow.'],
    ['Is your project becoming technically complex?', 'I organize the front-end architecture, state management, APIs and performance to keep the codebase clean and scalable.'],
    ['Need to modernize an existing website?', 'I turn old interfaces into modern, fast, responsive and conversion-oriented web experiences.']
  ],
  services: [
    ['React / Next.js Development', 'Modern applications, reusable components, routing, state management and API integration.'],
    ['UI / UX Integration', 'Figma-to-code integration with pixel-perfect responsive interfaces and smooth details.'],
    ['Website Redesign', 'Visual modernization, user experience improvements, light animations and premium design.'],
    ['Performance Optimization', 'Core Web Vitals, lazy loading, image optimization, client rendering and accessibility improvements.'],
    ['E-commerce Front-End', 'Product pages, checkout flows, validation, filters, responsive UI and mobile-first experience.'],
    ['Long-term Support', 'Maintenance, bug fixing, new sections, continuous improvement and technical support.']
  ],
  projects: [
    { title:'Accor Hotels', image:'/assets/astore.png', role:'Front-End / Lead Client Project',  description:'Built modern React components, responsive multi-device interfaces and optimized international user experiences.', tags:['React.js','JavaScript','Sass','Drupal','Twig'] },
    { title:'Comédie-Française', image:'/assets/comedie.png', role:'Front-End Developer',  description:'Complete redesign of the website and ticketing system with React interfaces, reservation funnel and payment integration.', tags:['React','Redux Toolkit','React Query','Alpine.js','Monext'] },
    { title:'Conforama', image:'/assets/conforama.png', role:'Front-End Developer',  description:'Large-scale e-commerce front-end with TypeScript, Redux Toolkit, reusable components and Core Web Vitals optimization.', tags:['React','TypeScript','Redux Toolkit','Hybris','Sass'] },
    { title:'Michelin / Digital Week', image:'/assets/digitalweek.png', role:'Front-End Lead',  description:'Corporate responsive website for an international brand with clean HTML, Sass, jQuery and smooth interactions.', tags:['HTML5','Sass','jQuery','Gulp','Responsive'] },
    { title:'Macif', image:'/assets/macif.png', role:'Front-End Developer',  description:'Integrated pages, components and design system elements with Drupal, Twig, Bootstrap 4 and responsive design.', tags:['Drupal','Twig','Bootstrap','jQuery'] },
    { title:'STEF', image:'/assets/stef.png', role:'Front-End Developer',  description:'Redesigned and created Drupal multisite blocks for a corporate logistics platform.', tags:['Drupal','Twig','Docker','jQuery'] }
  ],
  process: [
    ['01', 'Audit & clarification', 'I understand your needs, target audience and business priorities before writing code.'],
    ['02', 'Design integration', 'I turn the design or idea into a clean, modern and responsive interface.'],
    ['03', 'Development', 'I build with a clear structure, reusable components and maintainable code.'],
    ['04', 'Optimization', 'I test, optimize performance, polish details and prepare the project for launch.']
  ],
  skills: ['React','Next.js','TypeScript','JavaScript','Redux Toolkit','React Query','Tailwind CSS','Sass','HTML5','CSS3','Node.js','Express','Drupal','Twig','Hybris','Git','Docker','Webpack','Jira','Cursor','Claude AI'],
  freelance: [
    ['Premium website redesign', 'Complete modernization of your website with a professional, responsive and conversion-oriented interface.'],
    ['Figma to React / Next.js', 'Pixel-perfect implementation of your designs with clean components, fluid animations and maintainable structure.'],
    ['Upwork & SaaS landing pages', 'Fast, modern and persuasive pages to present your services, products or campaigns.'],
    ['Performance & Core Web Vitals', 'Speed, images, lazy loading, accessibility and mobile experience optimization to improve client trust.'],
    ['E-commerce front-end', 'Product pages, filters, checkout flows, responsive design and reusable components for modern stores.'],
    ['Long-term support', 'Bug fixing, new sections, maintenance, front-end improvements and regular technical support.']
  ],
  packages: [
    { name: 'Starter Landing', price: 'From €250', description: 'For a fast and modern professional landing page.', items: ['1 responsive landing page', 'Clean premium design', 'Light animations', 'Deployment support available'] },
    { name: 'Business Website', price: 'From €600', description: 'For a complete and credible business website.', items: ['3 to 5 sections/pages', 'React / Next.js structure', 'Basic technical SEO', 'Performance & responsive'] },
    { name: 'Monthly Support', price: 'Custom quote', description: 'For maintenance, bugs and regular improvements.', items: ['UI fixes', 'New sections', 'Continuous optimization', 'Long-term support'] }
  ],
  testimonials: [
    ['Excellent communication', 'Heni understands needs quickly, proposes clean solutions and delivers with professionalism.'],
    ['Clean front-end quality', 'Structured, responsive and maintainable code with strong attention to UI details.'],
    ['Performance oriented', 'Professional approach to optimization, Core Web Vitals and mobile experience.']
  ]
};
