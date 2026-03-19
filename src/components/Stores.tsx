"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Utensils, Scissors, Smartphone, Dumbbell, Shirt, Coffee, Gem } from "lucide-react";

const categories = [
  { id: "all", label: "Todos", icon: null },
  { id: "moda", label: "Moda", icon: Shirt },
  { id: "gastronomia", label: "Gastronomía", icon: Utensils },
  { id: "belleza", label: "Belleza", icon: Scissors },
  { id: "tecnologia", label: "Tecnología", icon: Smartphone },
  { id: "deporte", label: "Deporte", icon: Dumbbell },
  { id: "cafe", label: "Cafés", icon: Coffee },
  { id: "joyeria", label: "Joyería", icon: Gem },
];

const stores = [
  { name: "Zara", category: "moda", floor: "Piso 1", description: "Ropa y accesorios de moda internacional", emoji: "👗", new: true },
  { name: "Nike Store", category: "deporte", floor: "Piso 1", description: "Calzado y ropa deportiva oficial Nike", emoji: "👟", new: false },
  { name: "El Corral Gourmet", category: "gastronomia", floor: "Piso 2", description: "Hamburguesas gourmet y experiencias únicas", emoji: "🍔", new: true },
  { name: "iShop", category: "tecnologia", floor: "Piso 1", description: "Productos Apple y accesorios premium", emoji: "📱", new: false },
  { name: "L'Oréal Studio", category: "belleza", floor: "Piso 2", description: "Cosméticos y tratamientos de belleza", emoji: "💄", new: false },
  { name: "Starbucks Reserve", category: "cafe", floor: "Piso 1", description: "Café de especialidad y experiencias únicas", emoji: "☕", new: true },
  { name: "Adidas Originals", category: "deporte", floor: "Piso 1", description: "Ropa y calzado deportivo y streetwear", emoji: "🏃", new: false },
  { name: "Pandora", category: "joyeria", floor: "Piso 2", description: "Joyería y accesorios personalizables", emoji: "💍", new: false },
  { name: "Sushi Express", category: "gastronomia", floor: "Piso 2", description: "Sushi fresco y cocina japonesa moderna", emoji: "🍣", new: true },
  { name: "Mango", category: "moda", floor: "Piso 1", description: "Moda mediterránea contemporánea", emoji: "👔", new: false },
  { name: "Wok", category: "gastronomia", floor: "Piso 2", description: "Cocina asiática fresca y saludable", emoji: "🥢", new: false },
  { name: "MAC Cosmetics", category: "belleza", floor: "Piso 2", description: "Maquillaje profesional para todo tipo de piel", emoji: "✨", new: false },
  { name: "Crepes & Waffles", category: "gastronomia", floor: "Piso 2", description: "Crepes, waffles y ensaladas artesanales", emoji: "🧇", new: false },
  { name: "Samsung Store", category: "tecnologia", floor: "Piso 1", description: "Smartphones, tablets y electrodomésticos", emoji: "📺", new: false },
  { name: "Juan Valdez", category: "cafe", floor: "Piso 1", description: "El mejor café colombiano de origen", emoji: "🇨🇴", new: false },
  { name: "Tiffany & Co.", category: "joyeria", floor: "Piso 2", description: "Joyas y accesorios de lujo icónicos", emoji: "💎", new: true },
];

export default function Stores() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = stores.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || s.category === category;
    return matchSearch && matchCat;
  });

  return (
    <section id="tiendas" className="py-24" style={{ backgroundColor: "var(--bg)" }}>
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
            <ShoppingBag className="w-4 h-4" />
            <span>Directorio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Nuestras <span className="gold-text">Tiendas</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Más de 50 tiendas y restaurantes de las mejores marcas nacionales e internacionales.
          </p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-lg mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar tienda o categoría..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-full px-5 py-3 pl-11 text-white placeholder-gray-600 outline-none transition-colors"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat.id
                    ? "gold-gradient text-black"
                    : "bg-[#141414] border border-[#2A2A2A] text-gray-400 hover:border-[#FF5229]/30 hover:text-[#FF5229]"
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((store, i) => (
              <motion.div
                key={store.name}
                className="glass rounded-2xl p-5 hover:border-[#FF5229]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,82,41,0.1)] group cursor-pointer relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              >
                {store.new && (
                  <span className="absolute top-3 right-3 text-xs font-bold text-black gold-gradient px-2 py-0.5 rounded-full">
                    NUEVO
                  </span>
                )}
                <div className="text-4xl mb-3">{store.emoji}</div>
                <h3 className="font-bold text-white group-hover:text-[#FF5229] transition-colors mb-1">
                  {store.name}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{store.floor}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{store.description}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-600">
            <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>No se encontraron tiendas para &ldquo;{search}&rdquo;</p>
          </div>
        )}

        <p className="text-center text-gray-600 text-sm mt-8">
          Mostrando {filtered.length} de {stores.length} establecimientos
        </p>
      </div>
    </section>
  );
}
