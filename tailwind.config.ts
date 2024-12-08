import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                brand: {
                    "50": "#F9F6F2",
                    "100": "#FD661F",
                    "150": "#26CF9A",
                    "200": "#0AB68B",
                    "300": "#0E9B6F",
                    "400": "#0B7077",
                    "500": "#0A033C",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            animation: {
                float: "float 3s ease infinite",
                fade: "fade 1s ease",
                marquee: "marquee var(--marquee-duration) linear infinite",
                flashing: "flashing 1.4s infinite linear",
                "move-left": "move-left 10s linear infinite",
                "move-right": "move-right 10s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": {
                        transform: "translateY(5%)",
                    },
                    "50%": {
                        transform: "translateY(-5%)",
                    },
                },

                fade: {
                    "0%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                    },
                },
                marquee: {
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
                flashing: {
                    "0%, 100%": { opacity: "0.2" },
                    "20%": { opacity: "1" },
                },
                "move-left": {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-50%)",
                    },
                },
                "move-right": {
                    "0%": {
                        transform: "translateX(-50%)",
                    },
                    "100%": {
                        transform: "translateX(0%)",
                    },
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-textshadow"),
    ],
} satisfies Config;
