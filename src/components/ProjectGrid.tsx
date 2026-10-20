"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolio-data";
import { ProjectMockup } from "./ProjectMockup";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Enterprise SaaS", "AI & Tooling", "Design Systems", "Fintech & Web3"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 relative bg-[#07080c]">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Portfolio & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Crafted for Scale. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Validated by Data.
              </span>
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed">
              A curated selection of mission-critical systems, AI canvases, and enterprise platforms engineered over the past decade. Each project balances deep human factors with scalable token architectures.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1.5 rounded-xl bg-[#0d121e] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
                {cat === "All" && ` (${PROJECTS.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const isEmerald = project.accentColor === "emerald";
            const isCyan = project.accentColor === "cyan";
            const isViolet = project.accentColor === "violet";

            const borderHoverClass = isEmerald
              ? "group-hover:border-emerald-500/50 group-hover:shadow-emerald-950/40"
              : isCyan
              ? "group-hover:border-cyan-500/50 group-hover:shadow-cyan-950/40"
              : isViolet
              ? "group-hover:border-violet-500/50 group-hover:shadow-violet-950/40"
              : "group-hover:border-amber-500/50 group-hover:shadow-amber-950/40";

            const accentBadgeClass = isEmerald
              ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
              : isCyan
              ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
              : isViolet
              ? "bg-violet-500/15 text-violet-300 border-violet-500/30"
              : "bg-amber-500/15 text-amber-300 border-amber-500/30";

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group relative rounded-2xl bg-[#0c101a] border border-white/10 p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${borderHoverClass}`}
              >
                {/* Visual Interface Preview with Hover Zoom */}
                <div className="relative w-full h-52 sm:h-56 rounded-xl overflow-hidden mb-5 border border-white/10 bg-[#080c14] group-hover:border-white/20 transition-all">
                  <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-500">
                    <ProjectMockup type={project.previewType} accentColor={project.accentColor} />
                  </div>

                  {/* Hover Overlay Pill */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0c101a]/95 text-white text-xs font-mono border border-emerald-400/50 shadow-xl">
                      <span>Inspect Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] border ${accentBadgeClass}`}>
                        {project.category}
                      </span>
                      <span className="font-mono text-zinc-500 text-[11px]">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>

                    <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-2">{project.tagline}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Impact Stats Grid inside Card */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 mt-4">
                    {project.impactMetrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/5">
                        <span className="text-[10px] font-mono text-zinc-400 block">{metric.label}</span>
                        <span className="text-sm font-bold font-mono text-emerald-400 block mt-0.5">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Role Footnote */}
                  <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Client: {project.client}</span>
                    <span className="text-emerald-400/80 group-hover:underline">Deep-Dive →</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
