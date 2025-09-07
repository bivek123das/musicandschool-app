"use client";

import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "Sanjana Das",
    designation: "Vocal Coach",
    image: "/courses/sanjana.jpeg",
  },
  {
    id: 2,
    name: "Debajit Sen",
    designation: "Guitar Instructor",
    image: "/courses/debajit.jpeg",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function Instructors() {
  return (
    <div className="relative h-auto sm:h-[40rem] overflow-hidden flex items-center justify-center px-2 sm:px-4 md:px-6 py-8 sm:py-0">
      <WavyBackground className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-bold text-center mb-4 sm:mb-6">
          Meet Our Instructors
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white text-center mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          Discover the talented professionals who will guide your musical journey
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 w-full mb-6 sm:mb-10">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;

