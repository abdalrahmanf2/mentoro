import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import firstNodeImg from "@/assets/community/1.jpg";
import secNodeImg from "@/assets/community/2.jpg";
import thirdNodeImg from "@/assets/community/3.jpg";
import fourthNodeImg from "@/assets/community/4.png";

interface Node {
    id: string;
    label?: string;
    img?: StaticImageData;
    width?: string;
    left: string;
    top: string;
}

const NODES: Node[] = [
    {
        id: "share-knowledge",
        label: "Share Knowledge",
        left: "35%",
        top: "10%",
    },
    {
        id: "person-1",
        img: firstNodeImg,
        left: "85%",
        top: "10%",
    },
    {
        id: "person-2",
        img: secNodeImg,
        left: "15%",
        top: "50%",
    },
    {
        id: "latest-tech",
        label: "Latest Technologies Updates",
        left: "50%",
        top: "40%",
    },
    {
        id: "pro-mentors",
        label: "Professional Mentors",
        left: "2%",
        top: "90%",
    },
    {
        id: "person-4",
        img: fourthNodeImg,
        left: "40%",
        top: "100%",
    },
    {
        id: "person-3",
        img: thirdNodeImg,
        left: "75%",
        top: "80%",
    },
];

const EDGES = [
    { from: "share-knowledge", to: "person-1" },
    { from: "share-knowledge", to: "latest-tech" },
    { from: "share-knowledge", to: "person-2" },
    { from: "person-1", to: "latest-tech" },
    { from: "person-1", to: "person-3" },
    { from: "person-2", to: "latest-tech" },
    { from: "person-2", to: "pro-mentors" },
    { from: "person-2", to: "person-4" },
    { from: "latest-tech", to: "person-4" },
    { from: "pro-mentors", to: "person-4" },
    { from: "person-4", to: "person-3" },
];

const Community = () => {
    return (
        <section className="py-16">
            <MaxWidthWrapper className="grid lg:grid-cols-2 gap-16">
                <div className="flex flex-col items-center lg:items-center justify-center gap-4">
                    <h2 className="text-center lg:text-start font-bold text-4xl lg:text-6xl text-brand-200">
                        Technologies moves At speed so Join Our{" "}
                        <span className="text-black">Community.</span>
                    </h2>
                    <p className="text-center lg:text-start">
                        Mentoro’s community is always active and up-to-date,
                        offering fresh discussions and insights every day. Stay
                        connected with the latest trends, ideas, and mentorship
                        tailored to your evolving needs.
                    </p>
                    <Link
                        href="/auth"
                        className={cn(
                            buttonVariants({
                                variant: "secondary",
                                size: "lg",
                            }),
                            "w-8/12 font-bold rounded-2xl shadow-black/30 bg-brand-50 hover:bg-brand-50/80"
                        )}
                    >
                        Join Now
                    </Link>
                </div>
                <div className="relative mx-8 min-h-[32rem]">
                    <div className="relative h-full w-full aspect-video max-w-2xl mx-auto">
                        <svg className="animate-pulse absolute inset-0 size-full">
                            {EDGES.map((edge, index) => {
                                const from = NODES.find(
                                    (node) => node.id === edge.from
                                ) || { left: "0%", top: "0%" };

                                const to = NODES.find(
                                    (node) => node.id === edge.to
                                ) || { left: "0%", top: "0%" };

                                return (
                                    <line
                                        key={index}
                                        x1={from.left}
                                        y1={from.top}
                                        x2={to.left}
                                        y2={to.top}
                                        stroke="black"
                                        strokeWidth="1"
                                        className="animate-pulse"
                                        style={{
                                            animationDelay: `${index + 5}s`,
                                        }}
                                    />
                                );
                            })}
                        </svg>

                        <div className="relative size-full">
                            {NODES.map((node) => (
                                <div
                                    key={node.id}
                                    className={cn(
                                        "absolute flex items-center justify-center overflow-hidden size-20 text-xs lg:size-28 bg-brand-50 shadow-md shadow-black/30 rounded-full",
                                        node.img && "size-28 lg:size-36",
                                        node.id === "pro-mentors" &&
                                            "size-28 lg:size-36"
                                    )}
                                    style={{
                                        top: `calc(${node.top} - ${node.img || node.id === "pro-mentors" ? "18%" : "12%"})`,
                                        left: `calc(${node.left} - ${node.img ? "12%" : "10%"})`,
                                    }}
                                >
                                    {node.label && (
                                        <span
                                            className={cn(
                                                "p-2 relative inset-0 font-bold text-sm text-center leading-tight text-pretty",
                                                node.id === "pro-mentors" &&
                                                    "p-4 text-md"
                                            )}
                                        >
                                            {node.id === "pro-mentors" && (
                                                <>
                                                    <span className="text-2xl">
                                                        50+
                                                    </span>
                                                    <br />
                                                </>
                                            )}
                                            {node.label}
                                        </span>
                                    )}
                                    {node.img && (
                                        <Image
                                            src={node.img}
                                            alt="Node Image"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            className="size-full object-cover"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Community;
