import { motion } from 'framer-motion';
import { MessageCircle, Send, Mail, Calendar, FileSpreadsheet, Share2 } from 'lucide-react';

const icons = [
  { icon: MessageCircle, color: '#25D366', label: 'WhatsApp', x: 0.01, y: -210 },
  { icon: Send, color: '#0088cc', label: 'Telegram', x: 180, y: -70 },
  { icon: Mail, color: '#EA4335', label: 'Gmail', x: 120, y: 150 },
  { icon: Calendar, color: '#4285F4', label: 'Calendar', x: -120, y: 150 },
  { icon: FileSpreadsheet, color: '#34A853', label: 'Sheets', x: -180, y: -70 },
];

export default function Ecosystem() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center lg:scale-110">
      {/* Círculos de fondo decorativos */}
      <div className="absolute w-[350px] h-[350px] border border-white/5 rounded-full" />
      <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full" />
      <div className="absolute w-[650px] h-[650px] border border-white/5 rounded-full" />
      
      {/* Centro del ecosistema */}
      <motion.div
        animate={{ 
          boxShadow: ["0 0 35px rgba(0,243,255,0.35)", "0 0 70px rgba(188,19,254,0.55)", "0 0 35px rgba(0,243,255,0.35)"] 
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10 w-36 h-36 glass rounded-[2.25rem] flex items-center justify-center border border-neon-cyan/50 shadow-[0_0_45px_rgba(0,243,255,0.45)]"
      >
        <div className="text-neon-cyan font-black text-base text-center leading-tight tracking-widest">
          Nexus<br/><span className="text-xs opacity-80 font-bold">AUT</span>
        </div>
        
        {/* Líneas de conexión animadas */}
        <svg className="absolute inset-0 w-full h-full overflow-visible -z-10">
          <defs>
            <linearGradient id="grad-line" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
              <stop offset="0%" stopColor="var(--color-neon-cyan)" />
              <stop offset="100%" stopColor="var(--color-neon-purple)" />
            </linearGradient>
          </defs>
          {icons.map((item, i) => (
            <motion.path
              key={`line-${i}`}
              d={`M 72 72 L ${72 + item.x} ${72 + item.y}`}
              stroke="url(#grad-line)"
              strokeWidth="2.8"
              strokeDasharray="7,7"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Iconos de herramientas */}
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: i * 0.1 + 0.5 
          }}
          style={{ x: item.x, y: item.y }}
          className="absolute group"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            className="w-22 h-22 glass rounded-[1.5rem] flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors shadow-2xl relative"
          >
            <item.icon size={36} style={{ color: item.color }} />
            
            {/* Tooltip con nombre */}
            <div className="absolute -bottom-11 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-xs px-3.5 py-1.5 rounded-full border border-white/10 text-white font-medium whitespace-nowrap shadow-xl">
              {item.label}
            </div>

            {/* Pulso de actividad */}
            <motion.div
              animate={{ scale: [1, 1.65], opacity: [0.65, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.7 }}
              className="absolute inset-0 rounded-[1.5rem] border-2 border-white/30"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
