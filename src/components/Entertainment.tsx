"use client";
import { motion } from "framer-motion";
import { Film, Gamepad2, Baby, Music, Zap } from "lucide-react";

const zones = [
  {
    icon: Film,
    title: "Cine Premium",
    description: "4 salas con tecnología IMAX y sonido Dolby Atmos. Cartelera actualizada semanalmente con los estrenos más esperados.",
    features: ["4K & IMAX", "Dolby Atmos", "Butacas reclinables", "Snack bar premium"],
    color: "from-blue-600/20",
    emoji: "🎬",
    floor: "Piso 2",
  },
  {
    icon: Gamepad2,
    title: "Zona Gamer",
    description: "El arcade más grande del sur de Cali con simuladores, zona VR, torneos semanales y tienda especializada.",
    features: ["Realidad Virtual", "Simuladores de carreras", "Torneos semanales", "Zona esports"],
    color: "from-purple-600/20",
    emoji: "🎮",
    floor: "Piso 2",
  },
  {
    icon: Baby,
    title: "Kids Zone",
    description: "Área de entretenimiento segura y supervisada para niños de todas las edades. Ideal para familias.",
    features: ["Zona de juegos", "Inflables", "Mini cine", "Actividades educativas"],
    color: "from-pink-600/20",
    emoji: "🧒",
    floor: "Piso 1",
  },
  {
    icon: Music,
    title: "Eventos en Vivo",
    description: "Plaza central con escenario para conciertos, presentaciones artísticas y eventos especiales.",
    features: ["Conciertos semanales", "Shows de música", "Exposiciones de arte", "Eventos corporativos"],
    color: "from-amber-600/20",
    emoji: "🎵",
    floor: "Plaza Central",
  },
  {
    icon: Zap,
    title: "Zona Fitness",
    description: "Gimnasio de última generación con clases grupales, entrenadores personales y spa.",
    features: ["Equipos de última gen", "Clases grupales", "Spa & sauna", "Nutricionista"],
    color: "from-green-600/20",
    emoji: "💪",
    floor: "Piso 3",
  },
];

export default function Entertainment() {
  return (
    <section id="entretenimiento" className="py-12 md:py-24" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-divider mb-12 md:mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[#FF5229] text-sm font-medium tracking-widest uppercase mb-4">
            <Zap className="w-4 h-4" />
            <span>Diversión</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            <span className="gold-text">Entretenimiento</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            MR Outlet no es solo compras. Es una experiencia completa para toda la familia.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {zones.map((zone, i) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.title}
                className="glass rounded-2xl overflow-hidden hover:border-[#FF5229]/40 transition-all duration-300 hover:-translate-y-1 group"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
              >
                <div className={`bg-gradient-to-b ${zone.color} to-transparent p-5 sm:p-8`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{zone.emoji}</span>
                    <span className="text-xs text-gray-500 border border-[#2A2A2A] px-3 py-1 rounded-full">
                      {zone.floor}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#FF5229]" />
                    <h3 className="font-bold text-white text-lg group-hover:text-[#FF5229] transition-colors">
                      {zone.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{zone.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {zone.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2 py-1 rounded-full bg-[#1E1E1E] text-gray-400 border border-[#2A2A2A]"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
