"use client";

import { Code2, BookOpenCheck, Video, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Web Development",
      category: "Full-Stack & Performance",
      description:
        "High-performance, modern websites and web applications built with Next.js, React, and Tailwind CSS. We deliver lightning-fast load times, flawless responsiveness, and interfaces engineered for conversions.",
      icon: Code2,
      accentColor: "from-blue-500 to-indigo-600",
      glowColor: "rgba(59, 130, 246, 0.15)",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      deliverables: [
        "Custom Next.js & React Web Apps",
        "Mobile-First Responsive Design",
        "SEO Architecture & Core Web Vitals",
        "Conversion-Optimized Landing Pages",
      ],
      ctaText: "Request Web Proposal",
    },
    {
      id: "digital-publishing",
      title: "Digital Publishing",
      category: "Amazon KDP & Global Distribution",
      description:
        "End-to-end publishing solutions for independent authors and brands. From children's activity books to specialty journals, we manage formatting, cover artwork, and global print-on-demand deployment on Amazon KDP.",
      icon: BookOpenCheck,
      accentColor: "from-purple-500 to-violet-600",
      glowColor: "rgba(168, 85, 247, 0.15)",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      deliverables: [
        "Amazon KDP Formatting (Paperback & E-Book)",
        "Premium Illustrated Cover & Interior Art",
        "Barcode, Metadata & Amazon SEO Ranking",
        "Children's Books, Activity Puzzles & Journals",
      ],
      ctaText: "Publish on Amazon",
    },
    {
      id: "video-editing",
      title: "Short-Form Video Editing",
      category: "Viral Retention & Social Media",
      description:
        "Dynamic, high-retention video editing engineered for TikTok, Instagram Reels, and YouTube Shorts. We apply psychological pacing, kinetic subtitles, and sound design to turn casual scrollers into loyal followers.",
      icon: Video,
      accentColor: "from-cyan-500 to-blue-600",
      glowColor: "rgba(6, 182, 212, 0.15)",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      deliverables: [
        "TikTok, Reels & Shorts Native 9:16",
        "Attention-Capturing 3-Second Hooks",
        "Kinetic Typography & Captions",
        "Sound Effects (SFX) & Color Grading",
      ],
      ctaText: "Supercharge Video Reach",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      category: "Creative Direction & Brand Assets",
      description:
        "Comprehensive media assets and brand narratives that elevate your digital authority. We formulate compelling copy, digital marketing materials, and high-impact visual campaigns that drive measurable action.",
      icon: Sparkles,
      accentColor: "from-amber-500 to-rose-500",
      glowColor: "rgba(245, 158, 11, 0.15)",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      deliverables: [
        "Brand Storytelling & Pitch Assets",
        "Social Media Campaign Graphics",
        "Digital Product Design & Lead Magnets",
        "High-Converting Sales & Email Copy",
      ],
      ctaText: "Create Brand Assets",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#030712] overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] ambient-glow-indigo blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] ambient-glow-violet blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Our Agency Expertise
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Four Core Disciplines. <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                One Cohesive Growth Engine.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-base leading-relaxed">
            We don&apos;t just deliver isolated services. We fuse cutting-edge software engineering, global publishing, and magnetic media into scalable digital assets.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 sm:p-10 bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle Hover Gradient Light */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: service.glowColor }}
                />

                <div>
                  {/* Top Header with Icon and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.accentColor} p-[1px] shadow-lg`}
                    >
                      <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center group-hover:bg-opacity-80 transition-all">
                        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${service.badgeBg}`}
                    >
                      {service.category}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300/85 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link / CTA */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white group/btn hover:text-indigo-300 transition-colors"
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
