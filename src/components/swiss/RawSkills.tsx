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
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            04 // RAW SKILLS
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            STACK TAXONOMY
          </span>
        </div>
      </div>

      {/* Edge-to-edge block of uppercase editorial text */}
      <div className="w-full">
        <p className="text-lg sm:text-xl md:text-2xl font-sans font-light uppercase tracking-widest text-[#a1a1a6] leading-relaxed">
          FRONTEND_ARCHITECTURE // BACKEND_SYSTEMS // DATABASE_OPTIMIZATION // ALGORITHMIC_LOGIC // BUSINESS_MANAGEMENT_SOFTWARE // HIGH_SPEED_EXECUTION
        </p>
      </div>
    </section>
  );
}
