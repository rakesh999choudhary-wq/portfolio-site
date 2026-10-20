"use client";

import React, { useState } from "react";
import { SKILL_CATEGORIES, EXPERIENCE_HISTORY, DESIGN_PHILOSOPHY } from "@/data/portfolio-data";
import { Compass, Boxes, GraduationCap, Briefcase, CheckCircle2, Eye, Cpu, HeartHandshake, Zap } from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);

  const getPhilosophyIcon = (name: string) => {
    switch (name) {
      case "Eye":
        return <Eye className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-emerald-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-violet-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="about" aria-label="About and Skills" className="py-24 relative bg-[#07080c] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Top Story & Philosophy Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: 10-Year Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300">
              <Compass className="w-3.5 h-3.5" />
              <span>10+ Years UX Craft & Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Designing Interfaces That Respect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Human Focus.
              </span>
            </h2>

            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-normal">
              <p>
                Over the past decade, I have operated at the intersection where cognitive psychology meets rigorous systems engineering. I don&apos;t just craft pleasing visual surfaces; I de-risk multi-million dollar software investments, dismantle enterprise workflow friction, and construct scalable design systems that developers embrace without friction.
              </p>
              <p>
                From architecting multimodal canvas experiences for generative AI researchers to building institutional fintech trading consoles handling billions in daily flow, my work is rooted in clarity, extreme responsiveness, and strict accessibility standards.
              </p>
              <p className="text-zinc-400 text-xs font-mono">
                Currently advising fast-growth product squads and leading design systems architecture at Apex Cloud Labs.
              </p>
            </div>

            {/* Credentials Callout */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Foundational Background</span>
              </div>
              <p className="text-xs text-zinc-300">
                B.S. in Human-Computer Interaction (HCI) from Carnegie Mellon University. Formally trained in human factors engineering, qualitative behavioral inquiry, and perceptual ergonomics.
              </p>
            </div>
          </div>

          {/* Right: Design Philosophy Cards */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                Guiding Design Principles
              </h3>
              <span className="text-xs font-mono text-emerald-400">4 Core Tenets</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {DESIGN_PHILOSOPHY.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0c101a] border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 w-fit mb-3 group-hover:scale-110 transition-transform">
                    {getPhilosophyIcon(item.iconName)}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: Interactive Skills & Competencies Matrix */}
        <div className="space-y-8 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-2">
                <Boxes className="w-3.5 h-3.5" />
                <span>Deep Domain Expertise</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Skills & Technical Competencies
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400 max-w-md">
              Evaluated across 10+ years of end-to-end design leadership, system governance, and cross-functional engineering execution.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeSkillCategory === idx
                    ? "bg-[#111728] border-emerald-500/60 shadow-lg shadow-emerald-950/40"
                    : "bg-[#0a0d16] border-white/10 hover:border-white/20 text-zinc-400"
                }`}
              >
                <div className="text-xs font-mono text-emerald-400 mb-1">Pillar 0{idx + 1}</div>
                <h3 className="text-sm font-bold text-white mb-1">{cat.title}</h3>
                <p className="text-[11px] text-zinc-400 line-clamp-2">{cat.description}</p>
              </button>
            ))}
          </div>

          {/* Active Skills Detail Panel */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0c101a] border border-white/10">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {SKILL_CATEGORIES[activeSkillCategory].title}
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {SKILL_CATEGORIES[activeSkillCategory].description}
                </p>
              </div>
              <span className="hidden sm:inline px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Staff Proficiency Level
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {SKILL_CATEGORIES[activeSkillCategory].skills.map((skill, sIdx) => (
                <div key={sIdx} className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">{skill.name}</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">{skill.level}%</span>
                  </div>

                  {/* Visual Bar Indicator */}
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skill.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-black/30 text-[10px] font-mono text-zinc-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: 10-Year Career Trajectory Stepper */}
        <div id="experience" className="space-y-8 pt-10 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>10-Year Career Trajectory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Work Experience & Leadership History
              </h2>
            </div>
            <p className="text-xs font-mono text-zinc-400">2014 — Present • San Francisco & Remote</p>
          </div>

          <div className="relative border-l border-white/15 ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8">
            {EXPERIENCE_HISTORY.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Stepper Dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07080c] border-2 border-emerald-400 group-hover:bg-emerald-400 group-hover:scale-125 transition-all shadow-md shadow-emerald-500/30" />

                <div className="p-6 rounded-2xl bg-[#0c101a] border border-white/10 group-hover:border-emerald-500/40 transition-all space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 font-medium">
                        {exp.company} <span className="text-zinc-500">• {exp.location}</span>
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-300 self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
                      Key Milestones & Quantifiable Achievements:
                    </span>
                    {exp.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-zinc-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
