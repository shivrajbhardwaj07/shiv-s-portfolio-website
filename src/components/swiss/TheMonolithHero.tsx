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
      <div className="hero-fade flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 pt-4">
        <div>
          SYS.ID: SHIVRAJ // AGE: <span>19</span> // STATUS: DEPLOYING
        </div>
        <div className="hidden sm:block">
          GLOBAL ARCHITECTURE // <span>2026</span>
        </div>
      </div>

      {/* Center: Monolith Title with generous whitespace */}
      <div className="my-auto py-20 md:py-32">
        <h1
          ref={titleRef}
          className="hero-fade text-4xl md:text-6xl font-serif font-medium tracking-tight text-[#F5F5F7] uppercase leading-[1.1] transition-colors duration-[800ms]"
        >
          SHIVRAJ <br />
          BHARDWAJ.
        </h1>
      </div>

      {/* Bottom: Subtitle & Scroll Indicator */}
      <div className="hero-fade pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono text-white/50">
        <div>
          SYSTEMS ARCHITECT.
        </div>
        <div className="flex items-center gap-3">
          <span>SCROLL TO INITIALIZE</span>
          <span className="animate-pulse">↓</span>
        </div>
      </div>
    </section>
  );
}
