"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";

export default function ProjectGallery() {
  const { scrollTo } = useLenis();

  const caseStudies = [
    {
      id: "apex-kinetics",
      number: "01",
      title: "Apex Kinetics",
      client: "Apex Autonomous Corp",
      category: "Web Architecture // Distributed Edge Platform",
      year: "2026",
      metricValue: "+314% ARR",
      metricLabel: "Checkout Conversion Lift",
      image: "/images/project-apex.jpg",
      summary:
        "Engineered an ultra-low latency edge platform replacing a sluggish 7-second legacy monolith. Sub-40ms global TTFB resulted in an immediate 3.1x checkout conversion acceleration under high-volume ad drops.",
      highlights: [
        "Distributed Next.js 16 App Router on Cloudflare Edge",
        "Sub-40ms global time-to-first-byte (TTFB)",
        "Zero layout shift (CLS: 0.00) & 100/100 Core Web Vitals",
      ],
      techStack: ["Next.js 16", "Cloudflare Workers", "GSAP Motion", "TypeScript", "Tailwind"],
    },
    {
      id: "neuralflow-ai",
      number: "02",
      title: "NeuralFlow AI",
      client: "NeuralFlow Intelligence",
      category: "Custom Product Build // B2B SaaS Workflow MVP",
      year: "2026",
      metricValue: "18 Days",
      metricLabel: "Concept to Live Revenue",
      image: "/images/project-neuralflow.jpg",
      summary:
        "Architected an end-to-end multi-tenant AI workflow orchestrator from blank repository to live paying subscribers. Acquired 42 enterprise pilot contracts within 30 days of production launch.",
      highlights: [
        "Full-stack React 19 & Node.js scalable backend",
        "Stripe custom metered usage billing engine",
        "Multi-tenant relational PostgreSQL & Redis cache",
      ],
      techStack: ["React 19", "Node.js", "PostgreSQL", "Stripe Metered", "Docker"],
    },
    {
      id: "hyperion-core",
      number: "03",
      title: "Hyperion Core",
      client: "Hyperion Capital Syndicate",
      category: "Institutional Platform // Venture Deal Terminal",
      year: "2026",
      metricValue: "$2.14B",
      metricLabel: "Assets Monitored on Platform",
      image: "/images/project-hyperion.jpg",
      summary:
        "Engineered a high-security deal flow management portal for institutional venture partners with zero layout shift, real-time portfolio analytics, and bank-grade authentication telemetry.",
      highlights: [
        "Real-time venture capital portfolio analytics",
        "Role-Based Access Control (RBAC) & audit trails",
        "Sub-50ms query responses on multi-million row datasets",
      ],
      techStack: ["TypeScript", "Next.js", "Tailwind", "Supabase Auth", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[06]</span>
            <span>THE GALLERY // PROOF OF WORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Selected <span className="font-serif italic font-normal text-slate-200">Deployments.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          A vertical stack of premium project cards. On hover, imagery scales smoothly by 3% within its hidden-overflow container.
        </p>
      </div>

      {/* Vertical Stack of Premium Project Cards with Soft Rounded Corners */}
      <div className="space-y-20">
        {caseStudies.map((project) => (
          <div
            key={project.id}
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-10 lg:p-12 hover:border-white/40 transition-all duration-300 shadow-2xl"
          >
            {/* Massive Image Container with Exactly 3% Hover Scale (rounded-2xl) */}
            <div className="relative w-full h-[320px] sm:h-[460px] lg:h-[560px] rounded-2xl overflow-hidden bg-black/40 mb-10 border border-white/20 shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
              {/* Top metadata badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 font-mono text-xs z-10">
                <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-white font-semibold border border-white/20 shadow-sm">
                  {project.number} // {project.year}
                </span>
                <span className="hidden sm:inline-block px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[#60A5FA] font-bold border border-white/20 shadow-sm">
                  {project.client}
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="font-mono text-xs text-[#60A5FA] uppercase tracking-wider font-semibold">
                  {project.category}
                </div>
                <h3 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans pt-2">
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="pt-4 space-y-2.5">
                  {project.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white/10 border border-white/20 font-mono text-xs text-slate-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right ROI Metric Box & Action */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-2">
                    // COMMERCIALLY VERIFIED IMPACT
                  </span>
                  <div className="font-mono text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {project.metricValue}
                  </div>
                  <div className="text-sm font-semibold text-slate-200 font-sans mt-1">
                    {project.metricLabel}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/15 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-300">
                    SLA: 100/100 PRODUCTION
                  </span>
                  <MagneticButton
                    variant="primary"
                    onClick={() => scrollTo("#diagnostic")}
                    dataCursor="action"
                    dataCursorText="AUDIT"
                    className="!px-5 !py-3 !text-xs font-mono"
                  >
                    <span>AUDIT SIMILAR STACK</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
