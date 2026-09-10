"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";

export default function ClientFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { scrollTo } = useLenis();

  const faqs = [
    {
      q: "How long does a typical build take from kickoff to launch?",
      a: "Most custom platform architecture sprints and SaaS MVPs are delivered in 21 to 30 days. Because you work directly with the principal architect without account manager bureaucracy or junior handoffs, we execute rapid weekly sprints with live staging links you can test directly.",
      highlight: "Average delivery: 21 Days with fixed-price SLA.",
    },
    {
      q: "Do I or my team need technical coding knowledge to manage the site?",
      a: "Zero coding experience is required. We configure clean, intuitive content editing interfaces, headless dashboards, and automated lead capture funnels. In addition, every delivery includes bespoke 1-on-1 Loom video walkthroughs and documentation tailored specifically for your operational team.",
      highlight: "100% non-technical friendly administrative tooling.",
    },
    {
      q: "How do you guarantee sub-second page speed and 99.99% uptime?",
      a: "Every project is contractually bound to our Performance SLA. We deploy on globally distributed Edge infrastructure (Cloudflare Workers & Vercel Enterprise) with pre-rendered server components. We do not use bloated WordPress plugins or fragile no-code builders that degrade under ad traffic surges.",
      highlight: "Contractual 100/100 Core Web Vitals guarantee.",
    },
    {
      q: "What if our business already runs on an existing legacy website or store?",
      a: "We execute zero-downtime cutovers. We build and test the new high-performance platform on private staging environments while your existing business operates normally. When it is time to go live, we execute a seamless DNS cutover without losing a single checkout session or customer lead.",
      highlight: "Zero customer disruption or lost traffic during launch.",
    },
    {
      q: "Why choose a boutique studio over a 50-person agency?",
      a: "In traditional 50-person agencies, you pay for senior partners to sell you on the pitch call, but your code is secretly handed down to undertrained junior interns and offshore subcontractors. At Shiv Studio, you work directly with the lead architect and growth engineer. You get enterprise-grade output with zero middleman markup.",
      highlight: "Direct founder execution. Zero telephone games.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>[09] OBJECTION HANDLING // CLIENT CLARITY</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Common <span className="font-serif italic font-normal text-slate-200">Questions.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          Direct, transparent answers with high contrast for effortless readability.
        </p>
      </div>

      {/* Smooth Borderless-Style Glass Accordion List */}
      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-md border transition-all duration-300 rounded-2xl shadow-xl ${
                isOpen
                  ? "border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  : "border-white/20 hover:border-white/30"
              }`}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-6 cursor-pointer group"
                data-cursor="action"
                data-cursor-text={isOpen ? "CLOSE" : "EXPAND"}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-bold text-white/40 group-hover:text-[#60A5FA] transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-[#60A5FA] transition-colors tracking-tight">
                    {faq.q}
                  </h3>
                </div>

                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-all shrink-0 shadow-sm">
                  {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </div>
              </button>

              {/* Answer Drawer */}
              <div
                className={`grid transition-all duration-300 ease-out overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 px-6 sm:px-8 pb-8"
                    : "grid-rows-[0fr] opacity-0 px-6 sm:px-8 pb-0"
                }`}
              >
                <div className="overflow-hidden space-y-4 pt-2 border-t border-white/15">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                    {faq.a}
                  </p>
                  <div className="font-mono text-xs text-[#60A5FA] font-bold bg-white/10 px-3.5 py-1.5 rounded-full inline-block border border-white/20">
                    ✓ {faq.highlight}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Direct inquiry CTA */}
      <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
        <p className="font-sans text-sm text-slate-200 bg-white/10 backdrop-blur-md py-2 px-4 rounded-full inline-block border border-white/20">
          Have a unique technical challenge or enterprise custom requirement?
        </p>
        <div>
          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo("#diagnostic")}
            dataCursor="action"
            dataCursorText="AUDIT"
            className="!px-6 !py-3.5 !text-xs font-mono bg-white/10 hover:bg-white/20 text-white border border-white/20"
          >
            <span>DISCUSS SPECIFICATIONS DIRECTLY</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
