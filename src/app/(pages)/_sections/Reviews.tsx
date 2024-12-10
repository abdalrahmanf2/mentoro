"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import userImg from "@/assets/user-mock-img.jpg";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const REVIEWS = [
    {
        username: "Username",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique alias hic impedit tempore non",
    },
    {
        username: "Username",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique alias hic impedit tempore non",
    },
    {
        username: "Username",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique alias hic impedit tempore non",
    },
    {
        username: "Username",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique alias hic impedit tempore non",
    },
];

const animation = { duration: 12000, easing: (t: number) => t };

const Reviews = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        renderMode: "performance",
        slides: {
            perView: 4.0,
            spacing: 12,
        },
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        vertical: true,
    });

    return (
        <section className="py-16">
            <MaxWidthWrapper className="grid lg:grid-cols-2 items-center gap-8">
                <div className="relative rounded-xl h-[32rem] overflow-hidden">
                    <div className="p-4 h-full keen-slider" ref={sliderRef}>
                        {REVIEWS.map((review, index) => (
                            <div
                                key={index}
                                className="border-t flex items-center gap-4 keen-slider__slide"
                            >
                                <div className="size-20 rounded-full overflow-hidden">
                                    <Image
                                        src={userImg}
                                        alt="User Image"
                                        className="object-cover size-full"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold">
                                        {review.username}
                                    </h3>
                                    <p>{review.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-x-0 -top-2 h-32 bg-gradient-to-b from-20% from-slate-100" />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-20% from-slate-100" />
                </div>
                <div className="text-center lg:text-start">
                    <h3 className="text-brand-300 text-4xl font-extrabold uppercase">
                        Reviews
                    </h3>
                    <p className="text-base lg:text-lg">
                        Mentoro values transparency with mentor reviews,
                        allowing you to see feedback from others before making
                        your choice. These honest reviews help you find the
                        right mentor, ensuring a better fit for your learning
                        journey.
                    </p>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Reviews;
