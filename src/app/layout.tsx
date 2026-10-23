import type { Metadata } from "next";
import { Playfair_Display, Sora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Buky – Jeden Monat neue Kinderbücher",
  description:
    "Das Bücher-Abo für Familien mit kleinen Kindern: Jeden Monat neue Bücher nach Hause, die alten gehen zurück. Gebrauchsspuren inklusive.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de-CH" className={`${playfair.variable} ${sora.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
