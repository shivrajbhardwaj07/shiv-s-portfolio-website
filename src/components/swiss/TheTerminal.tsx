"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLenis } from "../core/SmoothScroll";

export default function TheTerminal() {
  const { scrollTo } = useLenis();
  const [status, setStatus] = useState<"idle" | "transmitting" | "success">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [scope, setScope] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("transmitting");

    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);

    // YOUR SECURE WEB3FORMS PIPELINE KEY
    formData.append("access_key", "9ea05ac8-017c-406a-b350-4fa204d17ea9");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        target.reset();
        setName("");
        setEmail("");
        setScope("");
        setTimeout(() => setStatus("idle"), 5000); // UI resets gracefully
      } else {
        setStatus("idle");
        alert("Transmission failed. Please try again.");
      }
    } catch (err) {
      setStatus("idle");
      alert("Network error. Please check your connection.");
    }
  };

  return (
    <footer
      id="terminal"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            10 // INITIATE
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            DIRECT ENGAGEMENT
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
            Initiate Architecture.
          </h2>
          <p className="text-sm md:text-base font-sans font-light text-[#a1a1a6] mt-3 max-w-xl leading-relaxed">
            Direct access to the founder. No discovery reps or junior account layers. We evaluate technical feasibility within 12 hours.
          </p>
        </div>
      </div>

      {/* Form Fields: Single thin line, refined placeholder */}
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          {status === "success" ? (
            <div className="py-16 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-white/80" />
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/90">
                  TRANSMISSION RECEIVED // STATUS: QUEUED
                </span>
              </div>
              <p className="text-base sm:text-lg font-sans font-light text-[#a1a1a6] leading-relaxed">
                Shivraj will review the operational scope and respond directly with initial system notes within 12 hours.
              </p>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 hover:text-white underline cursor-pointer transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                >
                  [ TRANSMIT ANOTHER INQUIRY ]
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12">
              <div>
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
                  01 // IDENTITY &amp; ENTITY *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name and organization"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-base md:text-lg font-sans font-normal text-white placeholder:text-white/30 py-3 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
                  02 // TRANSMISSION ADDRESS *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-base md:text-lg font-sans font-normal text-white placeholder:text-white/30 py-3 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              <div>
                <label className="block text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 mb-3">
                  03 // ARCHITECTURAL TARGET OR SYSTEM BOTTLENECK
                </label>
                <input
                  type="text"
                  name="message"
                  placeholder="Describe your platform, MVP timeline, or database bottlenecks"
                  value={scope}
                  onChange={(e) => setScope(e.target.value)}
                  className="w-full bg-transparent border-b border-[#ffffff15] focus:border-[#F5F5F7] text-base md:text-lg font-sans font-normal text-white placeholder:text-white/30 py-3 focus:outline-none transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              {/* Submit Button: Elegant text link with slowly drawing underline on hover */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50">
                  CONFIDENTIAL // DIRECT REPOSITORY HANDOFF
                </div>

                <button
                  type="submit"
                  disabled={status === "transmitting"}
                  className="group relative inline-flex flex-col items-start sm:items-end cursor-pointer py-2 disabled:opacity-50"
                >
                  <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase font-mono text-white/90 group-hover:text-white transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                    <span>{status === "transmitting" ? "TRANSMITTING..." : "INITIATE COLLABORATION [→]"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <span className="h-[1px] bg-white w-0 group-hover:w-full transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] mt-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Monolith Editorial Signoff */}
      <div className="mt-36 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50">
        <div>
          SHIVRAJ BHARDWAJ // © <span>2026</span> ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
