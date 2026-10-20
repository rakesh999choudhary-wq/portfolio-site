"use client";

import React, { useEffect, useState } from "react";
import { Project } from "@/data/portfolio-data";
import { ProjectMockup } from "./ProjectMockup";
import { X, CheckCircle2, ArrowRight, Layers, Lightbulb, Target, Sparkles } from "lucide-react";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: (projectName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<"overview" | "research" | "system" | "impact">("overview");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-6 py-5 border-b border-white/10 flex items-start justify-between bg-[#0e1424]/90 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                {project.category}
              </span>
              <span className="text-xs text-zinc-400 font-mono">• {project.client}</span>
              <span className="text-xs text-zinc-500 font-mono">• {project.year}</span>
              <span className="text-xs text-zinc-400 font-mono bg-white/5 px-2 py-0.5 rounded">
                Role: {project.role}
              </span>
            </div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-zinc-400 mt-0.5">{project.tagline}</p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:ring-2 focus:ring-emerald-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Impact Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-6 py-3 bg-[#080c14] border-b border-white/10 text-xs">
          {project.impactMetrics.map((metric, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-zinc-500 text-[11px] font-mono">{metric.label}</span>
              <span className="text-lg font-bold font-mono text-emerald-400">{metric.value}</span>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 px-6 bg-[#0a0f1d] text-xs font-medium">
          {[
            { id: "overview", label: "Overview & Mockup", icon: Sparkles },
            { id: "research", label: "Problem & Research", icon: Target },
            { id: "system", label: "Design System & UI", icon: Layers },
            { id: "impact", label: "Outcomes & Deliverables", icon: CheckCircle2 },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "overview" | "research" | "system" | "impact")}
                className={`flex items-center gap-2 py-3 px-3 border-b-2 font-mono transition-colors ${
                  isActive
                    ? "border-emerald-400 text-white font-semibold"
                    : "border-transparent text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-zinc-300">
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* High-fidelity interactive mockup illustration */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                    Interactive Interface Preview & Architecture
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">WCAG 2.2 AAA Verified</span>
                </div>
                <div className="h-64 sm:h-72 w-full rounded-xl overflow-hidden border border-white/15 shadow-xl">
                  <ProjectMockup type={project.previewType} accentColor={project.accentColor} />
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-white mb-2">Executive Summary</h3>
                <p className="leading-relaxed text-zinc-300">{project.summary}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5" /> Core Challenge
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">{project.problem}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-xs font-mono text-cyan-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Deployed Solution
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "research" && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-cyan-950/30 border border-emerald-500/20">
                <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-emerald-400" />
                  Contextual User Discovery & Usability Labs
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Before formulating visual artifacts, I conducted rigorous discovery sprints to understand the cognitive friction within user mental models and workflows.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Key Research Insights & Breakthroughs
                </h4>
                <div className="space-y-3">
                  {project.researchInsights.map((insight, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-zinc-200 leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#090d18] border border-white/10">
                <h4 className="text-xs font-mono uppercase text-zinc-400 font-semibold mb-2">
                  UX Artifacts Generated
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Contextual Inquiry Logs", "Cognitive Task Analysis", "Jobs-To-Be-Done Matrices", "Behavioral Heatmaps", "Affinity Diagrams", "Information Architecture Trees"].map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs text-zinc-300 font-mono">
                      ✓ {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Design System & Component Architecture</h3>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                  Every product was anchored in a tokenized, mathematically sound design system engineered to scale seamlessly across screen densities and prevent code drift.
                </p>
              </div>

              <div className="space-y-3">
                {project.systemHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <Layers className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-white block">System Pillar {idx + 1}</span>
                      <p className="text-xs text-zinc-300 leading-relaxed mt-0.5">{highlight}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#080d16] border border-violet-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-violet-300 font-semibold">Token Architecture Integration</span>
                  <span className="text-[10px] font-mono text-zinc-400">Figma Variables → Style Dictionary → Tailwind</span>
                </div>
                <div className="bg-[#05080f] p-3 rounded-lg font-mono text-[11px] text-zinc-300 space-y-1">
                  <div className="text-emerald-400">{"// Semantic Token Mapping Example"}</div>
                  <div>{"--ds-surface-elevated: rgba(17, 22, 36, 0.95);"}</div>
                  <div>{"--ds-border-interactive: rgba(16, 185, 129, 0.35);"}</div>
                  <div>{"--ds-motion-transition: 200ms cubic-bezier(0.16, 1, 0.3, 1);"}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "impact" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-white mb-2">Business & User Impact Outcomes</h3>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Design efficacy is measured through real-world business velocity, error reduction, and sustained customer retention.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {project.impactMetrics.map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/20 to-white/5 border border-emerald-500/20">
                    <span className="text-2xl font-bold font-mono text-emerald-400 block mb-0.5">{metric.value}</span>
                    <span className="text-xs font-semibold text-white block">{metric.label}</span>
                    <span className="text-[11px] text-zinc-400 block mt-1">Verified post-launch analytics</span>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Production Deliverables Handed to Engineering
                </h4>
                <div className="space-y-2">
                  {project.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/10 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#090d16] flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenContact(project.title);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-lg shadow-emerald-500/20"
          >
            <span>Discuss similar project with Elena</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Close preview [Esc]
          </button>
        </div>
      </div>
    </div>
  );
};
