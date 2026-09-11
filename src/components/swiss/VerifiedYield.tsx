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
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            05 // VERIFIED YIELD
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            MEASURED BENCHMARKS
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
            Measured benchmarks and high-velocity output.
          </h2>
        </div>
      </div>

      {/* 4-column grid of numbers floating in whitespace */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12">
        {metrics.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <div>
              {/* Elegant Scaled-down Number */}
              <div className="text-4xl md:text-5xl font-sans font-light text-white leading-none">
                {item.value}
              </div>

              {/* Refined Monospace Label */}
              <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mt-6">
                {item.label}
              </div>
            </div>

            <p className="text-xs font-sans font-light text-[#a1a1a6] mt-4">
              // {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
