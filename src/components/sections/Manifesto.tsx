"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, X, ShieldAlert, Cpu } from "lucide-react";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll(".manifesto-word");
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { opacity: 0.18, y: 3 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 78%",
              end: "bottom 48%",
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const manifestoText =
    "Most commercial enterprises bleed capital through fragmented digital systems—sluggish platforms, fragile templates, and disconnected marketing vendors. We do not sell disposable templates. We engineer high-yield, end-to-end digital infrastructure for serious operators.";

  const words = manifestoText.split(" ");

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-slate-200"
    >
      {/* Section Header Monospace Meta */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-500 uppercase pb-8 border-b border-slate-200 mb-16">
        <div className="flex items-center gap-2">
          <span className="text-[#2563EB] font-bold">[02]</span>
          <span className="text-[#0F172A] font-semibold">THE "ANTI-FAKE" MANIFESTO</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          OPERATIONAL THESIS // CAPITAL PRESERVATION
        </div>
      </div>

      {/* Main Oversized Typography Revealed Line-by-Line / Word-by-Word on Scroll */}
      <div className="max-w-5xl mb-24">
        <p
          ref={textRef}
          className="font-sans font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.14] tracking-tight text-[#0F172A] select-none"
        >
          {words.map((word, i) => {
            const isHighlight =
              word.includes("high-yield,") ||
              word.includes("end-to-end") ||
              word.includes("infrastructure") ||
              word.includes("operators.");
            return (
              <span
                key={i}
                className={`manifesto-word inline-block mr-[0.24em] transition-colors duration-100 ${
                  isHighlight ? "text-[#2563EB] font-black" : "text-[#0F172A]"
                }`}
              >
                {word}
              </span>
            );
          })}
        </p>
      </div>

      {/* The Brutal Contrast Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* The Fragmented Vendor Trap */}
        <div className="p-8 sm:p-10 border border-slate-200 bg-white shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 text-slate-700 text-xs font-mono">
            <div className="flex items-center gap-2 text-rose-600 font-semibold">
              <ShieldAlert className="w-4 h-4" />
              <span>THE FRAGMENTED AGENCY TRAP</span>
            </div>
            <span className="px-2 py-0.5 bg-rose-50 text-rose-700 font-mono text-[10px] rounded border border-rose-200">
              COMMERCIAL RISK
            </span>
          </div>

          <ul className="space-y-6 text-sm text-slate-600">
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Fragile No-Code / WordPress Monoliths</strong>
                <span className="text-slate-500 leading-relaxed text-xs sm:text-sm">
                  8+ second load times, 40 conflicting plugins, and catastrophic crashes under high-volume ad campaigns.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Junior Dev Bait-and-Switch</strong>
                <span className="text-slate-500 leading-relaxed text-xs sm:text-sm">
                  Pitched by agency executives, outsourced to undertrained interns or off-shore sweatshops with zero accountability.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 mt-0.5">
                <X className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Vanity Metrics Over Revenue Attribution</strong>
                <span className="text-slate-500 leading-relaxed text-xs sm:text-sm">
                  Reporting hollow "page views" and "impressions" while pipeline conversion velocity and bottom-line EBITDA remain flat.
                </span>
              </div>
            </li>
          </ul>
        </div>

        {/* The Executive Studio Standard */}
        <div className="elevation-card p-8 sm:p-10 border border-[#E2E8F0] relative overflow-hidden bg-white">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 text-[#0F172A] text-xs font-mono">
            <div className="flex items-center gap-2 text-[#2563EB] font-bold">
              <Cpu className="w-4 h-4" />
              <span>THE EXECUTIVE STUDIO STANDARD</span>
            </div>
            <span className="px-2 py-0.5 bg-blue-50 text-[#2563EB] font-mono text-[10px] rounded border border-blue-200 font-semibold">
              STRICT OPERATOR SLA
            </span>
          </div>

          <ul className="space-y-6 text-sm text-slate-700">
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Custom Distributed Edge Architecture</strong>
                <span className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Sub-40ms global TTFB, zero runtime jank, 100/100 Core Web Vitals, and enterprise-grade fault tolerance.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Direct Senior Partner Execution</strong>
                <span className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Zero junior middlemen. You strategize and build directly with the principal architect and growth engineer.
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3.5">
              <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#2563EB]" />
              </div>
              <div>
                <strong className="text-[#0F172A] block font-semibold mb-1">Engineered Commercial Yield</strong>
                <span className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Every UX interaction, page transition, and attention loop is engineered for quantifiable customer acquisition.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
