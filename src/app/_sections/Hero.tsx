import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import robot from "@/assets/robot.png";
import SearchBar from "@/components/SearchBar";

const Hero = () => {
    return (
        <section className="py-16 md:py-32">
            <MaxWidthWrapper className="flex flex-col items-center gap-8">
                <h1 className="text-center tracking-wide uppercase text-brand-200 font-extrabold text-3xl md:text-5xl lg:text-7xl">
                    Build your own road
                    <br />
                    by finding{" "}
                    <span className="relative">
                        <Image
                            className="relative -z-10 animate-float w-2/12 inline"
                            src={robot}
                            alt="robot"
                        />
                        <div className="absolute top-0 md:top-2 -right-20 md:-right-32 bg-brand-100 text-xs md:text-xl lg:text-2xl text-white rounded-full px-4 py-2 hover:opacity-85 hover:text-black transition">
                            <Link href="/auth">Join Us</Link>
                            <div className="absolute -rotate-45 -bottom-3 -left-5 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-brand-100 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent"></div>
                        </div>
                    </span>
                    <br /> your ideal{" "}
                    <span className="text-4xl md:text-7xl lg:text-8xl text-stroke">
                        M
                    </span>
                    entor
                </h1>

                <SearchBar />
            </MaxWidthWrapper>
        </section>
    );
};

export default Hero;
