import { motion } from 'framer-motion';
import { Calendar, Mail, Database, Clock, ArrowRightLeft, LayoutGrid } from 'lucide-react';

const services = [
  {
    title: 'Agendamiento Automático',
    description: 'Sincroniza calendarios y programa reuniones sin intervención manual, evitando conflictos de horario.',
    icon: Calendar,
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'Gestión de Correos',
    description: 'Clasificación, respuesta y seguimiento automatizado de emails para mantener tu bandeja al día.',
    icon: Mail,
    color: 'var(--color-neon-purple)',
  },
  {
    title: 'Sincronización de CRM',
    description: 'Actualización en tiempo real de prospectos y clientes en tus plataformas de gestión favoritas.',
    icon: Database,
    color: 'var(--color-neon-pink)',
  },
  {
    title: 'Disponibilidad 24/7',
    description: 'Tus flujos de trabajo nunca se detienen. Los asistentes operan sin interrupciones ni errores humanos.',
    icon: Clock,
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'Flujos Interconectados',
    description: 'Une diferentes herramientas (Slack, WhatsApp, Sheets) en un solo ecosistema de trabajo fluido.',
    icon: ArrowRightLeft,
    color: 'var(--color-neon-purple)',
  },
  {
    title: 'Paneles de Control',
    description: 'Visualiza el estado de cada tarea y el rendimiento de tus asistentes programados en tiempo real.',
    icon: LayoutGrid,
    color: 'var(--color-neon-pink)',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass p-8 rounded-2xl relative group overflow-hidden border border-white/5"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: `radial-gradient(circle at 50% 50%, ${service.color}, transparent 70%)` }}
      />
      
      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: `${service.color}20`, border: `1px solid ${service.color}40` }}
        >
          <service.icon size={28} style={{ color: service.color }} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:neon-text transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="servicios" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Tareas <span className="gradient-text">Automatizadas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Delegue las tareas repetitivas a nuestros asistentes programados y recupere el control de su tiempo.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
