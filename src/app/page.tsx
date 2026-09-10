"use client";

import React from "react";
import SmoothScroll from "@/components/core/SmoothScroll";
import CustomCursor from "@/components/core/CustomCursor";
import CanvasScrubber from "@/components/core/CanvasScrubber";
import SwissHeader from "@/components/swiss/SwissHeader";
import TheMonolithHero from "@/components/swiss/TheMonolithHero";
import TheUnfairAdvantage from "@/components/swiss/TheUnfairAdvantage";
import TheArsenal from "@/components/swiss/TheArsenal";
import RawSkills from "@/components/swiss/RawSkills";
import VerifiedYield from "@/components/swiss/VerifiedYield";
import TheIndex from "@/components/swiss/TheIndex";
import ExecutionProtocol from "@/components/swiss/ExecutionProtocol";
import ThePhilosophy from "@/components/swiss/ThePhilosophy";
import TheInterrogation from "@/components/swiss/TheInterrogation";
import TheTerminal from "@/components/swiss/TheTerminal";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Precision Lens Cursor */}
      <CustomCursor />

      {/* Ultra-Minimalist Swiss Header */}
      <SwissHeader />

      {/* LAYER 0: THE KINETIC ENGINE (Fixed Video Background, z-index: 0) */}
      <CanvasScrubber />

      {/* LAYER 1: THE FOREGROUND UI (Editorial Luxury Typography, z-index: 10) */}
      <main className="relative w-full z-10 flex flex-col bg-transparent text-[#F5F5F7] selection:bg-[#F5F5F7]/20 selection:text-[#F5F5F7]">
        {/* Section 1: The Monolith Hero */}
        <TheMonolithHero />

        {/* Section 2: The Unfair Advantage (Intro) */}
        <TheUnfairAdvantage />

        {/* Section 3: The Arsenal (Capabilities) */}
        <TheArsenal />

        {/* Section 4: Raw Skills */}
        <RawSkills />

        {/* Section 5: Verified Yield (Metrics) */}
        <VerifiedYield />

        {/* Section 6: The Index (Work with Hover Cursor Preview) */}
        <TheIndex />

        {/* Section 7: Execution Protocol */}
        <ExecutionProtocol />

        {/* Section 8: The Philosophy */}
        <ThePhilosophy />

        {/* Section 9: The Interrogation (FAQ) */}
        <TheInterrogation />

        {/* Section 10: The Terminal (Contact) */}
        <TheTerminal />
      </main>
    </SmoothScroll>
  );
}
