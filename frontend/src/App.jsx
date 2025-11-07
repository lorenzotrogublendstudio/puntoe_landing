import Header from './components/header/header';
import Hero from './components/Hero/hero.jsx';
import StatsStrip from './components/StatsStrip/StatsStrip';
import About from './components/About/About';
import Services from './components/Services/Services';
import Process from './components/Process/Process';
import Projects from './components/Projects/Projects.jsx';
import Testimonials from './components/Testimonials/Testimonials';
import Partners from './components/Partners/Partners';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import Gallery from './components/Gallery/Gallery.jsx';

import {
  navLinks,
  heroContent,
  stats,
  aboutContent,
  services,
  processSteps,
  projects,
  testimonials,
  partners,
  contactChannels
} from './content';

function App() {
  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <Hero content={heroContent} />
        <StatsStrip stats={stats} />
        <About content={aboutContent} />
        <Services items={services} />
        <Process steps={processSteps} />
        <Gallery />
        <Testimonials items={testimonials} />
        <Partners items={partners} />
        <ContactSection channels={contactChannels} />
        <Map />
      </main>
      <Footer navLinks={navLinks} />
    </>
  );
}

export default App;