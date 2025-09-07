"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const musicSchoolWebinars = [
  {
    title: "Mastering Classical Guitar",
    description: "An in-depth session on classical guitar techniques by Maestro Arjun Sen.",
    slug: "mastering-classical-guitar",
    isFeatured: true,
  },
  {
    title: "Music Theory Basics",
    description: "Learn the foundation of music theory to enhance your playing and composition skills.",
    slug: "music-theory-basics",
    isFeatured: true,
  },
  {
    title: "Jazz Improvisation Techniques",
    description: "Explore the art of improvisation in jazz with real-time demonstrations and jam sessions.",
    slug: "jazz-improvisation-techniques",
    isFeatured: true,
  },
  {
    title: "Vocal Warmups & Health",
    description: "A vocal coach shares daily routines to improve your voice and protect vocal health.",
    slug: "vocal-warmups-and-health",
    isFeatured: false,
  },
  {
    title: "Electronic Music Production",
    description: "Dive into DAWs and synths with this beginner-friendly webinar on electronic music.",
    slug: "electronic-music-production",
    isFeatured: true,
  },
  {
    title: "How to Build a Career in Music",
    description: "Industry experts share their journey and tips on building a successful music career.",
    slug: "career-in-music",
    isFeatured: true,
  },
];

function Webinars() {
  return (
    <div className="py-8 sm:py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-xs sm:text-sm md:text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 font-extrabold tracking-tight text-white">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-8 sm:mt-10">
          <HoverEffect
            items={musicSchoolWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            className="inline-block px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-neutral-600 text-sm sm:text-base text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            href={"/webinar"}
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;

