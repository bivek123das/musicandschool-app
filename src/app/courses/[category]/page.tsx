"use client";
import { use } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { musicTopics } from "@/data/musicTopics";
import Image from "next/image";

export default function CourseCategoryPage(props: { params: Promise<{ category: string }> }) {
  const { category } = use(props.params);
  const formattedCategory = category.replace(/-/g, " ");

  const filteredCourses = musicTopics.filter(
    (course) =>
      course.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  return (
    <div className="min-h-screen py-8 sm:py-12 pt-28 sm:pt-36 bg-gray-900 px-2 sm:px-6 lg:px-12">
      <div className="text-center">
        <h2 className="text-xs sm:text-sm md:text-base text-teal-600 font-semibold tracking-wide uppercase">
          {formattedCategory} Courses
        </h2>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-white text-center mt-6 text-sm sm:text-base">
          No courses found in this category.
        </p>
      ) : (
        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 justify-center">
            {filteredCourses.map((course, index) => (
              <div key={index} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-xs sm:max-w-sm">
                  <div className="p-3 sm:p-6 flex flex-col items-center flex-grow">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-black mt-2 mb-2 dark:text-neutral-200 text-center">
                      {course.title}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 flex-grow text-center">
                      {course.description}
                    </p>
                    <div className="mt-4 w-full">
                      <Image
                        src={course.image ?? "/fallback.jpg"}
                        height={1000}
                        width={1000}
                        className="h-48 sm:h-60 w-full object-cover rounded-xl"
                        alt={course.title}
                      />
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


