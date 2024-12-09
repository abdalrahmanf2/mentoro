"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CircleCheckBig, Crown } from "lucide-react";

interface ArrowProps {
    left?: boolean;
    onClick: (e: React.MouseEvent<SVGSVGElement>) => void;
    disabled?: boolean;
}

const Arrow: React.FC<ArrowProps> = ({ left, onClick, disabled }) => {
    const disabledClass = disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={onClick}
            className={`arrow ${left ? "arrow--left" : "arrow--right"} ${disabledClass}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
};

const Plans: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    return (
        <>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide min-h-[8rem] flex flex-col justify-center items-center gap-4 px-8">
                        <div className="font-bold text-xl text-nowrap flex items-center gap-2">
                            <Crown />
                            20LE <span className="text-xs">/Month</span>
                        </div>
                        <div className="text-center space-y-2">
                            <h4 className="text-lg font-bold">Starter</h4>
                            <p className="text-xs">
                                Unleash the power of Automation.
                            </p>
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-2 items-center">
                                    <CircleCheckBig className="text-brand-150 size-4" />
                                    <span>Free Chat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="keen-slider__slide h-[16rem] flex flex-col items-center gap-4 px-8">
                        <div className="font-bold text-xl text-nowrap flex items-center gap-2">
                            <Crown />
                            200LE <span className="text-xs">/Month</span>
                        </div>
                        <div className="text-center space-y-2">
                            <h4 className="text-lg font-bold">Professional</h4>
                            <p className="text-xs">
                                Automation plus enterprise-grade features.
                            </p>
                            <ul className="flex flex-col gap-2">
                                <li className="flex gap-2 items-center">
                                    <CircleCheckBig className="text-brand-150 size-4" />
                                    <span>Free Chat</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <CircleCheckBig className="text-brand-150 size-4" />
                                    <span>3 Free Session</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <CircleCheckBig className="text-brand-150 size-4" />
                                    <span>Roadmap</span>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <CircleCheckBig className="text-brand-150 size-4" />
                                    <span>1 Test</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) => {
                                e.stopPropagation();
                                instanceRef.current?.prev();
                            }}
                            disabled={currentSlide === 0}
                        />
                        <Arrow
                            onClick={(e) => {
                                e.stopPropagation();
                                instanceRef.current?.next();
                            }}
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides
                                    .length -
                                    1
                            }
                        />
                    </>
                )}
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                    {[
                        ...Array(
                            instanceRef.current.track.details.slides.length
                        ).keys(),
                    ].map((idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                instanceRef.current?.moveToIdx(idx);
                            }}
                            className={`dot${currentSlide === idx ? " active" : ""}`}
                        ></button>
                    ))}
                </div>
            )}
        </>
    );
};

export default Plans;
