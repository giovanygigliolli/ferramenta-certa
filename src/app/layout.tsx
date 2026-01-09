import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tráfego Pago Descomplicado Funciona? Review Completo 2025",
  description: "Análise honesta sobre o curso Tráfego Pago Descomplicado. Descubra se vale a pena para iniciantes e pequenos negócios. Sem promessas falsas.",
  keywords: ["tráfego pago funciona", "curso de facebook ads", "tráfego pago descomplicado vale a pena", "curso de tráfego pago hotmart"],
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
