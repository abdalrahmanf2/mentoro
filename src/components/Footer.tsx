import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
    Clock,
    Facebook,
    Github,
    Linkedin,
    Mail,
    PhoneCall,
    Twitter,
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="pt-32 relative">
            <div className="absolute inset-0 -z-10">
                <svg
                    viewBox="0 0 1440 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-252 59.7273C503.693 -16.4694 924.606 -23.2761 1668 59.7273L1668 447.377H-252V59.7273Z"
                        fill="#0AB68B"
                    />
                </svg>
            </div>
            <MaxWidthWrapper className="bg-brand-200 flex flex-col lg:flex-row gap-8 justify-between items-center lg:items-start">
                <div className="flex gap-8">
                    <div className="space-y-4">
                        <h4 className="text-brand-500 text-xl font-bold">
                            Categories
                        </h4>
                        <nav className="flex flex-col gap-2">
                            <Link
                                className={
                                    (cn(buttonVariants({ variant: "link" })),
                                    "text-brand-400 hover:underline")
                                }
                                href="#"
                            >
                                Community
                            </Link>
                            <Link
                                className={
                                    (cn(buttonVariants({ variant: "link" })),
                                    "text-brand-400 hover:underline")
                                }
                                href="#"
                            >
                                Mentors
                            </Link>
                            <Link
                                className={
                                    (cn(buttonVariants({ variant: "link" })),
                                    "text-brand-400 hover:underline")
                                }
                                href="#"
                            >
                                Request Task
                            </Link>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-brand-500 text-xl font-bold">
                            Links
                        </h4>
                        <nav className="flex flex-col gap-2">
                            <Link
                                className={
                                    (cn(buttonVariants({ variant: "link" })),
                                    "text-brand-400 hover:underline")
                                }
                                href="#"
                            >
                                About Us
                            </Link>
                            <Link
                                className={
                                    (cn(buttonVariants({ variant: "link" })),
                                    "text-brand-400 hover:underline")
                                }
                                href="#"
                            >
                                Blog
                            </Link>
                        </nav>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="flex items-center gap-2 text-brand-400">
                        <PhoneCall className="inline" />
                        Tel: +9229341037
                    </p>
                    <p className="flex items-center gap-2 text-brand-400">
                        <Clock className="inline" />
                        Response hours: 24/7
                    </p>
                    <p className="flex items-center gap-2 text-brand-400">
                        <Mail className="inline" />
                        Email: info@GUIDEME.com
                    </p>
                    <div className="text-brand-400 flex justify-evenly gap-2">
                        <Link href="#">
                            <Twitter />
                        </Link>
                        <Link href="#">
                            <Linkedin />
                        </Link>
                        <Link href="#">
                            <Facebook />
                        </Link>
                        <Link href="#">
                            <Github />
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
            <div className="bg-brand-200 w-full h-16"></div>
        </footer>
    );
};

export default Footer;
