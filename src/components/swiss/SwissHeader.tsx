"use client";

import React from "react";
import { useLenis } from "../core/SmoothScroll";

export default function SwissHeader() {
  const { scrollTo } = useLenis();

  const navItems = [
    { label: "ABOUT", target: "#intro" },
    { label: "DISCIPLINES", target: "#capabilities" },
    { label: "WORK", target: "#index" },
    { label: "PROTOCOL", target: "#protocol" },
    { label: "FAQ", target: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-between pointer-events-auto bg-transparent">
      {/* Studio Wordmark */}
      <button
        onClick={() => scrollTo("#hero")}
        className="text-xs uppercase tracking-[0.25em] font-light text-[#F5F5F7] hover:opacity-70 transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer text-left"
      >
        SHIVRAJ BHARDWAJ
      </button>

      {/* Editorial Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.target)}
            className="text-[11px] uppercase tracking-[0.2em] font-light text-[#a1a1a6] hover:text-[#F5F5F7] transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Action CTA: Elegant text link with animated underline */}
      <button
        onClick={() => scrollTo("#terminal")}
        className="group relative pb-1 text-xs uppercase tracking-[0.2em] font-light text-[#F5F5F7] transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] cursor-pointer flex flex-col items-end"
      >
        <span>{'INITIATE [→]'}</span>
        <span className="h-[1px] bg-[#F5F5F7] w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]" />
      </button>
    </header>
  );
}
