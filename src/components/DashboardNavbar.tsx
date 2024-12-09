"use client";
import Image from "next/image";
import robot from "@/assets/robot.png";
import { Bell, ChevronDown } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import NotFound from "@/app/not-found";
import Link from "next/link";

const DashboardNavbar = () => {
    const { session } = useAuth();

    if (!session) {
        return NotFound();
    }

    return (
        <header className="sticky bg-white/90 backdrop-blur top-0 left-0 z-10 w-full py-2 shadow-lg shadow-black/10 flex items-center justify-between px-8">
            <Link href="/mentor-dashboard">
                <div className="size-16 overflow-hidden">
                    <Image
                        src={robot}
                        alt="Robot"
                        className="size-full object-contain"
                    />
                </div>
            </Link>
            <div className="flex gap-4 items-center">
                <Bell className="cursor-pointer" />
                <div className="shadow size-12 rounded-full overflow-hidden">
                    <Image
                        src={session.user.picture}
                        alt="Mentor Picture"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="size-full object-contain"
                    />
                </div>
                <p>{session.name}</p>
                <ChevronDown className="cursor-pointer" />
            </div>
        </header>
    );
};

export default DashboardNavbar;
