import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tráfego Pago Descomplicado Funciona? Vale a Pena em 2026?",
  description: "Veja se o curso Tráfego Pago Descomplicado funciona, se é confiável e se vale a pena. Análise completa antes de comprar.",
  keywords: ["tráfego pago descomplicado funciona", "tráfego pago descomplicado vale a pena", "curso de tráfego pago hotmart", "curso de facebook ads", "facebook ads para iniciantes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
