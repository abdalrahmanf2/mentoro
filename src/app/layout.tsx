import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
            <body className={`${lato.className} antialiased`}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default RootLayout;
