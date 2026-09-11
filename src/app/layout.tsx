import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
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
    <html lang="en" className="bg-black">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
