import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Calendar, Mail, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  action?: 'schedule' | 'email' | 'success';
}

export default function BotDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: '¡Hola! Soy el asistente virtual de Automa. Puedo ayudarte a gestionar tu agenda, correos y tareas operativas. ¿Qué workflow deseas iniciar?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const idCounter = useRef<number>(2);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = { id: String(idCounter.current++), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(input);
      const botMsg: Message = {
        id: String(idCounter.current++),
        text: response.text,
        sender: 'bot',
        action: response.action,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  type BotResponse = { text: string; action?: Message['action'] };

  const getBotResponse = (text: string): BotResponse => {
    const t = text.toLowerCase();
    if (t.includes('agenda') || t.includes('cita') || t.includes('reunión')) {
      return { text: 'Entendido. Accediendo a tu calendario... He encontrado un espacio disponible mañana a las 10:00 AM. ¿Deseas que agende la cita?', action: 'schedule' };
    }
    if (t.includes('correo') || t.includes('email')) {
      return { text: 'Bandeja de entrada sincronizada. Tienes 3 correos pendientes de respuesta. ¿Quieres que redacte un borrador de seguimiento para el cliente?', action: 'email' };
    }
    if (t.includes('si') || t.includes('claro') || t.includes('agendar')) {
      return { text: '¡Excelente! Tarea ejecutada con éxito. El flujo ha sido completado y notificado.', action: 'success' };
    }
    return { text: 'Puedo ayudarte con eso. Mis flujos programados incluyen: Gestión de Agenda, Seguimiento de Correos y Actualización de CRM. ¿Cuál prefieres?' };
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Flujos de Trabajo <span className="gradient-text">en Acción</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Interactúa con un asistente virtual y observa cómo ejecuta tareas operativas de manera precisa y automática.
          </p>
          <div className="space-y-4">
            {[
              { icon: Calendar, text: 'Agendamiento inteligente sin conflictos' },
              { icon: Mail, text: 'Gestión proactiva de correspondencia' },
              { icon: CheckCircle, text: 'Ejecución de tareas repetitivas 24/7' }
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3 text-neon-cyan">
                <item.icon size={18} />
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/10 h-[550px] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-neon-purple/20 flex items-center justify-center border border-neon-purple/40">
                <Bot size={20} className="text-neon-purple" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Workflow Assistant</div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Listo para ejecutar</span>
                </div>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                    ? 'bg-neon-cyan text-dark-bg font-medium rounded-tr-none' 
                    : 'bg-white/10 text-white border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                    {msg.action === 'schedule' && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border border-neon-cyan/20 flex items-center gap-3">
                        <Calendar size={16} className="text-neon-cyan" />
                        <span className="text-xs">Evento: Reunión de Equipo - 10:00 AM</span>
                      </div>
                    )}
                    {msg.action === 'email' && (
                      <div className="mt-3 p-3 bg-white/5 rounded-lg border border-neon-purple/20 flex items-center gap-3">
                        <Mail size={16} className="text-neon-purple" />
                        <span className="text-xs">Borrador listo para enviar</span>
                      </div>
                    )}
                    {msg.action === 'success' && (
                      <div className="mt-3 p-2 bg-green-500/10 rounded-lg border border-green-500/30 flex items-center gap-2 text-green-500">
                        <CheckCircle size={14} />
                        <span className="text-[10px] font-bold uppercase">Tarea Completada</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/5">
            <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
              {['Agendar cita', 'Revisar correos', 'Estado de CRM'].map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setInput(suggestion)}
                  className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 hover:border-neon-cyan hover:text-white transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Solicitar una tarea..."
                className="w-full bg-dark-bg/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 transition-all pr-12"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon-cyan hover:text-white transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
