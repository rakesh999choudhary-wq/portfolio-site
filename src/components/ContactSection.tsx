"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import confetti from "canvas-confetti";
import { Mail, Copy, Check, Send, Sparkles, Clock, MapPin, Calendar } from "lucide-react";

interface ContactSectionProps {
  initialProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialProject }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: initialProject || "Enterprise SaaS Redesign",
    budget: "$30k - $60k",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const projectTypes = [
    "Enterprise SaaS Redesign",
    "Design System Architecture",
    "Generative AI UX",
    "Advisory / Staff Leadership",
    "UX Heuristic Audit",
  ];

  const budgetRanges = [
    "$15k — $30k",
    "$30k — $60k",
    "$60k — $120k+",
    "Staff / Executive Advisory",
  ];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please provide your full name.";
    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please include a brief overview of your scope (min 10 characters).";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#10b981", "#06b6d4", "#34d399", "#ffffff"],
        });
      } catch {
        // Confetti fallback
      }
    }, 700);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="py-24 relative bg-[#07080c] border-t border-white/5">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Direct Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to Solve{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Hard Design Problems?
              </span>
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Whether you need to scale an enterprise design system, redesign a complex SaaS data platform, or explore design advisory for your AI startup, I bring 10+ years of proven UX rigor to the table.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-2xl bg-[#0c101a] border border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase text-zinc-400 font-semibold block">
                Direct Email (Fastest Response)
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 select-all truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Availability & Location metadata */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono text-zinc-400">
              <div className="p-3.5 rounded-xl bg-[#0c101a] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Response Time</span>
                </div>
                <p className="text-zinc-300 text-[11px]">&lt; 12 hours response guarantee</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0c101a] border border-white/10 space-y-1">
                <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>HQ & Timezone</span>
                </div>
                <p className="text-zinc-300 text-[11px]">San Francisco, CA (PST)</p>
              </div>
            </div>

            {/* Booking Call Link */}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.socials.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Prefer to schedule a 30-min strategy call directly? Check availability →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c101a] border border-white/15 shadow-2xl relative">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Received</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="text-emerald-400 font-medium">{formData.name}</span>. I have received your inquiry regarding <span className="text-white font-medium">{formData.projectType}</span> and will review your specifications within 12 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          projectType: "Enterprise SaaS Redesign",
                          budget: "$30k - $60k",
                          message: "",
                        });
                      }}
                      className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-mono transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-lg font-bold text-white">Project Inquiry Form</h3>
                    <p className="text-xs text-zinc-400 font-mono mt-0.5">
                      Fill out the parameters below to initiate an engagement discussion.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-zinc-300 font-medium block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#080c14] border ${
                          errors.name ? "border-rose-500" : "border-white/15"
                        } text-sm text-white placeholder-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-all`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-400 font-mono">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-zinc-300 font-medium block">
                        Work Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#080c14] border ${
                          errors.email ? "border-rose-500" : "border-white/15"
                        } text-sm text-white placeholder-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-all`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 font-mono">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300 font-medium block">
                      Engagement Scope
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            formData.projectType === type
                              ? "bg-emerald-500 text-zinc-950 font-bold border border-emerald-400 shadow-sm"
                              : "bg-[#080c14] text-zinc-400 border border-white/10 hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-300 font-medium block">
                      Estimated Project Investment
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`px-2.5 py-2 rounded-lg text-[11px] font-mono text-center transition-all ${
                            formData.budget === b
                              ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-bold"
                              : "bg-[#080c14] text-zinc-400 border border-white/10 hover:border-white/20"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-zinc-300 font-medium block">
                      Project Goals & Context *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Describe your product challenges, current stage, desired timeline, or system goals..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#080c14] border ${
                        errors.message ? "border-rose-500" : "border-white/15"
                      } text-sm text-white placeholder-zinc-600 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400 transition-all`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 font-mono">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Transmit Engagement Brief</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[11px] font-mono text-zinc-500 text-center">
                    Strict NDA honored. Your product concepts and data remain confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
