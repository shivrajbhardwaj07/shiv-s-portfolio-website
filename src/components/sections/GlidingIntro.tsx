"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight } from "lucide-react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";

export default function GlidingIntro() {
  const { scrollTo } = useLenis();
  const panelRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panel = panelRef.current;
    const container = containerRef.current;
    if (!panel || !container) return;

    // The sleek glass panel floats in from the left as the head turns right
    const ctx = gsap.context(() => {
      gsap.fromTo(
        panel,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            end: "top 30%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-32 z-10 select-none"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Sleek Glass Panel floating into founder's gaze */}
        <div
          ref={panelRef}
          className="lg:col-span-7 bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-14 rounded-3xl shadow-2xl space-y-8"
        >
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>[02] THE GLIDING INTRO // CHAPTER I</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.12]">
            Technology engineered for{" "}
            <span className="font-serif italic font-normal text-[#60A5FA]">
              seamless scaling.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed">
            Technology shouldn&apos;t be complicated. We engineer platforms that do the heavy lifting—handling massive traffic surges, eliminating latency bottlenecks, and automating acquisition—so you can focus on running your empire.
          </p>

          <div className="pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-300">
            <div>
              <span className="text-white font-bold block text-sm">SHIV</span>
              <span>Lead Architect &amp; Growth Engineer</span>
            </div>

            <MagneticButton
              variant="secondary"
              onClick={() => scrollTo("#capabilities")}
              dataCursor="action"
              dataCursorText="SERVICES"
              className="!px-5 !py-2.5 !text-xs font-mono bg-white/10 hover:bg-white/20 text-white border border-white/20"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </MagneticButton>
          </div>
        </div>

        {/* Right side spacer allowing the video face to be visible */}
        <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
      </div>
    </section>
  );
}
