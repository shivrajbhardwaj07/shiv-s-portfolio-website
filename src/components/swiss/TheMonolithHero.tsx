"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TheMonolithHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen h-screen flex flex-col justify-between px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto pt-28 pb-16 select-none"
    >
      {/* Top Meta Bar - Refined Editorial Spacing */}
      <div className="hero-fade flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] font-light pt-4">
        <div>
          SYS.ID: SHIVRAJ // AGE: <span className="font-mono text-xs">19</span> // STATUS: DEPLOYING
        </div>
        <div className="hidden sm:block text-[#a1a1a6]/60">
          GLOBAL ARCHITECTURE // <span className="font-mono text-xs">2026</span>
        </div>
      </div>

      {/* Center: Massive Monolith Title breaking the standard grid */}
      <div className="my-auto py-8">
        <h1
          ref={titleRef}
          className="hero-fade font-sans text-[15vw] sm:text-[14vw] lg:text-[13vw] font-light tracking-tighter text-[#F5F5F7] uppercase leading-[0.82] transition-colors duration-[800ms]"
        >
          SHIVRAJ <br />
          BHARDWAJ.
        </h1>
      </div>

      {/* Bottom: Subtitle & Scroll Indicator with No Harsh Borders */}
      <div className="hero-fade pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#a1a1a6] font-light">
          SYSTEMS ARCHITECT.
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-[#a1a1a6]/60 flex items-center gap-3 font-light">
          <span>SCROLL TO INITIALIZE</span>
          <span className="animate-pulse">↓</span>
        </div>
      </div>
    </section>
  );
}
