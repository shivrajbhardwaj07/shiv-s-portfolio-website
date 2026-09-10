"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const lensRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);
    if (!mediaQuery.matches) return;

    const lens = lensRef.current;
    const dot = dotRef.current;
    if (!lens || !dot) return;

    // High-performance quickTo setters for zero-latency dot and smooth lerped lens
    const setDotX = gsap.quickTo(dot, "x", { duration: 0.04, ease: "power3.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.04, ease: "power3.out" });

    const setLensX = gsap.quickTo(lens, "x", { duration: 0.35, ease: "power3.out" });
    const setLensY = gsap.quickTo(lens, "y", { duration: 0.35, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      const { clientX, clientY } = e;
      setDotX(clientX);
      setDotY(clientY);
      setLensX(clientX);
      setLensY(clientY);
    };

    const onMouseDown = () => {
      gsap.to(lens, { scale: 0.85, duration: 0.2, ease: "power2.out" });
    };

    const onMouseUp = () => {
      gsap.to(lens, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    // Handle hover states for luxury reading lens
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [role='button'], [data-cursor], .luxury-hover");
      if (interactive) {
        const text = interactive.getAttribute("data-cursor-text") || "";
        setCursorText(text);

        gsap.to(lens, {
          scale: 1.8,
          borderColor: "rgba(245, 245, 247, 0.4)",
          backgroundColor: "rgba(245, 245, 247, 0.03)",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(dot, { opacity: 0.3, scale: 0.7, duration: 0.3 });
      } else {
        setCursorText("");
        gsap.to(lens, {
          scale: 1,
          borderColor: "rgba(245, 245, 247, 0.2)",
          backgroundColor: "transparent",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(dot, { opacity: 1, scale: 1, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible]);

  if (!isPointerFine) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* Precision Focal Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#F5F5F7] pointer-events-none z-20 gpu-accel shadow-[0_0_6px_rgba(245,245,247,0.4)]"
      />

      {/* Optical Ring */}
      <div
        ref={lensRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border border-[#F5F5F7]/20 pointer-events-none z-10 flex items-center justify-center text-[9px] text-[#F5F5F7] tracking-widest uppercase gpu-accel"
      >
        {cursorText && (
          <span ref={labelRef} className="scale-75 text-[#F5F5F7] select-none font-light">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
