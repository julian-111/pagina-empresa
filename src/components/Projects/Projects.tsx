import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Code, Layout, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Automation Hub',
    category: 'Automatización',
    description: 'Sistema que sincroniza inventario entre Shopify, Amazon y Mercado Libre en tiempo real.',
    icon: Cpu,
    color: 'var(--color-neon-cyan)',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'SaaS CRM Dashboard',
    category: 'Desarrollo Web',
    description: 'Panel de control administrativo con visualización de datos complejos y gestión de usuarios masiva.',
    icon: Layout,
    color: 'var(--color-neon-purple)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'AI Lead Generator Bot',
    category: 'Aplicativos',
    description: 'Bot programado para extraer leads de LinkedIn y enviar correos personalizados automáticamente.',
    icon: Code,
    color: 'var(--color-neon-pink)',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Desarrollo App',
    description: 'Interfaz fluida para gestión de activos digitales con seguridad biométrica integrada.',
    icon: Cpu,
    color: 'var(--color-neon-cyan)',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const swipePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="py-24 px-4 relative overflow-hidden bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-black mb-4">
              Nuestros <span className="gradient-text">Proyectos</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
              Explora las soluciones de alto impacto que hemos diseñado para empresas que buscan liderar su industria.
            </p>
          </motion.div>

          <div className="flex gap-4">
            <button
              onClick={swipePrev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group"
            >
              <ChevronLeft className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </button>
            <button
              onClick={swipeNext}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all group shadow-[0_0_15px_rgba(0,243,255,0.1)]"
            >
              <ChevronRight className="text-gray-400 group-hover:text-neon-cyan transition-colors" />
            </button>
          </div>
        </div>

        <div className="relative h-[450px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0"
            >
              <div className="grid lg:grid-cols-2 gap-8 h-full">
                {/* Imagen del proyecto */}
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 glass rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20">
                      {projects[currentIndex].category}
                    </span>
                  </div>
                </div>

                {/* Info del proyecto */}
                <div className="flex flex-col justify-center p-8 glass rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div 
                    className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 transition-all duration-700 group-hover:opacity-40"
                    style={{ backgroundColor: projects[currentIndex].color }}
                  />
                  
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${projects[currentIndex].color}20`, border: `1px solid ${projects[currentIndex].color}40` }}
                  >
                    <projects[currentIndex].icon size={32} style={{ color: projects[currentIndex].color }} />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 text-white leading-tight">
                    {projects[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex items-center gap-6 mt-auto">
                    <button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 flex items-center gap-2 transition-all">
                      Detalles <ExternalLink size={16} />
                    </button>
                    <div className="flex gap-2">
                      {projects.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === currentIndex ? 'w-8 bg-neon-cyan' : 'w-2 bg-white/10'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
