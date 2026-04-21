"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";

// ── Fecha de la Gran Apertura Oficial ─────────────────────
const OPENING_DATE = new Date("2026-05-17T10:00:00-05:00");

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number }

function useCountdown(target: Date): TimeLeft {
  const calc = useCallback((): TimeLeft => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days:    Math.floor(diff / 86_400_000),
      hours:   Math.floor((diff % 86_400_000) / 3_600_000),
      minutes: Math.floor((diff % 3_600_000) / 60_000),
      seconds: Math.floor((diff % 60_000) / 1_000),
    };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc);
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return timeLeft;
}

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);
  const { days, hours, minutes, seconds } = useCountdown(OPENING_DATE);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    // Create floating particles with logo colors
    const colors = ["255,138,0", "255,82,41", "233,30,140", "156,39,176"];
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 4 + 1;
      const color = colors[Math.floor(Math.random() * colors.length)];
      p.style.cssText = `
        position:absolute;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:rgba(${color},${Math.random() * 0.5 + 0.1});
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        animation: float ${Math.random() * 8 + 6}s ease-in-out infinite;
        animation-delay:${Math.random() * 4}s;
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      {/* Background layers */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(255,82,41,0.06) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 opacity-30" style={{background: "radial-gradient(ellipse at 20% 50%, rgba(255,138,0,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(233,30,140,0.12) 0%, transparent 50%)"}} />

      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Gold glow lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF5229]/20 to-transparent" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#FF5229]/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-[#FF5229]/30 bg-[#FF5229]/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF5229] animate-pulse flex-shrink-0" />
          <span className="text-[#FF5229] text-xs sm:text-sm font-medium tracking-widest uppercase">
            Ahora Abierto · Poblado Campestre
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.jpg"
            alt="MR Outlet"
            width={100}
            height={100}
            className="rounded-full shadow-[0_0_40px_rgba(255,82,41,0.3)] w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            priority
          />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
          <span className="block text-white">MR</span>
          <span className="block gold-text">OUTLET</span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 px-2">
          El destino de compras más exclusivo del sur de Cali.
          Moda, gastronomía y entretenimiento en un solo lugar.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mb-8">
          {[
            { icon: <MapPin className="w-4 h-4" />, label: "Poblado Campestre, Cali" },
            { icon: <Clock className="w-4 h-4" />, label: "Lun–Dom 10am–9pm" },
            { icon: <Star className="w-4 h-4" />, label: "+50 Tiendas & Restaurantes" },
          ].map((s, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-[#FF5229]">
              {s.icon}
              <span className="text-sm text-gray-300">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0 mb-10">
          <a
            href="#tiendas"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full gold-gradient text-white font-bold text-sm tracking-wider hover:opacity-90 transition-all hover:scale-105 text-center"
          >
            Ver Tiendas
          </a>
          <a
            href="#ubicacion"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-[#FF5229]/40 text-[#FF5229] font-semibold text-sm tracking-wider hover:bg-[#FF5229]/10 transition-all text-center"
          >
            Cómo Llegar
          </a>
        </div>

        {/* Countdown apertura */}
        <div className="px-4">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
            Gran Apertura Oficial · 17 de Mayo 2026
          </p>
          <div className="inline-flex items-center gap-2 sm:gap-4">
            {[
              { value: days,    label: "Días" },
              { value: hours,   label: "Horas" },
              { value: minutes, label: "Min" },
              { value: seconds, label: "Seg" },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-4">
                <div className="flex flex-col items-center">
                  <div className="glass rounded-xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-[#FF5229]/20">
                    <span className="text-xl sm:text-2xl font-black gold-text tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs mt-1 tracking-wider">{unit.label}</span>
                </div>
                {i < 3 && (
                  <span className="text-[#FF5229]/60 font-black text-xl mb-5 select-none">:</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#tiendas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-[#FF5229] transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown className="w-5 h-5" />
      </a>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}
