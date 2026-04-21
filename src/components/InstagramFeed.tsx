"use client";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

// Reemplaza estos con imágenes reales de Instagram cuando tengas la integración
const posts = [
  { id: 1, gradient: "from-pink-900 via-rose-800 to-orange-900", likes: "1.2K", comments: "48", emoji: "🛍️", caption: "¡Nuevas tiendas llegaron al outlet!" },
  { id: 2, gradient: "from-blue-900 via-indigo-800 to-purple-900", likes: "987", comments: "31", emoji: "🎬", caption: "Cineworld ya abrió sus puertas 🎉" },
  { id: 3, gradient: "from-amber-900 via-orange-800 to-red-900", likes: "2.1K", comments: "76", emoji: "🍔", caption: "Food court 100% listo para ti" },
  { id: 4, gradient: "from-green-900 via-emerald-800 to-teal-900", likes: "743", comments: "22", emoji: "🎮", caption: "Zona Gamer: el arcade más grande del sur" },
  { id: 5, gradient: "from-violet-900 via-purple-800 to-pink-900", likes: "1.5K", comments: "59", emoji: "👗", caption: "Moda que marca tendencia" },
  { id: 6, gradient: "from-cyan-900 via-blue-800 to-indigo-900", likes: "890", comments: "34", emoji: "✨", caption: "Descuentos de apertura en toda la tienda" },
];

const IG_PROFILE = "https://www.instagram.com/mroutlet___";

export default function InstagramFeed() {
  return (
    <section className="py-12 md:py-24" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-divider mb-12 md:mb-24" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#FF5229] text-sm font-medium tracking-widest uppercase mb-4 hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            <span>@mroutlet___</span>
          </a>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Síguenos en <span className="gold-text">Instagram</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Entérate primero de todo lo que pasa en MR Outlet. Novedades, eventos y mucho más.
          </p>
        </motion.div>

        {/* Grid de posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-8">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={IG_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-square group cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              {/* Fondo */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />

              {/* Emoji central */}
              <div className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl select-none">
                {post.emoji}
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-300 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 text-white font-semibold text-sm">
                    <Heart className="w-4 h-4 fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-white font-semibold text-sm">
                    <MessageCircle className="w-4 h-4 fill-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-white text-xs px-4 text-center leading-snug line-clamp-2 mt-1">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href={IG_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full gold-gradient text-white font-bold text-sm hover:opacity-90 transition-all hover:scale-105"
          >
            <Instagram className="w-4 h-4" />
            Seguir en Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
