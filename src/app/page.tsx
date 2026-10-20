"use client";

import React, { useState } from "react";
import { Project } from "@/data/portfolio-data";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { AboutSection } from "@/components/AboutSection";
import { DesignProcess } from "@/components/DesignProcess";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { SeoAuditModal } from "@/components/SeoAuditModal";
import { ResumeModal } from "@/components/ResumeModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAuditOpen, setIsAuditOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [inquiryTargetProject, setInquiryTargetProject] = useState<string | undefined>(undefined);

  const handleOpenContactForProject = (projectName?: string) => {
    setInquiryTargetProject(projectName);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-zinc-100 flex flex-col selection:bg-emerald-500/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* Full-screen Hero with Name & Tagline */}
        <Hero
          onOpenAudit={() => setIsAuditOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Project Showcase Grid with Hover Effects */}
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* About Section with Skills & 10+ Years History */}
        <AboutSection />

        {/* Design Process & Methodology */}
        <DesignProcess />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* Interactive Contact Form */}
        <ContactSection initialProject={inquiryTargetProject} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAudit={() => setIsAuditOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContactForProject}
      />

      {/* Interactive SEO & Performance Audit Inspector */}
      <SeoAuditModal
        isOpen={isAuditOpen}
        onClose={() => setIsAuditOpen(false)}
      />

      {/* Interactive CV / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
