import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CTAProps {
    body: string;
    link: string;
}

const CTA = ({ body, link }: CTAProps) => {
    return (
        <section className="py-16">
            <MaxWidthWrapper>
                <div className="space-y-8 rounded-lg shadow flex flex-col justify-center items-center bg-brand-200 p-8">
                    <h2 className="max-w-screen-sm text-center text-white font-bold text-2xl lg:text-4xl">
                        {body}
                    </h2>
                    <Link
                        href="/auth"
                        className={cn(
                            buttonVariants({
                                variant: "secondary",
                                size: "lg",
                            }),
                            "w-6/12 text-md lg:text-xl font-bold rounded-2xl"
                        )}
                    >
                        {link}
                    </Link>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default CTA;
