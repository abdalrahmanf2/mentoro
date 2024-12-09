import AddResourceForm from "@/components/AddResourceForm";
import { COURSES } from "@/lib/constants";

const EditCourse = async ({
    params,
}: {
    params: Promise<{ courseId: string }>;
}) => {
    const courseId = +(await params).courseId;
    const course = COURSES[courseId];

    return (
        <div className="p-4 pb-10 space-y-8">
            <h1 className="text-6xl font-extrabold">Create New Resource</h1>
            <div className="bg-white p-8 shadow rounded-xl">
                <AddResourceForm
                    defaultValues={{
                        resourceName: course.name,
                        description: course.description,
                        category: course.category,
                        content: [],
                        links: [],
                    }}
                />
            </div>
        </div>
    );
};

export default EditCourse;
