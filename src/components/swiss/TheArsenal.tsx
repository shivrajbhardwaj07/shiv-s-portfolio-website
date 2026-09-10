"use client";

import React from "react";

export default function TheArsenal() {
  const capabilities = [
    {
      id: "01",
      title: "RAPID ARCHITECTURE",
      desc: "Velocity MVPs & functional platforms",
      scope: "Next.js 16 // Full-Stack Edge // Direct Revenue Engine",
    },
    {
      id: "02",
      title: "INFRASTRUCTURE OPTIMIZATION",
      desc: "Eradicating database bottlenecks",
      scope: "PostgreSQL Tuning // Sub-40ms Query Latency // Scalable Pipeline",
    },
    {
      id: "03",
      title: "ALGORITHMIC PIPELINES",
      desc: "Custom content & data logic",
      scope: "Automated Attention Loops // Data Aggregation // Acquisition",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      {/* Section Label in 12-col Grid */}
      <div className="grid grid-cols-12 gap-4 mb-20">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">03</span> // THE ARSENAL
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            CORE DISCIPLINES
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F7] tracking-tighter leading-[0.9]">
            High-leverage engineering capabilities executed without bloat.
          </h2>
        </div>
      </div>

      {/* Full-width vertical list with liquid hover drift of exactly 4px and 800ms cubic-bezier */}
      <div>
        {capabilities.map((item) => (
          <div
            key={item.id}
            className="group py-12 sm:py-16 border-b border-[#ffffff10] cursor-default"
          >
            <div className="grid grid-cols-12 gap-4 items-baseline transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[4px]">
              {/* Item ID - Monospace strictly for tiny numbers */}
              <div className="col-span-12 sm:col-span-2 font-mono text-xs text-[#a1a1a6]/50 group-hover:text-[#F5F5F7] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                {item.id} //
              </div>

              {/* Title & Description */}
              <div className="col-span-12 sm:col-span-7">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tighter text-[#F5F5F7] leading-[0.95]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#a1a1a6] font-light tracking-wide mt-3">
                  ({item.desc})
                </p>
              </div>

              {/* Technical Scope */}
              <div className="col-span-12 sm:col-span-3 text-left sm:text-right pt-2 sm:pt-0">
                <span className="text-[11px] uppercase tracking-[0.15em] text-[#a1a1a6]/50 group-hover:text-[#a1a1a6] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] font-light">
                  {item.scope}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
