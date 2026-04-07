import { motion } from 'framer-motion';
import { Star, Quote, UserCircle2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Director de IT, TechFlow',
    content: 'La automatización de nuestro CRM con NexusAUT redujo el tiempo de respuesta a clientes en un 60%. Una inversión que se pagó sola en el primer mes.',
    rating: 5,
    color: 'var(--color-neon-cyan)',
  },
  {
    name: 'Elena Rodríguez',
    role: 'Founder, CloudSaaS',
    content: 'El nivel de personalización de sus aplicativos es impresionante. Entendieron perfectamente nuestras necesidades operativas desde el primer día.',
    rating: 5,
    color: 'var(--color-neon-purple)',
  },
  {
    name: 'Andrés García',
    role: 'COO, GlobalLogistics',
    content: 'Tener asistentes programados ejecutando tareas repetitivas nos permitió enfocar a nuestro equipo en tareas de alto valor. Servicio impecable.',
    rating: 5,
    color: 'var(--color-neon-pink)',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 px-4 relative overflow-hidden bg-dark-bg/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple mb-6"
          >
            <Star size={16} fill="currentColor" />
            <span className="text-xs font-black uppercase tracking-widest">Opiniones de Clientes</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            Confianza <span className="gradient-text">Garantizada</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Lo que dicen nuestros clientes sobre cómo hemos transformado sus procesos con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Fondo decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-cyan/5 blur-[120px] -z-10 rounded-full" />
          
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-3xl border border-white/5 relative group transition-all duration-500 hover:border-white/20"
            >
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-neon-cyan/10 transition-colors">
                <Quote size={64} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, star) => (
                  <Star key={star} size={14} fill={item.color} style={{ color: item.color }} />
                ))}
              </div>

              <p className="text-gray-300 mb-8 italic leading-relaxed relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <UserCircle2 size={28} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-tight">{item.name}</h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
