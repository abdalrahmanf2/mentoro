import { COURSES } from "@/lib/constants";
import { File, FileQuestion, Link2, Trash } from "lucide-react";
import Link from "next/link";

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
                <div className="space-y-2">
                    <h2 className="text-3xl font-extrabold text-brand-200">
                        Content
                    </h2>
                    <div className="relative p-4 border rounded-xl bg-slate-100 h-[16rem] overflow-y-scroll">
                        <ul className="flex flex-col gap-4">
                            {course.content.map((item, idx) => {
                                const ItemIcon = getContentItemIcon(item.type);

                                return (
                                    <li
                                        key={idx}
                                        className="flex justify-between items-center"
                                    >
                                        <div className="flex gap-2 items-center">
                                            <ItemIcon />
                                            {item.name}
                                        </div>
                                        <div className="p-2 rounded-full hover:bg-red-200 cursor-pointer transition">
                                            <Trash className="stroke-red-400" />
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const getContentItemIcon = (type: string) => {
    switch (type) {
        case "file":
            return File;
        case "link":
            return Link2;
        default:
            return FileQuestion;
    }
};

export default Course;
