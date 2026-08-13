import type { Metadata } from "next";
import { Fjalla_One, Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/src/data/content";

const fjalla = Fjalla_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fjalla-one",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — Data Scientist Intern`,
  description:
    "Portfolio of Naufal Syafi' Hakim — Information Technology student and Data Scientist Intern at ITS, Surabaya. Data pipelines, applied AI, and teaching.",
  openGraph: {
    title: `${profile.name} — Data Scientist Intern`,
    description:
      "Information Technology student & Data Scientist Intern. Data pipelines, applied AI, and teaching. Based in Surabaya, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fjalla.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white font-sans text-neutral-900">
        {children}
      </body>
    </html>
  );
}
