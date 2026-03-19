import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR Outlet | Centro Comercial Poblado Campestre",
  description:
    "El centro comercial más exclusivo de Poblado Campestre. Tiendas, gastronomía, entretenimiento y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
