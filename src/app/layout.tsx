import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11005097350"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11005097350');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
