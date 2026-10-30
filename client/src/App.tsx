import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Freelance } from '@/components/sections/Freelance';
import { Process } from '@/components/sections/Process';
import { Skills } from '@/components/sections/Skills';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { useReveal } from '@/hooks/useReveal';
import { useSpotlight } from '@/hooks/useSpotlight';

export default function App() {
  useReveal();
  useSpotlight();
  return (
    <>
      <Header />
      <main id="main-content" className="overflow-hidden" tabIndex={-1}>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Freelance />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
