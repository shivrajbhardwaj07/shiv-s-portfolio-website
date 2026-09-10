"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function TheInterrogation() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why partner directly with an independent systems architect over a 40-person agency?",
      a: "Zero bureaucracy, zero account manager telephone games, and zero junior delegates. You work directly with the engineer who maps your operational architecture and writes every line of code at 5x the velocity.",
    },
    {
      q: "What is your actual production delivery timeline?",
      a: "Standard functional MVPs and custom SaaS tools ship in 14 to 21 days. Full-scale operational software ships within 60 days. Everything is built to scale into Series A without rewrites.",
    },
    {
      q: "How do you guarantee sub-second latency and zero downtime?",
      a: "By eradicating bloated templates, heavy frameworks, and redundant database calls. We write ultra-clean Next.js edge-rendered code, tuned PostgreSQL schemas, and global CDN caching with contractual SLAs.",
    },
    {
      q: "Do we retain 100% intellectual property and code repository ownership?",
      a: "Completely. All repositories, architectural schematics, cloud configurations, and database credentials belong exclusively to you from Day 1. Zero vendor lock-in.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">09</span> // THE INTERROGATION
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            FREQUENT OBJECTIONS
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#F5F5F7] tracking-tighter leading-[0.9]">
            Direct answers to architectural and operational queries.
          </h2>
        </div>
      </div>

      {/* Razor-thin accordion with nearly invisible border-[#ffffff10] and liquid physics */}
      <div>
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="border-b border-[#ffffff10]">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full py-10 sm:py-12 text-left flex items-center justify-between gap-6 cursor-pointer group"
              >
                <div className="flex items-baseline gap-8 sm:gap-12 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[4px]">
                  <span className="font-mono text-xs text-[#a1a1a6]/50 group-hover:text-[#F5F5F7] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                    0{idx + 1} //
                  </span>
                  <span className="text-xl sm:text-3xl font-light text-[#F5F5F7] tracking-tight transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                    {item.q}
                  </span>
                </div>

                <div className="text-[#a1a1a6] group-hover:text-[#F5F5F7] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] shrink-0">
                  {isOpen ? (
                    <Minus className="w-5 h-5 stroke-[1.2]" />
                  ) : (
                    <Plus className="w-5 h-5 stroke-[1.2]" />
                  )}
                </div>
              </button>

              <div
                className={`grid transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pb-10 sm:pb-12"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                }`}
              >
                <div className="overflow-hidden grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-start-3 md:col-span-8">
                    <p className="text-base sm:text-lg text-[#a1a1a6] font-light leading-relaxed tracking-wide">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
