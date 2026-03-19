"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="py-12 md:py-24" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="section-divider mb-12 md:mb-24" />
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
            <MapPin className="w-4 h-4" />
            <span>Ubicación</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Cómo <span className="gold-text">Llegar</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Estamos en el corazón de Poblado Campestre, de fácil acceso desde toda la ciudad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Map embed */}
          <motion.div
            className="rounded-2xl overflow-hidden border border-[#2A2A2A] h-64 sm:h-80 md:h-96 bg-[#141414] relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9955!2d-76.4636!3d3.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjQnMzIuMCJOIDc2wrAyNyc0OS4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación MR Outlet"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Address */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Dirección</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Urbanización Poblado Campestre<br />
                    Vía Aeropuerto Alfonso Bonilla Aragón<br />
                    Palmira – Cali, Valle del Cauca
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white">Contacto</h3>
              <a
                href="tel:+5726001234"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF5229] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#FF5229]" />
                <span className="text-sm group-hover:underline">+57 (2) 600 1234</span>
              </a>
              <a
                href="mailto:info@mroutlet.com.co"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF5229] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#FF5229]" />
                <span className="text-sm group-hover:underline">info@mroutlet.com.co</span>
              </a>
              <a
                href="https://www.instagram.com/mroutlet___"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#FF5229] transition-colors group"
              >
                <Instagram className="w-4 h-4 text-[#FF5229]" />
                <span className="text-sm group-hover:underline">@mroutlet___</span>
              </a>
            </div>

            {/* How to get there */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-white mb-4">Cómo llegar</h3>
              <div className="space-y-3">
                {[
                  { icon: "🚗", label: "En carro", desc: "15 min desde el norte de Cali por la vía al aeropuerto" },
                  { icon: "🚌", label: "En bus", desc: "Rutas 34, 56 y 89 tienen parada frente al centro comercial" },
                  { icon: "🛺", label: "En taxi/Uber", desc: "Indica 'Centro Comercial MR Outlet, Poblado Campestre'" },
                ].map((t) => (
                  <div key={t.label} className="flex items-start gap-3">
                    <span className="text-xl">{t.icon}</span>
                    <div>
                      <span className="font-medium text-white text-sm">{t.label}: </span>
                      <span className="text-gray-400 text-sm">{t.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://maps.google.com/?q=Poblado+Campestre+Cali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl gold-gradient text-black font-bold hover:opacity-90 transition-opacity"
            >
              <Navigation className="w-4 h-4" />
              Abrir en Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
