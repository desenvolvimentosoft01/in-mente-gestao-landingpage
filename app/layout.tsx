import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import BotaoWhatsappFlutuante from "@/components/BotaoWhatsappFlutuante";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "In Mente Gestão — Sistema de Gestão para Restaurantes e Lojas",
  description:
    "Venda balcão, pedidos, estoque, financeiro e relatórios em um só sistema. Conheça o In Mente Gestão e fale com a gente pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
        <BotaoWhatsappFlutuante />
      </body>
    </html>
  );
}
