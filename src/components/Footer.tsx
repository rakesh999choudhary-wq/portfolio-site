"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp, ShieldCheck } from "lucide-react";

interface FooterProps {
  onOpenAudit: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer aria-label="Site Footer" className="bg-[#05060a] border-t border-white/10 py-12 text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-bold text-white tracking-tight">{PERSONAL_INFO.name}</span>
              <span className="text-zinc-500">• {PERSONAL_INFO.title}</span>
            </div>
            <p className="text-zinc-500 text-[11px] max-w-md">
              Engineered with Next.js 14, Tailwind CSS, TypeScript, and semantic WCAG 2.2 AAA accessibility.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Technical SEO & A11y Audit (100%)</span>
            </button>

            <button
              onClick={onOpenResume}
              className="text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              Curriculum Vitae
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All intellectual property rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="https://figma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              aria-label="Figma Community"
            >
              Figma
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              aria-label="Dribbble Portfolio"
            >
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
