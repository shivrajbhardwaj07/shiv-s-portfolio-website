"use client";

import React from "react";

export default function VerifiedYield() {
  const metrics = [
    {
      value: "72 HRS",
      label: "MVP DEPLOYMENT",
      detail: "Concept to active user traffic",
    },
    {
      value: "60 DAYS",
      label: "BUSINESS OS SHIPPED",
      detail: "Complete custom operations build",
    },
    {
      value: "50%",
      label: "LATENCY REDUCTION",
      detail: "Database & query pipeline tuning",
    },
    {
      value: "0",
      label: "TOLERANCE FOR INEFFICIENT CODE",
      detail: "Zero bloat, zero technical debt",
    },
  ];

  return (
    <section
      id="yield"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">05</span> // VERIFIED YIELD
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            MEASURED BENCHMARKS
          </span>
        </div>
      </div>

      {/* 4-column grid of naked razor-thin numbers floating in whitespace */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {metrics.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <div>
              {/* Elegant Razor-Thin Number */}
              <div className="text-6xl sm:text-7xl lg:text-8xl font-thin tracking-tighter text-[#F5F5F7] leading-none">
                {item.value}
              </div>

              {/* Refined Label */}
              <div className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6] mt-6 font-light">
                {item.label}
              </div>
            </div>

            <p className="text-xs text-[#a1a1a6]/50 mt-6 font-light tracking-wide">
              // {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
