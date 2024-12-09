import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
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
                <AuthContextProvider>
                    <main className="relative flex-1 flex flex-col">
                        {children}
                    </main>
                </AuthContextProvider>
            </body>
        </html>
    );
};

export default RootLayout;
