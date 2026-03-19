import { Instagram, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

const links = {
  "El Mall": ["Sobre Nosotros", "Tiendas", "Gastronomía", "Entretenimiento"],
  "Información": ["Horarios", "Ubicación", "Parqueadero", "Servicios"],
  "Legal": ["Política de Privacidad", "Términos y Condiciones", "Trabaja con Nosotros"],
};

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1E1E1E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.jpg" alt="MR Outlet" width={44} height={44} className="rounded-full" />
              <span className="text-xl font-black tracking-wider">
                MR <span className="gold-text">OUTLET</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              El destino de compras, gastronomía y entretenimiento más exclusivo del sur de Cali.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/mroutlet___", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg bg-[#141414] border border-[#2A2A2A] flex items-center justify-center text-gray-500 hover:text-[#FF5229] hover:border-[#FF5229]/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-bold text-white text-sm tracking-wider mb-4">{group}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#FF5229] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1E1E1E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} MR Outlet · Todos los derechos reservados
          </p>
          <p className="text-xs sm:text-sm text-gray-700 text-center sm:text-right">
            Poblado Campestre, Palmira – Cali, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
