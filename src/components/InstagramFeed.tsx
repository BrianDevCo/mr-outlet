"use client";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=600&fit=crop",
    likes: "1.2K", comments: "48",
    caption: "¡Nuevas tiendas abiertas en MR Outlet! 🛍️ Ven a conocerlas",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=600&fit=crop",
    likes: "987", comments: "31",
    caption: "El lugar más exclusivo del sur de Cali ya está aquí ✨",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop",
    likes: "2.1K", comments: "76",
    caption: "Food Court con los mejores sabores 🍽️ ¿Cuál es tu favorito?",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=600&fit=crop",
    likes: "1.5K", comments: "59",
    caption: "Moda, estilo y las mejores marcas en un solo lugar 👗",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=600&fit=crop",
    likes: "743", comments: "22",
    caption: "Shopping experience de otro nivel 🔥 #MROutlet",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&h=600&fit=crop",
    likes: "890", comments: "34",
    caption: "Descuentos de apertura en todas las tiendas 🎉 ¡No te lo pierdas!",
  },
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
              {/* Imagen */}
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />

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
