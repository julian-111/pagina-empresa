import Background from './components/Three/Background';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Contact from './components/Contact/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) {
      el.classList.add('focus-glow');
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => el.classList.remove('focus-glow'), 1200);
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-neon-cyan/30 selection:text-neon-cyan">
      {/* Barra de progreso de scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink z-50 origin-left"
        style={{ scaleX }}
      />

      <Background />
      
      <nav className="fixed top-0 w-full z-40 glass border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center relative">
          {/* Logo a la izquierda */}
          <div className="text-4xl font-black gradient-text tracking-tighter hover:scale-105 transition-transform cursor-default absolute left-8">
            NexusAUT
          </div>
          
          {/* Menú centrado */}
          <div className="flex flex-1 justify-center">
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-lg font-bold text-gray-300">
              <a href="#" className="hover:text-neon-cyan transition-all hover:scale-110 relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <a href="#servicios" className="hover:text-neon-cyan transition-all hover:scale-110 relative group">
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <a href="#pricing" className="hover:text-neon-cyan transition-all hover:scale-110 relative group">
                Precios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </a>
              <button onClick={scrollToContact} className="hover:text-neon-cyan transition-all hover:scale-110 relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all group-hover:w-full"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero onOpenContact={scrollToContact} />
        <Services />
        <Pricing />
        <Contact />
        
        <footer className="py-12 border-t border-white/5 bg-dark-bg/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-black gradient-text">
              NexusAUT
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 NexusAUT. Optimizando flujos de trabajo empresariales.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

export default App;
