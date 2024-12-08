"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { MENTORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface Mentor {
    name: string;
    role: string;
    skills: string[];
    pfp: string;
}

const PopularMentors = () => {
    const [curMentor, setCurMentor] = useState<Mentor>(MENTORS[0]);
    const [sliderRef] = useKeenSlider({
        mode: "free",
        slides: {
            perView: 2.5,
            spacing: 5,
        },
    });

    return (
        <section className="py-16">
            <MaxWidthWrapper className="space-y-8">
                <h2 className="uppercase text-center text-5xl lg:text-start lg:text-6xl font-extrabold text-brand-300">
                    Popular Mentors
                </h2>

                <div className="grid justify-center items-center gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-stretch gap-4">
                        <div className="flex flex-col gap-2 justify-center items-center lg:flex-row animate-fade transition-opacity">
                            <div className="flex-1 size-60 rounded-full overflow-hidden">
                                <Image
                                    src={curMentor.pfp}
                                    alt="Mentor Image"
                                    width={367}
                                    height={335}
                                    className="size-full object-cover shadow"
                                />
                            </div>
                            <div className="flex-1 space-y-2">
                                <h3 className="text-4xl font-extrabold">
                                    {curMentor.name}
                                </h3>
                                <div>
                                    <p className="text-md font-semibold">
                                        {curMentor.role}
                                    </p>
                                    <p className="flex items-center">
                                        <Star className="inline-flex fill-brand-100 size-4 mr-1" />{" "}
                                        5.0 (76 reviews)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 flex-wrap">
                            {curMentor.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="min-w-16 px-4 py-2 bg-brand-100 rounded-3xl rounded-bl-none text-center"
                                >
                                    <span className="font-bold">{skill}</span>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/auth"
                            className={cn(
                                buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                }),
                                "capitalize text-md font-bold rounded-3xl bg-brand-50 hover:bg-brand-50/50"
                            )}
                        >
                            Start your journey
                        </Link>
                    </div>

                    <div className="lg:col-span-3 keen-slider" ref={sliderRef}>
                        {MENTORS.map((mentor, index) => (
                            <div
                                key={index}
                                className="keen-slider__slide"
                                onClick={() => setCurMentor(mentor)}
                            >
                                <div
                                    className={cn(
                                        "group pt-16 w-60 shadow overflow-hidden relative rounded-xl bg-brand-150/80 mt-4 hover:-translate-y-4 transition-all"
                                    )}
                                    onMouseEnter={() => setCurMentor(mentor)}
                                >
                                    <div
                                        className={cn(
                                            "size-72 pr-8 rounded-lg overflow-hidden group-hover:scale-110 transition-all",
                                            curMentor.name === mentor.name && ""
                                        )}
                                    >
                                        <Image
                                            src={mentor.pfp}
                                            alt="Mentor Image"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="size-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 px-4 py-2 bg-brand-200/40">
                                        <h3 className="text-2xl font-bold">
                                            {mentor.name}
                                        </h3>
                                        <p>{mentor.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default PopularMentors;
