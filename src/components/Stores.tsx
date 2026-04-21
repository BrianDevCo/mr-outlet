"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Utensils, Scissors, Smartphone, Dumbbell, Shirt, Coffee, Gem, MapPin } from "lucide-react";
import Image from "next/image";

const categories = [
  { id: "all",        label: "Todos",        icon: null },
  { id: "moda",       label: "Moda",         icon: Shirt },
  { id: "gastronomia",label: "Gastronomía",  icon: Utensils },
  { id: "belleza",    label: "Belleza",       icon: Scissors },
  { id: "tecnologia", label: "Tecnología",   icon: Smartphone },
  { id: "deporte",    label: "Deporte",       icon: Dumbbell },
  { id: "cafe",       label: "Cafés",         icon: Coffee },
  { id: "joyeria",    label: "Joyería",       icon: Gem },
];

const categoryColors: Record<string, string> = {
  moda:        "#EC4899",
  gastronomia: "#F97316",
  belleza:     "#A855F7",
  tecnologia:  "#3B82F6",
  deporte:     "#22C55E",
  cafe:        "#92400E",
  joyeria:     "#EAB308",
};

const stores = [
  { name: "Zara",              category: "moda",        floor: "Piso 1", description: "Ropa y accesorios de moda internacional",           image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=380&fit=crop&q=75", new: true  },
  { name: "Nike Store",        category: "deporte",     floor: "Piso 1", description: "Calzado y ropa deportiva oficial Nike",              image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=380&fit=crop&q=75", new: false },
  { name: "El Corral Gourmet", category: "gastronomia", floor: "Piso 2", description: "Hamburguesas gourmet y experiencias únicas",          image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=380&fit=crop&q=75", new: true  },
  { name: "iShop",             category: "tecnologia",  floor: "Piso 1", description: "Productos Apple y accesorios premium",               image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=380&fit=crop&q=75", new: false },
  { name: "L'Oréal Studio",    category: "belleza",     floor: "Piso 2", description: "Cosméticos y tratamientos de belleza",               image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Starbucks Reserve", category: "cafe",        floor: "Piso 1", description: "Café de especialidad y experiencias únicas",          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&h=380&fit=crop&q=75", new: true  },
  { name: "Adidas Originals",  category: "deporte",     floor: "Piso 1", description: "Ropa y calzado deportivo y streetwear",               image: "https://images.unsplash.com/photo-1556906781-9a412961a28b?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Pandora",           category: "joyeria",     floor: "Piso 2", description: "Joyería y accesorios personalizables",                image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Sushi Express",     category: "gastronomia", floor: "Piso 2", description: "Sushi fresco y cocina japonesa moderna",              image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=500&h=380&fit=crop&q=75", new: true  },
  { name: "Mango",             category: "moda",        floor: "Piso 1", description: "Moda mediterránea contemporánea",                    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Wok",               category: "gastronomia", floor: "Piso 2", description: "Cocina asiática fresca y saludable",                  image: "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=500&h=380&fit=crop&q=75", new: false },
  { name: "MAC Cosmetics",     category: "belleza",     floor: "Piso 2", description: "Maquillaje profesional para todo tipo de piel",       image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Crepes & Waffles",  category: "gastronomia", floor: "Piso 2", description: "Crepes, waffles y ensaladas artesanales",             image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Samsung Store",     category: "tecnologia",  floor: "Piso 1", description: "Smartphones, tablets y electrodomésticos",            image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Juan Valdez",       category: "cafe",        floor: "Piso 1", description: "El mejor café colombiano de origen",                  image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=380&fit=crop&q=75", new: false },
  { name: "Tiffany & Co.",     category: "joyeria",     floor: "Piso 2", description: "Joyas y accesorios de lujo icónicos",                 image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=380&fit=crop&q=75", new: true  },
];

export default function Stores() {
  const [search, setSearch]     = useState("");
  const [category, setCategory] = useState("all");

  const filtered = stores.filter((s) => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || s.category === category;
    return matchSearch && matchCat;
  });

  const featured  = filtered.filter((s) => s.new);
  const regular   = filtered.filter((s) => !s.new);
  const showFeatured = featured.length > 0 && !search && category === "all";

  return (
    <section id="tiendas" className="py-12 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[#FF5229] text-sm font-medium tracking-widest uppercase mb-4">
            <ShoppingBag className="w-4 h-4" />
            <span>Directorio</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
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
            const color = cat.id !== "all" ? categoryColors[cat.id] : undefined;
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  category === cat.id
                    ? "text-white shadow-lg"
                    : "bg-[#141414] border border-[#2A2A2A] text-gray-400 hover:border-[#FF5229]/30 hover:text-[#FF5229]"
                }`}
                style={
                  category === cat.id
                    ? { background: color ?? "linear-gradient(135deg,#FF8A00,#FF5229,#E91E8C)" }
                    : {}
                }
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                {cat.label}
              </button>
            );
          })}
        </div>

        {filtered.length > 0 ? (
          <>
            {/* ── Destacadas (solo en vista "Todos" sin búsqueda) ── */}
            {showFeatured && (
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-bold gold-gradient text-white px-3 py-1 rounded-full">
                    ✨ RECIÉN LLEGADAS
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FF5229]/30 to-transparent" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {featured.map((store, i) => (
                    <StoreCard key={store.name} store={store} index={i} featured />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ── Grid principal ── */}
            {showFeatured && regular.length > 0 && (
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
                  Todas las tiendas
                </span>
                <div className="flex-1 h-px bg-[#2A2A2A]" />
              </div>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {(showFeatured ? regular : filtered).map((store, i) => (
                <StoreCard key={store.name} store={store} index={i} />
              ))}
            </div>
          </>
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

function StoreCard({
  store,
  index,
  featured = false,
}: {
  store: (typeof stores)[0];
  index: number;
  featured?: boolean;
}) {
  const color = categoryColors[store.category] ?? "#FF5229";

  return (
    <motion.div
      className="group cursor-pointer rounded-2xl overflow-hidden bg-[#141414] border border-[#2A2A2A] hover:border-[#FF5229]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
    >
      {/* Imagen */}
      <div className={`relative overflow-hidden ${featured ? "h-44 sm:h-52" : "h-36 sm:h-44"}`}>
        <Image
          src={store.image}
          alt={store.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay descripción en hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100">
          <p className="text-white text-xs sm:text-sm text-center leading-snug font-medium">
            {store.description}
          </p>
        </div>

        {/* Badge NUEVO */}
        {store.new && (
          <span className="absolute top-2.5 left-2.5 text-xs font-black text-white gold-gradient px-2.5 py-0.5 rounded-full shadow-lg">
            NUEVO
          </span>
        )}

        {/* Gradiente bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#141414] to-transparent" />
      </div>

      {/* Info */}
      <div className="px-3 pb-3 pt-1">
        <h3 className="font-black text-white text-sm sm:text-base group-hover:text-[#FF5229] transition-colors truncate">
          {store.name}
        </h3>
        <div className="flex items-center justify-between mt-1.5 gap-2">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ color, background: `${color}18`, border: `1px solid ${color}35` }}
          >
            {store.category.charAt(0).toUpperCase() + store.category.slice(1)}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-xs flex-shrink-0">
            <MapPin className="w-3 h-3" />
            {store.floor}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
