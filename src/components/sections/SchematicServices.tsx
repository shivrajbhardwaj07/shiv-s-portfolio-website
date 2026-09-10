"use client";

import React, { useState } from "react";
import { SERVICES_DATA } from "@/data/services";
import { useLenis } from "../core/SmoothScroll";
import MagneticButton from "../core/MagneticButton";
import { Plus, Minus, ArrowUpRight, CheckCircle2, Cpu } from "lucide-react";

export default function SchematicServices() {
  const [activeId, setActiveId] = useState<string>("platform-architecture");
  const { scrollTo } = useLenis();

  const handleToggle = (id: string) => {
    setActiveId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="schematic"
      className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-slate-200"
    >
      {/* Section Metadata Header */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-500 uppercase pb-8 border-b border-slate-200 mb-14">
        <div className="flex items-center gap-2">
          <span className="text-[#2563EB] font-bold">[03]</span>
          <span className="text-[#0F172A] font-semibold">THE SCHEMATIC // CORE DISCIPLINES</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          ENTERPRISE ARCHITECTURAL SPECIFICATIONS
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0F172A] mb-4">
          ENGINEERED CAPABILITIES
        </h2>
        <p className="font-sans text-base text-slate-600 max-w-2xl">
          Three specialized disciplines engineered to operate as a unified commercial engine. Zero template bloat. Every deliverable backed by SLA guarantees.
        </p>
      </div>

      {/* Clean, White Accordion Lists on Alabaster Background */}
      <div className="space-y-4">
        {SERVICES_DATA.map((service) => {
          const isOpen = activeId === service.id;

          return (
            <div
              key={service.id}
              className={`bg-white border transition-all duration-300 ${
                isOpen
                  ? "border-slate-300 shadow-[0_16px_36px_-10px_rgba(15,23,42,0.08)]"
                  : "border-[#E2E8F0] shadow-sm hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Accordion Row Header */}
              <button
                onClick={() => handleToggle(service.id)}
                className="w-full p-6 sm:p-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group"
                data-cursor="action"
                data-cursor-text={isOpen ? "COLLAPSE" : "EXPAND"}
              >
                <div className="flex items-baseline gap-6 sm:gap-10">
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      {service.title}
                    </h3>
                    <div className="font-mono text-xs sm:text-sm text-slate-500 mt-1">
                      {service.subtitle}
                    </div>
                  </div>
                </div>

                {/* Right side metrics preview & toggle symbol */}
                <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-10">
                  <div className="hidden lg:flex items-center gap-6 font-mono text-xs">
                    {service.metrics.map((m, idx) => (
                      <div key={idx} className="text-right">
                        <span className="block text-[#0F172A] font-bold text-sm">
                          {m.value}
                        </span>
                        <span className="text-slate-400 text-[10px] uppercase">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="w-10 h-10 border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-700 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Accordion Content Drawer */}
              <div
                className={`grid transition-all duration-500 ease-out overflow-hidden ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 px-6 sm:px-8 pb-8"
                    : "grid-rows-[0fr] opacity-0 px-6 sm:px-8 pb-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
                    {/* Left Column: Description & Strategy */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="font-mono text-xs text-[#2563EB] font-bold uppercase tracking-wider">
                        // STRATEGY: {service.tagline}
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                        {service.description}
                      </p>

                      {/* Architecture SLA Box */}
                      <div className="p-5 border border-slate-200 bg-slate-50 font-mono text-xs space-y-3">
                        <div className="text-slate-900 font-bold uppercase flex items-center gap-2">
                          <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>ARCHITECTURE SLA &amp; BENCHMARK</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-slate-700 text-[11px] pt-2 border-t border-slate-200">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase">LATENCY TARGET</span>
                            <span className="font-semibold">{service.architectureSpec.latency}</span>
                          </div>
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase">SCALABILITY</span>
                            <span className="font-semibold">{service.architectureSpec.scalability}</span>
                          </div>
                        </div>
                        <div className="pt-2 text-[11px] text-[#2563EB] font-semibold flex items-center gap-1.5 border-t border-slate-200">
                          <span>✓</span>
                          <span>{service.architectureSpec.guarantee}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <MagneticButton
                          variant="primary"
                          onClick={() => scrollTo("#diagnostic")}
                          dataCursor="action"
                          dataCursorText="AUDIT"
                          className="!px-6 !py-3.5 !text-xs font-mono"
                        >
                          <span>INITIALIZE AUDIT FOR {service.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                        </MagneticButton>
                      </div>
                    </div>

                    {/* Right Column: Deliverables & Tech Stack */}
                    <div className="lg:col-span-7 space-y-6 lg:pl-6 lg:border-l border-slate-100">
                      <div>
                        <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                          SYSTEM DELIVERABLES
                        </div>
                        <ul className="space-y-3">
                          {service.deliverables.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 font-mono text-xs text-slate-700"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-2">
                        <div className="font-mono text-xs text-slate-500 uppercase tracking-wider mb-3 font-semibold">
                          TECHNICAL &amp; INFRASTRUCTURE STACK
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-slate-50 border border-slate-200 font-mono text-xs text-slate-700 hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
