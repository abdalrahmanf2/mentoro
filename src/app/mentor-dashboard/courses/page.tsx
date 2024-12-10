"use client";
import { CATEGORIES, COURSES } from "@/lib/constants";
import { Course } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CircleHelp, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Courses = () => {
  const [curCategory, setCurCategory] = useState(CATEGORIES[0].name);

  const filteredCourses =
    curCategory === "All"
      ? COURSES
      : COURSES.filter((course) => course.category === curCategory);

  return (
    <div className="p-4 pb-10 space-y-8">
      <h1 className="text-7xl font-extrabold max-w-screen-lg">
        Your guidance transforms effort into excellence
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          {CATEGORIES.map((category) => (
            <button
              key={category.name}
              className={cn(
                "min-w-32 flex items-center p-2 pr-4 bg-black rounded-3xl gap-2 hover:opacity-80 transition",
                curCategory === category.name && "bg-brand-100"
              )}
              onClick={() => setCurCategory(category.name)}
            >
              <div className="rounded-3xl p-2 bg-white">
                <category.Icon className="stroke-black" />
              </div>
              <span className="text-white font-bold">{category.name}</span>
            </button>
          ))}
        </div>
        <div className="p-2 bg-black rounded-full hover:bg-brand-100 transition cursor-pointer">
          <Plus className="text-white" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {filteredCourses.map((course, idx) => {
          const CategoryIcon =
            CATEGORIES.find((category) => category.name === course.category)
              ?.Icon || CircleHelp;

          return (
            <div
              key={idx}
              className="flex flex-col gap-4 shadow px-4 py-2 bg-brand-150/40 rounded-xl"
            >
              <div className="flex justify-between items-center">
                <div className="rounded-3xl p-2 bg-white">
                  <CategoryIcon className="stroke-black" />
                </div>
                <h3 className="text-4xl font-extrabold text-brand-200 text-shadow">
                  {course.name}
                </h3>
                <div className="text-center text-brand-200 text-shadow rounded-xl p-2 bg-white">
                  <p className="text-2xl font-bold">{course.items}</p>
                  <p>Items</p>
                </div>
              </div>
              <p className="self-center text-center max-w-screen-sm text-lg font-bold">
                {course.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-xl font-bold text-brand-200 text-shadow">
                  Shared For {course.studentsNum} Students
                </p>
                <Link
                  href={`/mentor-dashboard/courses/${idx}`}
                  className="min-w-3/12 text-black font-bold rounded-full rounded-bl-none bg-brand-100 hover:opacity-90 transition px-4 py-2"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Link
        href="/mentor-dashboard/courses/add"
        className="absolute bottom-2 right-14 inline-flex items-center gap-2 text-white p-2 bg-black rounded-full hover:bg-brand-100 transition cursor-pointer"
      >
        <Plus className="text-white" />
        Add Course
      </Link>
    </div>
  );
};

export default Courses;
