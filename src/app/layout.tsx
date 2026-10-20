import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolio-data";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://elenavance.design"),
  title: {
    default: "Elena Vance | Staff UI/UX Designer & Systems Architect (10+ Yrs Exp)",
    template: "%s | Elena Vance - Staff UI/UX Designer",
  },
  description:
    "Portfolio of Elena Vance, Staff UI/UX Designer & Product Systems Architect with 10+ years experience designing mission-critical enterprise SaaS, multimodal AI canvases, and design systems for 18M+ users.",
  keywords: [
    "Staff UI/UX Designer",
    "Staff Product Designer",
    "Principal UX Architect",
    "Design Systems Architect",
    "Enterprise SaaS UX",
    "Generative AI Interface Design",
    "Fintech UI UX",
    "Figma Variables Expert",
    "Design Tokens Style Dictionary",
    "WCAG 2.2 AAA Accessibility",
    "Design Leadership",
    "UX Research & Strategy",
    "San Francisco Product Designer",
  ],
  authors: [{ name: "Elena Vance", url: "https://elenavance.design" }],
  creator: "Elena Vance",
  publisher: "Elena Vance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://elenavance.design",
  },
  openGraph: {
    title: "Elena Vance | Staff UI/UX Designer & Systems Architect (10+ Yrs Exp)",
    description:
      "10+ years architecting mission-critical enterprise SaaS, AI interfaces, and design systems. De-risking multi-million dollar bets with human factors rigor.",
    url: "https://elenavance.design",
    siteName: "Elena Vance Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "https://elenavance.design/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Elena Vance - Staff UI/UX Designer & Systems Architect Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elena Vance | Staff UI/UX Designer & Systems Architect",
    description:
      "10+ years architecting enterprise SaaS, AI workspaces, and multi-brand design systems for 18M+ users.",
    creator: "@elenavance_ux",
    images: ["https://elenavance.design/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich JSON-LD Structured Data Schema.org
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://elenavance.design/#person",
        "name": PERSONAL_INFO.name,
        "givenName": "Elena",
        "familyName": "Vance",
        "jobTitle": PERSONAL_INFO.title,
        "description": PERSONAL_INFO.tagline,
        "url": "https://elenavance.design",
        "sameAs": [
          "https://linkedin.com",
          "https://github.com",
          "https://figma.com",
          "https://dribbble.com",
          "https://twitter.com",
        ],
        "knowsAbout": [
          "UI/UX Design",
          "Design Systems",
          "Enterprise SaaS Architecture",
          "Generative AI Workspaces",
          "Figma Variables",
          "Design Tokens",
          "WCAG 2.2 AAA Accessibility",
          "Product Strategy",
          "Tailwind CSS",
          "Human Factors Engineering",
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Carnegie Mellon University",
        },
        "award": [
          "Red Dot Award: Best of the Best (2024)",
          "Webby Honoree: Technical Achievement & UX (2022)",
          "Awwwards Site of the Day (2023)",
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Apex Cloud Labs",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://elenavance.design/#website",
        "url": "https://elenavance.design",
        "name": "Elena Vance Portfolio",
        "description": PERSONAL_INFO.tagline,
        "publisher": {
          "@id": "https://elenavance.design/#person",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://elenavance.design/#profilepage",
        "url": "https://elenavance.design",
        "name": "Elena Vance - Staff UI/UX Designer Portfolio",
        "mainEntity": {
          "@id": "https://elenavance.design/#person",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://elenavance.design/#projects",
        "name": "Featured UI/UX Case Studies by Elena Vance",
        "itemListElement": PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "CreativeWork",
            "name": proj.title,
            "headline": proj.tagline,
            "creator": {
              "@id": "https://elenavance.design/#person",
            },
            "description": proj.summary,
            "genre": proj.category,
            "dateCreated": proj.year,
          },
        })),
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#07080c] text-zinc-100 min-h-screen selection:bg-emerald-500/30 selection:text-white`}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-emerald-500 text-zinc-950 font-mono text-xs font-bold rounded-lg shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
