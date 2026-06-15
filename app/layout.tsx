import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Console Game Dev Toolkit — Retro Console Development Framework",
  description: "Complete toolkit for building retro-style game consoles with hardware templates, ROM dev tools, and cloud-based compilation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="425660e8-7699-4a93-8d43-3777accd04ee"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
