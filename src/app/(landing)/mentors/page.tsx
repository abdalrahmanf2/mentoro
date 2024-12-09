import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SearchBar from "@/components/SearchBar";
import robot from "@/assets/robot.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Fragment } from "react";
import { ArrowRightCircle, Star } from "lucide-react";
import { MENTORS } from "@/lib/constants";

const CATEGORIES = ["Data Structures", "ASP.NET API", "OOP", "Problem Solving"];

const Mentors = () => {
    return (
        <>
            <section className="py-16 ">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <MaxWidthWrapper className="flex flex-col gap-4 justify-center items-center">
                        <SearchBar />
                        <div className="flex items-center gap-4">
                            <h2 className="text-7xl text-brand-200 font-extrabold text-shadow-md">
                                Categories
                            </h2>
                            <div className="animate-float size-32">
                                <Image
                                    className="size-full object-contain"
                                    src={robot}
                                    alt="Robot"
                                />
                            </div>
                        </div>
                    </MaxWidthWrapper>
                    <div
                        className={cn(
                            "w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [animation-duration:30s]"
                        )}
                    >
                        <div className="flex flex-none gap-6 py-0.5 pr-6 animate-move-left [animation-duration:30s]">
                            {[...new Array(6)].fill(0).map((_, idx) => (
                                <Fragment key={idx}>
                                    {CATEGORIES.map((category) => (
                                        <div
                                            key={category}
                                            className="px-4 py-2 bg-brand-150 shadow rounded-3xl rounded-bl-none text-black font-bold text-xl"
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <div
                        className={cn(
                            "w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] "
                        )}
                    >
                        <div className="flex flex-none gap-6 py-0.5 pr-6 animate-move-right [animation-duration:40s]">
                            {[...new Array(6)].fill(0).map((_, idx) => (
                                <Fragment key={idx}>
                                    {CATEGORIES.map((category) => (
                                        <div
                                            key={category}
                                            className="px-4 py-2 bg-brand-150 shadow rounded-3xl rounded-bl-none text-black font-bold text-xl"
                                        >
                                            {category}
                                        </div>
                                    ))}
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <MaxWidthWrapper className="space-y-8">
                    <h2 className="text-7xl font-extrabold text-shadow-md text-brand-200">
                        Mentors
                    </h2>
                    <div className="flex flex-col gap-8">
                        {MENTORS.map((mentor, idx) => (
                            <div
                                key={idx}
                                className="shadow px-8 py-4 rounded-xl"
                            >
                                <div
                                    className="flex flex-col lg:flex-row gap-4"
                                    key={idx}
                                >
                                    <div className="size-32 rounded-full overflow-hidden">
                                        <Image
                                            src={mentor.picture}
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
                                                10+ years experience as a
                                                Software Engineer
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
                                            {mentor.skills.map((skill) => (
                                                <div
                                                    key={skill}
                                                    className="shadow min-w-16 font-bold px-4 py-2 bg-brand-100 rounded-3xl rounded-bl-none text-center"
                                                >
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="cursor-pointer flex items-center justify-end gap-2">
                                    <p className="text-brand-200 font-bold">
                                        850/month LE
                                    </p>
                                    <div className="rounded-full rounded-bl-none bg-brand-150 p-1">
                                        <ArrowRightCircle className="text-white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    );
};

export default Mentors;
