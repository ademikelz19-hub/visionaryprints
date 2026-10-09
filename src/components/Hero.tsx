"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Sparkles, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030712]">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-violet-600/20 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-2/3 right-10 w-[400px] h-[400px] bg-indigo-900/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-violet-900/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Top Announcement Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide bg-gradient-to-r from-indigo-300 via-slate-200 to-violet-300 bg-clip-text text-transparent">
            Premier Digital Agency & Publishing House
          </span>
          <span className="hidden sm:inline-block text-slate-500">|</span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400 font-medium">
            <Sparkles className="w-3 h-3 text-violet-400" />
            Accepting Q3 / Q4 Projects
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] sm:leading-[1.1]">
          We Engineer High-Impact{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent underline-offset-8 decoration-indigo-500/30">
            Digital Experiences
          </span>{" "}
          & Global Publications
        </h1>

        {/* Subheadline */}
        <p className="mt-7 text-lg sm:text-xl text-slate-300/90 max-w-3xl mx-auto font-normal leading-relaxed">
          <span className="font-semibold text-white">Visionary Prints</span> transforms ambitious visions into market-defining assets. We specialize in bespoke{" "}
          <span className="text-indigo-300 font-medium">web development</span>, Amazon KDP{" "}
          <span className="text-violet-300 font-medium">digital publishing</span>, short-form video editing, and revenue-driven{" "}
          <span className="text-cyan-300 font-medium">media creation</span>.
        </p>

        {/* Dual Call-To-Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-base shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Work With Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#publications"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <BookOpen className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
            <span>View Our Work</span>
          </a>
        </div>

        {/* Core Value Micro-Pills */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Full-Stack Code</div>
                <div className="text-xs text-slate-400 mt-0.5">Next.js, React, Tailwind</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Amazon KDP</div>
                <div className="text-xs text-slate-400 mt-0.5">Top-tier publishing & POD</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Viral Media</div>
                <div className="text-xs text-slate-400 mt-0.5">High-retention video editing</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">End-To-End Delivery</div>
                <div className="text-xs text-slate-400 mt-0.5">Turnkey execution & scale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
