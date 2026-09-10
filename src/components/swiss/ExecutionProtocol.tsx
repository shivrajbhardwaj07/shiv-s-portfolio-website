"use client";

import React from "react";

export default function ExecutionProtocol() {
  const steps = [
    {
      num: "01.",
      title: "DIAGNOSE",
      desc: "Full structural audit of existing operations, code bottlenecks, and revenue funnels. We identify where latency and friction occur and eliminate theory.",
      timeline: "HOURS 0–48",
    },
    {
      num: "02.",
      title: "ARCHITECT",
      desc: "Designing clean data schemas, distributed edge components, and high-velocity product engines. No bloated libraries, no redundant dependencies.",
      timeline: "DAYS 3–14",
    },
    {
      num: "03.",
      title: "DEPLOY",
      desc: "Rigorous staging, zero-downtime production cutover, and immediate telemetry tracking to confirm speed, uptime, and commercial conversion velocity.",
      timeline: "DAYS 15–21",
    },
  ];

  return (
    <section
      id="protocol"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">07</span> // EXECUTION PROTOCOL
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            DELIVERY LIFECYCLE
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F7] tracking-tighter leading-[0.9]">
            How systems are taken from operational chaos to production velocity.
          </h2>
        </div>
      </div>

      {/* Clean, Numbered Typographic List */}
      <div>
        {steps.map((step) => (
          <div
            key={step.num}
            className="border-b border-[#ffffff10] py-14 sm:py-20 grid grid-cols-12 gap-4 items-start"
          >
            {/* Step Number / Timeline */}
            <div className="col-span-12 md:col-span-2 text-xs text-[#a1a1a6]/50 font-light tracking-wide">
              PHASE // <span className="font-mono text-xs">{step.timeline}</span>
            </div>

            {/* Title */}
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-3xl sm:text-5xl font-light tracking-tighter text-[#F5F5F7] leading-[0.9]">
                <span className="font-mono font-light">{step.num}</span> {step.title}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-base sm:text-lg text-[#a1a1a6] font-light leading-relaxed tracking-wide">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
