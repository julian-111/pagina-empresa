import { motion } from 'framer-motion';
import { Sparkles, ChevronRight } from 'lucide-react';
import Ecosystem from './Ecosystem';

export default function Hero({ onOpenContact }: { onOpenContact?: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan mb-6">
            <Sparkles size={16} className="animate-pulse" />
            <span className="text-sm font-medium">Soluciones Tecnológicas</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Somos una <span className="gradient-text">Empresa de Programación</span> enfocada en tu crecimiento
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-lg">
            Desarrollamos páginas web innovadoras y dinámicas, aplicativos web a medida y automatizaciones empresariales que optimizan procesos y potencian tus resultados.
          </p>

          <div className="flex">
            <motion.button
              onClick={() => onOpenContact?.()}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-cyan text-dark-bg font-bold rounded-xl inline-flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all duration-300"
            >
              <span>Comunícate con nosotros</span>
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center min-h-[650px]"
        >
          <div className="absolute inset-0 bg-neon-purple/20 blur-[160px] rounded-full animate-pulse-slow" />
          <Ecosystem />
        </motion.div>
      </div>
    </section>
  );
}
