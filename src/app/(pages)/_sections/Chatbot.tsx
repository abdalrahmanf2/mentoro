import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import robot from "@/assets/robot.png";

const Chatbot = () => {
    return (
        <section className="py-16">
            <MaxWidthWrapper>
                <div className="size-40 mx-auto -my-10 overflow-hidden animate-float">
                    <Image
                        src={robot}
                        alt="Robot Image"
                        className="object-contain size-full"
                    />
                </div>
                <div className="shadow p-8 rounded-3xl rounded-bl-none bg-brand-100 text-center">
                    <p className="tracking-wide text-white text-4xl font-extrabold">
                        Need Help?
                        <br />
                        Talk To Mentoro&apos;s Chatbot
                    </p>
                </div>
            </MaxWidthWrapper>
        </section>
    );
};

export default Chatbot;
