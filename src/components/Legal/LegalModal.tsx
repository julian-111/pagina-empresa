import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LegalModal({ isOpen, onClose }: LegalModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl glass p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,243,255,0.15)] max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/40">
                <ShieldCheck className="text-neon-cyan" size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">Tratamiento de Datos Personales</h2>
            </div>

            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold text-neon-cyan">Información Importante:</p>
              <p>
                En cumplimiento con las normativas vigentes de Protección de Datos Personales (GDPR y Ley 1581), 
                queremos informarte que al interactuar con este formulario, tus datos serán tratados bajo estrictos 
                estándares de seguridad y confidencialidad.
              </p>
              
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <h3 className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Finalidad del Tratamiento:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gestionar solicitudes de contacto y presupuestos de servicios tecnológicos.</li>
                  <li>Enviar información relevante sobre automatización y desarrollo de software (solo si lo autorizas).</li>
                  <li>Mejorar la experiencia de usuario en nuestra plataforma.</li>
                </ul>
              </div>

              <p>
                <strong>Tus Derechos:</strong> Tienes derecho a conocer, actualizar, rectificar y solicitar la eliminación 
                de tus datos en cualquier momento. No compartimos tu información con terceros con fines comerciales sin tu 
                consentimiento expreso.
              </p>

              <p className="text-xs text-gray-500 italic">
                *Al continuar utilizando el formulario, confirmas que has sido informado sobre nuestra política de privacidad. 
                Para una lectura completa, visita nuestra sección de Términos Legales en el menú principal.
              </p>

              <button
                onClick={onClose}
                className="w-full py-3 mt-6 bg-neon-cyan/10 hover:bg-neon-cyan/20 text-neon-cyan font-bold rounded-xl border border-neon-cyan/30 transition-all duration-300"
              >
                Entendido y Acepto
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
