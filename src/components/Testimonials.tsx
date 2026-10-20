"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/portfolio-data";
import { Quote, MessageSquare } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section aria-label="Client Testimonials" className="py-24 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Product Leaders & Engineering Directors
          </h2>
          <p className="text-sm text-zinc-400">
            What cross-functional peers and executive stakeholders have to say about partnering together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-emerald-400 opacity-60" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-3 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center font-mono font-bold text-xs text-emerald-300 shrink-0">
                  {test.avatarInitials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{test.author}</h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {test.role} <span className="text-emerald-400">• {test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
