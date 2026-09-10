"use client";

import React from "react";

export default function ThePhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-44 sm:py-60 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none flex flex-col items-center justify-center text-center"
    >
      <div className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] mb-12 font-light">
        <span className="font-mono text-xs">08</span> // THE PHILOSOPHY
      </div>

      {/* A single, massive italicized sentence centered on the screen */}
      <blockquote className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif italic font-light text-[#F5F5F7] tracking-tight leading-[1.2] max-w-5xl mx-auto">
        &ldquo;Age is a metric of time, not capability. Speed, logic, and execution are the only metrics that scale a business.&rdquo;
      </blockquote>

      <div className="text-xs uppercase tracking-[0.25em] text-[#a1a1a6]/60 mt-14 font-light">
        — SHIVRAJ BHARDWAJ // FOUNDER &amp; ARCHITECT
      </div>
    </section>
  );
}
