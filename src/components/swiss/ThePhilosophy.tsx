"use client";

import React from "react";

export default function ThePhilosophy() {
  return (
    <section
      id="philosophy"
      className="relative py-44 sm:py-60 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none flex flex-col items-center justify-center text-center"
    >
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-12">
        08 // THE PHILOSOPHY
      </div>

      {/* A single refined italicized sentence centered on the screen */}
      <blockquote className="text-2xl md:text-4xl font-serif italic font-normal tracking-tight text-[#F5F5F7] leading-relaxed max-w-4xl mx-auto">
        &ldquo;Age is a metric of time, not capability. Speed, logic, and execution are the only metrics that scale a business.&rdquo;
      </blockquote>

      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mt-12">
        — SHIVRAJ BHARDWAJ // FOUNDER &amp; ARCHITECT
      </div>
    </section>
  );
}
