"use client";

import Link from "next/link";

const browseSections = [
  {
    title: "All Courses",
    description: "Browse every class we offer across skill levels.",
    href: "/courses",
    accent: "View",
  },
  {
    title: "Basic Music Theory",
    description: "Intervals, chords, scales, and rhythm fundamentals.",
    href: "/courses/basic-music-theory",
  },
  {
    title: "Advanced Composition",
    description: "Dive into harmony, counterpoint, and orchestration.",
    href: "/courses/advanced-composition",
  },
  {
    title: "Songwriting",
    description: "Build hooks, lyrics, and structures that connect.",
    href: "/courses/songwriting",
  },
  {
    title: "Music Production",
    description: "From recording techniques to mixing and mastering.",
    href: "/courses/music-production",
  },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-black pt-28 sm:pt-36 pb-16 px-4 sm:px-6">
      <div className="section-shell text-center">
        <p className="text-xs tracking-[0.3em] text-emerald-400">BROWSE</p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mt-4">
          Find the right path
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-4">
          Start with a curated category or jump straight into the full catalog.
          Each track links you to a tailored learning experience.
        </p>
      </div>

      <div className="section-shell mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {browseSections.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className="border border-white/10 rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/0 hover:border-emerald-400/60 transition group text-left"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-white text-xl font-semibold">
                {section.title}
              </h2>
              {section.accent && (
                <span className="text-xs uppercase tracking-wide bg-emerald-500/20 text-emerald-200 px-3 py-1 rounded-full">
                  {section.accent}
                </span>
              )}
            </div>
            <p className="text-neutral-400 text-sm mt-3">
              {section.description}
            </p>
            <span className="inline-flex items-center gap-2 text-emerald-300 text-sm font-semibold mt-5">
              Explore
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}


