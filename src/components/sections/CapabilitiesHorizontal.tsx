"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, Code2, Share2, CheckCircle2, ArrowUpRight } from "lucide-react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";

export default function CapabilitiesHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  const services = [
    {
      number: "01",
      title: "Web Architecture",
      subtitle: "High-Performance Edge Platforms",
      tagline: "Sub-second speed engineered for conversion velocity.",
      description:
        "We engineer edge-rendered, global platforms that turn slow, bloated web stacks into instantaneous revenue engines. Zero latency, 100/100 Core Web Vitals, and effortless stability during viral surges.",
      deliverables: [
        "Distributed Next.js App Router Architecture",
        "Hardware-Accelerated GSAP Micro-Interactions",
        "Sub-40ms Global Time-to-First-Byte (TTFB)",
        "Zero-Layout-Shift (CLS) & Strict SEO Hierarchy",
      ],
      metrics: { label: "Average Page Load", value: "< 0.8s" },
      icon: Globe,
    },
    {
      number: "02",
      title: "Custom Product Builds",
      subtitle: "Full-Stack SaaS & Scalable MVPs",
      tagline: "From founder vision to live paying software in weeks.",
      description:
        "We design, build, and deploy full-scale SaaS applications with resilient architecture. Clean TypeScript codebases, custom Stripe billing engines, and relational data structures engineered to scale into Series A without rewrites.",
      deliverables: [
        "End-to-End Multi-Tenant Web Applications",
        "Stripe Billing, Tiered Subscriptions & Metered Usage",
        "Role-Based Access Control & High-Throughput Auth",
        "Automated CI/CD Pipelines & Real-Time Telemetry",
      ],
      metrics: { label: "Concept to Live MVP", value: "21 Days" },
      icon: Code2,
    },
    {
      number: "03",
      title: "Social Media Management",
      subtitle: "Organic Attention & Founder Authority Loops",
      tagline: "Weaponizing attention into high-ticket pipeline demand.",
      description:
        "Traffic without conversion is vanity. Software without distribution is silent. We architect calculated short-form distribution funnels, algorithmic video hooks, and founder personal brand systems that drive qualified, inbound customers.",
      deliverables: [
        "Algorithmic Content Architecture & Narrative Hooks",
        "Video Pacing, Kinetics & High-Retention Post-Production",
        "Multi-Platform Syndication Loops (X, LinkedIn, Shorts)",
        "Frictionless Lead Capture & Inbound Attribution",
      ],
      metrics: { label: "Organic Reach Generated", value: "28M+ Views" },
      icon: Share2,
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    // Calculate total horizontal scroll width
    const totalWidth = section.scrollWidth - window.innerWidth + 80;

    const ctx = gsap.context(() => {
      // Horizontal pinning for desktop and tablet screens
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.to(section, {
          x: () => -totalWidth,
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${totalWidth * 1.2}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={triggerRef}
      id="capabilities"
      className="relative w-full bg-[#F8FAFC] overflow-hidden border-t border-slate-200"
    >
      <div className="py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-slate-200 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#2563EB] mb-3 font-semibold">
              <span>[03]</span>
              <span>THE CAPABILITIES // SERVICES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-light text-[#1E293B] tracking-tight">
              Disciplined <span className="font-serif italic font-normal">Engineering.</span>
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-500 max-w-md">
            Three interconnected disciplines engineered to operate as a frictionless growth machine. Scroll horizontally to explore our core capabilities.
          </p>
        </div>

        {/* Horizontal Card Track */}
        <div
          ref={sectionRef}
          className="flex flex-col md:flex-row gap-8 w-full md:w-max pb-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="w-full md:w-[580px] shrink-0 bg-white border border-[#E2E8F0] p-8 sm:p-12 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_-10px_rgba(15,23,42,0.1)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-2xl font-bold text-slate-300">
                        {service.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB]">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="text-right font-mono">
                      <span className="block text-xl font-bold text-[#0F172A]">
                        {service.metrics.value}
                      </span>
                      <span className="text-[10px] uppercase text-slate-400 font-semibold">
                        {service.metrics.label}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="py-6">
                    <h3 className="text-2xl sm:text-3xl font-light text-[#0F172A] tracking-tight">
                      {service.title}
                    </h3>
                    <div className="font-mono text-xs text-[#2563EB] font-semibold mt-1">
                      {service.subtitle}
                    </div>
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      WHAT YOU RECEIVE:
                    </div>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 font-sans text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    TURNAROUND: FIXED SCOPE SLA
                  </span>
                  <MagneticButton
                    variant="secondary"
                    onClick={() => scrollTo("#diagnostic")}
                    dataCursor="action"
                    dataCursorText="AUDIT"
                    className="!px-5 !py-3 !text-xs font-mono"
                  >
                    <span>DIAGNOSE PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </MagneticButton>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
