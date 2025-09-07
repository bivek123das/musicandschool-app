"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicContent = [
  {
    title: "Chill Vibes",
    description:
      "Relax and unwind with this smooth mix of chillout tracks and lo-fi beats.",
    content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://www.shutterstock.com/image-photo/beautiful-asian-woman-enjoy-listening-600nw-1455833660.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Workout Boost",
    description:
      "High-energy tracks to power up your workouts and keep you moving.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://www.shutterstock.com/image-photo/handsome-man-wireless-headphones-jogging-260nw-2498245195.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Classical Essentials",
    description:
      "Timeless symphonies and soothing piano pieces from the greatest composers.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://media.istockphoto.com/id/1293306688/photo/wooden-musical-instrument-harmonium.jpg?s=612x612&w=0&k=20&c=OKmWoSShZp8BdqwRmDT4ZxQ5ZzvAF6aTvcJgPw-Fa_c="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Top Hits 2025",
    description:
      "The biggest chart-topping tracks of the year across all genres.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://media.istockphoto.com/id/2212954398/video/relaxed-afternoon-in-retro-styled-living-room.jpg?s=640x640&k=20&c=wayuvHPBuBMzIqKBxXRZH8MsPIPIiq-tc9b0l8w-gCM="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Indie Discoveries",
    description:
      "Explore the freshest sounds from up-and-coming indie artists around the globe.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://media.istockphoto.com/id/1255766336/vector/indie-music-festival-poster-with-the-beetle-man.jpg?s=612x612&w=0&k=20&c=EpTBbySGgFheNGOZVw2aPrLAebtVhF3coMi28n91JgM="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];

function ChooseUs() {
  return (
    <div className="w-full ">
      <StickyScroll content={musicContent} />
    </div>
  );
}

export default ChooseUs;
