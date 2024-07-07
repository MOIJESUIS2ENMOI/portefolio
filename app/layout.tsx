import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({ subsets: ["latin"], variable: "--font-caption"} );

export const metadata: Metadata = {
  title: "Mon PorteFolio de Fou",
  description: "Un PorteFolio de Fou pour les projets de Fou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, GeistMono.variable, AnekTelugu.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
