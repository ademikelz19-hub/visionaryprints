"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Amazon KDP Book (Publishing & Artwork)",
    audience: "10k - 50k Followers",
    budget: "$2,500 - $5,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = "visionarysites@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Creator Project Inquiry from ${formData.name}: ${formData.service}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nAudience Range: ${formData.audience}\nBudget Range: ${formData.budget}\n\nProject Scope & Vision:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 relative bg-[#020617] overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/15 to-cyan-500/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Pitch */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Let&apos;s Build Your Product</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Launch Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                Digital or KDP Product?
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300/90 leading-relaxed">
              Whether you have 500k followers or are building your first digital asset from scratch, we build the custom storefront, Amazon KDP book, and viral media funnels to turn attention into income.
            </p>

            {/* Direct Contact Cards */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Creator Inquiries</div>
                    <div className="text-sm font-bold text-white select-all">{contactEmail}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Global Studio</div>
                  <div className="text-sm font-bold text-white">Lagos, Nigeria • Worldwide Creator Delivery</div>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Turnaround Time</div>
                  <div className="text-sm font-bold text-white">Strategy Response Within 24 Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl">
              {submitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Creator Inquiry Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Thank you for reaching out to Visionary Prints. Our lead product strategist will review your concept and reply with a tailored roadmap within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    Submit Another Concept
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Creator / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Media or John Doe"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="creator@example.com"
                        className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Product Type Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Amazon KDP Book (Publishing & Artwork)">Amazon KDP Book (Design & Publishing)</option>
                        <option value="Custom Digital Product Storefront (Next.js)">Custom Digital Storefront (Next.js/React)</option>
                        <option value="Short-Form Video Traffic Funnel">Short-Form Video & Traffic Funnel</option>
                        <option value="Digital Product Packaging (E-Book/Workbook)">Digital Product Packaging (E-Book/Workbook)</option>
                        <option value="End-to-End Creator Launch Partnership">Full Creator Product Launch (End-to-End)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Audience / Following
                      </label>
                      <select
                        value={formData.audience}
                        onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      >
                        <option value="Just Getting Started / Under 5k">Just Getting Started / Under 5k</option>
                        <option value="5k - 25k Followers / Subscribers">5k - 25k Followers / Subscribers</option>
                        <option value="25k - 100k Followers / Subscribers">25k - 100k Followers / Subscribers</option>
                        <option value="100k+ Established Audience">100k+ Established Audience</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Tell Us About Your Product Idea or Vision *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="What kind of product or book do you want to build? Tell us about your niche, goals, and timeline..."
                      className="w-full bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Product Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-400 mt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Your intellectual property and concepts are strictly confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
