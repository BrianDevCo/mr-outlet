"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ChevronRight, Ticket } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Gran Inauguración MR Outlet",
    date: "Sábado 22 Mar",
    time: "10:00 AM",
    type: "evento",
    description: "Celebra con nosotros el lanzamiento oficial con conciertos en vivo, sorteos y descuentos exclusivos de hasta 50% en todas las tiendas.",
    emoji: "🎊",
    highlight: true,
  },
  {
    id: 2,
    title: "Noche de Moda Primavera",
    date: "Viernes 28 Mar",
    time: "6:00 PM",
    type: "moda",
    description: "Desfile de moda con las últimas colecciones de las marcas más exclusivas del outlet.",
    emoji: "👗",
    highlight: false,
  },
  {
    id: 3,
    title: "50% OFF en Tecnología",
    date: "Hasta 30 Mar",
    time: "Todo el día",
    type: "promo",
    description: "Aprovecha los descuentos del 30% al 50% en smartphones, tablets y accesorios de las mejores marcas.",
    emoji: "📱",
    highlight: false,
  },
  {
    id: 4,
    title: "Festival Gastronómico",
    date: "Domingo 30 Mar",
    time: "12:00 PM",
    type: "gastronomia",
    description: "Muestra gastronómica con degustaciones gratuitas, chefs invitados y concurso de cocina familiar.",
    emoji: "🍽️",
    highlight: false,
  },
  {
    id: 5,
    title: "Día del Niño - Actividades",
    date: "Sábado 5 Abr",
    time: "11:00 AM",
    type: "evento",
    description: "Inflables, payasos, face painting y zona de juegos para los más pequeños. ¡Entrada libre!",
    emoji: "🎈",
    highlight: false,
  },
  {
    id: 6,
    title: "2x1 en Restaurantes Seleccionados",
    date: "Todos los Miércoles",
    time: "12:00 - 3:00 PM",
    type: "promo",
    description: "Disfruta la promo de mitad de semana: paga 1 y llévate 2 en restaurantes participantes.",
    emoji: "🍽️",
    highlight: false,
  },
];

const typeColors: Record<string, string> = {
  evento: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  moda: "text-pink-400 bg-pink-400/10 border-pink-400/30",
  promo: "text-green-400 bg-green-400/10 border-green-400/30",
  gastronomia: "text-orange-400 bg-orange-400/10 border-orange-400/30",
};

const typeLabels: Record<string, string> = {
  evento: "Evento",
  moda: "Moda",
  promo: "Promoción",
  gastronomia: "Gastronomía",
};

export default function Events() {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.type === filter);

  return (
    <section id="eventos" className="py-24" style={{ backgroundColor: "var(--bg)" }}>
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
            <Calendar className="w-4 h-4" />
            <span>Agenda</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Eventos & <span className="gold-text">Promociones</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Siempre hay algo nuevo en MR Outlet. Descuentos, eventos especiales y mucha diversión.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "Todo", icon: null },
            { id: "evento", label: "Eventos", icon: Ticket },
            { id: "promo", label: "Promos", icon: Tag },
            { id: "moda", label: "Moda", icon: null },
            { id: "gastronomia", label: "Gastronomía", icon: null },
          ].map((f) => {
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id
                    ? "gold-gradient text-black"
                    : "bg-[#141414] border border-[#2A2A2A] text-gray-400 hover:border-[#FF5229]/30 hover:text-[#FF5229]"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Event list */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              className={`glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group ${
                event.highlight
                  ? "border-[#FF5229]/40 bg-gradient-to-br from-[#FF5229]/5 to-transparent"
                  : "hover:border-[#FF5229]/30"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            >
              {event.highlight && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold gold-gradient text-black px-3 py-0.5 rounded-full">
                    ⭐ DESTACADO
                  </span>
                </div>
              )}
              <div className="flex gap-4">
                <div className="text-4xl flex-shrink-0">{event.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-white group-hover:text-[#FF5229] transition-colors">
                      {event.title}
                    </h3>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#FF5229] flex-shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeColors[event.type]}`}>
                      {typeLabels[event.type]}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {event.date} · {event.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
