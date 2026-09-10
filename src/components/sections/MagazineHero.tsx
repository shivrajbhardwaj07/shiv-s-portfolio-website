"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";

export default function MagazineHero() {
  const { scrollTo } = useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Soft fade up for editorial magazine elements
      const elements = heroRef.current?.querySelectorAll(".mag-fade");
      if (elements && elements.length > 0) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-28 pb-16 z-10 select-none"
    >
      {/* Magazine Cover Header Bar */}
      <div className="mag-fade w-full flex flex-wrap items-center justify-between border-b border-white/20 pb-4 font-mono text-xs tracking-widest uppercase text-slate-200">
        <div className="flex items-center gap-3">
          <span className="font-bold text-[#60A5FA]">[COVER STORY]</span>
          <span>SPECIAL ANNUAL EDITION</span>
          <span className="hidden sm:inline text-white/40">//</span>
          <span className="hidden sm:inline">ISSUE DATE: SEP 2026</span>
        </div>
        <div className="flex items-center gap-6 text-[11px] text-slate-300">
          <span className="hidden md:inline">CIRCULATION: GLOBAL</span>
          <span className="font-semibold text-white">CURATED BY SHIV</span>
        </div>
      </div>

      {/* Magazine Masthead & Story Headlines */}
      <div className="my-auto py-12">
        {/* Massive Magazine Masthead */}
        <div className="mag-fade overflow-hidden">
          <h1
            ref={titleRef}
            className="font-serif tracking-tight uppercase text-[15vw] sm:text-[13vw] lg:text-[11vw] font-bold text-[#F8FAFC] leading-[0.88] drop-shadow-2xl"
          >
            THE INNOVATOR
          </h1>
        </div>

        {/* Editorial Side Badges and Sub-Stories */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-8 sm:mt-12">
          {/* Left Column: Cover Story Focus */}
          <div className="md:col-span-8 space-y-4">
            <div className="mag-fade inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-full shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>EXECUTIVE PROFILE // 19-YEAR-OLD FOUNDER REDEFINING TECH</span>
            </div>

            <h2 className="mag-fade text-2xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.15] tracking-tight max-w-2xl drop-shadow-md">
              From Startup to Scaling: <br />
              <span className="font-serif italic font-normal text-slate-200">
                Redefining the Future of Web Platforms.
              </span>
            </h2>

            <p className="mag-fade text-sm sm:text-base text-slate-200 font-sans max-w-xl leading-relaxed bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/20 shadow-md">
              How we engineer ultra-high performance web platforms, custom SaaS products, and calculated attention funnels for serious operators.
            </p>

            {/* CTAs */}
            <div className="mag-fade pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo("#intro")}
                dataCursor="action"
                dataCursorText="READ"
                className="!px-7 !py-4 text-xs font-mono tracking-wider shadow-lg"
              >
                <span>[ READ THE COVER STORY ]</span>
                <ArrowDown className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => scrollTo("#diagnostic")}
                dataCursor="action"
                dataCursorText="AUDIT"
                className="!px-6 !py-4 text-xs font-mono backdrop-blur-md bg-white/10 hover:bg-white/20 text-white border border-white/20"
              >
                <span>INITIATE STRATEGY CALL</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Magazine Teaser Callouts (Matching reference magazine) */}
          <div className="md:col-span-4 space-y-4">
            <div className="mag-fade bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl space-y-2">
              <div className="font-mono text-[10px] uppercase text-[#60A5FA] font-bold tracking-wider">
                // LEADERSHIP SECRETS
              </div>
              <div className="text-sm font-semibold text-white">
                The decisions that turn slow code into scalable revenue.
              </div>
            </div>

            <div className="mag-fade bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-xl space-y-2">
              <div className="font-mono text-[10px] uppercase text-[#60A5FA] font-bold tracking-wider">
                // FUTURE OF AI &amp; EDGE
              </div>
              <div className="text-sm font-semibold text-white">
                Sub-second edge architecture for modern autonomous software.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Hint */}
      <div className="mag-fade w-full pt-4 border-t border-white/20 flex items-center justify-between text-xs font-mono text-slate-300">
        <div>// SCROLL DOWN TO WITNESS THE GLIDE</div>
        <div className="animate-bounce font-semibold text-white">↓</div>
      </div>
    </section>
  );
}
