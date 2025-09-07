"use client";
import { cn } from "@/lib/utlis";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "This music school transformed my life! The instructors are world-class and truly care about each student.",
    name: "Aarav Mehta",
    title: "Piano Student",
  },
  {
    quote:
      "Thanks to the structured lessons and supportive environment, I was able to master the guitar in just 6 months.",
    name: "Sneha Roy",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "The vocal training here helped me prepare for auditions and land my first professional gig.",
    name: "Karan Singh",
    title: "Vocal Performance Graduate",
  },
  {
    quote:
      "As a parent, I’ve seen incredible growth in my daughter’s confidence and creativity through their violin program.",
    name: "Priya Das",
    title: "Parent of Violin Student",
  },
  {
    quote:
      "Excellent facility, experienced teachers, and a welcoming atmosphere. Highly recommend it to all music lovers!",
    name: "Rahul Kapoor",
    title: "Drum Student",
  },
];

function MusicTestmonialCards() {
  return (
    <div className="h-auto sm:h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden py-8 sm:py-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <h2 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 sm:py-8 font-bold text-transparent text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center px-2 sm:px-0">
        Hear Our Harmony: Voices of success
      </h2>

      <div className="flex justify-center w-full overflow-hidden px-2 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicTestmonialCards;

