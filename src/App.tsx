import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Process from './components/Process';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { useScrollReveal, useScrollState } from './hooks';

function App() {
  useScrollReveal();
  const { progress } = useScrollState();

  return (
    <>
      <Loader />
      <ScrollProgress progress={progress} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
