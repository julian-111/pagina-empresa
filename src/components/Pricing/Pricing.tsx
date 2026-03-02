import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$197',
    period: '/mes',
    features: [
      '1 flujo principal (ej: agendar)',
      '1.000 mensajes/mes',
      'Soporte 48h',
    ],
    highlight: false,
    color: 'var(--color-neon-cyan)',
  },
  {
    name: 'Growth',
    price: '$397',
    period: '/mes',
    features: [
      '3 flujos (agendar + emails + CRM)',
      '5.000 mensajes/mes',
      'Soporte 24h',
      'Reporte mensual de ROI',
    ],
    highlight: true,
    color: 'var(--color-neon-purple)',
  },
  {
    name: 'Enterprise',
    price: '$797',
    period: '/mes+',
    features: [
      'Flujos ilimitados',
      'Integración con su ERP/CRM',
      'Capacitación mensual',
      'SLA 99.9%',
    ],
    highlight: false,
    color: 'var(--color-neon-pink)',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 relative bg-dark-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            Inversión en <span className="gradient-text">Automatización</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Planes diseñados para crecer contigo, desde startups hasta corporaciones globales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-8 rounded-3xl relative border transition-all duration-500 ${
                plan.highlight ? 'border-neon-purple/50 scale-105 z-10' : 'border-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-purple text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(188,19,254,0.5)]">
                  <Star size={14} fill="white" />
                  <span>MÁS POPULAR</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>

              <div className="pt-2 text-gray-500 text-sm"> </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
