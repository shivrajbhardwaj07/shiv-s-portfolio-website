"use client";

import React, { useState, useEffect } from "react";
import MagneticButton from "../core/MagneticButton";
import { useLenis } from "../core/SmoothScroll";
import {
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  RefreshCw,
  Mail,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function DiagnosticTerminal() {
  const { scrollTo } = useLenis();

  // Multi-step state: Step 1: Goal, Step 2: Strategy Call Booking
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [primaryGoal, setPrimaryGoal] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("Tomorrow, 14:00 EST");
  const [founderName, setFounderName] = useState<string>("");
  const [founderEmail, setFounderEmail] = useState<string>("");
  const [projectNotes, setProjectNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // Live local time
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const goalOptions = [
    {
      id: "platform-redesign",
      title: "High-Performance Platform Redesign",
      desc: "Replace a sluggish, fragile WordPress or Webflow site with sub-second Edge architecture.",
      badge: "PLATFORM ARCHITECTURE",
    },
    {
      id: "saas-mvp",
      title: "Custom B2B SaaS or Product MVP",
      desc: "Turn an idea into live, revenue-generating software with custom Stripe billing in 21 days.",
      badge: "PRODUCT ENGINEERING",
    },
    {
      id: "social-growth",
      title: "Social Media Distribution & Attention",
      desc: "Build automated organic content distribution loops and founder personal brand authority.",
      badge: "ATTENTION MECHANICS",
    },
    {
      id: "enterprise-scale",
      title: "End-to-End Enterprise Growth Overhaul",
      desc: "Full architectural partnership: edge platform, custom web software, and viral acquisition funnels.",
      badge: "EXECUTIVE PARTNERSHIP",
    },
  ];

  const availableSlots = [
    "Tomorrow, 11:00 EST",
    "Tomorrow, 14:30 EST",
    "Thursday, 10:00 EST",
    "Thursday, 15:30 EST",
    "Friday, 13:00 EST",
    "Monday, 11:00 EST",
  ];

  const handleGoalSelect = (goalId: string) => {
    setPrimaryGoal(goalId);
  };

  const handleContinueToBooking = () => {
    if (!primaryGoal) return;
    setCurrentStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!founderName || !founderEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1100);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setPrimaryGoal("");
    setIsConfirmed(false);
  };

  return (
    <footer
      id="diagnostic"
      className="relative pt-28 pb-16 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto z-10 select-none"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-20 pb-8 border-b border-white/20 gap-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#60A5FA] mb-3 font-bold">
            <span>[10]</span>
            <span>THE CLOSING TERMINAL // STRATEGY ENGAGEMENT</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-light text-white tracking-tight">
            Initiate Your <span className="font-serif italic font-normal text-slate-200">Audit.</span>
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-200 max-w-md bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20">
          A welcoming, multi-step onboarding journey anchoring our partnership. Zero junior account managers.
        </p>
      </div>

      {/* Main Qualification Form Box Centered Directly in the Screen */}
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-14 shadow-2xl mb-20">
        {/* Progress Tracker */}
        <div className="flex items-center justify-between pb-8 border-b border-white/15 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span className="text-white font-bold tracking-wider uppercase">
              {currentStep === 1 ? "PHASE 1: DEFINE YOUR PRIMARY GOAL" : "PHASE 2: BOOK YOUR STRATEGY CALL"}
            </span>
          </div>
          <div className="text-slate-400 font-semibold">
            STEP {currentStep} OF 2
          </div>
        </div>

        {!isConfirmed ? (
          <div className="pt-8">
            {/* STEP 1: What is your primary goal? */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                    What is your primary objective?
                  </h3>
                  <p className="text-sm text-slate-200 font-sans mt-2">
                    Select the key growth discipline where your business needs execution.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goalOptions.map((opt) => {
                    const isSelected = primaryGoal === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleGoalSelect(opt.id)}
                        data-cursor="action"
                        className={`p-6 text-left border rounded-2xl transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#60A5FA] bg-white/20 shadow-md"
                            : "border-white/20 bg-white/10 hover:border-white/30 hover:bg-white/15"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[9px] font-bold text-[#60A5FA] tracking-wider uppercase bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20">
                            {opt.badge}
                          </span>
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? "border-[#2563EB] bg-[#2563EB]" : "border-white/30"
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                        <div className="text-base sm:text-lg font-medium text-white mb-1 font-sans">
                          {opt.title}
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          {opt.desc}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex justify-end">
                  <MagneticButton
                    variant="primary"
                    disabled={!primaryGoal}
                    onClick={handleContinueToBooking}
                    dataCursor="action"
                    dataCursorText="BOOK"
                    className={!primaryGoal ? "!opacity-40 !cursor-not-allowed" : ""}
                  >
                    <span>PROCEED TO CALENDAR BOOKING</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </MagneticButton>
                </div>
              </div>
            )}

            {/* STEP 2: Book Your Strategy Call */}
            {currentStep === 2 && (
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                    Book your strategy call.
                  </h3>
                  <p className="text-sm text-slate-200 font-sans mt-2">
                    Pick an available direct window and share brief context on your current platform or vision.
                  </p>
                </div>

                {/* Embedded Calendar UI */}
                <div className="space-y-3">
                  <label className="block font-mono text-xs uppercase text-slate-200 font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#60A5FA]" />
                    <span>SELECT AN AVAILABLE ADVISORY WINDOW</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedSlot(slot)}
                          data-cursor="action"
                          className={`p-3 text-left border rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#2563EB] bg-[#2563EB] text-white font-bold shadow-xs"
                              : "border-white/20 bg-white/10 text-slate-200 hover:border-white/30 hover:bg-white/15"
                          }`}
                        >
                          <Clock className={`w-3.5 h-3.5 inline mr-1.5 ${isSelected ? "text-white" : "text-[#60A5FA]"}`} />
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-300 font-semibold mb-1">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Henderson"
                      value={founderName}
                      onChange={(e) => setFounderName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-[#60A5FA] focus:bg-white/15 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase text-slate-300 font-semibold mb-1">
                      CORPORATE / DIRECT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      value={founderEmail}
                      onChange={(e) => setFounderEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-[#60A5FA] focus:bg-white/15 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase text-slate-300 font-semibold mb-1">
                    PROJECT SUMMARY OR CURRENT PLATFORM URL (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your timeline, existing tech stack, or commercial targets..."
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:border-[#60A5FA] focus:bg-white/15 focus:outline-none transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit & Back Navigation */}
                <div className="pt-4 flex items-center justify-between border-t border-white/15">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="font-mono text-xs text-slate-400 hover:text-white underline uppercase cursor-pointer"
                  >
                    ← BACK TO GOALS
                  </button>

                  <MagneticButton
                    variant="primary"
                    disabled={isSubmitting}
                    type="submit"
                    dataCursor="action"
                    dataCursorText="CONFIRM"
                    className="!px-8 !py-4 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        RESERVING STRATEGY CALL...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>CONFIRM STRATEGY RESERVATION</span>
                        <Send className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-12 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#60A5FA] mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Strategy Call Reserved.
            </h3>

            <p className="font-sans text-sm sm:text-base text-slate-200 max-w-lg mx-auto leading-relaxed">
              We look forward to speaking on <strong className="text-white font-semibold">{selectedSlot}</strong>. A calendar invite and pre-audit briefing have been dispatched to <strong className="text-[#60A5FA]">{founderEmail}</strong>.
            </p>

            <div className="p-5 bg-white/10 border border-white/20 rounded-xl font-mono text-xs text-slate-200 max-w-md mx-auto text-left space-y-1.5 shadow-xl">
              <div>// RESERVATION SUMMARY:</div>
              <div className="text-white font-bold">ATTENDEE: {founderName}</div>
              <div>FOCUS: {goalOptions.find((g) => g.id === primaryGoal)?.title}</div>
              <div>TIMEFRAME: {selectedSlot}</div>
              <div className="text-[#60A5FA] pt-1 font-semibold">
                CONFIRMATION REF: SHIV-{Math.floor(100000 + Math.random() * 900000)}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="text-xs font-mono text-slate-400 hover:text-white underline uppercase cursor-pointer"
              >
                [ SCHEDULE ANOTHER INQUIRY ]
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Magazine Sign-Off & Footer */}
      <div className="pt-12 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Simple Sign-off & Direct Email */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center font-serif text-lg italic font-normal shadow-sm">
            S
          </div>
          <div>
            <div className="text-sm font-semibold text-white font-sans">
              Shiv // Digital Growth &amp; Engineering Studio
            </div>
            <a
              href="mailto:founder@shivstudio.com"
              className="font-mono text-xs text-[#60A5FA] hover:underline flex items-center justify-center sm:justify-start gap-1 mt-0.5"
              data-cursor="action"
              data-cursor-text="EMAIL"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>founder@shivstudio.com</span>
            </a>
          </div>
        </div>

        {/* Live Local Time Indicator */}
        <div className="font-mono text-xs text-slate-300 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          <span>STUDIO TIME: <span className="text-white font-bold">{currentTime || "12:00:00"}</span></span>
          <span className="text-white/30">//</span>
          <span className="text-slate-300 hidden sm:inline">SAN FRANCISCO, CA</span>
        </div>

        {/* Back to top */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-xs uppercase tracking-widest text-slate-300 hover:text-white transition-colors cursor-pointer"
          data-cursor="action"
          data-cursor-text="TOP"
        >
          [ BACK TO COVER ↑ ]
        </button>
      </div>
    </footer>
  );
}
