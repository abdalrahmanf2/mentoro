"use client";
import { cn } from "@/lib/utils";
import { UserCircle } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"], weight: ["600"] });

const Navbar = () => {
    const curPath = usePathname();

    return (
        <header className="flex items-center justify-between p-8">
            <h1 className={`${inter.className} text-2xl`}>Mentoro</h1>
            <nav className="ring ring-gray-400 rounded-2xl flex justify-center items-center gap-2">
                <Link
                    href="/"
                    className={cn(
                        curPath === "/" &&
                            "rounded-2xl border-2 border-gray-300",
                        "-m-px px-4 py-2 text-brand-200 font-bold"
                    )}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className={cn(
                        curPath === "/mentors" &&
                            "rounded-2xl border-2 border-gray-300",
                        "-m-px px-4 py-2 text-brand-200 font-bold"
                    )}
                >
                    Mentors
                </Link>
                <Link
                    href="#"
                    className={cn(
                        curPath === "/contact-us" &&
                            "rounded-2xl border-2 border-gray-300",
                        "-m-px px-4 py-2 text-brand-200 font-bold"
                    )}
                >
                    Contact Us
                </Link>
            </nav>

            <div className="cursor-pointer">
                <UserCircle className="text-brand-200 size-6" />
            </div>
        </header>
    );
};

export default Navbar;
