import type { Metadata } from "next";
import localFont from "next/font/local";
import { AmbientBackground } from "@/components/motion/AmbientBackground";
import "./globals.css";

/**
 * Self-hosted via next/font/local. Google Fonts' remote CSS endpoint is
 * unreachable from this build environment's network allowlist, so the
 * woff2 files are vendored into /app/fonts (sourced from the official
 * @fontsource/* npm packages, which mirror Google Fonts under the same
 * open licenses — no separate licensing concern). Functionally
 * equivalent to next/font/google, just self-hosted.
 */
const displayFont = localFont({
  variable: "--font-display",
  src: [
    { path: "./fonts/big-shoulders-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/big-shoulders-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/big-shoulders-800.woff2", weight: "800", style: "normal" },
    { path: "./fonts/big-shoulders-900.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
});

const bodyFont = localFont({
  variable: "--font-body",
  src: [
    { path: "./fonts/inter-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-600.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

const siteUrl = "https://ironforge-fitness.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IronForge Fitness — Premium Performance Gym",
  description:
    "IronForge is a premium performance gym built for serious training — strength, personal training, functional and performance programs, 24/7 access.",
  openGraph: {
    title: "IronForge Fitness — Premium Performance Gym",
    description:
      "Built for those who train seriously. Explore programs, membership and the IronForge training floor.",
    url: siteUrl,
    siteName: "IronForge Fitness",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronForge Fitness — Premium Performance Gym",
    description: "Built for those who train seriously.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-background text-foreground font-body antialiased">
        <AmbientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
