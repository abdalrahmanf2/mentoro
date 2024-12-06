import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    "200": "#0AB68B",
                },
            },
            animation: {
                float: "",
            },
            keyframes: {
                float: {
                    "0%": { transform: "translateY(0%)" },
                    "100%": { transform: "translateY(100%)" },
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
