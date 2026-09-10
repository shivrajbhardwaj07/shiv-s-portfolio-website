"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";
import { ArrowDown, Activity, Cpu, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function MonolithHero() {
  const { scrollTo } = useLenis();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal headline text with split-line staggering
      const lines = headlineRef.current?.querySelectorAll(".hero-line");
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: "power4.out",
            delay: 0.15,
          }
        );
      }

      // Fade in telemetry bar and cards
      if (telemetryRef.current) {
        gsap.fromTo(
          telemetryRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.6 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle Architectural Hairline Grid Texture */}
      <div className="absolute inset-0 bg-light-grid opacity-60 pointer-events-none -z-10" />
      <div className="absolute left-6 top-24 bottom-12 w-[1px] bg-slate-200 pointer-events-none hidden md:block" />
      <div className="absolute right-6 top-24 bottom-12 w-[1px] bg-slate-200 pointer-events-none hidden md:block" />

      {/* Top Clinical Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 pt-2 font-mono text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="text-[#2563EB] font-bold">[INSTITUTIONAL_SLA]</span>
          <span className="text-slate-800 font-medium">DISCIPLINE: GROWTH &amp; PLATFORM ARCHITECTURE</span>
          <span className="hidden sm:inline text-slate-300">//</span>
          <span className="hidden sm:inline text-slate-600">DISTRIBUTED EDGE RUNTIME</span>
        </div>
        <div className="flex items-center gap-6 text-[11px]">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-slate-700">GLOBAL TTFB: &lt; 38MS</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span className="text-slate-700">100/100 CORE WEB VITALS</span>
          </div>
          <span className="text-slate-900 font-semibold">EST. 2024</span>
        </div>
      </div>

      {/* The Light Monolith Headline */}
      <div className="my-auto py-12 md:py-20">
        <div className="mb-6 flex items-center gap-3 font-mono text-xs tracking-wider text-slate-500 uppercase">
          <span className="w-2 h-2 bg-[#2563EB] inline-block"></span>
          <span>EXECUTIVE POSITIONING // SENIOR ADVISORY</span>
        </div>

        <h1
          ref={headlineRef}
          className="font-black text-[#0F172A] uppercase tracking-[-0.04em] leading-[0.92] select-none text-[13vw] sm:text-[10.5vw] lg:text-[7.8vw] xl:text-[7.5vw]"
        >
          <span className="block overflow-hidden">
            <span className="hero-line block gpu-accel text-[#0F172A]">WE ARCHITECT</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block gpu-accel text-[#2563EB]">
              HIGH-YIELD
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block gpu-accel text-[#0F172A]">PLATFORMS.</span>
          </span>
        </h1>

        {/* Clinical Sub-Text with Cobalt Structural Border */}
        <div className="mt-8 sm:mt-12 max-w-3xl">
          <p className="font-sans text-base sm:text-xl text-slate-600 leading-relaxed tracking-tight border-l-3 border-[#2563EB] pl-5">
            Founder-led growth engineering advisory for market leaders. We architect resilient web infrastructure, engineer custom SaaS products, and execute calculated commercial distribution.
          </p>
        </div>

        {/* Primary Call to Action: Cobalt Button & Secondary Pure White Card Button */}
        <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-5">
          <MagneticButton
            id="hero-cta-initiate"
            variant="primary"
            onClick={() => scrollTo("#diagnostic")}
            dataCursor="action"
            dataCursorText="AUDIT"
            className="!px-8 !py-5 !text-sm tracking-wider font-mono shadow-[0_12px_28px_-4px_rgba(37,99,235,0.38)]"
          >
            <span>[ INITIATE ARCHITECTURAL AUDIT ]</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            onClick={() => scrollTo("#schematic")}
            dataCursor="action"
            dataCursorText="STACK"
            className="!px-7 !py-5 !text-xs font-mono text-[#0F172A]"
          >
            <span>VIEW SYSTEM SCHEMATIC</span>
            <ArrowDown className="w-3.5 h-3.5 ml-1 text-slate-500" />
          </MagneticButton>
        </div>
      </div>

      {/* Bottom Telemetry HUD: 4 Pure White Elevation Cards */}
      <div
        ref={telemetryRef}
        className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="elevation-card p-5">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">// 01. PERFORMANCE SLA</div>
          <div className="text-[#0F172A] text-2xl sm:text-3xl font-black tracking-tight mt-1">100 / 100</div>
          <div className="font-mono text-xs text-slate-500 mt-0.5">Core Web Vitals Guarantee</div>
        </div>

        <div className="elevation-card p-5">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">// 02. PIPELINE VELOCITY</div>
          <div className="text-[#0F172A] text-2xl sm:text-3xl font-black tracking-tight mt-1">4.8X AVG ROI</div>
          <div className="font-mono text-xs text-slate-500 mt-0.5">Capital Deployment Yield</div>
        </div>

        <div className="elevation-card p-5">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">// 03. EXECUTIVE ACCESS</div>
          <div className="text-[#2563EB] text-2xl sm:text-3xl font-black tracking-tight mt-1">FOUNDER-LED</div>
          <div className="font-mono text-xs text-slate-500 mt-0.5">Strictly 2 Engagements / Q2</div>
        </div>

        <div className="elevation-card p-5">
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">// 04. PRODUCTION TIME</div>
          <div className="text-[#0F172A] text-2xl sm:text-3xl font-black tracking-tight mt-1">&lt; 21 DAYS</div>
          <div className="font-mono text-xs text-slate-500 mt-0.5">Concept to Enterprise MVP</div>
        </div>
      </div>
    </section>
  );
}
