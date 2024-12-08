import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { MENTORS } from "@/lib/constants";
import { Download, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
    return (
        <section className="py-16">
            <MaxWidthWrapper className="space-y-8">
                <h1 className="text-7xl font-extrabold">
                    Mentors Applications
                </h1>
                <div className="flex flex-col gap-8">
                    {MENTORS.map((mentor, idx) => (
                        <div key={idx} className="shadow px-8 py-4 rounded-xl">
                            <div
                                className="flex flex-col lg:flex-row gap-4"
                                key={idx}
                            >
                                <div className="size-32 rounded-full overflow-hidden">
                                    <Image
                                        src={mentor.pfp}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt="Mentor Picture"
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-4xl font-extrabold">
                                        {mentor.name}
                                    </h3>
                                    <div>
                                        <p className="text-md font-semibold">
                                            {mentor.role}
                                        </p>
                                        <p className="flex items-center">
                                            <Star className="inline-flex fill-brand-100 size-4 mr-1" />{" "}
                                            5.0 (76 reviews)
                                        </p>
                                        <p className="text-brand-200">
                                            10+ years experience as a Software
                                            Engineer
                                        </p>
                                    </div>
                                    <p>
                                        Hello! I&apos;m {mentor.name}, a{" "}
                                        {mentor.role} with 10 years of
                                        experience. I have worked for
                                        consultancy, startup, and enterprise
                                        product companies in differ...
                                    </p>
                                    <div className="flex gap-4">
                                        <Link
                                            className="bg-brand-50 px-4 py-2 shadow-md hover:opacity-80 rounded-full rounded-bl-none flex gap-4 transition"
                                            href="#"
                                        >
                                            CV PDF
                                            <Download />
                                        </Link>
                                        <Link
                                            className="bg-brand-50 px-4 py-2 shadow-md hover:opacity-80 rounded-full rounded-bl-none flex gap-4 transition"
                                            href="#"
                                        >
                                            Intro Video
                                            <Download />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cursor-pointer flex items-center justify-end gap-2">
                                <Button className="text-black rounded-full rounded-bl-none">
                                    Accept
                                </Button>
                                <Button
                                    className="text-black rounded-full rounded-bl-none"
                                    variant="destructive"
                                >
                                    Reject
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Admin;
