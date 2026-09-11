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
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            02 // THE UNFAIR ADVANTAGE
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            OPERATIONAL DOCTRINE
          </span>
        </div>

        {/* Text spanning columns 4 through 10 */}
        <div className="col-span-12 md:col-start-4 md:col-span-8 lg:col-span-7">
          <p
            ref={textRef}
            className="text-lg md:text-xl font-sans font-light leading-relaxed text-[#a1a1a6] max-w-2xl"
          >
            I do not just write code; I map complex operational logic and execute solutions with ruthless velocity. While legacy developers get stuck in theory, I build, optimize, and ship. Pure problem-solving. Zero friction.
          </p>
        </div>
      </div>
    </section>
  );
}
