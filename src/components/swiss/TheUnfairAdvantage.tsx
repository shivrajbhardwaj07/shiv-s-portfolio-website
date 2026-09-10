"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TheUnfairAdvantage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = textRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0.25, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 35%",
          scrub: 0.8,
        },
      }
    );
  }, []);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4">
        {/* Label on Column 1-3 */}
        <div className="col-span-12 md:col-span-3 mb-10 md:mb-0">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">02</span> // THE UNFAIR ADVANTAGE
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            OPERATIONAL DOCTRINE
          </span>
        </div>

        {/* Text spanning columns 4 through 10 */}
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-7">
          <p
            ref={textRef}
            className="text-2xl sm:text-4xl lg:text-[2.75rem] font-light tracking-tight text-[#F5F5F7] leading-[1.3]"
          >
            I do not just write code; I map complex operational logic and execute solutions with ruthless velocity. While legacy developers get stuck in theory, I build, optimize, and ship. Pure problem-solving. Zero friction.
          </p>
        </div>
      </div>
    </section>
  );
}
