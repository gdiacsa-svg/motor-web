import Navbar      from '@/components/Navbar';
import Hero        from '@/components/Hero';
import Counters    from '@/components/Counters';
import About       from '@/components/About';
import Services    from '@/components/Services';
import Projects    from '@/components/Projects';
import Coverage    from '@/components/Coverage';
import Methodology from '@/components/Methodology';
import Contact     from '@/components/Contact';
import Footer      from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Counters />
        <About />
        <Services />
        <Projects />
        <Coverage />
        <Methodology />
        <Contact />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
