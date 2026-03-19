"use client";
import { motion } from "framer-motion";
import { Utensils, Star, Clock } from "lucide-react";

const restaurants = [
  {
    name: "El Corral Gourmet",
    cuisine: "Americana",
    rating: 4.8,
    time: "15-20 min",
    price: "$$",
    emoji: "🍔",
    specialty: "Hamburguesas artesanales",
    bg: "from-amber-900/20 to-transparent",
  },
  {
    name: "Wok",
    cuisine: "Asiática",
    rating: 4.7,
    time: "20-25 min",
    price: "$$",
    emoji: "🥢",
    specialty: "Pad Thai & Dim Sum",
    bg: "from-red-900/20 to-transparent",
  },
  {
    name: "Crepes & Waffles",
    cuisine: "Internacional",
    rating: 4.9,
    time: "10-15 min",
    price: "$",
    emoji: "🧇",
    specialty: "Crepes dulces & salados",
    bg: "from-yellow-900/20 to-transparent",
  },
  {
    name: "Sushi Express",
    cuisine: "Japonesa",
    rating: 4.6,
    time: "25-30 min",
    price: "$$$",
    emoji: "🍣",
    specialty: "Rolls especiales de la casa",
    bg: "from-pink-900/20 to-transparent",
  },
  {
    name: "Pizza al Cuadrado",
    cuisine: "Italiana",
    rating: 4.5,
    time: "20-25 min",
    price: "$$",
    emoji: "🍕",
    specialty: "Pizza romana al taglio",
    bg: "from-orange-900/20 to-transparent",
  },
  {
    name: "La Brasa Roja",
    cuisine: "Colombiana",
    rating: 4.8,
    time: "30-35 min",
    price: "$$",
    emoji: "🍗",
    specialty: "Pollo asado & bandeja paisa",
    bg: "from-green-900/20 to-transparent",
  },
];

export default function FoodCourt() {
  return (
    <section id="gastronomia" className="py-12 md:py-24" style={{ backgroundColor: "var(--bg-alt)" }}>
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
            <Utensils className="w-4 h-4" />
            <span>Gastronomía</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Food <span className="gold-text">Court</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Una experiencia gastronómica única con lo mejor de la cocina nacional e internacional.
          </p>
        </motion.div>

        {/* Restaurant grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {restaurants.map((r, i) => (
            <motion.div
              key={r.name}
              className="glass rounded-2xl overflow-hidden hover:border-[#FF5229]/40 transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              <div className={`bg-gradient-to-b ${r.bg} p-5 sm:p-8 text-center`}>
                <span className="text-4xl sm:text-5xl">{r.emoji}</span>
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-white text-lg group-hover:text-[#FF5229] transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-sm text-[#FF5229]">{r.cuisine}</p>
                  </div>
                  <span className="text-sm text-gray-500 font-medium">{r.price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{r.specialty}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#FF5229] fill-[#FF5229]" />
                    <span className="text-white font-medium">{r.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{r.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          className="mt-8 sm:mt-12 rounded-2xl glass p-4 sm:p-8 text-center border border-[#FF5229]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-300 text-base sm:text-lg">
            🍽️ Todos los restaurantes tienen{" "}
            <span className="text-[#FF5229] font-semibold">menú digital</span> disponible.
            Escanea el QR en cada mesa o pregunta al mesero.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
