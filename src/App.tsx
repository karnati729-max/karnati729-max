function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Profiles from '@/components/Profiles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default App;
