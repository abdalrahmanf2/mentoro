"use client";
import NotFound from "@/app/not-found";
import Plans from "@/components/Plans";
import { Button, buttonVariants } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import {
    Camera,
    MapPin,
    PlusCircle,
    Send,
    SquarePen,
    Star,
} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const DAYS = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

const Profile = () => {
    const { session } = useAuth();

    if (!session) {
        return NotFound();
    }

    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="max-h-[80vh] pt-16 pb-4 px-4 col-span-8 overflow-y-scroll space-y-8">
                <div className="rounded-xl p-4 bg-white shadow shadow-black/40">
                    <div className="flex gap-8">
                        <div className="relative -top-20">
                            <div className="size-36 p-1 bg-gradient-to-b from-brand-150 to-black rounded-full overflow-hidden">
                                <Image
                                    src={session.user.picture}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    alt="Profile Picture"
                                    className="bg-gray-100 size-full object-contain rounded-full"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 cursor-pointer rounded-full p-1 shadow shadow-black/60 bg-white group hover:bg-brand-150 transition">
                                <Camera className="size-6 text-brand-150 group-hover:text-white transition" />
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-start gap-2">
                            <h2 className="text-4xl font-bold">
                                {session.user.name}
                            </h2>
                            <p className="text-lg font-bold">
                                {session.user.role}
                                <br />
                                <span className="font-semibold text-sm inline-flex gap-2 items-center">
                                    <Star className="size-4 fill-brand-100" />{" "}
                                    5.0 (76 Reviews)
                                </span>
                            </p>
                            <Button className="self-end text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                                <Send />
                                Send Message
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2 p-4 bg-white shadow shadow-black/40 rounded-xl">
                    <h3 className="text-xl font-extrabold flex gap-2 items-center">
                        About Me
                        <SquarePen className="text-brand-150" />
                    </h3>
                    <p>
                        {
                            'I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022, although I had switched teams 6 months before and had to learn everything from scratch. I have taken 25+ interviews for Google and have mentored 10+ people to get into Google. I have also mentored 5+ Googlers on enhancing their career and promo packet (L3 -> L4). I joined Google in Aug 2020 and got "Exceed Expectation" in my first performance review. I got promoted to SWE3 in May 2022 ..'
                        }
                    </p>
                    <Button className="min-w-32 self-end text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                        Read More
                    </Button>
                </div>
                <div className="space-y-2 p-4 bg-white shadow shadow-black/40 rounded-xl">
                    <h3 className="text-xl font-extrabold">Skills</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        {session.user.skills.map((skill) => (
                            <div
                                key={skill}
                                className="px-4 py-2 font-bold text-center min-w-32 bg-brand-150 shadow shadow-black/40 rounded-full rounded-bl-none"
                            >
                                {skill}
                            </div>
                        ))}
                        <PlusCircle className="size-8 text-brand-150 hover:opacity-70 cursor-pointer transition" />
                    </div>
                </div>

                <div className="space-y-2 p-4 bg-brand-50 shadow shadow-black/40 rounded-xl">
                    <h3 className="text-xl font-extrabold">Dashboard</h3>

                    <div className="grid grid-cols-7">
                        {DAYS.map((day) => (
                            <div
                                key={day}
                                className="flex flex-col items-center"
                            >
                                <Progress value={32} />
                                <span>{day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 p-4 bg-white shadow shadow-black/40 rounded-xl">
                    <h3 className="text-xl font-extrabold">
                        Book an Intro Call
                    </h3>
                    <div className="flex flex-col gap-4 items-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="w-8/12 text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                                    Monday 10:00PM / 12:00 PM
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className="text-4xl font-bold">
                                        Are you sure?
                                    </DialogTitle>
                                    <DialogDescription>
                                        Do you want the intro call on Monday
                                        10:00 PM - 12:00 PM
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter className="flex items-center gap-2">
                                    <Button className="w-4/12 text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                                        Yes
                                    </Button>
                                    <Button className="w-4/12 text-black font-bold rounded-full rounded-bl-none bg-brand-100 hover:bg-brand-100 hover:opacity-80 transition shadow">
                                        No
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                        <Button className="w-8/12 text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                            Monday 10:00PM / 12:00 PM
                        </Button>
                        <Button className="w-8/12 text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                            Monday 10:00PM / 12:00 PM
                        </Button>
                        <Button className="w-8/12 text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                            Monday 10:00PM / 12:00 PM
                        </Button>
                    </div>
                </div>
            </div>
            <div className="col-span-4 p-4 space-y-8">
                <div className="space-y-4">
                    <div className="bg-white shadow shadow-black/40 p-4 rounded-xl space-y-2">
                        <h3 className="text-lg font-extrabold">Location</h3>
                        <p className="flex text-xs font-bold gap-2 items-center">
                            <MapPin className="size-4" />
                            {session.user.location}
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-white shadow shadow-black/40 p-4 rounded-xl space-y-2">
                        <h3 className="text-lg font-extrabold">Conncet</h3>
                        <Link
                            className={cn(buttonVariants({ variant: "link" }))}
                            href=""
                        >
                            <BsLinkedin />
                            LinkedIn
                        </Link>
                        <Link
                            className={cn(buttonVariants({ variant: "link" }))}
                            href=""
                        >
                            <BiLogoGmail />
                            Gmail
                        </Link>
                        <Link
                            className={cn(buttonVariants({ variant: "link" }))}
                            href=""
                        >
                            <BsGithub />
                            Github
                        </Link>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-white shadow shadow-black/40 p-4 rounded-xl space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-extrabold">Plans</h3>
                            <Button className="text-black font-bold rounded-full rounded-bl-none bg-brand-150 shadow">
                                Edit plans
                            </Button>
                        </div>
                        <Plans />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
