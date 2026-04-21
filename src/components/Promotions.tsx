"use client";
import { motion } from "framer-motion";
import { Tag, Clock, ChevronRight, Flame } from "lucide-react";

const promos = [
  {
    store: "El Corral Gourmet",
    emoji: "🍔",
    deal: "2x1 en combos mediodía",
    validity: "Hasta 30 Abr",
    badge: "🔥 HOT",
    badgeColor: "text-orange-400 bg-orange-400/10 border-orange-400/30",
    hot: true,
  },
  {
    store: "Zara",
    emoji: "👗",
    deal: "30% OFF nueva colección primavera",
    validity: "Hasta 5 May",
    badge: "MODA",
    badgeColor: "text-pink-400 bg-pink-400/10 border-pink-400/30",
    hot: false,
  },
  {
    store: "Starbucks Reserve",
    emoji: "☕",
    deal: "Bebida mediana gratis con cualquier compra",
    validity: "Esta semana",
    badge: "APERTURA",
    badgeColor: "text-green-400 bg-green-400/10 border-green-400/30",
    hot: false,
  },
  {
    store: "Samsung Store",
    emoji: "📱",
    deal: "Plan regalo Galaxy: audífonos gratis",
    validity: "Mes de apertura",
    badge: "TECH",
    badgeColor: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    hot: false,
  },
  {
    store: "Pandora",
    emoji: "💍",
    deal: "Grabado personalizado gratis en pulseras",
    validity: "Solo mayo",
    badge: "EXCLUSIVO",
    badgeColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    hot: false,
  },
  {
    store: "Crepes & Waffles",
    emoji: "🧇",
    deal: "Postre de cortesía con almuerzo o cena",
    validity: "Fines de semana",
    badge: "FOOD",
    badgeColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    hot: false,
  },
];

export default function Promotions() {
  return (
    <section id="promociones" className="py-12 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
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
            <Flame className="w-4 h-4" />
            <span>Esta semana</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Promociones <span className="gold-text">Activas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Descuentos y ofertas especiales de apertura. ¡Solo por tiempo limitado!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {promos.map((p, i) => (
            <motion.div
              key={p.store}
              className={`glass rounded-2xl p-4 sm:p-5 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${
                p.hot
                  ? "border-orange-500/40 bg-gradient-to-br from-orange-500/5 to-transparent shadow-[0_0_25px_rgba(249,115,22,0.08)]"
                  : "hover:border-[#FF5229]/30"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
            >
              {/* Emoji */}
              <div className="text-3xl flex-shrink-0 mt-0.5">{p.emoji}</div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-white text-sm truncate group-hover:text-[#FF5229] transition-colors">
                    {p.store}
                  </h3>
                  <ChevronRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#FF5229] flex-shrink-0 transition-colors" />
                </div>

                <p className="text-sm text-gray-300 leading-snug mb-2.5">{p.deal}</p>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full border ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {p.validity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#tiendas"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#FF5229]/40 text-[#FF5229] font-semibold text-sm hover:bg-[#FF5229]/10 transition-all"
          >
            <Tag className="w-4 h-4" />
            Ver directorio completo de tiendas
          </a>
        </motion.div>
      </div>
    </section>
  );
}
