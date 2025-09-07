import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-8 sm:py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-12 md:mt-0 text-3xl sm:text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 font-normal text-sm sm:text-base md:text-lg text-neutral-300 max-w-xs sm:max-w-md md:max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical journey today. Whether you are a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>

        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

