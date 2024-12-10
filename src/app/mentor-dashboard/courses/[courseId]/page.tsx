import { COURSES } from "@/lib/constants";
import Link from "next/link";
import Content from "./Content";

interface CourseParams {
  params: Promise<{ courseId: string }>;
}

const Course = async ({ params }: CourseParams) => {
  const courseId = +(await params).courseId;
  const course = COURSES[courseId];

  return (
    <div className="p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-extrabold">{course.name}</h1>
        <Link
          href={`/mentor-dashboard/courses/${courseId}/edit`}
          className="bg-brand-100 hover:opacity-90 px-4 py-2 rounded-full rounded-bl-none text-black font-bold"
        >
          Edit
        </Link>
      </div>
      <div className="bg-white shadow p-8 rounded-xl space-y-8">
        <div className="relative p-4 border rounded-xl">
          <h2 className="w-fit absolute bg-white -top-5 text-3xl font-extrabold text-brand-200">
            Description
          </h2>
          <p className="text-lg font-bold">{course.description}</p>
        </div>
        <Content course={course} />
      </div>
    </div>
  );
};

export default Course;
