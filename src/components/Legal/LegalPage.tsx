import { motion } from 'framer-motion';
import { Shield, Lock, FileText, EyeOff, Scale } from 'lucide-react';

export default function LegalPage() {
  return (
    <div className="pt-32 pb-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black mb-6 tracking-tight">
            Términos <span className="gradient-text">Legales</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Transparencia, seguridad y compromiso con la protección de tu información.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Sección 1 */}
          <section className="glass p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/40">
                <Shield className="text-neon-cyan" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Política de Privacidad</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                En NexusAUT, la privacidad de nuestros clientes es una prioridad fundamental. Esta política detalla cómo 
                recopilamos, usamos y protegemos la información personal que nos proporcionas a través de nuestros canales digitales.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Recopilación:</strong> Solo solicitamos información necesaria para la prestación de servicios (Nombre, Email, Detalles del Proyecto).</li>
                <li><strong>Uso:</strong> Tus datos se utilizan exclusivamente para comunicación directa, presupuestos y ejecución de proyectos contratados.</li>
                <li><strong>Seguridad:</strong> Implementamos cifrado SSL y protocolos de seguridad de grado industrial para prevenir accesos no autorizados.</li>
              </ul>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="glass p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center border border-neon-purple/40">
                <Lock className="text-neon-purple" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Tratamiento de Datos Personales</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Bajo el cumplimiento del GDPR y normativas locales de protección de datos, garantizamos que el tratamiento 
                de la información se realiza bajo el consentimiento expreso del titular.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <EyeOff className="text-neon-cyan mb-2" size={20} />
                  <h4 className="font-bold text-white text-sm mb-1">Confidencialidad</h4>
                  <p className="text-xs text-gray-400">Tus datos nunca serán vendidos ni compartidos con terceros sin autorización.</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <Scale className="text-neon-purple mb-2" size={20} />
                  <h4 className="font-bold text-white text-sm mb-1">Derechos ARCO</h4>
                  <p className="text-xs text-gray-400">Acceso, Rectificación, Cancelación y Oposición en cualquier momento.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="glass p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neon-pink/20 flex items-center justify-center border border-neon-pink/40">
                <FileText className="text-neon-pink" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white">Términos de Servicio</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Al utilizar nuestros servicios, aceptas que NexusAUT actúa como un proveedor de soluciones tecnológicas. 
                Los resultados de las automatizaciones dependen de la infraestructura proporcionada por el cliente y las APIs de terceros.
              </p>
              <p>
                Nos comprometemos a entregar desarrollos funcionales, seguros y optimizados, ofreciendo un periodo de soporte 
                post-entrega según el plan contratado.
              </p>
            </div>
          </section>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center text-gray-500 text-sm"
        >
          <p>Última actualización: Abril 2026</p>
          <p>Para consultas legales: legal@nexusaut.com</p>
        </motion.div>
      </div>
    </div>
  );
}
