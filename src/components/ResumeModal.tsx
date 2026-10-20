"use client";

import React from "react";
import { PERSONAL_INFO, EXPERIENCE_HISTORY, SKILL_CATEGORIES } from "@/data/portfolio-data";
import { X, Printer, ExternalLink, Award, GraduationCap, Briefcase, Mail, MapPin } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0e1424]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h2 id="resume-modal-title" className="text-sm font-mono text-zinc-200 font-bold uppercase tracking-wider">
              Curriculum Vitae • Elena Vance
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-mono transition-colors"
              title="Print CV or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Print / PDF</span>
            </button>
            <a
              href="/cv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono hover:bg-emerald-500/30 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Page</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close CV preview"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Scrollable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-[#0a0d16] text-zinc-300">
          {/* Header block */}
          <div className="border-b border-white/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-base font-medium text-emerald-400 mt-0.5">{PERSONAL_INFO.title}</p>
                <p className="text-xs text-zinc-400 mt-1 max-w-xl leading-relaxed">{PERSONAL_INFO.tagline}</p>
              </div>
              <div className="text-xs font-mono text-zinc-400 space-y-1 sm:text-right shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="text-emerald-400 font-semibold">{PERSONAL_INFO.availability}</div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Executive Profile (10+ Years UX/UI Leadership)
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
              {PERSONAL_INFO.elevatorPitch}
            </p>
          </div>

          {/* Core Competencies Matrix */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3">
              Core Competencies & Tool Mastery
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-xs font-semibold text-white mb-2">{cat.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-black/40 text-[11px] font-mono text-zinc-300 border border-white/5">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience History */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work History & Track Record
            </h2>
            <div className="space-y-6">
              {EXPERIENCE_HISTORY.map((exp, idx) => (
                <div key={idx} className="relative pl-6 border-l border-emerald-500/30">
                  <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-400 ring-4 ring-[#0a0d16]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-2">{exp.description}</p>
                  <ul className="space-y-1.5 mb-2.5">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">›</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-mono uppercase font-semibold text-white">Education</h3>
              </div>
              <p className="text-xs font-bold text-white">B.S. in Human-Computer Interaction (HCI)</p>
              <p className="text-xs text-zinc-400">Carnegie Mellon University • Magna Cum Laude</p>
              <p className="text-[11px] text-zinc-500 mt-1">Focus on Cognitive Ergonomics, Human Factors & Interface Semantics</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xs font-mono uppercase font-semibold text-white">Awards & Recognition</h3>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Red Dot Award: Best Interface Design (2024)</li>
                <li>• 2x Webby Honoree: Technical Achievement & UX (2022, 2020)</li>
                <li>• Awwwards Site of the Day: Enterprise Fintech (2023)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
