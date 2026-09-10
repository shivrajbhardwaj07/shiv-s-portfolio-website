"use client";

import React, { useState } from "react";
import { Globe, Code2, Share2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";

export default function CoreCapabilities() {
  const { scrollTo } = useLenis();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const capabilities = [
    {
      number: "01",
      title: "Web Architecture",
      tagline: "Sub-second edge platforms engineered for conversion velocity.",
      description:
        "We replace sluggish, bloated legacy setups with custom Next.js edge-rendered platforms. Sub-40ms global latency, 100/100 Core Web Vitals, and zero layout shift under heavy campaign traffic surges.",
      metrics: "< 0.8s Global TTFB",
      icon: Globe,
      deliverables: ["Distributed Next.js 16 Architecture", "Zero Layout Shift & Core Web Vitals", "Edge Middleware & Caching"],
    },
    {
      number: "02",
      title: "Product Building",
      tagline: "Full-scale SaaS applications from concept to live revenue in weeks.",
      description:
        "End-to-end full-stack development with clean TypeScript, custom Stripe billing, and relational PostgreSQL databases. Designed to scale into Series A without requiring a rewrite.",
      metrics: "21-Day Live MVP",
      icon: Code2,
      deliverables: ["Multi-Tenant SaaS Dashboards", "Stripe Metered & Tiered Billing", "Relational Database Architecture"],
    },
    {
      number: "03",
      title: "Social Growth",
      tagline: "Weaponizing attention into high-ticket inbound customer pipeline.",
      description:
        "Software without distribution is silent. We architect calculated short-form distribution funnels, algorithmic video hooks, and founder personal brand systems that drive qualified, paying clients.",
      metrics: "28M+ Organic Reach",
      icon: Share2,
      deliverables: ["Algorithmic Content Architecture", "Video Kinetics & Pacing", "Lead Capture & Funnel Attribution"],
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[03]</span>
            <span>CORE CAPABILITIES // SERVICES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Disciplined <span className="font-serif italic font-normal text-slate-200">Engineering.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          Three specialized disciplines engineered to operate as a frictionless growth machine.
        </p>
      </div>

      {/* Minimalist List Floating over Background with Soft Diffused Shadow and Slight Scale on Hover */}
      <div className="space-y-6">
        {capabilities.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 transition-all duration-300 cursor-pointer ${
                isHovered
                  ? "shadow-[0_0_40px_rgba(255,255,255,0.16)] border-white/40 -translate-y-1 scale-[1.01]"
                  : "hover:border-white/30"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                {/* Left: Number, Title & Tagline */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-10">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-white/40 group-hover:text-[#60A5FA] transition-colors">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-light text-white tracking-tight group-hover:scale-[1.02] origin-left transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-[#60A5FA] mt-1 font-semibold">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: Metric badge & Action */}
                <div className="flex items-center justify-between lg:justify-end gap-6 sm:gap-10">
                  <div className="text-left lg:text-right font-mono">
                    <span className="block text-xl sm:text-2xl font-bold text-white">
                      {service.metrics}
                    </span>
                    <span className="text-[10px] uppercase text-slate-300 font-semibold">
                      VERIFIED BENCHMARK
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:text-white flex items-center justify-center text-white transition-all duration-200 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Description & Deliverables Drawer */}
              <div className="pt-6 mt-6 border-t border-white/15 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <p className="md:col-span-7 text-sm text-slate-200 font-sans leading-relaxed">
                  {service.description}
                </p>
                <div className="md:col-span-5 flex flex-wrap gap-2">
                  {service.deliverables.map((d, dIdx) => (
                    <span
                      key={dIdx}
                      className="px-3 py-1 bg-white/10 border border-white/20 rounded-full font-sans text-xs text-slate-200"
                    >
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
