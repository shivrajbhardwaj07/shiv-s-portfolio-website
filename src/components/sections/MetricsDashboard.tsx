"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, Zap, TrendingUp, ShieldCheck, Gauge } from "lucide-react";

export default function MetricsDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const metrics = [
    {
      id: "load-time",
      numberTarget: 0.8,
      prefix: "< ",
      suffix: "s",
      decimals: 1,
      label: "Average Page Load Time",
      description: "Sub-second global Time-to-First-Byte (TTFB) on distributed edge clusters.",
      benchmark: "100/100 LIGHTHOUSE",
      icon: Zap,
    },
    {
      id: "reach",
      numberTarget: 28.4,
      prefix: "",
      suffix: "M+",
      decimals: 1,
      label: "Organic Reach Generated",
      description: "Viral distribution loops and founder authority content pipelines.",
      benchmark: "VERIFIED ANALYTICS",
      icon: TrendingUp,
    },
    {
      id: "capital",
      numberTarget: 42.5,
      prefix: "$",
      suffix: "M+",
      decimals: 1,
      label: "Client Volume Scaled",
      description: "Direct gross transaction volume processed across client platforms.",
      benchmark: "STRIPE VERIFIED",
      icon: Activity,
    },
    {
      id: "uptime",
      numberTarget: 99.99,
      prefix: "",
      suffix: "%",
      decimals: 2,
      label: "Production Uptime",
      description: "Zero-downtime continuous integration and automated failovers.",
      benchmark: "ENTERPRISE SLA",
      icon: ShieldCheck,
    },
  ];

  const [counts, setCounts] = useState<{ [key: string]: number }>({
    "load-time": 0,
    reach: 0,
    capital: 0,
    uptime: 0,
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 75%",
        once: true,
        onEnter: () => {
          setHasAnimated(true);

          metrics.forEach((m) => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: m.numberTarget,
              duration: 2.2,
              ease: "power2.out",
              onUpdate: () => {
                setCounts((prev) => ({
                  ...prev,
                  [m.id]: obj.val,
                }));
              },
            });
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="metrics"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Deeply Blurred Glass Master Container to contrast with video background */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-14 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-white/20 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
              <Gauge className="w-4 h-4" />
              <span>[05] ROI DASHBOARD // VERIFIED IMPACT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
              Commercial <span className="font-serif italic font-normal text-slate-200">Yield.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md">
            Tangible, contractually audited metrics achieved for our operators and portfolio partners.
          </p>
        </div>

        {/* 4 Dashboard Metric Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item) => {
            const Icon = item.icon;
            const displayNum = counts[item.id].toFixed(item.decimals);

            return (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 hover:border-white/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/15">
                    <span className="font-mono text-[9px] tracking-wider text-[#60A5FA] bg-white/10 px-2 py-0.5 rounded-full border border-white/20 font-bold">
                      {item.benchmark}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Ticking Monospace Number */}
                  <div className="py-6">
                    <div className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white">
                      <span>{item.prefix}</span>
                      <span>{displayNum}</span>
                      <span>{item.suffix}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 font-sans mt-2">
                      {item.label}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-3 border-t border-white/15">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Telemetry Status Bar */}
        <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-xl font-mono text-xs text-slate-300 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="font-bold text-white">TELEMETRY PIPELINE: ACTIVE</span>
            <span className="text-white/30">//</span>
            <span>LATENCY: 14MS EDGE AVERAGE</span>
          </div>
          <div className="text-[11px] text-slate-400">
            SLA AUDIT PROTOCOL: ZERO UNPLANNED DOWNTIME
          </div>
        </div>
      </div>
    </section>
  );
}
