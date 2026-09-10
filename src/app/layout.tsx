import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F8FAFC",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SHIV // DIGITAL GROWTH & ENGINEERING ADVISORY",
  description:
    "Founder-led growth engineering advisory. High-performance platform architecture, custom SaaS product builds, and calculated commercial attention mechanics for serious B2B operators.",
  keywords: [
    "Digital Growth Advisory",
    "Enterprise Web Architecture",
    "B2B SaaS Engineering",
    "Product Architecture",
    "Conversion Engineering",
    "High Performance Web",
    "GSAP ScrollTrigger",
    "Next.js Architecture",
    "Stripe Infrastructure",
  ],
  authors: [{ name: "Shiv - Lead Growth & Engineering Architect" }],
  openGraph: {
    title: "SHIV // DIGITAL GROWTH & ENGINEERING ADVISORY",
    description:
      "We architect high-yield digital infrastructure and enterprise growth systems for market leaders. Platform Architecture, Product Building, and Attention Mechanics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} antialiased selection:bg-[#F5F5F7]/20 selection:text-[#F5F5F7] bg-[#0A0A0B]`}
    >
      <body className="min-h-full font-sans overflow-x-hidden bg-[#0A0A0B] text-[#F5F5F7]">
        {children}
      </body>
    </html>
  );
}
