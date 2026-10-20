import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elena Vance | Staff UI/UX Designer Portfolio",
    short_name: "Elena Vance UX",
    description: "Portfolio of Elena Vance, Staff UI/UX Designer & Systems Architect with 10+ years experience in Enterprise SaaS, AI Platforms, and Design Systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080c",
    theme_color: "#10b981",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
