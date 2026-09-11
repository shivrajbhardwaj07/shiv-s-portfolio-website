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
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            07 // EXECUTION PROTOCOL
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            DELIVERY LIFECYCLE
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
            How systems are taken from operational chaos to production velocity.
          </h2>
        </div>
      </div>

      {/* Clean, Numbered Typographic List */}
      <div>
        {steps.map((step) => (
          <div
            key={step.num}
            className="border-b border-[#ffffff10] py-10 sm:py-14 grid grid-cols-12 gap-4 items-start"
          >
            {/* Step Number / Timeline */}
            <div className="col-span-12 md:col-span-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50">
              PHASE // <span>{step.timeline}</span>
            </div>

            {/* Title */}
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-xl md:text-2xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
                <span className="font-mono text-base mr-2 text-white/60">{step.num}</span>
                {step.title}
              </h3>
            </div>

            {/* Description */}
            <div className="col-span-12 md:col-span-6">
              <p className="text-sm md:text-base font-sans font-light text-[#a1a1a6] leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
