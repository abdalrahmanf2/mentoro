import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import community from "@/assets/community.png";
import assistance from "@/assets/assistance-from-mentors.png";
import aiAssistance from "@/assets/ai-assistance.png";

const About = () => {
    return (
        <section className="py-16">
            <MaxWidthWrapper className="flex flex-col lg:flex-row items-center justify-center gap-16">
                <div className="flex-1 px-4 -space-y-20">
                    <div className="inline-flex -space-x-10">
                        <HeroCard cardClassName="-rotate-12" imgSrc={community}>
                            Community
                        </HeroCard>
                        <HeroCard cardClassName="rotate-12" imgSrc={assistance}>
                            Create Personalized Mentorship
                        </HeroCard>
                    </div>
                    <div className="inline-flex -space-x-8">
                        <HeroCard
                            cardClassName="-rotate-[8deg]"
                            textClassName="order-last"
                            imgSrc={assistance}
                        >
                            Requesting assistance from mentors to meet your
                            unique needs
                        </HeroCard>
                        <HeroCard
                            cardClassName="rotate-[8deg]"
                            textClassName="order-last"
                            imgSrc={aiAssistance}
                        >
                            AI assistance to enhance your learning experience
                        </HeroCard>
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <h2 className="text-center lg:text-start uppercase text-3xl md:text-4xl text-brand-300 font-extrabold">
                            Who are mentoro
                        </h2>
                        <svg
                            width="222"
                            height="26"
                            viewBox="0 0 222 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto"
                        >
                            <path
                                d="M221.623 15.0281C221.416 13.3027 218.184 12.3015 213.825 12.1158C176.779 10.5397 139.617 9.37214 102.386 8.61469L106.66 8.57691C114.989 8.50134 123.288 8.30457 131.498 7.74099C131.595 7.7347 131.688 7.72367 131.78 7.71423C142.979 7.68117 154.178 7.7221 165.368 7.82285C180.352 7.95666 195.327 8.19594 210.294 8.49504C214.373 8.5769 218.272 7.09713 218.091 5.58272C217.889 3.87941 214.656 2.82783 210.294 2.6704C161.069 0.899398 111.512 0.474358 62.1226 1.42047C55.3494 1.54956 48.5805 1.70698 41.8158 1.88801C39.9444 0.945053 36.7664 0.43815 33.5 0.775035C24.514 1.70068 15.5113 2.61058 6.50004 3.50317C2.74044 3.87626 0.409667 5.29307 0.915442 6.69885C1.01238 6.96804 1.23155 7.23724 1.54345 7.49384C0.536111 8.00861 -0.0708183 8.63358 0.000833061 9.22549C0.160995 10.573 2.34847 11.5916 5.72452 12.0339C17.1171 13.5279 29.4496 13.5074 41.4406 13.5782C41.0782 13.8096 40.7958 14.0505 40.623 14.2851C39.8432 15.3398 40.7663 16.3205 42.6292 17.1187C47.5689 19.2328 55.9732 19.2738 62.856 19.5619C69.7472 19.8515 76.6636 20.0593 83.5801 20.2467C86.8971 20.3364 90.2184 20.4214 93.5396 20.508C93.5944 20.9488 93.9063 21.3817 94.5259 21.7658C97.2149 23.4376 101.712 24.7458 106.913 25.1031C110.475 25.3471 114.508 24.8308 116.047 23.5667C127.098 23.7288 138.166 23.6564 149.204 23.3495C153.107 23.2408 156.323 22.3246 156.863 20.8244C157.368 19.4202 155.054 18.0002 151.278 17.6287C145.015 17.0132 138.688 16.5409 132.328 16.1647C147.405 16.2827 162.468 16.5756 177.515 16.9455C189.628 17.2446 201.729 17.5925 213.834 17.9436C217.91 18.0616 221.808 16.5205 221.631 15.0312L221.623 15.0281Z"
                                fill="#FD661F"
                            />
                        </svg>
                    </div>
                    <p className="text-center lg:text-start text-base md:text-lg">
                        This platform designed to empower your personal and
                        professional growth through tailored mentorship. Connect
                        with a vibrant community, request specific guidance from
                        experienced mentors, and create customized roadmaps to
                        achieve your goals. With interactive quizzes and tasks
                        personalized to your preferences, along with AI
                        assistance to enhance your journey, Mentoro provides
                        everything you need to learn, grow, and succeed.
                    </p>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

interface HeroCardProps {
    children: React.ReactNode;
    textClassName?: string;
    cardClassName?: string;
    imgSrc: StaticImageData;
}

const HeroCard = ({
    children,
    textClassName,
    cardClassName,
    imgSrc,
}: HeroCardProps) => {
    return (
        <div
            className={cn(
                "w-full inline-flex flex-col items-center gap-4 rounded-xl p-4 shadow bg-brand-200",
                cardClassName
            )}
        >
            <p
                className={cn(
                    "text-center md:max-w-60 text-white text-lg md:text-2xl font-extrabold",
                    textClassName
                )}
            >
                {children}
            </p>
            <div className="size-full rounded-lg overflow-hidden">
                <Image
                    className="h-full object-cover"
                    src={imgSrc}
                    alt="Card Banner"
                />
            </div>
        </div>
    );
};

export default About;
