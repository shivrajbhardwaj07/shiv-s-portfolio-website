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
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            03 // CAPABILITIES
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            CORE DISCIPLINES
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
            High-leverage engineering capabilities executed without bloat.
          </h2>
        </div>
      </div>

      {/* Full-width vertical list with liquid hover drift of exactly 4px and 800ms cubic-bezier */}
      <div>
        {capabilities.map((item) => (
          <div
            key={item.id}
            className="group py-10 sm:py-14 border-b border-[#ffffff10] cursor-default"
          >
            <div className="grid grid-cols-12 gap-4 items-baseline transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[4px]">
              {/* Item ID - Monospace strictly for tiny numbers */}
              <div className="col-span-12 sm:col-span-2 font-mono text-[10px] md:text-xs tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                {item.id} //
              </div>

              {/* Title & Description */}
              <div className="col-span-12 sm:col-span-7">
                <h3 className="text-xl md:text-2xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
                  {item.title}
                </h3>
                <p className="text-sm font-sans font-light text-[#a1a1a6] mt-2">
                  ({item.desc})
                </p>
              </div>

              {/* Technical Scope */}
              <div className="col-span-12 sm:col-span-3 text-left sm:text-right pt-2 sm:pt-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 group-hover:text-white transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
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
