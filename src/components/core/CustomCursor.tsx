"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // High-performance GSAP quickTo setters for zero-latency dot and smooth lerped lens
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.02, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.02, ease: "power3.out" });

    const setRingX = gsap.quickTo(ring, "x", { duration: 0.25, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.25, ease: "power3.out" });

    // Ensure cursor is visible immediately
    gsap.set([dot, ring], { opacity: 1 });

    const onMouseMove = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setRingX(e.clientX);
      setRingY(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to(ring, { scale: 0.8, duration: 0.15, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(ring, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    // Handle hover states for luxury reading lens
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor], .luxury-hover");
      if (interactive) {
        const text = interactive.getAttribute("data-cursor-text") || "";
        setCursorText(text);

        gsap.to(ring, {
          scale: 1.8,
          borderColor: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0.5, duration: 0.2 });
      } else {
        setCursorText("");
        gsap.to(ring, {
          scale: 1,
          borderColor: "#ffffff",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    // Global window tracking so it moves uninterrupted everywhere across the page
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseover", handleElementHover, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{ zIndex: 99999 }}
      aria-hidden="true"
    >
      {/* Precision High-Contrast Focal Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-white shadow-[0_0_12px_#ffffff,0_2px_8px_rgba(0,0,0,0.95)] pointer-events-none z-[99999] gpu-accel"
        style={{ zIndex: 99999 }}
      />

      {/* Optical Ring / Reading Lens with drop shadow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border-2 border-white bg-white/10 backdrop-blur-[1px] shadow-[0_0_16px_rgba(255,255,255,0.5),0_2px_10px_rgba(0,0,0,0.9)] pointer-events-none z-[99999] flex items-center justify-center text-[10px] text-white tracking-widest uppercase gpu-accel"
        style={{ zIndex: 99999 }}
      >
        {cursorText && (
          <span
            ref={labelRef}
            className="scale-75 text-white select-none font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
