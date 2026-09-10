"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function KineticIndex() {
  const [hoveredProject, setHoveredProject] = useState<ProjectItem | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(pointer: fine)");
    setIsPointerFine(media.matches);

    if (!media.matches) return;

    const preview = previewRef.current;
    if (!preview) return;

    // Fluid spring physics for the cursor-attached preview card
    const setPreviewX = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power3.out" });
    const setPreviewY = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset slightly to bottom-right of cursor for unobstructed view
      setPreviewX(e.clientX + 32);
      setPreviewY(e.clientY - 140);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseEnterProject = (project: ProjectItem) => {
    setHoveredProject(project);
    if (previewRef.current && isPointerFine) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.28,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeaveProject = () => {
    setHoveredProject(null);
    if (previewRef.current && isPointerFine) {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0.88,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  };

  return (
    <section
      id="index"
      ref={containerRef}
      className="relative py-28 sm:py-36 px-4 sm:px-8 max-w-7xl mx-auto border-t border-slate-200"
    >
      {/* Header Metadata */}
      <div className="flex items-center justify-between font-mono text-xs text-slate-500 uppercase pb-8 border-b border-slate-200 mb-16">
        <div className="flex items-center gap-2">
          <span className="text-[#2563EB] font-bold">[04]</span>
          <span className="text-[#0F172A] font-semibold">THE KINETIC INDEX // PROOF OF WORK</span>
        </div>
        <div className="hidden sm:block text-slate-400">
          SELECTED INSTITUTIONAL DEPLOYMENTS
        </div>
      </div>

      <div className="mb-14">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0F172A] mb-4">
          PROVEN ARCHITECTURE
        </h2>
        <p className="font-sans text-base text-slate-600 max-w-2xl">
          Inspect selected high-ticket deployments, telemetry benchmarks, and bottom-line commercial impact.
        </p>
      </div>

      {/* Massive Vertical Text List with Reactive Elevation */}
      <div className="velocity-skew divide-y divide-slate-200 border-t border-b border-slate-200 gpu-accel">
        {PROJECTS_DATA.map((project) => {
          const isCurrent = hoveredProject?.id === project.id;

          return (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnterProject(project)}
              onMouseLeave={handleMouseLeaveProject}
              data-cursor="view"
              data-cursor-text="VIEW"
              className={`group relative py-10 sm:py-14 transition-all duration-300 cursor-pointer px-4 sm:px-6 ${
                isCurrent
                  ? "bg-white shadow-[0_20px_40px_-15px_rgba(15,23,42,0.08)] -translate-y-1"
                  : "hover:bg-white/60"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Left: Number & Massive Title */}
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-sm sm:text-base text-slate-400 group-hover:text-[#2563EB] transition-colors">
                    {project.number}
                  </span>
                  <div>
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-all duration-200">
                      {project.name}
                    </h3>
                    <div className="font-mono text-xs text-slate-500 mt-2 flex items-center gap-3">
                      <span>{project.category}</span>
                      <span className="text-slate-300">//</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Right: ROI Metric & Action Arrow */}
                <div className="flex items-center justify-between lg:justify-end gap-8 mt-4 lg:mt-0 font-mono">
                  <div className="text-left lg:text-right">
                    <span className="block text-2xl sm:text-3xl font-black text-[#2563EB] tracking-tight">
                      {project.metricValue}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      {project.metricLabel}
                    </span>
                  </div>

                  <div className="w-12 h-12 border border-slate-200 bg-white group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center text-slate-700 transition-all duration-200 shadow-sm">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Mobile preview expander for non-pointer touch devices */}
              <div className="lg:hidden mt-6 pt-4 border-t border-slate-100 space-y-3 font-mono text-xs text-slate-600">
                <p>{project.summary}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-slate-100 text-[10px] text-slate-700 border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fluid Cursor-Attached Floating Preview Card with High-Res Visual Mask (Desktop pointer: fine) */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 w-[400px] pointer-events-none z-50 opacity-0 scale-90 hidden lg:block gpu-accel"
      >
        {hoveredProject && (
          <div className="bg-white p-5 border border-[#E2E8F0] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18)] rounded-none">
            {/* Visual Header Pill */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 font-mono text-[10px] text-slate-500">
              <span className="text-[#2563EB] font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {hoveredProject.accentBadge}
              </span>
              <span className="font-semibold">{hoveredProject.year} // DEPLOYED</span>
            </div>

            {/* High-Res Simulated Enterprise Platform UI Viewport */}
            <div className="my-3.5 h-44 rounded-none bg-slate-50 border border-slate-200 relative overflow-hidden flex flex-col justify-between p-4 shadow-inner">
              {/* Subtle hairline grid */}
              <div className="absolute inset-0 bg-light-grid opacity-40 pointer-events-none" />

              {/* Browser bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-200 pb-2 bg-white/80 px-2 py-1 -mx-2 -mt-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                  <div className="w-2 h-2 rounded-full bg-[#2563EB]" />
                </div>
                <span className="font-mono text-[9px] text-slate-600 font-semibold uppercase tracking-wider">
                  {hoveredProject.client}
                </span>
              </div>

              {/* Central Graphic Telemetry */}
              <div className="relative z-10 my-auto text-center py-2">
                <div className="font-mono text-3xl font-black text-[#0F172A] tracking-tight">
                  {hoveredProject.metricValue}
                </div>
                <div className="font-mono text-[10px] text-[#2563EB] uppercase tracking-wider font-semibold mt-1">
                  {hoveredProject.metricLabel}
                </div>
              </div>

              {/* Bottom footer status */}
              <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-slate-500 border-t border-slate-200 pt-2 bg-white/70 px-2 -mx-2 -mb-2">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
                  STATUS: LIVE IN PRODUCTION
                </span>
                <span>EDGE SYNC 100%</span>
              </div>
            </div>

            {/* Summary & Stack */}
            <p className="font-sans text-xs text-slate-600 leading-relaxed mb-3">
              {hoveredProject.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
              {hoveredProject.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] px-2 py-0.5 bg-slate-50 border border-slate-200 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
