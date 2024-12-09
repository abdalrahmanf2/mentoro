"use client";
import Link from "next/link";
import Icons from "./Icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
    const curPathname = usePathname();

    return (
        <aside className="h-screen fixed top-0 left-0 w-fit flex-col gap-4 pt-28 pb-4 px-4 bg-white shadow">
            <nav className="flex flex-col gap-4">
                <Link
                    className={cn(
                        "hover:bg-gray-200 p-2 rounded-xl transition",
                        curPathname === "/mentor-dashboard/profile" &&
                            "bg-brand-100 text-black"
                    )}
                    href="/mentor-dashboard/profile"
                >
                    <Icons.User className="size-6" />
                </Link>
                <Link
                    className={cn(
                        "hover:bg-gray-200 p-2 rounded-xl transition",
                        curPathname === "/mentor-dashboard/courses" &&
                            "bg-brand-100 text-black"
                    )}
                    href="/mentor-dashboard/courses"
                >
                    <Icons.Courses className="size-6" />
                </Link>
                <Link
                    className={cn(
                        "hover:bg-gray-200 p-2 rounded-xl transition"
                    )}
                    href="/mentor-dashboard"
                >
                    <Icons.Chat className="size-6" />
                </Link>
                <Link
                    className={cn(
                        "hover:bg-gray-200 p-2 rounded-xl transition",
                        curPathname === "/mentor-dashboard/schedule" &&
                            "bg-brand-100 text-black"
                    )}
                    href="/mentor-dashboard/schedule"
                >
                    <Icons.Schedule className="size-6" />
                </Link>
            </nav>
        </aside>
    );
};

export default DashboardSidebar;
