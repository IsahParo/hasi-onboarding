import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hasi · Onboarding Estratégico",
  description: "Bem-vinda à Hasi. Sua marca está em boas mãos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans bg-hasi-bg text-cream min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
