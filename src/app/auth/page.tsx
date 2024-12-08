"use client";
import LoginForm from "@/components/LoginForm";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import robot from "@/assets/robot.png";
import { Button } from "@/components/ui/button";
import formBg from "@/assets/form-bg.png";
import { useState } from "react";
import RegisterForm from "@/components/RegisterForm";
import { cn } from "@/lib/utils";
import MentorForm from "@/components/MentorForm";
import useAuth from "@/hooks/useAuth";
import NotFound from "../not-found";

const Auth = () => {
    const { session } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [isMentor, setIsMentor] = useState(false);

    if (session) {
        return NotFound();
    }

    const switchPanels = () => {
        setIsLogin((prev) => !prev);
        setIsMentor(false);
    };

    const switchToMentorPanel = () => {
        setIsLogin(false);
        setIsMentor(true);
    };

    const switchToRegister = () => {
        setIsLogin(false);
        setIsMentor(false);
    };

    return (
        <MaxWidthWrapper className="my-16 flex-1">
            <div className="p-1 relative shadow rounded-xl overflow-hidden">
                <div className="min-h-[64rem] lg:min-h-[45rem] relative lg:grid lg:grid-cols-2">
                    {/* Content Panel (Slides vertically on mobile, horizontally on desktop) */}
                    <div
                        className={cn(
                            "absolute transition-all duration-500 ease-in-out",
                            // Mobile (vertical positioning)
                            "inset-x-0 h-1/2",
                            isLogin ? "top-0" : "top-1/2",
                            // Desktop (horizontal positioning)
                            "lg:inset-y-0 lg:w-1/2 lg:h-full",
                            isLogin ? "lg:left-0" : "lg:left-1/2"
                        )}
                    >
                        <div className="py-8 lg:py-16 h-full flex flex-col gap-4 lg:gap-8 justify-center items-center">
                            <h2 className="text-shadow-sm text-white text-4xl lg:text-6xl max-w-72 text-center font-extrabold">
                                {isLogin
                                    ? "Start your journey"
                                    : "Welcome back!"}
                            </h2>
                            <div className="size-32 lg:size-48 animate-float overflow-hidden">
                                <Image
                                    src={robot}
                                    alt="Robot"
                                    className="size-full object-contain"
                                    priority={true}
                                />
                            </div>
                            <Button
                                className="shadow-lg w-1/2 font-bold rounded-xl rounded-br-none"
                                variant="secondary"
                                onClick={switchPanels}
                            >
                                {isLogin ? "Register" : "Login"}
                            </Button>
                        </div>
                    </div>

                    {/* Forms Panel */}
                    <div
                        className={cn(
                            "absolute transition-all duration-500 ease-in-out",
                            // Mobile (vertical positioning)
                            "inset-x-0 h-1/2",
                            isLogin ? "top-1/2" : "top-0",
                            // Desktop (horizontal positioning)
                            "lg:inset-y-0 lg:w-1/2 lg:h-full",
                            isLogin ? "lg:left-1/2" : "lg:left-0"
                        )}
                    >
                        <div className="h-full bg-white px-4 lg:px-8 py-4 shadow rounded-xl flex flex-col items-center justify-center gap-4 overflow-y-scroll">
                            <div
                                className={cn(
                                    "w-full transition-opacity duration-500",
                                    isLogin
                                        ? "opacity-100"
                                        : "opacity-0 absolute pointer-events-none"
                                )}
                            >
                                <LoginForm />
                            </div>
                            <div
                                className={cn(
                                    "w-full transition-opacity duration-500 overflow-y-scroll",
                                    !isLogin
                                        ? "opacity-100"
                                        : "opacity-0 absolute pointer-events-none"
                                )}
                            >
                                {isMentor ? <MentorForm /> : <RegisterForm />}
                            </div>
                            {isMentor ? (
                                <Button
                                    variant="link"
                                    onClick={switchToRegister}
                                >
                                    Become a Member
                                </Button>
                            ) : (
                                <Button
                                    variant="link"
                                    onClick={switchToMentorPanel}
                                >
                                    Become a Mentor
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Background Layers */}
                <div className="absolute -z-10 inset-0 rotate-180 lg:rotate-0 overflow-hidden">
                    <Image
                        src={formBg}
                        alt="Form Container Background"
                        className="object-cover size-full"
                        priority={true}
                    />
                </div>
                <div className="absolute -z-20 inset-0 bg-brand-150" />
            </div>
        </MaxWidthWrapper>
    );
};

export default Auth;
