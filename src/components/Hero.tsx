"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, MapPin, Clock, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

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
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF5229]/30 bg-[#FF5229]/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#FF5229] animate-pulse" />
          <span className="text-[#FF5229] text-sm font-medium tracking-widest uppercase">
            Ahora Abierto · Poblado Campestre
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.jpg"
            alt="MR Outlet"
            width={120}
            height={120}
            className="rounded-full shadow-[0_0_40px_rgba(255,82,41,0.3)]"
            priority
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 leading-none">
          <span className="block text-white">MR</span>
          <span className="block gold-text">OUTLET</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          El destino de compras más exclusivo del sur de Cali.
          Moda, gastronomía y entretenimiento en un solo lugar.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { icon: <MapPin className="w-4 h-4" />, label: "Poblado Campestre, Cali" },
            { icon: <Clock className="w-4 h-4" />, label: "Lun–Dom 10am–9pm" },
            { icon: <Star className="w-4 h-4" />, label: "+50 Tiendas & Restaurantes" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 text-[#FF5229]">
              {s.icon}
              <span className="text-sm text-gray-300">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#tiendas"
            className="px-8 py-3.5 rounded-full gold-gradient text-black font-bold text-sm tracking-wider hover:opacity-90 transition-all hover:scale-105"
          >
            Ver Tiendas
          </a>
          <a
            href="#ubicacion"
            className="px-8 py-3.5 rounded-full border border-[#FF5229]/40 text-[#FF5229] font-semibold text-sm tracking-wider hover:bg-[#FF5229]/10 transition-all"
          >
            Cómo Llegar
          </a>
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
