"use client";

import { Cpu, Rocket, Zap, BarChart3, Award, Check } from "lucide-react";

export default function WhyUs() {
  const steps = [
    {
      step: "01",
      title: "Audience & Product Blueprint",
      description:
        "We analyze your creator audience, content niches, and highest-yield monetization opportunities before designing your digital or physical product.",
      icon: Cpu,
    },
    {
      step: "02",
      title: "Design & Product Architecture",
      description:
        "We build high-converting Next.js storefronts, format Amazon KDP manuscripts, illustrate print-ready book covers, and assemble digital assets.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Amazon & Web Store Launch",
      description:
        "Live deployment on Amazon KDP with worldwide Prime delivery, alongside fast checkout web funnels that allow you to keep maximum profits.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Traffic Funnels & Viral Video",
      description:
        "We craft high-retention short-form video content and social media creative assets to funnel organic audience views straight to your checkout page.",
      icon: BarChart3,
    },
  ];

  const highlights = [
    "Turnkey Amazon KDP Publishing (Zero Inventory Risk)",
    "Custom Next.js & React Digital Product Storefronts",
    "High-Ticket Digital Downloads, E-Books & Workbooks",
    "Viral Short-Form Video Funnels (TikTok, Reels, Shorts)",
    "Zero Tech Overhead: We Handle All Code & Formats",
    "Maximized Royalty Rates & Direct Creator Monetization",
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#030712] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            <span>The Creator Product Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How We Turn Your Ideas Into <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
              Profitable Creator Assets.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300/85">
            Most creators struggle with technical implementation, print formatting, and checkout funnels. We eliminate the friction and build end-to-end products that monetize your brand.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold text-slate-700 group-hover:text-indigo-400/60 transition-colors font-mono">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-850 flex items-center justify-center text-indigo-400 border border-slate-800 group-hover:border-indigo-500/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlights & Creator Guarantee Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-8 sm:p-12 border border-slate-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                Built For Modern Creators
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4">
                Don&apos;t Just Rely On Ad Revenue and Sponsorships.
              </h3>
              <p className="text-sm text-slate-300/85 leading-relaxed">
                Brand deals come and go, but owned digital products and Amazon KDP royalties generate predictable, compounding income month after month. We give you the technical and creative leverage to build your product empire.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm font-medium text-slate-200"
                >
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
