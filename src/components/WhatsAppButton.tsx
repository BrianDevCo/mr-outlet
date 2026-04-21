"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WA_NUMBER = "573001234567"; // Reemplaza con el número real de MR Outlet
const WA_MESSAGE = "Hola MR Outlet! 👋 Me gustaría recibir más información.";
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.22 }}
            className="relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-4 w-64 shadow-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "#25D366" }}
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">MR Outlet</p>
                <p className="text-green-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  En línea
                </p>
              </div>
            </div>

            {/* Bubble */}
            <div className="bg-[#252525] rounded-xl rounded-tl-none p-3 mb-4">
              <p className="text-gray-300 text-xs leading-relaxed">
                ¡Hola! 👋 ¿En qué podemos ayudarte hoy? Responderemos en minutos.
              </p>
            </div>

            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-opacity"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-4 h-4" />
              Iniciar conversación
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <div className="relative">
        {/* Anillos de pulso */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "#25D366" }}
        />
        <motion.button
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
          style={{ background: "#25D366" }}
          aria-label="Contactar por WhatsApp"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="wa"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <WhatsAppIcon className="w-7 h-7 fill-white" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
