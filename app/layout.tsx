import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caniches con Amor - Criadores Éticos de Caniches Toy",
  description: "Encuentra tu compañero ideal. Asesoría experta en caniches, genética responsable y comunidad privada.",
  keywords: "caniches, criadores, toy, asesoría, comunidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
