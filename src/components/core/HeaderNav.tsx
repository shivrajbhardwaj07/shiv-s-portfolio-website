"use client";

import React, { useState, useEffect } from "react";
import { useLenis } from "./SmoothScroll";
import MagneticButton from "./MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function HeaderNav() {
  const { scrollTo } = useLenis();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "intro",
        "capabilities",
        "arsenal",
        "metrics",
        "gallery",
        "process",
        "social-proof",
        "faq",
        "diagnostic",
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 260) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "COVER", target: "#hero", id: "hero" },
    { label: "INTRO", target: "#intro", id: "intro" },
    { label: "CAPABILITIES", target: "#capabilities", id: "capabilities" },
    { label: "SCHEMATIC", target: "#arsenal", id: "arsenal" },
    { label: "ROI", target: "#metrics", id: "metrics" },
    { label: "WORK", target: "#gallery", id: "gallery" },
    { label: "PROCESS", target: "#process", id: "process" },
    { label: "TESTIMONY", target: "#social-proof", id: "social-proof" },
    { label: "FAQ", target: "#faq", id: "faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 pointer-events-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Monogram & Issue Tag */}
        <button
          onClick={() => scrollTo("#hero")}
          className="bg-white/10 backdrop-blur-md border border-white/20 group px-4 py-2 flex items-center gap-2.5 transition-all hover:bg-white/15 hover:border-white/30 cursor-pointer rounded-full"
          data-cursor="action"
          data-cursor-text="COVER"
        >
          <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
          <span className="font-serif tracking-tight uppercase font-bold text-sm text-white">
            THE INNOVATOR
          </span>
          <span className="hidden sm:inline font-mono text-[10px] text-slate-300 border-l border-white/20 pl-2">
            SEP 2026
          </span>
        </button>

        {/* Central Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 shadow-sm rounded-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.label}
                onClick={() => scrollTo(item.target)}
                data-cursor="action"
                className={`font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 transition-all duration-200 cursor-pointer rounded-full ${
                  isActive
                    ? "text-white bg-[#2563EB] font-semibold shadow-xs"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <MagneticButton
            variant="primary"
            onClick={() => scrollTo("#diagnostic")}
            dataCursorText="AUDIT"
            className="!px-4 !py-2.5 !text-[11px] !rounded-full shadow-sm"
          >
            <span>[ INITIATE AUDIT ]</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
