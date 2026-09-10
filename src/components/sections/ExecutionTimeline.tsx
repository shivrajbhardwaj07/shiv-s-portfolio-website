"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, Hammer, Rocket, CheckCircle2, Clock } from "lucide-react";

export default function ExecutionTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const steps = [
    {
      number: "01",
      title: "Discovery & Architecture Audit",
      timeline: "Days 1 – 5",
      subtitle: "Eliminating Blindspots Before Writing Code",
      description:
        "We dissect your existing infrastructure, conversion funnel, and code debt. We map user journeys, benchmark TTFB across key global locations, and define an uncompromising architectural specification with fixed-price deliverables.",
      deliverables: [
        "Full Core Web Vitals & Server TTFB Audit",
        "Conversion Bottleneck & Dropoff Mapping",
        "Technical Architecture Blueprint & Data Schema",
        "Fixed-Price Statement of Work (SOW)",
      ],
      icon: Search,
    },
    {
      number: "02",
      title: "Architecture & Sprint Build",
      timeline: "Days 6 – 20",
      subtitle: "Production-Grade Engineering With Weekly Demos",
      description:
        "Direct founder-led engineering. We build on Next.js 16, TypeScript, and edge databases. Every week you test interactive staging environments. No junior handoffs, no bloated meetings, no excuses.",
      deliverables: [
        "Distributed Next.js App Router Codebase",
        "Responsive, Zero-Jank Hardware Accelerated UI",
        "Stripe Custom Elements Billing Integration",
        "Automated GitHub CI/CD & Preview Environments",
      ],
      icon: Hammer,
    },
    {
      number: "03",
      title: "Launch & Attention Scaling",
      timeline: "Days 21 – 30+",
      subtitle: "Zero-Downtime Cutover & Distribution Acceleration",
      description:
        "We orchestrate a seamless DNS cutover with zero downtime. Concurrently, we roll out organic attention distribution loops and automated lead funnels to funnel high-ticket inbound prospects directly into your pipeline.",
      deliverables: [
        "Zero-Downtime DNS Cutover & Global CDN Caching",
        "Automated Lead Capture & CRM Routing",
        "Algorithmic Short-Form Distribution Funnel",
        "30-Day Post-Launch Hypercare & Guarantee",
      ],
      icon: Rocket,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = `${pathLength}`;

    const ctx = gsap.context(() => {
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 70%",
          scrub: 0.6,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[07]</span>
            <span>EXECUTION PROTOCOL // SPRINT PROCESS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            How We <span className="font-serif italic font-normal text-slate-200">Execute.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          A vertical SVG timeline connecting three elegant milestones: Audit → Build → Scale.
        </p>
      </div>

      {/* Timeline Wrapper with SVG Drawing Line */}
      <div className="relative">
        {/* Animated Thin Drawing Line (Desktop) */}
        <div className="absolute left-[39px] sm:left-[47px] top-6 bottom-6 w-1 pointer-events-none hidden md:block">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            {/* Background Track Line */}
            <line
              x1="2"
              y1="0"
              x2="2"
              y2="1000"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
            />
            {/* Active Drawing Line Synchronized with Scroll */}
            <path
              ref={pathRef}
              d="M 2 0 L 2 1000"
              fill="none"
              stroke="#60A5FA"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col md:flex-row items-start gap-8 md:gap-14"
              >
                {/* Step Milestone Node */}
                <div className="relative z-10 flex items-center gap-4 md:flex-col md:items-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#60A5FA] mb-1" />
                    <span className="font-mono text-xs font-bold text-white">
                      PHASE {step.number}
                    </span>
                  </div>
                </div>

                {/* Step Content Card */}
                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-12 shadow-2xl hover:border-white/40 transition-all duration-300 rounded-3xl">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between pb-6 border-b border-white/15 gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                        {step.title}
                      </h3>
                      <div className="font-mono text-xs text-[#60A5FA] font-semibold mt-1">
                        {step.subtitle}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs px-3.5 py-1.5 bg-white/10 text-[#60A5FA] border border-white/20 rounded-full font-bold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans py-6">
                    {step.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-white/15">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-3">
                      PHASE DELIVERABLES:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-sans"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
