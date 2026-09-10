"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "../core/SmoothScroll";
import MagneticButton from "../core/MagneticButton";
import { ArrowDown, ArrowUpRight, Sparkles, BookOpen, Compass } from "lucide-react";

export default function CoverStoryHero() {
  const { scrollTo } = useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load both portrait images
    const frontImg = new Image();
    const profileImg = new Image();
    let loadedCount = 0;

    const checkBothLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
        initCanvasAnimation();
      }
    };

    frontImg.src = "/images/founder-front.jpg";
    profileImg.src = "/images/founder-profile.jpg";

    frontImg.onload = checkBothLoaded;
    profileImg.onload = checkBothLoaded;

    // Rendering parameters
    const animState = {
      scale: 0.94,
      opacity: 0,
      morphProgress: 0, // 0 = front, 1 = profile looking right
      xOffset: 0,       // moves slightly to left in section 2 to leave space for right-side text
    };

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Save state
      ctx.save();

      // Center transformations
      ctx.translate(width / 2 + animState.xOffset, height / 2);
      ctx.scale(animState.scale, animState.scale);

      // Determine aspect ratio fit (cover style)
      const targetW = width * 0.92;
      const targetH = height * 0.92;
      const imgAspect = frontImg.width / frontImg.height;
      const canvasAspect = targetW / targetH;

      let drawW, drawH;
      if (canvasAspect > imgAspect) {
        drawW = targetW;
        drawH = targetW / imgAspect;
      } else {
        drawH = targetH;
        drawW = targetH * imgAspect;
      }

      // Draw front image
      ctx.globalAlpha = (1 - animState.morphProgress) * animState.opacity;
      if (ctx.globalAlpha > 0.001) {
        ctx.drawImage(frontImg, -drawW / 2, -drawH / 2, drawW, drawH);
      }

      // Draw profile image (looking right toward incoming text)
      ctx.globalAlpha = animState.morphProgress * animState.opacity;
      if (ctx.globalAlpha > 0.001) {
        ctx.drawImage(profileImg, -drawW / 2, -drawH / 2, drawW, drawH);
      }

      ctx.restore();

      // Apply soft radial vignette so edges fade seamlessly into Alabaster #F8FAFC
      const gradient = ctx.createRadialGradient(
        width / 2 + animState.xOffset * 0.5,
        height / 2,
        Math.min(width, height) * 0.22,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.65
      );
      gradient.addColorStop(0, "rgba(248, 250, 252, 0)");
      gradient.addColorStop(0.55, "rgba(248, 250, 252, 0.45)");
      gradient.addColorStop(0.85, "rgba(248, 250, 252, 0.92)");
      gradient.addColorStop(1, "rgba(248, 250, 252, 1)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Bottom edge soft blend
      const bottomGrad = ctx.createLinearGradient(0, height * 0.75, 0, height);
      bottomGrad.addColorStop(0, "rgba(248, 250, 252, 0)");
      bottomGrad.addColorStop(1, "rgba(248, 250, 252, 1)");
      ctx.fillStyle = bottomGrad;
      ctx.fillRect(0, height * 0.75, width, height * 0.25);
    };

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      render();
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    const initCanvasAnimation = () => {
      // 1. Initial Hero Reveal: Front image scales smoothly from center of screen
      gsap.to(animState, {
        scale: 1,
        opacity: 0.95,
        duration: 1.6,
        ease: "power3.out",
        onUpdate: render,
      });

      // 2. Section 1 -> Section 2 Kinetic Scroll Morph:
      // As user scrolls, the face turns from front angle to right-side profile looking at text
      const st = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        onUpdate: (self) => {
          // Morph progress starts after initial scroll and completes halfway through
          const p = self.progress;
          // Morph from 0 to 1 between progress 0.15 and 0.65
          animState.morphProgress = gsap.utils.clamp(0, 1, (p - 0.15) / 0.5);
          // Shift image gently left on desktop so right side has ample room for editorial text
          const maxShift = window.innerWidth > 1024 ? -window.innerWidth * 0.18 : 0;
          animState.xOffset = animState.morphProgress * maxShift;
          render();
        },
      });

      // Hero text subtle fade out on scroll down
      if (heroTextRef.current) {
        gsap.to(heroTextRef.current, {
          opacity: 0,
          y: -40,
          scrollTrigger: {
            trigger: heroTextRef.current,
            start: "top top+=100",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Section 2 text fade & rise as portrait turns towards it
      if (introTextRef.current) {
        gsap.fromTo(
          introTextRef.current,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: introTextRef.current,
              start: "top 75%",
              end: "top 35%",
              scrub: 1,
            },
          }
        );
      }
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#F8FAFC]">
      {/* Sticky Background Canvas for Section 1 & Section 2 */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-95 transition-opacity duration-700"
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: THE "COVER STORY" REVEAL (Hero) */}
      {/* ========================================================================= */}
      <section
        id="cover-story"
        className="relative -mt-[100vh] min-h-screen flex flex-col justify-between px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pt-32 pb-16 z-10"
      >
        {/* Editorial Top Bar (Magazine Header Format) */}
        <div
          ref={heroTextRef}
          className="w-full space-y-8"
        >
          <div className="flex flex-wrap items-center justify-between border-b border-slate-300/80 pb-4 font-mono text-xs tracking-widest uppercase text-slate-600">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#2563EB]">[COVER STORY]</span>
              <span>VOLUME IV // ISSUE NO. 12</span>
              <span className="hidden md:inline text-slate-400">//</span>
              <span className="hidden md:inline">CIRCULATION: GLOBAL</span>
            </div>
            <div className="flex items-center gap-6 text-[11px] text-slate-500">
              <span>EDITION: AUTUMN 2026</span>
              <span className="hidden sm:inline">READING TIME: 4 MIN</span>
              <span className="font-semibold text-slate-900">CURATED BY SHIV</span>
            </div>
          </div>

          {/* Magazine Cover Title & Headline */}
          <div className="pt-12 sm:pt-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 font-mono text-xs uppercase tracking-wider mb-6 shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>THE EXECUTIVE ARCHITECTURE REPORT</span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-light tracking-[-0.035em] text-[#1E293B] leading-[1.02] select-none">
              The Art of <br />
              <span className="font-serif italic font-normal text-[#0F172A]">Digital Growth.</span>
            </h1>

            <p className="mt-8 text-lg sm:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed tracking-tight">
              How we build flawless web platforms and scale brands for modern operators.
            </p>

            {/* Action Buttons */}
            <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4">
              <MagneticButton
                variant="primary"
                onClick={() => scrollTo("#capabilities")}
                dataCursor="action"
                dataCursorText="READ"
                className="!px-8 !py-4 text-xs font-mono tracking-wider"
              >
                <span>[ READ THE STORY ]</span>
                <ArrowDown className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>

              <MagneticButton
                variant="secondary"
                onClick={() => scrollTo("#diagnostic")}
                dataCursor="action"
                dataCursorText="AUDIT"
                className="!px-7 !py-4 text-xs font-mono"
              >
                <span>INITIATE STRATEGY AUDIT</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Meta Bar */}
        <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>// SUBJECT: SHIV STUDIO LEAD ARCHITECT</div>
          <div className="hidden sm:block">SCROLL TO ADVANCE NARRATIVE ↓</div>
          <div>EST. 2024 // GLOBAL PLATFORM DELIVERY</div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE KINETIC SCROLL MORPH (The Introduction) */}
      {/* ========================================================================= */}
      <section
        id="intro-morph"
        className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto py-32 z-10"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Spacer for the turning profile face */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          {/* Right Column: Editorial Quote & Narrative Facing Founder's Gaze */}
          <div
            ref={introTextRef}
            className="lg:col-span-7 bg-white/80 backdrop-blur-xl border border-slate-200 p-8 sm:p-14 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.08)] space-y-8"
          >
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#2563EB] font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>THE ARCHITECTURAL PROMISE // CHAPTER 01</span>
            </div>

            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#1E293B] leading-[1.2] tracking-tight">
              &ldquo;Technology shouldn&apos;t be complicated. We engineer platforms that do the heavy lifting, so you can focus on running your empire.&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-500">
              <div>
                <span className="text-[#0F172A] font-bold block text-sm">SHIV</span>
                <span>Principal Engineer &amp; Growth Architect</span>
              </div>
              <div className="text-right sm:text-left text-[11px] text-slate-400">
                <span>NEW YORK // SAN FRANCISCO // GLOBAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
