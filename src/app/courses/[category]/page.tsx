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
    <div className="min-h-screen py-12 pt-36 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          {formattedCategory} Courses
        </h2>
      </div>

      {filteredCourses.length === 0 ? (
        <p className="text-white text-center mt-6">No courses found in this category.</p>
      ) : (
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {filteredCourses.map((course, index) => (
              <div key={index} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
                    <p className="text-lg font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {course.title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                      {course.description}
                    </p>
                    <div className="mt-4">
                      <Image
                        src={course.image ?? "/fallback.jpg"}
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl"
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

