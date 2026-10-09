"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  BookOpen,
  Star,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Layers,
  Heart,
  Globe2,
} from "lucide-react";

export default function Publications() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const publications = [
    {
      id: "roro-and-dodo",
      title: "Roro and Dodo Tales",
      subtitle: "A Children's Coloring and Activity Book",
      badge: "Bestselling Children's Book",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      description:
        "Step into the magical, heartwarming world of Roro and Dodo! Created specifically to nurture artistic expression and cognitive agility, this book is filled with playful character storylines, engaging coloring sheets, dot-to-dot challenges, and sensory puzzles that keep young minds captivated.",
      features: [
        "Interactive coloring & cognitive activity pages",
        "Encourages creative thinking, motor skills & storytelling",
        "Large 8.5 x 11 format ideal for little hands",
        "Premium bleed-resistant paper layout for Amazon KDP Print",
      ],
      ageRange: "Ages 3 - 9",
      format: "Paperback & Activity Edition",
      rating: 5.0,
      reviewsCount: 38,
      coverImage: "/images/roro-and-dodo-cover.png",
      amazonHref: "#", // User can replace with real Amazon URL
      accentGradient: "from-amber-400 via-rose-400 to-indigo-500",
      borderColor: "hover:border-amber-500/40",
    },
    {
      id: "eye-bible",
      title: "EYE BIBLE",
      subtitle: "The Visual Scripture & Interactive Brain Activity Book",
      badge: "Inspirational & Interactive",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
      description:
        "The EYE BIBLE revolutionizes scripture engagement for the modern generation. Fusing faith-inspired wisdom with observation puzzles, visual word searches, intricate seek-and-find illustrations, and mindfulness exercises that stimulate both the spirit and mental clarity.",
      features: [
        "Intricate visual scripture puzzles & hidden illustrations",
        "Boosts cognitive focus, observation acuity & recall",
        "Perfect for individual study, Sunday schools & family devotionals",
        "Specially formatted for Amazon KDP Paperback quality",
      ],
      ageRange: "All Ages / Youth & Adults",
      format: "Paperback Edition",
      rating: 5.0,
      reviewsCount: 42,
      coverImage: "/images/eye-bible-promo.jpeg",
      amazonHref: "#", // User can replace with real Amazon URL
      accentGradient: "from-indigo-400 via-violet-400 to-cyan-400",
      borderColor: "hover:border-indigo-500/40",
    },
  ];

  return (
    <section
      id="publications"
      className="py-24 sm:py-32 relative bg-[#020617] border-y border-slate-800/80 overflow-hidden"
    >
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/15 via-indigo-600/15 to-cyan-500/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider mb-5">
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span>Featured Work • Amazon KDP Publications</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Our Published Works on{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Amazon KDP
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            Visionary Prints authors, designs, formats, and publishes impactful physical and digital books distributed worldwide. Discover our flagship activity and devotional books currently available to readers everywhere.
          </p>
        </div>

        {/* 2 Book Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {publications.map((book) => (
            <div
              key={book.id}
              className={`group relative rounded-3xl bg-slate-900/80 border border-slate-800 p-7 sm:p-9 transition-all duration-300 ${book.borderColor} hover:shadow-2xl hover:shadow-violet-950/50 flex flex-col justify-between`}
            >
              <div>
                {/* Top Badge & Rating Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full border ${book.badgeColor}`}
                  >
                    {book.badge}
                  </span>

                  <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                    <div className="flex items-center text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-white ml-1">
                      {book.rating.toFixed(1)}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      ({book.reviewsCount})
                    </span>
                  </div>
                </div>

                {/* Book Card Core: Visual Cover + Details */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center mb-6">
                  {/* Book Cover Container */}
                  <div className="sm:col-span-5 flex justify-center">
                    <div className="relative w-48 sm:w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 border border-slate-700/60 group-hover:scale-[1.03] transition-transform duration-300 bg-slate-950 flex items-center justify-center">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title} Book Cover`}
                        fill
                        className="object-cover object-center group-hover:opacity-95 transition-opacity"
                        sizes="(max-width: 640px) 192px, 240px"
                      />
                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                      <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold text-slate-200 border border-white/10">
                        Amazon KDP
                      </div>
                    </div>
                  </div>

                  {/* Book Description & Specs */}
                  <div className="sm:col-span-7 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 group-hover:text-indigo-200 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-indigo-400 mb-3">
                      {book.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {book.description}
                    </p>

                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-400 font-medium">
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                        {book.format}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
                        {book.ageRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-slate-950/60 rounded-2xl p-4 sm:p-5 border border-slate-800/80 mb-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Included in this Edition:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {book.features.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Call-To-Action Button: Buy on Amazon */}
              <div className="pt-2">
                <a
                  href={book.amazonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full relative group/btn flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 hover:from-amber-300 hover:to-orange-400 transition-all duration-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transform hover:-translate-y-0.5"
                >
                  <ShoppingBag className="w-5 h-5 text-slate-950" />
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
                <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                  Available in Print-on-Demand Paperback with Amazon Prime Shipping
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Distribution Trust Strip */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Globe2 className="w-6 h-6 text-indigo-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Worldwide Availability</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Distributed on Amazon US, UK, Germany, Canada, and global storefronts.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Layers className="w-6 h-6 text-violet-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Turnkey KDP Publishing</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                We handle ISBNs, interior typography, barcodes, and print proofs end-to-end.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Need Your Book Published?</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Partner with Visionary Prints to turn your manuscript or concept into an Amazon title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
