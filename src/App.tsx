import Background from './components/Three/Background';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import LegalPage from './components/Legal/LegalPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'legal'>('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Efecto para manejar el scroll al cambiar de página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const scrollToContact = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Esperar a que cargue la home antes de scrollear
      setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) {
          el.classList.add('focus-glow');
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setTimeout(() => el.classList.remove('focus-glow'), 1200);
        }
      }, 100);
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.classList.add('focus-glow');
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => el.classList.remove('focus-glow'), 1200);
      }
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan overflow-x-hidden">
      {/* Barra de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink z-50 origin-left"
        style={{ scaleX }}
      />

      <Background />
      
      <nav className="fixed top-0 w-full z-40 glass border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center relative">
          {/* Logo a la izquierda */}
          <button 
            onClick={() => setCurrentPage('home')}
            className="text-4xl font-black gradient-text tracking-tighter hover:scale-105 transition-transform cursor-pointer absolute left-8"
          >
            NexusAUT
          </button>
          
          {/* Menú centrado */}
          <div className="flex flex-1 justify-center">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-lg font-bold text-gray-300">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`hover:text-neon-cyan transition-all hover:scale-110 relative group ${currentPage === 'home' ? 'text-neon-cyan' : ''}`}
              >
                Inicio
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full ${currentPage === 'home' ? 'w-full' : 'w-0'}`}></span>
              </button>
              {currentPage === 'home' && (
                <>
                  <a href="#servicios" className="hover:text-neon-cyan transition-all hover:scale-110 relative group text-sm md:text-lg">
                    Servicios
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
                  </a>
                  <a href="#proyectos" className="hover:text-neon-cyan transition-all hover:scale-110 relative group text-sm md:text-lg">
                    Proyectos
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
                  </a>
                </>
              )}
              <button 
                onClick={() => setCurrentPage('legal')}
                className={`hover:text-neon-cyan transition-all hover:scale-110 relative group ${currentPage === 'legal' ? 'text-neon-cyan' : ''}`}
              >
                Legal
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full ${currentPage === 'legal' ? 'w-full' : 'w-0'}`}></span>
              </button>
              <button onClick={scrollToContact} className="hover:text-neon-cyan transition-all hover:scale-110 relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onOpenContact={scrollToContact} />
              <Services />
              <Projects />
              <Testimonials />
              <Contact />
            </motion.div>
          ) : (
            <motion.div
              key="legal"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <LegalPage />
            </motion.div>
          )}
        </AnimatePresence>
        
        <footer className="py-12 border-t border-white/5 bg-dark-bg/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-xl font-black gradient-text">
              NexusAUT
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              © 2026 NexusAUT. Desarrollo web, aplicativos y automatización empresarial. 
              Garantizando la protección de tus datos personales.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
