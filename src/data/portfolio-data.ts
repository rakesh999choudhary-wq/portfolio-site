export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Enterprise SaaS" | "AI & Tooling" | "Design Systems" | "Fintech & Web3";
  client: string;
  year: string;
  role: string;
  impactMetrics: { label: string; value: string }[];
  summary: string;
  problem: string;
  researchInsights: string[];
  solution: string;
  systemHighlights: string[];
  deliverables: string[];
  accentColor: "emerald" | "cyan" | "violet" | "amber";
  previewType: "canvas-ai" | "trading-terminal" | "design-system" | "healthtech-ehr" | "spatial-3d" | "b2b-procure";
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; tags: string[] }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export const PERSONAL_INFO = {
  name: "Elena Vance",
  shortName: "Elena",
  initials: "EV",
  title: "Staff UI/UX Designer & Systems Architect",
  tagline: "10+ years engineering high-impact digital experiences at the intersection of human psychology, complex data systems, and enterprise scale.",
  elevatorPitch: "I de-risk multi-million dollar product bets, untangle dense enterprise workflows, and build multi-brand design systems that engineering teams love to implement. Over 10+ years, my work has reached 18M+ users across generative AI, fintech terminals, and mission-critical SaaS.",
  experienceYears: "10+",
  shippedProducts: "42+",
  enterpriseImpact: "$180M+",
  systemAdoption: "99.8%",
  availability: "Available for select Q4 2026 advisory & staff leadership roles",
  location: "San Francisco, CA • Open to Remote & Advisory",
  email: "elena.vance@designops.studio",
  timezone: "PST / UTC-8 (Global Flexibility)",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    figma: "https://figma.com",
    dribbble: "https://dribbble.com",
    x: "https://twitter.com",
    cal: "https://cal.com",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "aether-ai",
    title: "Aether OS",
    tagline: "Multimodal Generative AI Workspace & Latent Canvas",
    category: "AI & Tooling",
    client: "Aether Labs",
    year: "2024 - 2025",
    role: "Staff Product Designer & Systems Lead",
    impactMetrics: [
      { label: "Workflow Velocity", value: "+42%" },
      { label: "Active Researchers", value: "140K+" },
      { label: "Render Latency", value: "< 400ms" },
      { label: "Feature Adoption", value: "88%" },
    ],
    summary: "Architected a groundbreaking infinite canvas for generative AI engineering, unifying prompt chaining, latent space parameter sliders, and side-by-side asset comparison into a unified mental model.",
    problem: "Machine learning practitioners were using 4 to 6 disparate tools to test model variations, monitor token costs, and tweak embeddings. The resulting cognitive friction caused constant context switching and slow experimentation cycles.",
    researchInsights: [
      "24 in-depth contextual inquiries with LLM and diffusion engineers revealed that 73% of iteration time was spent hunting between chat tabs and terminal logs.",
      "Spatial clustering on a node canvas allowed users to reason about model pipelines 2.4x faster than linear prompt history.",
      "Engineers required tactile token cost feedback before executing multi-stage generative cascades.",
    ],
    solution: "Designed an infinite spatial canvas featuring magnetic node docking, real-time live preview tiles, an embedded token budgeter, and instant parametric diffing.",
    systemHighlights: [
      "32 modular canvas nodes built with strict sub-pixel alignment",
      "Dynamic token cost badges with reactive threshold tinting",
      "Custom dark-mode color palette optimized for 8+ hour research sessions",
    ],
    deliverables: [
      "Complete UI/UX design architecture and canvas interaction spec",
      "Figma tokenized design library with auto-layout variables",
      "Interactive 60fps prototype validated across 30 user testing sessions",
    ],
    accentColor: "emerald",
    previewType: "canvas-ai",
  },
  {
    id: "vantage-terminal",
    title: "Vantage Global",
    tagline: "Institutional Algorithmic Trading & Risk Terminal",
    category: "Fintech & Web3",
    client: "Vantage Capital Markets",
    year: "2023 - 2024",
    role: "Principal UX Architect",
    impactMetrics: [
      { label: "Daily Volume", value: "$4.2B" },
      { label: "Execution Errors", value: "0 reported" },
      { label: "Order Speed", value: "+31%" },
      { label: "Multi-Screen Adoption", value: "96%" },
    ],
    summary: "Redesigned the flagship institutional trading console for high-frequency liquidity managers, delivering zero-misclick execution flows and dynamic order book heatmaps.",
    problem: "Legacy financial software was plagued by sensory overload: flashing unprioritized ticker colors, high misclick rates during volatility spikes, and dense 10-level nested dialogs.",
    researchInsights: [
      "Traders use peripheral vision cues; subtle luminescence shifts are far more effective than saturated alert banners.",
      "Keyboard-only navigation shortcuts cut trade placement times from 4.2 seconds to 1.1 seconds.",
      "2-step affirmative tactile triggers completely eliminated catastrophic fat-finger execution errors.",
    ],
    solution: "A modular, docking-grid trading environment with high-contrast typography, customizable order depth ladders, intelligent heatmaps, and millisecond-accurate micro-animations.",
    systemHighlights: [
      "Strict WCAG 2.2 AAA contrast ratios across all financial data matrices",
      "Dynamic color-blind safe palette for bid/ask spread indicators",
      "Ultra-low cognitive load typography hierarchy utilizing Geist Mono",
    ],
    deliverables: [
      "Information architecture blueprint for 12 trading modules",
      "Interactive keyboard-shortcut flow chart and ergonomic guide",
      "Production-ready design tokens integrated directly with C++ / WebGL frontend",
    ],
    accentColor: "cyan",
    previewType: "trading-terminal",
  },
  {
    id: "prism-system",
    title: "Prism Design System",
    tagline: "Multi-Platform Enterprise Design System & Token Engine",
    category: "Design Systems",
    client: "Apex Enterprise Cloud",
    year: "2022 - 2024",
    role: "Head of Design Systems & Core UX",
    impactMetrics: [
      { label: "Dev Cycle Time", value: "-65%" },
      { label: "Token Adoption", value: "99.8%" },
      { label: "Components Built", value: "180+" },
      { label: "Engineers Supported", value: "140+" },
    ],
    summary: "Created an enterprise-wide design system and automated token pipeline bridging Figma Variables directly into React, Tailwind CSS, iOS, and Android applications.",
    problem: "12 autonomous product squads had generated 40+ incompatible button variations, redundant CSS files, and persistent accessibility regressions across customer-facing portals.",
    researchInsights: [
      "Engineers bypassed design systems when token naming was ambiguous or documentation lacked interactive code copy.",
      "Designers struggled to maintain dark mode parity without automated token bridging.",
      "Standardizing on an 8pt spatial grid with semantic tokens reduced frontend PR review friction by 40%.",
    ],
    solution: "Prism: A fully tokenized, multi-brand system with automated CI/CD token export, live documentation portal, built-in accessibility linting, and 180+ rock-solid UI components.",
    systemHighlights: [
      "Semantic 3-tier token hierarchy (Global -> Semantic -> Component)",
      "Automated Figma-to-GitHub pull request synchronization via Style Dictionary",
      "Native support for Light, Dark, High-Contrast, and Compact enterprise modes",
    ],
    deliverables: [
      "Complete Figma Design System with 180+ components and 600+ token variables",
      "Documentation website with live editable code playgrounds",
      "Design System Governance Model and Squad Onboarding Bootcamp",
    ],
    accentColor: "violet",
    previewType: "design-system",
  },
  {
    id: "pulse-ehr",
    title: "Pulse Healthtech EHR",
    tagline: "Clinical Intelligence & Physician Diagnostic Companion",
    category: "Enterprise SaaS",
    client: "Pulse Health Systems",
    year: "2021 - 2022",
    role: "Lead UX Specialist",
    impactMetrics: [
      { label: "Charting Time", value: "-38%" },
      { label: "Prescription Errors", value: "0 in trials" },
      { label: "Hospital Deployments", value: "32" },
      { label: "Clinician SUS Score", value: "89 / 100" },
    ],
    summary: "Re-engineered emergency clinician electronic health records, reducing administrative fatigue through contextual patient summaries, streamlined medication orders, and voice-assisted triage.",
    problem: "Physicians spent up to 2 hours of administrative EHR charting for every 1 hour of direct patient care, driving record clinician burnout and high potential for prescription oversight.",
    researchInsights: [
      "Emergency room doctors make decisions under acute cognitive duress; vital patient indicators must be legible from 5 feet away.",
      "Traditional modal dialogs broke clinical concentration; inline contextual drawers preserved patient timeline awareness.",
      "Standardized drug interaction warning levels prevented alert fatigue by 74%.",
    ],
    solution: "A unified, single-screen patient dashboard with real-time biometric vitals, intelligent contraindication alerts, and one-tap medication reconciliation.",
    systemHighlights: [
      "High-legibility clinical typography certified for low-light hospital wards",
      "Color-coded urgency tiering adhering to medical human factors standards",
      "Optimized for gloved touch input on medical tablets and mobile carts",
    ],
    deliverables: [
      "Full emergency room patient journey map and triage workflow",
      "Touch-optimized component library for hospital tablet environments",
      "FDA/HIPAA compliant usability validation report",
    ],
    accentColor: "emerald",
    previewType: "healthtech-ehr",
  },
  {
    id: "kroma-spatial",
    title: "Kroma Spatial Studio",
    tagline: "Web-Based 3D Generative Canvas & Asset Pipeline",
    category: "AI & Tooling",
    client: "Kroma Creative",
    year: "2023",
    role: "Lead Interaction Designer",
    impactMetrics: [
      { label: "Product Hunt", value: "#1 Product" },
      { label: "3D Assets Created", value: "85K+" },
      { label: "Onboarding Time", value: "< 4 mins" },
      { label: "User Rating", value: "4.9 / 5" },
    ],
    summary: "Conceived a lightweight, browser-based 3D scene composer allowing non-technical designers to manipulate procedural 3D assets, apply neural shaders, and export web-ready models in minutes.",
    problem: "Traditional 3D applications (Blender, Maya) present overwhelming 500-tool toolbars that intimidate UX designers and marketing teams who just need fast 3D compositions.",
    researchInsights: [
      "Radial gesture menus directly at cursor location reduced cursor travel distance by 68%.",
      "Live material baking previews prevented unnecessary render queue roundtrips.",
      "Gamified physics gizmos increased user confidence during 3D spatial alignment.",
    ],
    solution: "Minimalist spatial viewport with floating contextual tool heads, AI-assisted lighting presets, and frictionless WebGL canvas performance.",
    systemHighlights: [
      "Custom-engineered dark spatial UI with floating glass control panels",
      "Zero-latency WebGL canvas viewport layout with responsive sidebars",
      "Tactile sound and micro-interaction haptics for spatial snapping",
    ],
    deliverables: [
      "3D viewport interaction architecture and gesture taxonomy",
      "Interactive shader parameter control widgets",
      "Onboarding micro-tutorial sequence with 94% completion rate",
    ],
    accentColor: "cyan",
    previewType: "spatial-3d",
  },
  {
    id: "chronos-procure",
    title: "Chronos Commerce",
    tagline: "Global Enterprise B2B Wholesale Procurement Engine",
    category: "Enterprise SaaS",
    client: "Chronos Logistics Corp",
    year: "2020 - 2021",
    role: "Senior Product Designer",
    impactMetrics: [
      { label: "Checkout Conversion", value: "+28.4%" },
      { label: "Annual GMV", value: "$48M+" },
      { label: "Approval Cycle", value: "14d → 2d" },
      { label: "Order Value Uplift", value: "+19%" },
    ],
    summary: "Overhauled the end-to-end B2B procurement engine for multi-national supply chain buyers, transforming labyrinthine spreadsheets into an intuitive digital checkout and approval flow.",
    problem: "Enterprise buyers experienced 2-week approval bottlenecks, confusing multi-currency invoices, and complex custom duty estimations that led to high cart abandonment.",
    researchInsights: [
      "Enterprise buyers prioritize bulk spreadsheet uploads and multi-department billing splits.",
      "Transparent duty and freight estimates displayed before checkout reduced purchase order rejections by 52%.",
    ],
    solution: "A streamlined wholesale matrix checkout with automated purchase order generation, dynamic tiered pricing calculators, and hierarchical multi-signer approval workflows.",
    systemHighlights: [
      "Ultra-dense bulk data table design with column pinning and live cell editing",
      "Visual sign-off approval chain with real-time audit logs",
      "Multi-currency conversion widget with real-time FX hedging preview",
    ],
    deliverables: [
      "High-density data grid UX system and keyboard navigation model",
      "B2B checkout flow prototype and usability test suite",
      "Comprehensive design handoff specs for React & Redux team",
    ],
    accentColor: "amber",
    previewType: "b2b-procure",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Product Strategy & UX Research",
    iconName: "Compass",
    description: "Aligning human behavioral psychology with high-leverage commercial objectives.",
    skills: [
      { name: "Contextual User Inquiry & Interviews", level: 98, tags: ["Qualitative", "Discovery"] },
      { name: "Information Architecture & Taxonomy", level: 95, tags: ["IA", "Complex Systems"] },
      { name: "Jobs-to-be-Done (JTBD) Framework", level: 94, tags: ["Strategy", "Problem Framing"] },
      { name: "Quantitative Analytics & Funnel Auditing", level: 90, tags: ["Mixpanel", "Amplitude"] },
      { name: "Usability Benchmarking & Heuristic Evaluation", level: 96, tags: ["Nielsen Norman", "Audits"] },
      { name: "Product Roadmapping & MVP Scoping", level: 92, tags: ["De-risking", "Prioritization"] },
    ],
  },
  {
    title: "UI & Interaction Design",
    iconName: "Layers",
    description: "Crafting fluid, high-fidelity interfaces with micro-interactions that spark delight.",
    skills: [
      { name: "High-Fidelity Interface Design (Figma)", level: 99, tags: ["Auto-Layout", "Variables"] },
      { name: "Micro-Interactions & Motion Choreography", level: 94, tags: ["Framer", "CSS Motion"] },
      { name: "Data Visualization & High-Density UI", level: 95, tags: ["Dashboards", "Fintech"] },
      { name: "Responsive & Cross-Device Ergonomics", level: 96, tags: ["Mobile", "Tablet", "Desktop"] },
      { name: "WCAG 2.2 AAA Accessibility Standards", level: 95, tags: ["A11y", "Contrast", "Screen Readers"] },
      { name: "Interactive Rapid Prototyping", level: 93, tags: ["User Testing", "Prototypes"] },
    ],
  },
  {
    title: "Design Systems & Engineering",
    iconName: "Boxes",
    description: "Architecting scalable tokenized infrastructures that bridge design and code.",
    skills: [
      { name: "Design Token Architecture (Style Dictionary)", level: 96, tags: ["Tokens", "Variables"] },
      { name: "Component Architecture & Variant Modeling", level: 98, tags: ["Modularity", "Atomic"] },
      { name: "Tailwind CSS & Modern Utility Frameworks", level: 92, tags: ["Tailwind", "Responsive"] },
      { name: "Next.js & React Component Systems", level: 88, tags: ["Design-Dev Bridge", "SSR"] },
      { name: "Design System Documentation & Governance", level: 94, tags: ["Storybook", "Zeroheight"] },
      { name: "Multi-Brand & Theming Systems (Dark/Light)", level: 97, tags: ["Scalability", "Theming"] },
    ],
  },
  {
    title: "Leadership & DesignOps",
    iconName: "Zap",
    description: "Scaling high-performing design cultures and steering executive alignment.",
    skills: [
      { name: "Cross-Functional Executive Alignment", level: 95, tags: ["Leadership", "Stakeholders"] },
      { name: "Design Mentorship & Team Scaling", level: 92, tags: ["Hiring", "Coaching"] },
      { name: "Design Sprint Facilitation (GV Model)", level: 94, tags: ["Workshops", "Ideation"] },
      { name: "DesignOps & Workflow Optimization", level: 90, tags: ["Linear", "Jira", "Figma Ops"] },
      { name: "Agile UX Integration & Sprint Planning", level: 93, tags: ["Scrum", "Delivery"] },
      { name: "Technical Handoff & QA Verification", level: 96, tags: ["Zero Drift", "Pixel Perfect"] },
    ],
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Staff UI/UX Designer & Systems Architect",
    company: "Apex Cloud Labs",
    location: "San Francisco, CA (Hybrid)",
    type: "Full-Time Leadership",
    description: "Leading the core product experience and cross-platform design system across Apex's developer cloud and AI infrastructure products.",
    achievements: [
      "Architected the Prism Design System adopted by 140+ engineers across 12 product squads with 99.8% token compliance.",
      "Designed and launched Aether AI Studio, generating $14M in ARR within the first 6 months of public release.",
      "Reduced UI design-to-production deployment cycles by 65% through automated token synchronization.",
      "Mentored a team of 6 senior and mid-level product designers, establishing career ladders and design critiques.",
    ],
    technologies: ["Figma Variables", "Next.js", "Tailwind CSS", "Design Tokens", "Storybook", "TypeScript"],
  },
  {
    period: "2020 — 2023",
    role: "Lead Product Designer",
    company: "Vanguard Digital Labs",
    location: "New York / Remote",
    type: "Full-Time",
    description: "Spearheaded user experience architecture for institutional fintech analytics, trading terminals, and multi-tenant enterprise dashboards.",
    achievements: [
      "Led end-to-end UX for Vantage Global trading terminal, handling $4.2B in daily transactions with 0 execution errors.",
      "Conducted 60+ global customer research sessions across London, New York, and Singapore trading desks.",
      "Designed real-time market depth heatmaps and algorithmic execution modules resulting in +31% trader speed.",
      "Pioneered WCAG AAA accessibility compliance standards across the company's financial product portfolio.",
    ],
    technologies: ["Figma", "High-Density Data Viz", "Interaction Prototyping", "Fintech UX", "Dovetail"],
  },
  {
    period: "2017 — 2020",
    role: "Senior UX/UI Specialist",
    company: "Hyperion Fintech Systems",
    location: "San Francisco, CA",
    type: "Full-Time",
    description: "Owned the customer onboarding, fraud detection dashboard, and B2B checkout flows for high-growth payments infrastructure.",
    achievements: [
      "Redesigned the merchant onboarding funnel, decreasing drop-off by 34% and cutting time-to-first-transaction from 3 days to 18 minutes.",
      "Created the foundational UI component library used across 4 standalone web apps and mobile interfaces.",
      "Partnered closely with engineering leads to implement rigorous design QA and continuous delivery pipelines.",
    ],
    technologies: ["Sketch", "Figma", "React", "User Testing", "Usability Audits", "Micro-Interactions"],
  },
  {
    period: "2014 — 2017",
    role: "UI/UX Designer & Prototyper",
    company: "Form & Function Design Agency",
    location: "Boston, MA",
    type: "Agency / Full-Time",
    description: "Designed responsive digital products, web applications, and brand systems for fast-growing venture-backed tech startups.",
    achievements: [
      "Delivered 18 client projects across SaaS, healthcare, and e-commerce on time and within budget.",
      "Specialized in rapid interactive prototyping, validating user mental models prior to engineering investment.",
      "Received 2 Webby Honoree awards for responsive interaction design and typography craft.",
    ],
    technologies: ["Wireframing", "Interaction Design", "HTML/CSS Prototyping", "Client Workshops", "Usability Labs"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Elena is that rare 1% product designer who operates as both an exquisite visual artisan and an uncompromising systems architect. She transformed our fragmented product suite into a world-class design system that saved hundreds of engineering hours.",
    author: "Sarah Lin",
    role: "VP of Product",
    company: "Apex Cloud Labs",
    avatarInitials: "SL",
  },
  {
    quote: "Working with Elena on our institutional trading terminal was revelatory. She has a preternatural ability to absorb complex quantitative concepts and turn them into intuitive, lightning-fast interfaces that our Wall Street clients rave about.",
    author: "David Moreau",
    role: "Head of Engineering",
    company: "Vanguard Digital",
    avatarInitials: "DM",
  },
  {
    quote: "Elena's design leadership de-risked our Series A and accelerated our go-to-market. She designs with the rigor of an engineer and the empathy of a researcher. If you have the chance to work with her, jump on it.",
    author: "Aris Thorne",
    role: "Founder & CEO",
    company: "Aether AI Labs",
    avatarInitials: "AT",
  },
];

export const DESIGN_PHILOSOPHY = [
  {
    title: "Clarity Over Decoration",
    description: "Every pixel, micro-interaction, and border radius must serve a cognitive purpose. We strip away visual noise so users achieve flow state effortlessly.",
    iconName: "Eye",
  },
  {
    title: "Systems That Scale With Zero Drift",
    description: "Great UI design is not static artboards; it is a living mathematical system of tokens, states, and constraints engineered for painless collaboration.",
    iconName: "Cpu",
  },
  {
    title: "Speed as a Fundamental Feature",
    description: "Interface latency breaks human thought momentum. I design for sub-100ms perceived performance, instant visual feedback, and tactile responsiveness.",
    iconName: "Zap",
  },
  {
    title: "Radical Empathy & Evidence",
    description: "Intuition sparks hypotheses, but rigorous usability testing and quantitative funnel data prove them. I validate with real users before writing a line of code.",
    iconName: "HeartHandshake",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover & Deconstruct",
    description: "Stakeholder interviews, user contextual inquiries, analytics audits, and competitive teardowns to isolate root friction points.",
    deliverable: "Problem Statement & Insight Matrix",
  },
  {
    step: "02",
    title: "Synthesize & Architect",
    description: "Mapping user mental models, information architecture schemas, core user journey flows, and rapid wireframe testing.",
    deliverable: "IA Blueprint & Lo-Fi Prototypes",
  },
  {
    step: "03",
    title: "Systemic UI Craft",
    description: "Translating concepts into high-fidelity Figma components, semantic design tokens, and fluid micro-interaction choreography.",
    deliverable: "Production Figma Kit & Interactive Spec",
  },
  {
    step: "04",
    title: "Usability & Accessibility Validation",
    description: "Stress-testing with representative end users, WCAG 2.2 AAA accessibility auditing, keyboard navigation, and cognitive load validation.",
    deliverable: "Benchmark Report & Usability Score",
  },
  {
    step: "05",
    title: "Dev Symbiosis & Scale",
    description: "Direct collaboration with frontend engineers, token synchronization, edge-case QA, and ongoing telemetry instrumentation.",
    deliverable: "Zero-Drift Production Release",
  },
];

export const AUDIT_CHECKLIST = [
  {
    category: "Technical SEO",
    status: "pass",
    score: 100,
    items: [
      { name: "Canonical URL & Self-Referencing Tag", status: "pass", detail: "Canonical link tag present and verified" },
      { name: "Open Graph Protocol (og:image, og:type, og:title)", status: "pass", detail: "Full social sharing cards configured" },
      { name: "Twitter Cards (summary_large_image)", status: "pass", detail: "Configured for optimal preview rendering" },
      { name: "Semantic HTML5 Architecture", status: "pass", detail: "<header>, <nav>, <main>, <section>, <article>, <footer> tags used correctly" },
      { name: "Robots.txt & XML Sitemap", status: "pass", detail: "Dynamic robots.ts and sitemap.ts implemented" },
      { name: "Meta Viewport & Charset", status: "pass", detail: "UTF-8 and responsive viewport tags configured" },
    ],
  },
  {
    category: "Structured Data (Schema.org)",
    status: "pass",
    score: 100,
    items: [
      { name: "Person Schema (Schema.org/Person)", status: "pass", detail: "Authoritative biographical, role, and social attributes" },
      { name: "WebSite & ProfilePage Schema", status: "pass", detail: "Identifies publisher, copyright, and URL targets" },
      { name: "CreativeWork & ItemList Schema", status: "pass", detail: "Portfolio projects indexed with client, role, and metrics" },
      { name: "JSON-LD Ingestion Validation", status: "pass", detail: "Zero syntax errors, valid schema.org ontology" },
    ],
  },
  {
    category: "Accessibility & UX (WCAG 2.2 AAA)",
    status: "pass",
    score: 98,
    items: [
      { name: "Color Contrast Ratio (Dark Mode)", status: "pass", detail: "> 7.5:1 ratio on primary text against #07080c background" },
      { name: "Keyboard Focus Rings & Tabbing", status: "pass", detail: "Visible emerald focus-visible rings on all interactive elements" },
      { name: "ARIA Attributes & Role Hierarchy", status: "pass", detail: "aria-labels, role='dialog', aria-expanded implemented" },
      { name: "Touch Target Sizing", status: "pass", detail: "Minimum 44x44px touch boundaries for mobile ergonomics" },
      { name: "Skip to Content Bypass", status: "pass", detail: "Accessible keyboard navigation bypass link" },
    ],
  },
  {
    category: "Performance & Core Web Vitals",
    status: "pass",
    score: 100,
    items: [
      { name: "Largest Contentful Paint (LCP)", status: "pass", detail: "Predicted < 0.6s (Instant static pre-rendering)" },
      { name: "Cumulative Layout Shift (CLS)", status: "pass", detail: "0.00 (Zero layout jump, explicit SVG viewBoxes)" },
      { name: "First Input Delay / INP", status: "pass", detail: "< 25ms (Sub-millisecond lightweight React hydration)" },
      { name: "Vector-First Asset Delivery", status: "pass", detail: "100% SVG & pure CSS graphics (Zero heavy external images)" },
      { name: "Next.js App Router Optimization", status: "pass", detail: "Tree-shaken bundle, modern ES2022 output" },
    ],
  },
];
