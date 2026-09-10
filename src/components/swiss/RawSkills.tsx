"use client";

import React from "react";

export default function RawSkills() {
  return (
    <section
      id="skills"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none overflow-hidden"
    >
      <div className="grid grid-cols-12 gap-4 mb-16">
        <div className="col-span-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">04</span> // RAW SKILLS
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            STACK TAXONOMY
          </span>
        </div>
      </div>

      {/* Edge-to-edge block of uppercase editorial text */}
      <div className="w-full">
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light uppercase tracking-tight text-[#F5F5F7]/75 leading-[1.3] text-justify hyphens-none">
          FRONTEND_ARCHITECTURE // BACKEND_SYSTEMS // DATABASE_OPTIMIZATION // ALGORITHMIC_LOGIC // BUSINESS_MANAGEMENT_SOFTWARE // HIGH_SPEED_EXECUTION
        </p>
      </div>
    </section>
  );
}
