import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-brillas-sans"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-brillas-mono"
});

export const metadata: Metadata = {
  title: "Brillas Labs",
  description:
    "Brillas Labs builds production-ready voice and operational AI agents for real business workflows.",
  openGraph: {
    title: "Brillas Labs — AI infrastructure for real business workflows",
    description:
      "Production-ready voice and operational AI agents connected to real business systems and workflows.",
    siteName: "Brillas Labs",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1126"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
