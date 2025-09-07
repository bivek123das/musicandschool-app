"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { useCourseStore, Course } from "@/stores/courseStore";

export default function CoursesPage() {
  const { courses, deleteCourse } = useCourseStore();
  const router = useRouter();

  const handleUpdate = (id: string) => {
    router.push(`/dashboard?edit=${id}`);
  };

  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 pt-28 sm:pt-36 px-2 sm:px-6">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center font-sans font-bold mb-6 sm:mb-8 text-white">
        All Courses ({courses.length})
      </h1>

      <div className="flex flex-wrap justify-center">
        {courses.map((course: Course) => (
          <CardContainer key={course.id} className="m-2 sm:m-4">
            <CardBody className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] md:w-[28rem] h-auto rounded-xl p-4 sm:p-6 border relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white text-center"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 mt-2 text-center"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height={1000}
                  width={1000}
                  className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>

              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 sm:mt-6 gap-2 sm:gap-0">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => handleUpdate(course.id)}
                  className="px-3 sm:px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs sm:text-sm font-bold hover:bg-emerald-600 w-full sm:w-auto"
                >
                  Update
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() => deleteCourse(course.id)}
                  className="px-3 sm:px-4 py-2 rounded-xl bg-rose-500 text-white text-xs sm:text-sm font-bold hover:bg-rose-600 w-full sm:w-auto"
                >
                  Delete
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}


