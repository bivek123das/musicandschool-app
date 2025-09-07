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
    <div className="w-full max-w-4xl mt-20 mx-auto px-4 sm:px-6 relative z-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 sm:mb-10">
        {editId ? "Update Course" : "Add New Course"}
      </h1>

      <div className="bg-gray-900/80 border border-white/10 rounded-2xl shadow-xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-white text-center">
          {editId ? "Edit Course Details" : "Course Details"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          <input
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="w-full p-3 rounded-lg bg-gray-800 text-white md:col-span-2"
            placeholder="Image URL"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold text-white text-center"
          >
            {editId ? "Update Course" : "Add Course"}
          </button>
        </div>
      </div>
    </div>
  );
}



