import Image from "next/image";
import studentImage from "@/assets/user-mock-img.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItem } from "@/components/ui/form";
import { PenBoxIcon, Trash2 } from "lucide-react";

const Schedule = () => {
    return (
        <div className="p-4 pb-10 space-y-8">
            <h1 className="text-7xl font-extrabold max-w-screen-lg">
                Schedule
            </h1>
            <div className="grid grid-cols-12 gap-4">
                <div className="max-h-[80vh] col-span-8 overflow-y-scroll space-y-8">
                    <div className="bg-white p-4 shadow rounded-xl flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            <div className="rounded-full size-32 overflow-hidden">
                                <Image
                                    src={studentImage}
                                    alt="Student Image"
                                    className="size-full object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-brand-200 text-2xl font-extrabold text-shadow">
                                    Mohammed Soliman
                                </h3>
                                <p>12:30 PM - 1:30 PM</p>
                            </div>
                        </div>
                        <div className="self-end flex gap-2">
                            <Button>Confirm</Button>
                            <Button className="font-bold" variant="destructive">
                                Reject
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow rounded-xl col-span-4 p-4 space-y-8">
                    <h3 className="text-2xl font-extrabold">Schedule Times</h3>
                    <FormItem>
                        <Label
                            className="text-lg font-bold"
                            htmlFor="schedule-date"
                        >
                            Add a new date
                        </Label>
                        <Input id="schedule-date" type="date" />
                    </FormItem>

                    <div className="space-y-2 divide-y-2">
                        <div>
                            <p>Monday 2/10</p>
                            <div className="flex justify-between items-center">
                                <p>12:30 PM - 1:30 PM</p>
                                <div className="text-brand-100 flex gap-2">
                                    <PenBoxIcon className="cursor-pointer hover:opacity-80 transition" />
                                    <Trash2 className="cursor-pointer hover:opacity-80 transition" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Monday 2/10</p>
                            <div className="flex justify-between items-center">
                                <p>12:30 PM - 1:30 PM</p>
                                <div className="text-brand-100 flex gap-2">
                                    <PenBoxIcon className="cursor-pointer hover:opacity-80 transition" />
                                    <Trash2 className="cursor-pointer hover:opacity-80 transition" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;
