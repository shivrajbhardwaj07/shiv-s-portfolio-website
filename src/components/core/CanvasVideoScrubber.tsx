"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CanvasVideoScrubber() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Reference holding preloaded images
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

    const drawFrame = (index: number) => {
      if (!canvas || !ctx) return;
      const img = frames[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;

      // Save context
      ctx.save();
      ctx.scale(dpr, dpr);

      // Cover calculations
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = width / height;

      let drawW, drawH, drawX, drawY;

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

      // Draw background frame
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      ctx.restore();
    };

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

    // Map scroll progress to video frames based on user mandate:
    // 0% - 15%: Facing front (frames 0 to 45)
    // 15% - 35%: Turn to RIGHT (frames 45 to 105)
    // 35% - 60%: Return to FRONT (frames 105 to 180)
    // 60% - 85%: Turn to LEFT (frames 180 to 255)
    // 85% - 100%: Return to FRONT (frames 255 to 299)
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

    // Preload all 300 frames
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, "0");
      img.src = `/frames/frame_${numStr}.jpg`;

      img.onload = () => {
        loadedCount++;
        const pct = Math.floor((loadedCount / totalFrames) * 100);
        setLoadProgress(pct);

        // Draw initial frame as soon as frame 1 is ready
        if (i === 1) {
          drawFrame(0);
        }

        if (loadedCount === totalFrames) {
          setIsLoaded(true);
          drawFrame(currentFrameIndexRef.current);
        }
      };

      frames.push(img);
    }

    // ScrollTrigger controlling canvas scrubbing across the entire document
    const st = ScrollTrigger.create({
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

    return () => {
      window.removeEventListener("resize", handleResize);
      st.kill();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
    >
      {/* Fixed Full-Screen Canvas rendering the 300 video frames */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Subtle dark overlay (rgba(0,0,0, 0.4)) as commanded so light text pops perfectly */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      />

      {/* Sleek Magazine Preload Bar (fades out when loaded) */}
      {!isLoaded && (
        <div className="absolute bottom-6 right-6 z-50 bg-black/80 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-3 font-mono text-xs text-white pointer-events-none transition-opacity duration-500">
          <div className="w-2 h-2 rounded-full bg-[#2563EB] animate-ping" />
          <span>PRELOADING COVER STORY FRAMES: {loadProgress}%</span>
        </div>
      )}
    </div>
  );
}
