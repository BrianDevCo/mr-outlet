"use client";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";

const schedule = [
  { day: "Lunes – Jueves", hours: "10:00 AM – 9:00 PM" },
  { day: "Viernes", hours: "10:00 AM – 10:00 PM" },
  { day: "Sábado", hours: "9:00 AM – 10:00 PM" },
  { day: "Domingo", hours: "10:00 AM – 8:00 PM" },
  { day: "Festivos", hours: "10:00 AM – 8:00 PM" },
];

const services = [
  { label: "Parqueadero gratuito", desc: "2 horas gratis con compra mínima de $50.000", emoji: "🚗" },
  { label: "WiFi gratuito", desc: "Conexión de alta velocidad en todo el mall", emoji: "📶" },
  { label: "Punto de Información", desc: "Piso 1, entrada principal – Lun a Dom", emoji: "ℹ️" },
  { label: "Cajeros automáticos", desc: "Bancolombia, Davivienda y Nequi", emoji: "🏧" },
  { label: "Sala de lactancia", desc: "Piso 1, zona familiar. Cómoda y privada.", emoji: "🤱" },
  { label: "Accesibilidad", desc: "Rampas, elevadores y baños adaptados en todos los pisos", emoji: "♿" },
];

export default function Hours() {
  const today = new Date().getDay(); // 0=Sun, 1=Mon...

  const getTodayIndex = () => {
    if (today >= 1 && today <= 4) return 0; // Mon-Thu
    if (today === 5) return 1; // Fri
    if (today === 6) return 2; // Sat
    if (today === 0) return 3; // Sun
    return -1;
  };
  const todayIdx = getTodayIndex();

  return (
    <section id="horarios" className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[#FF5229] text-sm font-medium tracking-widest uppercase mb-4">
            <Clock className="w-4 h-4" />
            <span>Horarios & Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Visítanos <span className="gold-text">Cuando Quieras</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-5 h-5 text-[#FF5229]" />
              <h3 className="text-xl font-bold">Horario de Atención</h3>
            </div>
            <div className="space-y-2">
              {schedule.map((s, i) => (
                <motion.div
                  key={s.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    i === todayIdx
                      ? "border-[#FF5229]/40 bg-[#FF5229]/5"
                      : "border-[#2A2A2A] bg-[#141414]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {i === todayIdx && (
                      <span className="w-2 h-2 rounded-full bg-[#FF5229] animate-pulse" />
                    )}
                    <span className={`font-medium ${i === todayIdx ? "text-[#FF5229]" : "text-gray-300"}`}>
                      {s.day}
                    </span>
                    {i === todayIdx && (
                      <span className="text-xs bg-[#FF5229]/20 text-[#FF5229] px-2 py-0.5 rounded-full font-medium">
                        Hoy
                      </span>
                    )}
                  </div>
                  <span className={`font-semibold ${i === todayIdx ? "text-white" : "text-gray-400"}`}>
                    {s.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6">Servicios Disponibles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="glass rounded-xl p-4 hover:border-[#FF5229]/30 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <div className="text-2xl mb-2">{s.emoji}</div>
                  <h4 className="font-semibold text-white text-sm mb-1">{s.label}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
