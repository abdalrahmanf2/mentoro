import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthContextProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
    title: "Mentoro | Build your own road",
    description: "Build your own road by finding your ideal mentor",
};

const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-sans",
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body
                className={`${lato.className} min-h-[calc(100vh-1px)] flex flex-col antialiased`}
            >
                <div className="absolute -top-10 -left-10 -z-50">
                    <svg
                        width="137"
                        height="258"
                        viewBox="0 0 137 258"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M110.118 -30.1119C138.566 12.9974 145.722 74.1319 124.364 113.024C103.006 151.916 53.2442 168.064 9.14661 196.146C-34.8958 223.978 -73.2184 263.494 -104.624 256.689C-135.849 250.207 -159.978 197.728 -172.306 152.125C-184.69 106.774 -185.094 68.6228 -180.87 26.5534C-176.465 -15.1923 -167.377 -61.1073 -139.454 -86.4462C-111.767 -111.858 -64.8991 -117.122 -16.5952 -107.212C31.7638 -97.5532 81.6143 -72.9705 110.118 -30.1119Z"
                            fill="#FD661F"
                        />
                    </svg>
                </div>
                <AuthContextProvider>
                    <Navbar />
                    <main className="relative flex-1 flex flex-col">
                        {children}
                    </main>
                </AuthContextProvider>
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
