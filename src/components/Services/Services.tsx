import { motion } from 'framer-motion';
import { LayoutGrid, Code, Workflow, ArrowRightLeft, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Sitios Web Innovadores',
    description: 'Diseño y desarrollo de páginas web modernas, rápidas y adaptables, enfocadas en conversión y marca.',
    icon: LayoutGrid,
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'Aplicativos Web a Medida',
    description: 'Aplicaciones web escalables, paneles de administración, autenticación y APIs integradas.',
    icon: Code,
    color: 'var(--color-neon-purple)',
  },
  {
    title: 'Automatizaciones Empresariales',
    description: 'Optimización de procesos con flujos automáticos que reducen tareas repetitivas y errores.',
    icon: Workflow,
    color: 'var(--color-neon-pink)',
  },
  {
    title: 'Integraciones y APIs',
    description: 'Conectamos tu CRM/ERP, pasarelas de pago y servicios terceros para un ecosistema unificado.',
    icon: ArrowRightLeft,
    color: 'var(--color-neon-cyan)',
  },
  {
    title: 'Mantenimiento y Soporte',
    description: 'Monitoreo, mejoras continuas y resolución de incidencias para garantizar disponibilidad.',
    icon: Wrench,
    color: 'var(--color-neon-purple)',
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
            Servicios y <span className="gradient-text">Soluciones Tecnológicas</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Somos una empresa de programación que construye sitios y aplicaciones web a medida, e integra automatizaciones que impulsan tu negocio.
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
