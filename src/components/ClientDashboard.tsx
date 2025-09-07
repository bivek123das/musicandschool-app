"use client"; // Must be first line

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCourseStore, Course } from "@/stores/courseStore";

export default function ClientDashboard() {
  const fallbackImage = "/placeholder.jpg";
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("edit"); // keep as string

  const { addCourse, updateCourse, courses } = useCourseStore();

  const [form, setForm] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    if (editId) {
      const course = courses.find((c) => c.id === editId);
      if (course) {
        setForm({
          title: course.title,
          description: course.description,
          image: course.image || "",
        });
      }
    }
  }, [editId, courses]);

  const handleSubmit = () => {
    const validImage = form.image.trim() || fallbackImage;

    if (editId) {
      updateCourse(editId, {
        title: form.title,
        description: form.description,
        image: validImage,
      });
    } else {
      addCourse({
        id: Date.now().toString(),
        title: form.title,
        description: form.description,
        image: validImage,
      } as Course);
    }

    setForm({ title: "", description: "", image: "" });
    router.push("/courses");
  };

  return (
    <div className="w-full max-w-4xl mt-12 sm:mt-20 mx-auto px-2 sm:px-4 md:px-6 relative z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-8">
        {editId ? "Update Course" : "Add New Course"}
      </h1>

      <div className="bg-gray-900/80 border border-white/10 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center">
          {editId ? "Edit Course Details" : "Course Details"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <input
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="w-full p-2 sm:p-3 rounded-lg bg-gray-800 text-white text-sm sm:text-base sm:col-span-2"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <div className="flex justify-center mt-4 sm:mt-6">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white text-center text-sm sm:text-base"
          >
            {editId ? "Update Course" : "Add Course"}
          </button>
        </div>
      </div>
    </div>
  );
}




