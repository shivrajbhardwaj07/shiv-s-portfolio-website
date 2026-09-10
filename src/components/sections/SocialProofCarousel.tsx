"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function SocialProofCarousel() {
  const testimonials = [
    {
      id: "apex",
      quote:
        "Shiv took our legacy monolith from a 7-second loading disaster to a 38ms edge platform. Our checkout conversion surged by 314% within the first month. He didn't just write code—he completely re-architected our commercial engine.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Apex Autonomous Corp",
      metric: "+314% Conversion Lift",
      year: "2026",
    },
    {
      id: "neuralflow",
      quote:
        "Building a multi-tenant SaaS MVP with real-time billing seemed like a 6-month endeavor with traditional agencies. Shiv delivered our entire production app in 18 days. We signed 42 enterprise pilot clients before our seed round closed.",
      author: "Elena Rostova",
      role: "Chief Technology Officer",
      company: "NeuralFlow Intelligence",
      metric: "18 Days to Live Revenue",
      year: "2026",
    },
    {
      id: "hyperion",
      quote:
        "Working directly with the lead architect eliminated all the bureaucracy and telephone games of typical agencies. Hyperion Core now manages over $2B in deal flow with zero downtime and sub-second analytics.",
      author: "Julian Sterling",
      role: "Managing Partner",
      company: "Hyperion Capital Syndicate",
      metric: "$2.14B Assets Managed",
      year: "2026",
    },
    {
      id: "synapse",
      quote:
        "Our ad drops regularly crush standard Shopify stores. Shiv's headless edge architecture handled 25,000 requests per minute during our TikTok drop without a millisecond of lag. Our cart abandonment dropped by 52%.",
      author: "Sophia Chen",
      role: "VP of Growth & E-Commerce",
      company: "Synapse Direct",
      metric: "-52.6% Abandonment",
      year: "2025",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="social-proof"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[08]</span>
            <span>EXECUTIVE SOCIAL PROOF // ENDORSEMENTS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Client <span className="font-serif italic font-normal text-slate-200">Testimony.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          Unsolicited feedback from founders, CTOs, and managing partners who partnered directly with Shiv Studio.
        </p>
      </div>

      {/* Minimalist Carousel Card Floating over Background */}
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-14 lg:p-16 rounded-3xl shadow-2xl">
        {/* Massive Typographic Quote Mark */}
        <div className="text-white/20 -mt-6 -ml-2 mb-2 select-none pointer-events-none">
          <Quote className="w-16 h-16 sm:w-24 sm:h-24 stroke-[1.2]" />
        </div>

        {/* Testimonial Quote */}
        <blockquote className="text-xl sm:text-3xl lg:text-4xl font-light text-white leading-[1.3] tracking-tight font-serif min-h-[150px] sm:min-h-[170px]">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Footer Meta & Controls */}
        <div className="pt-10 mt-10 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          {/* Author info & verified ROI badge */}
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <div className="text-white font-bold text-base sm:text-lg font-sans">
                {current.author}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-sans">
                {current.role} // <span className="text-[#60A5FA] font-medium">{current.company}</span>
              </div>
            </div>

            <div className="px-3.5 py-1 bg-white/10 text-[#60A5FA] border border-white/20 rounded-full font-mono text-xs font-bold">
              {current.metric}
            </div>
          </div>

          {/* Carousel Navigation Buttons & Dots */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-slate-400 font-semibold">
              <span className="text-white font-bold">{currentIndex + 1}</span> / {testimonials.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                data-cursor="action"
                data-cursor-text="PREV"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                data-cursor="action"
                data-cursor-text="NEXT"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all cursor-pointer shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
