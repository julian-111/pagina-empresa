import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, UserCircle2, MessageSquare, Send } from 'lucide-react';

const initialTestimonials = [
  {
    name: '',
    role: '',
    content: '',
    rating: 5,
    color: 'var(--color-neon-cyan)',
  },
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [newComment, setNewComment] = useState({ name: '', role: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.name || !newComment.content) return;
    
    const comment = {
      ...newComment,
      rating: 5,
      color: testimonials.length % 2 === 0 ? 'var(--color-neon-purple)' : 'var(--color-neon-cyan)'
    };
    
    setTestimonials([comment, ...testimonials]);
    setNewComment({ name: '', role: '', content: '' });
    setShowForm(false);
  };

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
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Lo que dicen nuestros clientes sobre cómo hemos transformado sus procesos con tecnología de vanguardia.
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 flex items-center gap-2 mx-auto transition-all"
          >
            <MessageSquare size={18} />
            {showForm ? 'Cerrar Formulario' : 'Dejar un Comentario'}
          </button>
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-xl mx-auto mb-16 overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl border border-neon-cyan/30 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Tu Nombre"
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan outline-none transition-all"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Tu Cargo / Empresa"
                    value={newComment.role}
                    onChange={(e) => setNewComment({ ...newComment, role: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan outline-none transition-all"
                  />
                </div>
                <textarea
                  placeholder="Tu comentario..."
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-neon-cyan outline-none transition-all h-32 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-neon-cyan text-dark-bg font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all"
                >
                  Publicar Comentario <Send size={18} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

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
              className="glass p-8 rounded-3xl border border-white/5 relative group transition-all duration-500 hover:border-white/20 flex flex-col min-h-[250px]"
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
                {item.content ? `"${item.content}"` : 'Esperando tu comentario...'}
              </p>

              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center border border-white/10"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <UserCircle2 size={28} style={{ color: item.color }} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm tracking-tight">
                    {item.name || 'Cliente'}
                  </h4>
                  <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">
                    {item.role || 'Empresa'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
