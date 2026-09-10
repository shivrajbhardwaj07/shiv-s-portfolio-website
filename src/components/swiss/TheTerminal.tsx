"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLenis } from "../core/SmoothScroll";

export default function TheTerminal() {
  const { scrollTo } = useLenis();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <footer
      id="terminal"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6] block font-light">
            <span className="font-mono text-xs">10</span> // INITIATE
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/50 block mt-2 font-light">
            DIRECT ENGAGEMENT
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5F5F7] tracking-tighter leading-[0.9]">
            Initiate Architecture.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6] mt-4 max-w-xl font-light tracking-wide leading-relaxed">
            Direct access to the founder. No discovery reps or junior account layers. We evaluate technical feasibility within 12 hours.
          </p>
        </div>
      </div>

      {/* Form Fields: Single thin line, dark grey placeholder */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-16">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6]/70 mb-3 font-light">
                  <span className="font-mono text-xs">01</span> // IDENTITY &amp; ENTITY *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Name and organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-xl sm:text-2xl font-light text-[#F5F5F7] placeholder:text-[#ffffff30] py-4 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6]/70 mb-3 font-light">
                  <span className="font-mono text-xs">02</span> // TRANSMISSION ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-xl sm:text-2xl font-light text-[#F5F5F7] placeholder:text-[#ffffff30] py-4 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.25em] text-[#a1a1a6]/70 mb-3 font-light">
                  <span className="font-mono text-xs">03</span> // ARCHITECTURAL TARGET OR SYSTEM BOTTLENECK
                </label>
                <input
                  type="text"
                  placeholder="Describe your platform, MVP timeline, or database bottlenecks"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-xl sm:text-2xl font-light text-[#F5F5F7] placeholder:text-[#ffffff30] py-4 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              {/* Submit Button: Elegant text link with slowly drawing underline on hover */}
              <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="text-xs text-[#a1a1a6]/50 font-light tracking-wide">
                  CONFIDENTIAL // DIRECT REPOSITORY HANDOFF
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex flex-col items-start sm:items-end cursor-pointer py-2"
                >
                  <div className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-light text-[#F5F5F7] group-hover:text-[#F5F5F7] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                    <span>{isSubmitting ? "TRANSMITTING..." : "INITIATE COLLABORATION [→]"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="h-[1px] bg-[#F5F5F7] w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] mt-1" />
                </button>
              </div>
            </form>
          ) : (
            <div className="py-16 space-y-4">
              <div className="flex items-center gap-3 text-[#F5F5F7]">
                <CheckCircle2 className="w-5 h-5 text-[#F5F5F7]/80" />
                <span className="text-sm uppercase tracking-[0.2em] font-light">
                  TRANSMISSION RECEIVED // STATUS: QUEUED
                </span>
              </div>
              <p className="text-xl font-light text-[#a1a1a6] leading-relaxed">
                Shivraj will review the operational scope for <span className="text-[#F5F5F7] font-normal">{email}</span> and respond directly with initial system notes.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs uppercase tracking-[0.2em] text-[#a1a1a6]/60 hover:text-[#F5F5F7] underline cursor-pointer transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] font-light"
                >
                  [ TRANSMIT ANOTHER INQUIRY ]
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Monolith Editorial Signoff */}
      <div className="mt-40 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.2em] text-[#a1a1a6]/60 font-light">
        <div>
          SHIVRAJ BHARDWAJ // © <span className="font-mono text-xs">2026</span> ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
