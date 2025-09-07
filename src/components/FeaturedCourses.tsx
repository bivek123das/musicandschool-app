"use client";

import Link from "next/link";
import courseData from "../data/music_course.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData?.courses?.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-10 sm:py-12 bg-gray-900 px-2 sm:px-4 md:px-6">
      <div className="text-center">
        <h2 className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-teal-600">
          FEATURED COURSES
        </h2>
        <p className="mt-2 text-2xl sm:text-3xl md:text-4xl leading-7 sm:leading-8 font-extrabold tracking-tight text-white">
          Learn with the best
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-xs sm:max-w-sm">
                <div className="p-3 sm:p-4 md:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-black mt-3 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="mt-3 text-sm sm:text-base text-teal-600 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 text-center">
        <Link
          className="inline-block px-3 sm:px-4 py-2 sm:py-2.5 rounded border border-neutral-600 text-sm sm:text-base text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          href={"/courses"}
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;

