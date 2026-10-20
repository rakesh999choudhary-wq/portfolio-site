"use client";

import React from "react";

interface ProjectMockupProps {
  type: "canvas-ai" | "trading-terminal" | "design-system" | "healthtech-ehr" | "spatial-3d" | "b2b-procure";
  accentColor?: "emerald" | "cyan" | "violet" | "amber";
  className?: string;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ type, className = "" }) => {
  if (type === "canvas-ai") {
    return (
      <div className={`relative w-full h-full bg-[#0a0d14] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-subtle-grid opacity-60 pointer-events-none" />

        {/* Top bar */}
        <div className="relative flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] text-zinc-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-zinc-300 font-medium">Aether Graph v2.4</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 font-mono text-[9px]">
              Tokens: 1,420 / 4,000
            </span>
            <span className="text-zinc-500 font-mono text-[9px]">Latent: 0.84</span>
          </div>
        </div>

        {/* Node graph representation */}
        <div className="relative grid grid-cols-12 gap-2 h-44 items-center">
          {/* Node 1: Input / Prompt */}
          <div className="col-span-4 bg-[#111624] border border-white/15 rounded-md p-2 shadow-lg">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">Prompt Node</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="h-1.5 w-full bg-zinc-700/60 rounded mb-1" />
            <div className="h-1.5 w-3/4 bg-zinc-700/60 rounded mb-2" />
            <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[8px] text-zinc-400">
              <span>Temp: 0.7</span>
              <span className="text-emerald-400 font-mono">Ready</span>
            </div>
          </div>

          {/* Connection line & pulse */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-400 relative">
              <span className="absolute -top-1 right-0 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
            </div>
          </div>

          {/* Node 2: Latent Diffusion Matrix */}
          <div className="col-span-4 bg-[#131b2e] border border-cyan-500/40 rounded-md p-2 shadow-xl shadow-cyan-950/30">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">Diffusion Engine</span>
              <span className="px-1 py-0.2 bg-cyan-900/60 text-cyan-300 text-[8px] rounded font-mono">50 Steps</span>
            </div>
            {/* Visual waveform/spectrum */}
            <div className="flex items-end gap-1 h-8 bg-[#0a0f1d] rounded p-1 mb-1.5">
              {[40, 75, 55, 90, 60, 85, 95, 45, 80, 70].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-cyan-600 to-emerald-400 rounded-t-sm"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="text-[8px] text-zinc-400 flex justify-between font-mono">
              <span>CFG Scale: 7.5</span>
              <span className="text-cyan-300">GPU: 94%</span>
            </div>
          </div>

          {/* Connection line */}
          <div className="col-span-1 flex items-center justify-center">
            <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400" />
          </div>

          {/* Node 3: Synthesized Output Tile */}
          <div className="col-span-2 bg-[#111624] border border-emerald-500/40 rounded-md p-1.5 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-purple-500/30 border border-emerald-400/40 flex items-center justify-center mb-1">
              <span className="text-[10px] text-emerald-300 font-mono">4K</span>
            </div>
            <span className="text-[8px] text-zinc-300 font-medium">Output</span>
            <span className="text-[7px] text-emerald-400 font-mono">380ms</span>
          </div>
        </div>

        {/* Bottom micro timeline */}
        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-zinc-400">
          <span>Latent Vector: [-0.42, 0.98, +1.14]</span>
          <span className="text-emerald-400">FPS: 60.0 • Latency: 12ms</span>
        </div>
      </div>
    );
  }

  if (type === "trading-terminal") {
    return (
      <div className={`relative w-full h-full bg-[#080c14] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
        {/* Header ticker bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-zinc-200 font-bold tracking-wider">BTC / USD PERP</span>
            <span className="text-emerald-400 font-semibold">$94,280.50</span>
            <span className="text-emerald-400 bg-emerald-950/70 px-1 rounded text-[8px]">+4.18%</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>24h Vol: $4.2B</span>
            <span className="text-cyan-400">Spread: $0.10</span>
          </div>
        </div>

        {/* Main trading desk grid */}
        <div className="grid grid-cols-12 gap-2 h-44">
          {/* Candlestick chart simulation */}
          <div className="col-span-8 bg-[#0d1322] border border-white/10 rounded p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400 mb-1">
              <span>1m • High: 94,420 • Low: 93,890</span>
              <span className="text-cyan-400">EMA(9, 21) Cross</span>
            </div>
            {/* SVG Candles */}
            <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 80">
              <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
              <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />
              <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 2" />

              {/* Candles */}
              {[
                { x: 10, y: 45, h: 18, wickY1: 38, wickY2: 68, bull: true },
                { x: 26, y: 40, h: 12, wickY1: 32, wickY2: 56, bull: false },
                { x: 42, y: 35, h: 22, wickY1: 28, wickY2: 62, bull: true },
                { x: 58, y: 30, h: 15, wickY1: 22, wickY2: 50, bull: true },
                { x: 74, y: 38, h: 10, wickY1: 30, wickY2: 54, bull: false },
                { x: 90, y: 26, h: 26, wickY1: 18, wickY2: 58, bull: true },
                { x: 106, y: 22, h: 14, wickY1: 16, wickY2: 42, bull: true },
                { x: 122, y: 28, h: 8, wickY1: 24, wickY2: 40, bull: false },
                { x: 138, y: 18, h: 24, wickY1: 10, wickY2: 48, bull: true },
                { x: 154, y: 14, h: 18, wickY1: 8, wickY2: 36, bull: true },
                { x: 170, y: 20, h: 10, wickY1: 15, wickY2: 32, bull: false },
                { x: 186, y: 12, h: 22, wickY1: 6, wickY2: 38, bull: true },
              ].map((c, i) => (
                <g key={i}>
                  <line
                    x1={c.x + 4}
                    y1={c.wickY1}
                    x2={c.x + 4}
                    y2={c.wickY2}
                    stroke={c.bull ? "#10b981" : "#ef4444"}
                    strokeWidth="1"
                  />
                  <rect
                    x={c.x}
                    y={c.y}
                    width="8"
                    height={c.h}
                    rx="1"
                    fill={c.bull ? "#10b981" : "#ef4444"}
                    opacity="0.9"
                  />
                </g>
              ))}

              {/* Moving Average Line */}
              <path
                d="M 14 55 Q 50 42, 90 32 T 186 16"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span className="text-zinc-500">Vol: 18,410 BTC</span>
              <span className="text-emerald-400 font-bold">RSI(14): 63.4</span>
            </div>
          </div>

          {/* Order depth book */}
          <div className="col-span-4 bg-[#0d1322] border border-white/10 rounded p-1.5 flex flex-col justify-between font-mono text-[8px]">
            <div className="text-zinc-400 font-semibold mb-1 flex justify-between border-b border-white/5 pb-0.5">
              <span>Price</span>
              <span>Size</span>
            </div>
            {/* Asks (Red) */}
            <div className="space-y-0.5">
              <div className="flex justify-between text-rose-400 bg-rose-950/20 px-1 rounded">
                <span>94,284.0</span>
                <span>2.41</span>
              </div>
              <div className="flex justify-between text-rose-400 bg-rose-950/30 px-1 rounded">
                <span>94,282.5</span>
                <span>4.18</span>
              </div>
            </div>
            {/* Current Price Marker */}
            <div className="py-0.5 px-1 bg-white/5 rounded text-center text-zinc-200 font-bold text-[9px] my-0.5">
              94,280.50
            </div>
            {/* Bids (Green) */}
            <div className="space-y-0.5">
              <div className="flex justify-between text-emerald-400 bg-emerald-950/30 px-1 rounded">
                <span>94,279.0</span>
                <span>5.92</span>
              </div>
              <div className="flex justify-between text-emerald-400 bg-emerald-950/20 px-1 rounded">
                <span>94,277.5</span>
                <span>3.05</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer trigger */}
        <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono">
          <span className="text-zinc-400">Two-Step Safety Trigger: <span className="text-emerald-400">Armed</span></span>
          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded font-bold">
            Execute Limit [Enter]
          </span>
        </div>
      </div>
    );
  }

  if (type === "design-system") {
    return (
      <div className={`relative w-full h-full bg-[#0a0d16] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
        {/* Token inspector header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded bg-violet-500" />
            <span className="text-zinc-200 font-bold">Prism Token Engine</span>
            <span className="text-zinc-500">v4.8.0</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-500/30 text-[8px]">
            WCAG AAA • 100%
          </span>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-12 gap-2 h-44">
          {/* Swatches & Semantic Tokens */}
          <div className="col-span-6 bg-[#111728] border border-white/10 rounded p-2 flex flex-col justify-between">
            <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Semantic Color Tokens
            </span>
            <div className="grid grid-cols-4 gap-1.5 my-1">
              <div className="h-8 rounded bg-[#10b981] flex flex-col justify-end p-1 text-[7px] font-mono text-zinc-950 font-bold">
                $brand-500
              </div>
              <div className="h-8 rounded bg-[#06b6d4] flex flex-col justify-end p-1 text-[7px] font-mono text-zinc-950 font-bold">
                $cyan-400
              </div>
              <div className="h-8 rounded bg-[#8b5cf6] flex flex-col justify-end p-1 text-[7px] font-mono text-white font-bold">
                $violet-500
              </div>
              <div className="h-8 rounded bg-[#1f293d] border border-white/20 flex flex-col justify-end p-1 text-[7px] font-mono text-zinc-300 font-bold">
                $surface-800
              </div>
            </div>
            <div className="text-[8px] font-mono text-zinc-400 bg-white/5 p-1 rounded">
              <code>color.intent.primary = #10B981</code>
            </div>
          </div>

          {/* Interactive Component Matrix */}
          <div className="col-span-6 bg-[#111728] border border-white/10 rounded p-2 flex flex-col justify-between">
            <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Button Component Variants
            </span>
            <div className="space-y-1.5 my-1">
              <div className="w-full py-1 px-2 rounded bg-emerald-500 text-zinc-950 font-bold text-[8px] flex items-center justify-between shadow-sm">
                <span>Primary Solid</span>
                <span className="text-[7px] font-mono uppercase bg-emerald-950/30 px-1 rounded">default</span>
              </div>
              <div className="w-full py-1 px-2 rounded bg-white/5 border border-white/20 text-zinc-200 text-[8px] flex items-center justify-between">
                <span>Secondary Outline</span>
                <span className="text-[7px] font-mono text-zinc-400">hover</span>
              </div>
              <div className="w-full py-1 px-2 rounded bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[8px] flex items-center justify-between">
                <span>Accent Ghost</span>
                <span className="text-[7px] font-mono text-violet-400">active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sync status */}
        <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-zinc-400">
          <span>Synced: Figma ↔ GitHub Action</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            0 Drift Detected
          </span>
        </div>
      </div>
    );
  }

  if (type === "healthtech-ehr") {
    return (
      <div className={`relative w-full h-full bg-[#070d16] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
        {/* Patient header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center font-mono text-emerald-300 font-bold text-[9px]">
              JD
            </div>
            <div>
              <span className="text-zinc-100 font-bold">John Doe, 58M</span>
              <span className="text-zinc-500 font-mono ml-2">MRN: 884-291</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 font-mono text-[8px] font-bold">
            Triage: STABLE
          </span>
        </div>

        {/* Clinical vitals & ECG */}
        <div className="grid grid-cols-12 gap-2 h-44">
          {/* Real-time ECG wave & Vitals */}
          <div className="col-span-8 bg-[#0c1626] border border-white/10 rounded p-2 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>ECG Lead II (Continuous)</span>
              <span className="text-emerald-400 font-bold">HR: 72 BPM</span>
            </div>

            {/* Simulated ECG wave */}
            <svg className="w-full h-16" viewBox="0 0 200 50">
              <path
                d="M 0 25 L 30 25 L 35 24 L 40 26 L 45 25 L 50 25 L 53 10 L 56 42 L 59 20 L 62 25 L 75 25 L 85 22 L 95 25 L 120 25 L 123 10 L 126 42 L 129 20 L 132 25 L 145 25 L 155 22 L 165 25 L 190 25 L 193 10 L 196 42 L 199 20 L 200 25"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="grid grid-cols-3 gap-1 pt-1 border-t border-white/5 text-[8px] font-mono text-center">
              <div className="bg-white/5 p-1 rounded">
                <span className="text-zinc-400 block text-[7px]">BP (mmHg)</span>
                <span className="text-zinc-200 font-bold">120 / 78</span>
              </div>
              <div className="bg-white/5 p-1 rounded">
                <span className="text-zinc-400 block text-[7px]">SpO2</span>
                <span className="text-cyan-300 font-bold">99%</span>
              </div>
              <div className="bg-white/5 p-1 rounded">
                <span className="text-zinc-400 block text-[7px]">Temp</span>
                <span className="text-zinc-200 font-bold">98.6°F</span>
              </div>
            </div>
          </div>

          {/* Active Orders & Safe Prescribing */}
          <div className="col-span-4 bg-[#0c1626] border border-white/10 rounded p-1.5 flex flex-col justify-between font-mono text-[8px]">
            <span className="text-zinc-400 font-semibold uppercase text-[7px]">Med Reconciliation</span>
            <div className="space-y-1">
              <div className="p-1 rounded bg-white/5 border-l-2 border-emerald-400 text-zinc-300">
                <div className="font-bold text-[8px]">Amoxicillin</div>
                <div className="text-[7px] text-zinc-400">500mg PO TID</div>
              </div>
              <div className="p-1 rounded bg-white/5 border-l-2 border-cyan-400 text-zinc-300">
                <div className="font-bold text-[8px]">Saline IV</div>
                <div className="text-[7px] text-zinc-400">100ml / hr</div>
              </div>
            </div>
            <div className="p-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-[7px] text-center">
              ✓ 0 Contraindications
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-zinc-400">
          <span>Chart Status: Verified by Dr. Reynolds</span>
          <span className="text-emerald-400 font-bold">One-Tap Order Ready</span>
        </div>
      </div>
    );
  }

  if (type === "spatial-3d") {
    return (
      <div className={`relative w-full h-full bg-[#080b12] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
        {/* 3D Viewport header */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-zinc-200 font-bold">Kroma Viewport 3D</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Mesh: 48.2k Poly</span>
            <span className="text-cyan-400">WebGL 2.0</span>
          </div>
        </div>

        {/* Spatial 3D canvas viewport */}
        <div className="relative h-44 bg-[#0d1424] border border-white/10 rounded flex items-center justify-center overflow-hidden">
          {/* Subtle grid floor */}
          <div className="absolute inset-0 bg-subtle-grid opacity-30" />

          {/* 3D Wireframe Mesh Graphic */}
          <svg className="w-32 h-32 relative z-10" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="meshGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
            {/* Isometric wireframe cube / sphere */}
            <polygon points="60,20 100,42 60,65 20,42" fill="none" stroke="url(#meshGrad)" strokeWidth="1.5" />
            <polygon points="20,42 60,65 60,105 20,82" fill="none" stroke="url(#meshGrad)" strokeWidth="1.5" />
            <polygon points="100,42 60,65 60,105 100,82" fill="none" stroke="url(#meshGrad)" strokeWidth="1.5" />

            {/* Inner diagonal mesh wires */}
            <line x1="60" y1="20" x2="60" y2="65" stroke="rgba(6,182,212,0.4)" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="20" y1="42" x2="100" y2="42" stroke="rgba(6,182,212,0.4)" strokeWidth="1" strokeDasharray="2 2" />

            {/* Spatial Axis Gizmo at center */}
            <circle cx="60" cy="65" r="3" fill="#ffffff" />
            <line x1="60" y1="65" x2="60" y2="45" stroke="#ef4444" strokeWidth="2" /> {/* Y Axis */}
            <line x1="60" y1="65" x2="80" y2="75" stroke="#10b981" strokeWidth="2" /> {/* X Axis */}
            <line x1="60" y1="65" x2="40" y2="75" stroke="#3b82f6" strokeWidth="2" /> {/* Z Axis */}
          </svg>

          {/* Floating HUD controls on top right */}
          <div className="absolute top-2 right-2 bg-[#080d18]/90 border border-white/10 rounded p-1.5 text-[8px] font-mono text-zinc-300 space-y-1">
            <div className="flex justify-between gap-2">
              <span className="text-zinc-500">Roughness:</span>
              <span className="text-cyan-400">0.24</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-zinc-500">Metallic:</span>
              <span className="text-emerald-400">0.85</span>
            </div>
          </div>
        </div>

        {/* Footer toolbar */}
        <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-zinc-400">
          <span>Camera: Orbit [Alt + Drag]</span>
          <span className="text-cyan-400 font-bold">Real-time Raytracing: ON</span>
        </div>
      </div>
    );
  }

  // Fallback: b2b-procure
  return (
    <div className={`relative w-full h-full bg-[#0a0d14] rounded-lg p-3 overflow-hidden select-none border border-white/10 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[9px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded bg-amber-400" />
          <span className="text-zinc-200 font-bold">Chronos B2B Wholesale Engine</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/30 text-[8px] font-bold">
          PO #8841-EU • Approved
        </span>
      </div>

      {/* Bulk Matrix Table */}
      <div className="h-44 bg-[#0e1422] border border-white/10 rounded p-2 flex flex-col justify-between font-mono text-[8px]">
        <div className="grid grid-cols-12 pb-1 border-b border-white/10 text-zinc-500 uppercase tracking-wider font-semibold text-[7px]">
          <span className="col-span-5">Item / SKU</span>
          <span className="col-span-2 text-right">Qty</span>
          <span className="col-span-2 text-right">Unit ($)</span>
          <span className="col-span-3 text-right">Total ($)</span>
        </div>

        <div className="space-y-1 my-1">
          <div className="grid grid-cols-12 py-1 px-1 bg-white/5 rounded text-zinc-300 items-center">
            <span className="col-span-5 font-medium truncate">Titanium Fasteners (M8)</span>
            <span className="col-span-2 text-right text-zinc-400">5,000</span>
            <span className="col-span-2 text-right">$4.20</span>
            <span className="col-span-3 text-right text-emerald-400 font-bold">$21,000</span>
          </div>
          <div className="grid grid-cols-12 py-1 px-1 bg-white/5 rounded text-zinc-300 items-center">
            <span className="col-span-5 font-medium truncate">Optic Sensors (Laser-X)</span>
            <span className="col-span-2 text-right text-zinc-400">1,200</span>
            <span className="col-span-2 text-right">$14.50</span>
            <span className="col-span-3 text-right text-emerald-400 font-bold">$17,400</span>
          </div>
          <div className="grid grid-cols-12 py-1 px-1 bg-white/5 rounded text-zinc-300 items-center">
            <span className="col-span-5 font-medium truncate">Shielded Flex Cabling</span>
            <span className="col-span-2 text-right text-zinc-400">800m</span>
            <span className="col-span-2 text-right">$12.00</span>
            <span className="col-span-3 text-right text-emerald-400 font-bold">$9,600</span>
          </div>
        </div>

        <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px]">
          <span className="text-zinc-400">Gross Procurement Total:</span>
          <span className="text-amber-400 font-bold text-[10px]">$48,000.00 USD</span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[8px] font-mono text-zinc-400">
        <span>Multi-Entity Split: 3 Cost Centers</span>
        <span className="text-emerald-400">2-Day Cycle • Zero Friction</span>
      </div>
    </div>
  );
};
