import type { Config } from "tailwindcss";

const config: Config = {
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
                agency: {
                    bg: "var(--agency-bg)",
                    fg: "var(--agency-fg)",
                    accent: "var(--agency-accent)",
                },
                mixtape: {
                    bg: "var(--mixtape-bg)",
                    fg: "var(--mixtape-fg)",
                    accent: "var(--mixtape-accent)",
                },
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
        },
    },
    plugins: [],
};
export default config;
