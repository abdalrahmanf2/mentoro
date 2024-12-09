import AddResourceForm from "@/components/AddResourceForm";

const AddCourse = () => {
    return (
        <div className="p-4 pb-10 space-y-8">
            <h1 className="text-6xl font-extrabold">Create New Resource</h1>
            <div className="bg-white p-8 shadow rounded-xl">
                <AddResourceForm />
            </div>
        </div>
    );
};

export default AddCourse;
