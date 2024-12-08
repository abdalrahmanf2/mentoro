"use client";
import useAuth from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { UserCircle } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

const Navbar = () => {
    const curPath = usePathname();
    const { session } = useAuth();
    console.log(session);

    return (
        <header className="grid justify-center gap-4 md:grid-cols-3 py-8 md:px-16">
            <h1
                className={`${inter.className} justify-self-center md:justify-self-start text-2xl md:text-3xl`}
            >
                <Link href="/">Mentoro</Link>
            </h1>
            <nav className="justify-self-center p-px ring-2 ring-gray-300 rounded-2xl flex items-center gap-2">
                <Link
                    href="/"
                    className={cn(
                        "rounded-2xl -m-px px-4 py-1 text-sm md:text-lg text-brand-200 transition",
                        curPath === "/"
                            ? "rounded-2xl text-black bg-brand-100 hover:opacity-85"
                            : "text-brand-200 hover:bg-brand-100/25 hover:text-black"
                    )}
                >
                    Home
                </Link>
                {session?.isMentor ? (
                    <Link
                        href="/mentor-dashboard"
                        className={cn(
                            "rounded-2xl -m-px px-4 py-1 text-sm md:text-lg text-brand-200 transition text-nowrap",
                            curPath === "/mentor-dashboard"
                                ? "rounded-2xl text-black bg-brand-100 hover:opacity-85"
                                : "text-brand-200 hover:bg-brand-100/25 hover:text-black"
                        )}
                    >
                        Mentor&apos;s Dashboard
                    </Link>
                ) : (
                    <Link
                        href="/mentors"
                        className={cn(
                            "rounded-2xl -m-px px-4 py-1 text-sm md:text-lg text-brand-200 transition",
                            curPath === "/mentors"
                                ? "rounded-2xl text-black bg-brand-100 hover:opacity-85"
                                : "text-brand-200 hover:bg-brand-100/25 hover:text-black"
                        )}
                    >
                        Mentors
                    </Link>
                )}
                <Link
                    href="/contact-us"
                    className={cn(
                        "rounded-2xl -m-px px-4 py-1 text-sm md:text-lg text-brand-200 transition text-nowrap",
                        curPath === "/contact-us"
                            ? "rounded-2xl text-black bg-brand-100 hover:opacity-85"
                            : "text-brand-200 hover:bg-brand-100/25 hover:text-black"
                    )}
                >
                    Contact Us
                </Link>
            </nav>

            <div className="gap-4 justify-self-end hidden md:flex items-center cursor-pointer">
                {!session && (
                    <Link href="/auth">
                        <UserCircle className="text-brand-200 size-8 hover:stroke-brand-100 transition" />
                    </Link>
                )}
                {session?.isAdmin && (
                    <Link
                        href="/admin"
                        className={cn(
                            buttonVariants({
                                variant: "default",
                                size: "lg",
                            })
                        )}
                    >
                        Mentors Applications
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;
