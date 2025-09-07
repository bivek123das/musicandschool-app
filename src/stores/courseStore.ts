import { create } from "zustand";
import courseData from "@/data/music_course.json";

export interface Course {
  id: string; // string id
  title: string;
  description: string;
  image: string;
}

interface CourseState {
  courses: Course[];
  addCourse: (course: Course) => void;
  updateCourse: (id: string, updated: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  courses: (courseData.courses as { id: number; title: string; description: string; image: string }[]).map((c) => ({
    ...c,
    id: String(c.id),
  })),
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, course],
    })),
  updateCourse: (id, updated) =>
    set((state) => ({
      courses: state.courses.map((c) => (c.id === id ? { ...c, ...updated } : c)),
    })),
  deleteCourse: (id) =>
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== id),
    })),
}));









