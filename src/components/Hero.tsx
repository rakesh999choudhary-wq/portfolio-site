"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowDown, FileText, ShieldCheck, ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenAudit: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onOpenResume }) => {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#07080c]"
    >
      {/* Ambient background glow highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-emerald-500/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-subtle-grid opacity-35 pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-200">{PERSONAL_INFO.availability}</span>
          </div>

          {/* Designer Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-emerald-400">
                {PERSONAL_INFO.name}
              </span>
              .
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-emerald-400/90 font-mono tracking-tight">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Tagline / Elevator Pitch */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl font-normal">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            {PERSONAL_INFO.elevatorPitch}
          </p>

          {/* CTA Button Group */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              <span>Explore Selected Works</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 border border-white/15 hover:border-emerald-500/40 text-sm font-medium transition-all hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View CV / Resume</span>
            </button>

            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 text-xs font-mono transition-all"
              title="Inspect 100/100 SEO & Core Web Vitals Audit"
            >
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Run Live SEO Audit</span>
              <span className="px-1.5 py-0.5 text-[10px] rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                100%
              </span>
            </button>
          </div>

          {/* Core Competencies Tags */}
          <div className="pt-3 flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-500">Core Toolkit:</span>
            {["Figma Variables", "Design Tokens", "Enterprise SaaS", "Generative AI UX", "WCAG 2.2 AAA", "Tailwind CSS", "DesignOps"].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 hover:border-emerald-500/30 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrics Bar at bottom of Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0c101a]/80 border border-white/10 backdrop-blur-md">
          <div className="space-y-0.5 border-r border-white/10 pr-4 last:border-0">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white flex items-baseline gap-1">
              {PERSONAL_INFO.experienceYears}
              <span className="text-xs font-mono text-emerald-400 font-normal">Years</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">Product & UX Design Experience</p>
          </div>

          <div className="space-y-0.5 border-r border-white/10 pr-4 last:border-0">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white flex items-baseline gap-1">
              {PERSONAL_INFO.shippedProducts}
              <span className="text-xs font-mono text-cyan-400 font-normal">Shipped</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">Production Digital Products</p>
          </div>

          <div className="space-y-0.5 border-r border-white/10 pr-4 last:border-0">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white flex items-baseline gap-1">
              {PERSONAL_INFO.enterpriseImpact}
              <span className="text-xs font-mono text-emerald-400 font-normal">Impact</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">Enterprise Value Influenced</p>
          </div>

          <div className="space-y-0.5">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white flex items-baseline gap-1">
              {PERSONAL_INFO.systemAdoption}
              <span className="text-xs font-mono text-violet-400 font-normal">Adoption</span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">Design System Compliance</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 flex justify-center">
          <a
            href="#projects"
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-emerald-400 transition-colors animate-bounce"
            aria-label="Scroll to projects"
          >
            <span>Scroll to Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
