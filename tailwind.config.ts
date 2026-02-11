import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
                mono: ['var(--font-roboto-mono)'],
            },
            colors: {
                fintech: {
                    900: '#0f172a',
                    800: '#1e293b',
                    500: '#3b82f6',
                    400: '#60a5fa',
                    50: '#f8fafc',
                }
            }
        },
    },
    plugins: [],
};
export default config;