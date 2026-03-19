"use client";

import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
      <div className="section-divider mb-20" />
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="glass rounded-3xl p-6 sm:p-10 border border-[#FF5229]/20">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl gold-gradient flex items-center justify-center mx-auto mb-5">
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            ¿No te quieres perder <span className="gold-text">nada</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Suscríbete a nuestro newsletter y recibe primero las mejores promociones, eventos exclusivos
            y descuentos especiales directo a tu correo.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 py-4 text-green-400">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">¡Listo! Pronto recibirás nuestras novedades.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                required
                className="flex-1 bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-full px-5 py-3 text-white placeholder-gray-600 outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3 rounded-full gold-gradient text-black font-bold text-sm hover:opacity-90 transition-all disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? "Enviando..." : "Suscribirme"}
              </button>
            </form>
          )}

          <p className="text-xs text-gray-600 mt-4">
            Sin spam. Puedes darte de baja en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
}
