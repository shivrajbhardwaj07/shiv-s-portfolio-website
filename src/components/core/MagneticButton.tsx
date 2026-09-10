"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  magneticRadius?: number; // Distance in pixels where magnetic field pulls
  strength?: number; // Pull factor between 0 and 1
  id?: string;
  dataCursorText?: string;
  dataCursor?: string;
  variant?: "primary" | "secondary" | "minimal";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function MagneticButton({
  children,
  onClick,
  className = "",
  magneticRadius = 40,
  strength = 0.35,
  id,
  dataCursorText,
  dataCursor = "action",
  variant = "primary",
  disabled = false,
  type = "button",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || disabled) return;

    // Only enable physical magnetic attraction for fine pointers
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const distance = Math.hypot(deltaX, deltaY);
      const maxDistance = Math.max(rect.width, rect.height) / 2 + magneticRadius;

      if (distance < maxDistance) {
        const pullFactor = (1 - distance / maxDistance) * strength;
        const targetX = deltaX * pullFactor;
        const targetY = deltaY * pullFactor;

        gsap.to(el, {
          x: targetX,
          y: targetY,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });

        if (textRef.current) {
          gsap.to(textRef.current, {
            x: targetX * 0.35,
            y: targetY * 0.35,
            duration: 0.25,
            ease: "power2.out",
            overwrite: "auto",
          });
        }
      } else {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
          overwrite: "auto",
        });

        if (textRef.current) {
          gsap.to(textRef.current, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
            overwrite: "auto",
          });
        }
      }
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
        overwrite: "auto",
      });
      if (textRef.current) {
        gsap.to(textRef.current, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.3)",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
      gsap.killTweensOf([el, textRef.current]);
    };
  }, [magneticRadius, strength, disabled]);

  const baseStyles =
    "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider transition-all duration-200 select-none gpu-accel focus:outline-none cursor-pointer";

  const variants = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1D4ED8] font-semibold px-7 py-4 border border-[#2563EB] shadow-[0_8px_20px_-4px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_28px_-4px_rgba(37,99,235,0.45)] active:scale-[0.98]",
    secondary:
      "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/40 px-6 py-3.5 border border-white/20 shadow-md active:scale-[0.98]",
    minimal:
      "text-slate-300 hover:text-white px-4 py-2 border-b border-transparent hover:border-[#2563EB]",
  };

  return (
    <button
      ref={buttonRef}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      data-cursor={dataCursor}
      data-cursor-text={dataCursorText}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span ref={textRef} className="relative z-10 flex items-center gap-2 pointer-events-none">
        {children}
      </span>
    </button>
  );
}
