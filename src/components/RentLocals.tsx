"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, CheckCircle, Phone, Mail, Send, Ruler, Users, TrendingUp, MapPin } from "lucide-react";

const locals = [
  {
    id: "L-01",
    name: "Local A1",
    size: "45 m²",
    floor: "Piso 1 · Entrada principal",
    price: "$3.500.000",
    period: "/mes",
    available: true,
    type: "Comercial",
    features: ["Alta visibilidad", "Frente calle principal", "Instalaciones eléctricas", "Agua incluida"],
    highlight: true,
  },
  {
    id: "L-02",
    name: "Local B3",
    size: "72 m²",
    floor: "Piso 1 · Zona central",
    price: "$5.200.000",
    period: "/mes",
    available: true,
    type: "Comercial grande",
    features: ["Esquinero", "Doble vitrina", "Bodega incluida", "2 baños"],
    highlight: false,
  },
  {
    id: "L-03",
    name: "Local C2",
    size: "28 m²",
    floor: "Piso 2 · Zona moda",
    price: "$2.100.000",
    period: "/mes",
    available: true,
    type: "Pequeño comercial",
    features: ["Ideal para boutique", "Techo alto", "Iluminación LED", "Vitrina 3m"],
    highlight: false,
  },
  {
    id: "L-04",
    name: "Local D1",
    size: "110 m²",
    floor: "Piso 1 · Food Court",
    price: "$8.500.000",
    period: "/mes",
    available: false,
    type: "Restaurante / Comidas",
    features: ["Salida de humos", "Campana industrial", "Área de mesas incluida", "Cocina equipada"],
    highlight: false,
  },
  {
    id: "L-05",
    name: "Local E4",
    size: "55 m²",
    floor: "Piso 2 · Servicios",
    price: "$3.900.000",
    period: "/mes",
    available: true,
    type: "Servicios / Oficina",
    features: ["Sala de espera", "2 consultorios", "AC incluido", "Internet fibra óptica"],
    highlight: false,
  },
  {
    id: "L-06",
    name: "Local F2",
    size: "38 m²",
    floor: "Piso 1 · Zona tecnología",
    price: "$2.800.000",
    period: "/mes",
    available: true,
    type: "Comercial",
    features: ["Alta afluencia", "Vitrina doble", "Circuito eléctrico reforzado", "Seguridad 24h"],
    highlight: false,
  },
];

const benefits = [
  { icon: Users, title: "+5.000 visitantes/día", desc: "Alto flujo de clientes garantizado desde la apertura" },
  { icon: TrendingUp, title: "Zona en crecimiento", desc: "Poblado Campestre es el sector de mayor valorización en Cali" },
  { icon: MapPin, title: "Ubicación estratégica", desc: "Cerca al aeropuerto y fácil acceso desde toda la ciudad" },
  { icon: Building2, title: "Infraestructura moderna", desc: "Instalaciones nuevas, parqueadero, seguridad y mantenimiento incluido" },
];

export default function RentLocals() {
  const [filter, setFilter] = useState<"all" | "available">("available");
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const filtered = filter === "all" ? locals : locals.filter((l) => l.available);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
  };

  return (
    <section id="alquiler" className="py-24" style={{ backgroundColor: "var(--bg)" }}>
      <div className="section-divider mb-24" />
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-[#FF5229] text-sm font-medium tracking-widest uppercase mb-4">
            <Building2 className="w-4 h-4" />
            <span>Oportunidad de Negocio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Alquila tu <span className="gold-text">Local</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Instala tu negocio en el centro comercial más nuevo de Poblado Campestre.
            Locales disponibles para todo tipo de emprendimiento.
          </p>
        </motion.div>

        {/* Benefits strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                className="glass rounded-xl p-5 text-center hover:border-[#FF5229]/40 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{b.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { id: "available", label: "Disponibles" },
            { id: "all", label: "Todos los locales" },
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id as "all" | "available")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.id
                  ? "gold-gradient text-white"
                  : "bg-[#141414] border border-[#2A2A2A] text-gray-400 hover:border-[#FF5229]/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Locals grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((local, i) => (
            <motion.div
              key={local.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 group ${
                local.highlight
                  ? "border-[#FF5229]/50 shadow-[0_0_30px_rgba(255,82,41,0.1)]"
                  : "hover:border-[#FF5229]/30"
              } ${!local.available ? "opacity-60" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            >
              {/* Top bar */}
              <div className={`h-1.5 ${local.available ? "gold-gradient" : "bg-[#2A2A2A]"}`} />

              <div className="p-6">
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    {local.highlight && (
                      <span className="text-xs font-bold gold-gradient text-white px-2 py-0.5 rounded-full mb-2 inline-block">
                        ⭐ DESTACADO
                      </span>
                    )}
                    <h3 className="text-xl font-black text-white group-hover:text-[#FF5229] transition-colors">
                      {local.name}
                    </h3>
                    <p className="text-sm text-gray-500">{local.type}</p>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      local.available
                        ? "bg-green-500/10 text-green-400 border border-green-500/30"
                        : "bg-gray-500/10 text-gray-500 border border-gray-500/30"
                    }`}
                  >
                    {local.available ? "Disponible" : "Ocupado"}
                  </span>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <Ruler className="w-3.5 h-3.5 text-[#FF5229]" />
                    {local.size}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5229]" />
                    {local.floor}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {local.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-[#FF5229] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-[#2A2A2A]">
                  <div>
                    <span className="text-2xl font-black gold-text">{local.price}</span>
                    <span className="text-gray-500 text-sm">{local.period}</span>
                  </div>
                  {local.available && (
                    <a
                      href="#contacto-alquiler"
                      className="px-4 py-2 rounded-full gold-gradient text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                      Me interesa
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <div id="contacto-alquiler" className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div>
            <h3 className="text-3xl font-black mb-4">
              ¿Listo para <span className="gold-text">empezar</span>?
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Déjanos tus datos y un asesor comercial te contactará en menos de 24 horas para
              mostrarte los locales disponibles, resolver tus dudas y ayudarte a encontrar el
              espacio perfecto para tu negocio.
            </p>
            <div className="space-y-4">
              <a
                href="tel:+5726001234"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#FF5229]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Llámanos</p>
                  <p className="font-semibold text-white group-hover:text-[#FF5229] transition-colors">
                    +57 (2) 600 1234
                  </p>
                </div>
              </a>
              <a
                href="mailto:arrendamientos@mroutlet.com.co"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-[#FF5229]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Escríbenos</p>
                  <p className="font-semibold text-white group-hover:text-[#FF5229] transition-colors">
                    arrendamientos@mroutlet.com.co
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-8 border border-[#FF5229]/10">
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h4>
                <p className="text-gray-400">
                  Un asesor te contactará en las próximas 24 horas. ¡Gracias por tu interés!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-lg font-bold mb-2">Solicitar información</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Nombre completo *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Teléfono / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+57 300 000 0000"
                      className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none text-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Correo electrónico</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.com"
                    className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">¿Qué tipo de negocio tienes?</label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-lg px-4 py-2.5 text-gray-300 outline-none text-sm transition-colors"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Ropa y accesorios</option>
                    <option>Gastronomía / Restaurante</option>
                    <option>Tecnología / Electrónica</option>
                    <option>Belleza / Spa</option>
                    <option>Servicios / Oficina</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Mensaje adicional</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="¿Qué tamaño necesitas? ¿Tienes alguna pregunta especial?"
                    className="w-full bg-[#141414] border border-[#2A2A2A] focus:border-[#FF5229]/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 outline-none text-sm transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-xl gold-gradient text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Enviando..." : "Solicitar información"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
