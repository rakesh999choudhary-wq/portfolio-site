"use client";

import React from "react";
import { PROCESS_STEPS } from "@/data/portfolio-data";
import { GitBranch } from "lucide-react";

export const DesignProcess: React.FC = () => {
  return (
    <section id="process" aria-label="Design Process" className="py-24 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Turn Ambiguity Into High-Velocity Software
          </h2>
          <p className="text-sm text-zinc-400">
            A battle-tested, 5-stage framework refined over 10+ years to de-risk design decisions and guarantee zero code drift.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-zinc-600 group-hover:text-emerald-400 transition-colors mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Deliverable:</span>
                <span className="text-xs font-mono text-emerald-400 font-medium block">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
