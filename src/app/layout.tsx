import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/src/data/content";

export const metadata: Metadata = {
  title: `${profile.name} - Software Engineer`,
  description:
    "Portfolio of Naufal Syafi' Hakim — Information Technology student at ITS with Software Engineering, Data & AI interests.",
  icons: {
    icon: [{ url: "/photos/aples-logo.png", type: "image/png" }],
  },
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description:
      "Information Technology student with Software Engineering, Data & AI interests. Based in Surabaya, Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const saved = localStorage.getItem("portfolio-theme"); const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", dark); } catch {} })();`,
          }}
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,701,501&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white font-sans text-neutral-900 transition-colors duration-300 dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
