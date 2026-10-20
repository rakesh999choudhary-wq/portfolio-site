import { Metadata } from "next";
import { PERSONAL_INFO, EXPERIENCE_HISTORY, SKILL_CATEGORIES } from "@/data/portfolio-data";
import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Globe, Award, GraduationCap, Briefcase } from "lucide-react";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Curriculum Vitae | Elena Vance - Staff UI/UX Designer (10+ Yrs Exp)",
  description: "Comprehensive 10+ year curriculum vitae and design leadership record of Elena Vance, Staff UI/UX Designer & Systems Architect.",
  alternates: {
    canonical: "https://elenavance.design/cv",
  },
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-[#07080c] text-zinc-300 py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 no-print">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          <PrintButton />
        </div>

        {/* CV Header */}
        <header className="border-b border-white/15 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-lg font-medium text-emerald-400 font-mono mt-1">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                10+ Years Experience in Enterprise SaaS, AI Platforms & Design Systems
              </p>
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
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>https://elenavance.design</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-300 leading-relaxed">
            <strong className="text-white block mb-1">Executive Summary:</strong>
            {PERSONAL_INFO.elevatorPitch}
          </div>
        </header>

        {/* Core Competencies Matrix */}
        <section aria-labelledby="skills-heading" className="space-y-4">
          <h2 id="skills-heading" className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
            Core Competencies & Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-xs font-bold text-white mb-2">{cat.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-black/40 text-[11px] font-mono text-zinc-300 border border-white/5"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience History */}
        <section aria-labelledby="exp-heading" className="space-y-6 pt-4">
          <h2 id="exp-heading" className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> Professional Experience (10+ Years)
          </h2>

          <div className="space-y-6">
            {EXPERIENCE_HISTORY.map((exp, idx) => (
              <article key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {exp.role} <span className="text-emerald-400">@ {exp.company}</span>
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">{exp.location} • {exp.type}</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30 self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed">{exp.description}</p>

                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">›</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono rounded bg-black/40 text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Recognition */}
        <section className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              <h2 className="text-xs font-mono uppercase font-bold text-white">Education</h2>
            </div>
            <p className="text-xs font-bold text-white">B.S. in Human-Computer Interaction (HCI)</p>
            <p className="text-xs text-zinc-400">Carnegie Mellon University • Magna Cum Laude</p>
            <p className="text-[11px] text-zinc-500">Graduated with Distinction in Perceptual Psychology & Interface Architecture</p>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400">
              <Award className="w-4 h-4" />
              <h2 className="text-xs font-mono uppercase font-bold text-white">Honors & Awards</h2>
            </div>
            <ul className="text-xs text-zinc-300 space-y-1">
              <li>• Red Dot Award: Best of the Best in Interface Design (2024)</li>
              <li>• 2x Webby Honoree: Technical Achievement & UX (2022, 2020)</li>
              <li>• Awwwards Site of the Day: Enterprise Category (2023)</li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>Elena Vance • Curriculum Vitae</span>
          <span>Verified Oct 2026</span>
        </footer>
      </div>
    </main>
  );
}
