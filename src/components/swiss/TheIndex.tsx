"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function TheIndex() {
  const [activeProject, setActiveProject] = useState<{
    title: string;
    image: string;
  } | null>(null);

  const previewRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: "01",
      title: "Algorithmic Content Pipeline",
      category: "AUTOMATION & LOGIC",
      year: "2026",
      image: "/images/project-neuralflow.jpg",
      deliverable: "Custom telemetry & distribution engine for commercial audience acquisition",
    },
    {
      id: "02",
      title: "Retail Operations Management",
      category: "ENTERPRISE SYSTEMS",
      year: "2025",
      image: "/images/project-hyperion.jpg",
      deliverable: "Full-scale inventory orchestration, billing, & multi-terminal retail OS",
    },
    {
      id: "03",
      title: "SaaS MVP Deployment",
      category: "EDGE ARCHITECTURE",
      year: "2025",
      image: "/images/project-apex.jpg",
      deliverable: "Sub-second Next.js platform with metered billing and direct revenue engine",
    },
  ];

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;

    // Smooth GSAP quickTo setters with luxury inertia
    const setX = gsap.quickTo(preview, "x", { duration: 0.35, ease: "power3.out" });
    const setY = gsap.quickTo(preview, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      setX(e.clientX + 32);
      setY(e.clientY - 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="index"
      className="relative py-40 sm:py-52 px-6 sm:px-12 lg:px-20 max-w-[1700px] mx-auto select-none"
    >
      {/* Floating Project Image Attached to Cursor with luxury easing */}
      <div
        ref={previewRef}
        className={`fixed top-0 left-0 w-[300px] sm:w-[360px] h-[190px] sm:h-[220px] pointer-events-none z-50 overflow-hidden border border-[#ffffff15] bg-[#0A0A0B] transition-opacity duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          activeProject ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        {activeProject && (
          <div className="relative w-full h-full">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              sizes="360px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0A0A0B]/25" />
            <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.2em] text-white bg-black/80 px-2.5 py-1 font-medium">
              {activeProject.title}
            </div>
          </div>
        )}
      </div>

      {/* Section Header */}
      <div className="grid grid-cols-12 gap-4 mb-24">
        <div className="col-span-12 md:col-span-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 block">
            06 // THE INDEX
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/40 block mt-2">
            SELECTED WORK
          </span>
        </div>
        <div className="col-span-12 md:col-start-4 md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-white/90 leading-[1.2]">
            Selected production deployments and systems.
          </h2>
          <p className="text-sm md:text-base font-sans font-light text-[#a1a1a6] mt-3">
            A purely typographic index. Hover over any entry to inspect visual proof.
          </p>
        </div>
      </div>

      {/* Purely Typographic Project Rows with Liquid 4px Drift */}
      <div>
        {projects.map((item) => (
          <div
            key={item.id}
            onMouseEnter={() => setActiveProject({ title: item.title, image: item.image })}
            onMouseLeave={() => setActiveProject(null)}
            className="group border-b border-[#ffffff10] py-10 sm:py-14 cursor-pointer"
          >
            <div className="grid grid-cols-12 gap-4 items-baseline transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-[4px]">
              {/* Number & Year - Mono strictly for numbers */}
              <div className="col-span-12 sm:col-span-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                {item.id} // {item.year}
              </div>

              {/* Title & Deliverable */}
              <div className="col-span-12 sm:col-span-7">
                <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-white/90 leading-[1.2] transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                  {item.title}
                </h3>
                <p className="text-sm font-sans font-light text-[#a1a1a6] mt-2 transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                  {item.deliverable}
                </p>
              </div>

              {/* Category */}
              <div className="col-span-12 sm:col-span-3 text-left sm:text-right pt-3 sm:pt-0">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono text-white/50 group-hover:text-white transition-colors duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]">
                  {item.category} [→]
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
