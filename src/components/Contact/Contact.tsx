import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import LegalModal from '../Legal/LegalModal';

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalShown, setLegalModalShown] = useState(false);

  const handleInputFocus = () => {
    if (!legalModalShown) {
      setLegalModalOpen(true);
      setLegalModalShown(true);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/carlos8perez1110@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: data.name,
          Email: data.email,
          Mensaje: data.message,
          _subject: "Nuevo mensaje de contacto - Soluciones Tecnológicas"
        })
      });

      if (response.ok) {
        alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
        reset();
      } else {
        alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el mensaje. Por favor, revisa tu conexión e intenta nuevamente.');
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 blur-[100px] -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 blur-[100px] -z-10" />

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Hablemos de tu <span className="gradient-text">Proyecto</span></h2>
            <p className="text-gray-400">Cuéntanos si necesitas un sitio web, un aplicativo a medida o automatizar procesos clave.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={14} className="text-neon-cyan" />
                  Nombre Completo
                </label>
                <input
                  {...register('name')}
                  onFocus={handleInputFocus}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 ${
                    errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                  }`}
                  placeholder="Tu nombre..."
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={14} className="text-neon-cyan" />
                  Correo Electrónico
                </label>
                <input
                  {...register('email')}
                  onFocus={handleInputFocus}
                  className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 ${
                    errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                  }`}
                  placeholder="email@ejemplo.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={14} className="text-neon-cyan" />
                Mensaje
              </label>
              <textarea
                {...register('message')}
                onFocus={handleInputFocus}
                rows={4}
                className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all duration-300 resize-none ${
                  errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-neon-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                }`}
                placeholder="¿En qué podemos ayudarte?"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold rounded-xl flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <Send size={18} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
      />
    </section>
  );
}
