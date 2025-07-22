import type { Metadata } from "next";
import { Fraunces, Anton } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

const fontAnton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const fontFraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio The Lit",
  description: "Estúdio de tatuagem para todos os estilos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${fontAnton.variable} ${fontFraunces.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
