"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface AdSlide {
  id: number;
  image?: string;           // URL de imagen real (opcional)
  gradient: string;         // gradiente de fondo cuando no hay imagen
  tag: string;
  title: string;
  subtitle: string;
  cta?: string;
  ctaHref?: string;
  emoji: string;
  accentColor: string;
}

// ──────────────────────────────────────────
// Agrega tus banners aquí.
// Pon image: "/banners/tu-imagen.jpg" para usar una foto real.
// ──────────────────────────────────────────
const slides: AdSlide[] = [
  {
    id: 1,
    gradient: "from-purple-950 via-purple-900/80 to-[#0A0A0A]",
    tag: "🎵 Concierto en Vivo",
    title: "Próximo Concierto",
    subtitle: "Este domingo 3 · Plaza Central · Entrada libre para todos",
    cta: "Ver agenda",
    ctaHref: "#eventos",
    emoji: "🎤",
    accentColor: "#A855F7",
  },
  {
    id: 2,
    gradient: "from-blue-950 via-blue-900/80 to-[#0A0A0A]",
    tag: "🎬 Gran Inauguración",
    title: "Inauguración Cineworld",
    subtitle: "El mejor cine del sur de Cali ya abrió sus puertas · 4 salas IMAX · Dolby Atmos",
    cta: "Conocer más",
    ctaHref: "#entretenimiento",
    emoji: "🎬",
    accentColor: "#3B82F6",
  },
];

const INTERVAL = 5000;

export default function AdBanner() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "clamp(180px, 38vw, 460px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Banners publicitarios"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0 flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65 }}
        >
          {/* Imagen de fondo (si existe) */}
          {slide.image && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}

          {/* Gradiente de fondo */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`} />

          {/* Capa oscura izquierda para legibilidad del texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

          {/* Decoraciones */}
          <div
            className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10"
            style={{ background: `radial-gradient(ellipse at right center, ${slide.accentColor}, transparent 70%)` }}
          />

          {/* Contenido */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full flex items-center gap-6 sm:gap-10">
            <motion.div
              className="hidden sm:block text-5xl md:text-7xl lg:text-8xl select-none"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {slide.emoji}
            </motion.div>

            <motion.div
              className="max-w-lg"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span
                className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
                style={{
                  color: slide.accentColor,
                  borderColor: `${slide.accentColor}50`,
                  background: `${slide.accentColor}18`,
                }}
              >
                {slide.tag}
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-2 leading-tight drop-shadow-lg">
                {slide.title}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
                {slide.subtitle}
              </p>

              {slide.cta && (
                <a
                  href={slide.ctaHref || "#"}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm text-white gold-gradient hover:opacity-90 transition-all hover:scale-105"
                >
                  {slide.cta}
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Banner anterior"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Banner siguiente"
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al banner ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 gold-gradient"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      {!paused && (
        <motion.div
          key={`pb-${current}`}
          className="absolute bottom-0 left-0 h-0.5 gold-gradient z-20"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: INTERVAL / 1000, ease: "linear" }}
        />
      )}
    </section>
  );
}
