"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";

const links = [
  { label: "Alquiler", href: "#alquiler" },
  { label: "Tiendas", href: "#tiendas" },
  { label: "Gastronomía", href: "#gastronomia" },
  { label: "Eventos", href: "#eventos" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isLight = theme === "light";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-scrolled backdrop-blur-md border-b border-[#FF5229]/20 py-3"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { backgroundColor: "var(--navbar-bg)" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="MR Outlet"
            width={48}
            height={48}
            className="rounded-full object-cover"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-300 hover:text-[#FF5229] transition-colors duration-200 tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side: theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 ${
              isLight
                ? "bg-white border-gray-200 text-gray-700 shadow-sm hover:border-[#FF5229]/40"
                : "bg-white/5 border-white/10 text-gray-300 hover:border-[#FF5229]/40 hover:text-[#FF5229]"
            }`}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <a
            href="#horarios"
            className="px-5 py-2 rounded-full gold-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Horarios
          </a>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggle}
            aria-label="Cambiar tema"
            className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
              isLight
                ? "bg-white border-gray-200 text-gray-700"
                : "bg-white/5 border-white/10 text-gray-300"
            }`}
          >
            {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-11 h-11 flex items-center justify-center"
            style={{ color: "var(--text)" }}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-[#FF5229]/20 px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "var(--surface)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-[#FF5229] transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#horarios"
            className="mt-2 text-center px-5 py-2.5 rounded-full gold-gradient text-white font-semibold"
          >
            Horarios
          </a>
        </div>
      )}
    </header>
  );
}
