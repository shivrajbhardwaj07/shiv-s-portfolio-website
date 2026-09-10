"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
  velocity: number;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  velocity: 0,
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const [velocity, setVelocity] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with ultra-buttery glide physics (lerp: 0.05 as mandated)
    const lenis = new Lenis({
      lerp: 0.05, // Exaggerated, buttery "glide" feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Connect Lenis scroll to ScrollTrigger
    lenis.on("scroll", (e: { velocity: number; scroll: number }) => {
      ScrollTrigger.update();
      setVelocity(e.velocity);
    });

    // Hook Lenis into GSAP's high-precision 60/120Hz ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (
    target: string | HTMLElement,
    options?: { offset?: number; duration?: number }
  ) => {
    if (!lenisRef.current) return;
    lenisRef.current.scrollTo(target, {
      offset: options?.offset ?? 0,
      duration: options?.duration ?? 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance, scrollTo, velocity }}>
      {children}
    </LenisContext.Provider>
  );
}
