import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/src/data/content";

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
    <html lang="en" className="antialiased">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,701,501&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-neutral-900">
        {children}
      </body>
    </html>
  );
}
