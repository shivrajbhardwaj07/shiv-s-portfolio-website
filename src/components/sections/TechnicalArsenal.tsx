"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Layers, Server, TrendingUp, ShieldCheck } from "lucide-react";

export default function TechnicalArsenal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: "01. Frontend & Motion Engine",
      subtitle: "Sub-Second Interactive Web Architecture",
      icon: Layers,
      pills: [
        { name: "Next.js 16 (App Router)", tag: "Framework" },
        { name: "React 19 Server Components", tag: "Core" },
        { name: "TypeScript 5 Strict Mode", tag: "Typing" },
        { name: "Tailwind CSS v4 Engine", tag: "Styling" },
        { name: "GSAP Motion & ScrollTrigger", tag: "Kinetics" },
        { name: "Lenis Inertial Scroll", tag: "Physics" },
        { name: "HTML5 Canvas API", tag: "Graphics" },
      ],
    },
    {
      title: "02. Backend & Cloud Infrastructure",
      subtitle: "High-Throughput Relational Systems",
      icon: Server,
      pills: [
        { name: "Node.js / Bun Runtime", tag: "Runtime" },
        { name: "PostgreSQL & Prisma ORM", tag: "Database" },
        { name: "Cloudflare Workers (Edge)", tag: "Global CDN" },
        { name: "Redis In-Memory Caching", tag: "Speed" },
        { name: "Stripe Custom Elements", tag: "Billing" },
        { name: "Supabase Relational Auth", tag: "Security" },
        { name: "Docker Containerization", tag: "DevOps" },
      ],
    },
    {
      title: "03. Growth & Commercial Telemetry",
      subtitle: "Algorithmic Attention & Lead Attribution",
      icon: TrendingUp,
      pills: [
        { name: "Algorithmic Retention Hooks", tag: "Strategy" },
        { name: "High-Velocity Video Kinetics", tag: "Content" },
        { name: "Attribution Funnel Tracking", tag: "Analytics" },
        { name: "Multi-Platform Syndication", tag: "Distribution" },
        { name: "Automated Lead Captures", tag: "Pipelines" },
        { name: "Real-Time Conversion Telemetry", tag: "Metrics" },
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current?.querySelectorAll(".schematic-card");
    if (!cards || cards.length === 0) return;

    // Smooth upward float as user scrolls
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 35%",
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="arsenal"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[04]</span>
            <span>THE TECHNICAL SCHEMATIC // ARSENAL</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            System <span className="font-serif italic font-normal text-slate-200">Architecture.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          Clean, pill-shaped infrastructure tags floating upward as you scroll. Verified production technologies only.
        </p>
      </div>

      {/* Schematic Cards Grid Floating over Background */}
      <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="schematic-card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-xl hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 pb-6 border-b border-white/15">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#60A5FA]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs font-bold uppercase text-white tracking-wider">
                      {cat.title}
                    </h3>
                    <div className="text-[11px] text-slate-300 font-sans">
                      {cat.subtitle}
                    </div>
                  </div>
                </div>

                {/* Minimalist Glass-Like Floating Pills */}
                <div className="pt-6 flex flex-wrap gap-2.5">
                  {cat.pills.map((pill, i) => (
                    <div
                      key={i}
                      className="px-3.5 py-2 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full transition-all duration-200 text-xs font-sans text-white flex items-center gap-2 shadow-sm group cursor-default"
                    >
                      <span className="font-medium">{pill.name}</span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 group-hover:text-[#60A5FA] transition-colors">
                        {pill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom SLA guarantee indicator */}
              <div className="pt-8 mt-8 border-t border-white/15 flex items-center gap-2 font-mono text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>100% PRODUCTION VERIFIED SLA</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
