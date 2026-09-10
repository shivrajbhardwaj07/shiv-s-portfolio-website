"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CanvasScrubber() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Cached frame references
  const framesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const totalFrames = 300;
    const frames: HTMLImageElement[] = [];
    framesRef.current = frames;

    let loadedCount = 0;
    let scrollTriggerInstance: ScrollTrigger | null = null;

    // Renders the requested frame simulating object-fit: cover
    const drawFrame = (index: number) => {
      if (!canvas || !ctx) return;
      const img = frames[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Object-fit: cover math so images never stretch or distort
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = width / height;

      let drawW: number;
      let drawH: number;
      let drawX: number;
      let drawY: number;

      if (canvasAspect > imgAspect) {
        drawW = width;
        drawH = width / imgAspect;
        drawX = 0;
        drawY = (height - drawH) / 2;
      } else {
        drawH = height;
        drawW = height * imgAspect;
        drawX = (width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      ctx.restore();
    };

    // Recalculates canvas dimensions on window resize
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      drawFrame(currentFrameIndexRef.current);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Map scroll progress (0.0 to 1.0) to the 300 video frames
    // 0% - 15%: Facing front (Hero cover story)
    // 15% - 35%: Turn to side / right (Gliding intro)
    // 35% - 60%: Return to front (Capabilities, Tech schematic, ROI dashboard)
    // 60% - 85%: Turn left (Gallery, Process, Social proof)
    // 85% - 100%: Return to front (Closing Diagnostic terminal)
    const mapScrollToFrame = (progress: number): number => {
      const p = gsap.utils.clamp(0, 1, progress);

      if (p <= 0.15) {
        const t = p / 0.15;
        return Math.floor(t * 45);
      } else if (p <= 0.35) {
        const t = (p - 0.15) / 0.20;
        return Math.floor(45 + t * (105 - 45));
      } else if (p <= 0.60) {
        const t = (p - 0.35) / 0.25;
        return Math.floor(105 + t * (180 - 105));
      } else if (p <= 0.85) {
        const t = (p - 0.60) / 0.25;
        return Math.floor(180 + t * (255 - 180));
      } else {
        const t = (p - 0.85) / 0.15;
        return Math.floor(255 + t * (299 - 255));
      }
    };

    // Preloads all 300 images into browser cache before initializing ScrollTrigger
    const initScrollTrigger = () => {
      setIsLoaded(true);
      drawFrame(0);

      scrollTriggerInstance = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1, // Near-zero lag scrubbing
        onUpdate: (self) => {
          const targetFrame = mapScrollToFrame(self.progress);
          if (targetFrame !== currentFrameIndexRef.current) {
            currentFrameIndexRef.current = targetFrame;
            requestAnimationFrame(() => drawFrame(targetFrame));
          }
        },
      });
    };

    // Initiate preloading of all 300 frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, "0");
      img.src = `/frames/frame_${numStr}.jpg`;

      const onFrameLoaded = () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / totalFrames) * 100);
        setLoadProgress(pct);

        if (loadedCount === 1) {
          drawFrame(0);
        }

        if (loadedCount === totalFrames) {
          initScrollTrigger();
        }
      };

      img.onload = onFrameLoaded;
      img.onerror = onFrameLoaded;

      frames.push(img);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0"
      style={{ zIndex: 0 }}
    >
      {/* HTML5 Canvas scrubbing through the 300 frames */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Lighting: subtle rich dark slate overlay over canvas */}
      <div className="absolute inset-0 bg-[#0A0A0B]/70 pointer-events-none z-[1]" />

      {/* Sleek Minimalist Preload Indicator */}
      {!isLoaded && (
        <div className="absolute bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 font-mono text-xs text-white pointer-events-none transition-opacity duration-500">
          <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
          <span>CACHING KINETIC FRAMES: {loadProgress}%</span>
        </div>
      )}
    </div>
  );
}
