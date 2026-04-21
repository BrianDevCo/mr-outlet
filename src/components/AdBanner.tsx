"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface AdSlide {
  id: number;
  image: string;         // URL de la imagen de fondo
  tag: string;
  title: string;
  subtitle: string;
  cta?: string;
  ctaHref?: string;
  accentColor: string;
  overlayColor: string;  // color del gradiente izquierdo
}

// ── Edita los banners aquí ──────────────────────────────────
// Para usar tus propias fotos: image: "/banners/mi-foto.jpg"
// ────────────────────────────────────────────────────────────
const slides: AdSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600&h=700&fit=crop&q=80",
    tag: "🎵 Concierto en Vivo",
    title: "Próximo\nConcierto",
    subtitle: "Este domingo 3 · Plaza Central MR Outlet · Entrada libre para todos",
    cta: "Ver agenda",
    ctaHref: "#eventos",
    accentColor: "#A855F7",
    overlayColor: "100,0,150",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600&h=700&fit=crop&q=80",
    tag: "🎬 Gran Inauguración",
    title: "Inauguración\nCineworld",
    subtitle: "4 salas IMAX · Dolby Atmos · El mejor cine del sur de Cali ya abrió",
    cta: "Conocer más",
    ctaHref: "#entretenimiento",
    accentColor: "#3B82F6",
    overlayColor: "0,30,100",
  },
];

const INTERVAL = 6000;

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
      style={{ height: "clamp(220px, 45vw, 560px)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Banners publicitarios"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagen — efecto zoom lento */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt={slide.title.replace("\n", " ")}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradiente lateral */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(${slide.overlayColor},0.85) 0%, rgba(${slide.overlayColor},0.4) 45%, transparent 75%)`,
            }}
          />

          {/* Línea decorativa de color */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5"
            style={{ background: slide.accentColor }}
          />

          {/* Contenido */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 w-full">
              <motion.div
                key={`content-${slide.id}`}
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="max-w-xl"
              >
                {/* Tag */}
                <span
                  className="inline-block text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
                  style={{
                    color: slide.accentColor,
                    border: `1px solid ${slide.accentColor}60`,
                    background: `${slide.accentColor}20`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {slide.tag}
                </span>

                {/* Título — salto de línea intencional */}
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-4 drop-shadow-2xl">
                  {slide.title.split("\n").map((line, i) => (
                    <span key={i} className="block">
                      {i === 1 ? <span className="gold-text">{line}</span> : line}
                    </span>
                  ))}
                </h2>

                {/* Subtítulo */}
                <p className="text-gray-200 text-sm sm:text-base mb-6 leading-relaxed max-w-md drop-shadow-lg">
                  {slide.subtitle}
                </p>

                {/* CTA */}
                {slide.cta && (
                  <a
                    href={slide.ctaHref || "#"}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white gold-gradient hover:opacity-90 transition-all hover:scale-105 shadow-xl"
                  >
                    {slide.cta}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Miniaturas de slides (derecha) — solo desktop */}
      <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrent(i)}
            aria-label={`Ir al banner ${i + 1}`}
            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
              i === current
                ? "w-14 h-10 ring-2 ring-white opacity-100"
                : "w-12 h-8 opacity-40 hover:opacity-70"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Flecha izquierda */}
      <button
        onClick={prev}
        aria-label="Banner anterior"
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Flecha derecha */}
      <button
        onClick={next}
        aria-label="Banner siguiente"
        className="absolute right-16 sm:right-24 md:right-28 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots + contador */}
      <div className="absolute bottom-4 left-8 sm:left-12 z-20 flex items-center gap-3">
        <span className="text-white/60 text-xs font-mono tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-2 gold-gradient" : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
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
