import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tráfego Pago Descomplicado Funciona? Vale a Pena em 2026",
  description: "Análise honesta do curso Tráfego Pago Descomplicado. Veja se funciona, se é confiável e se vale a pena para iniciantes em Facebook Ads.",
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
