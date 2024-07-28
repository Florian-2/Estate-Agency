import type { Config } from "tailwindcss";
import { paragraph } from "./tailwind-plugins";

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            spacing: {
                "3.5": "0.875rem",
                "4.5": "1.125rem",
            },
            screens: {
                "3xl": "1920px",
                "4xl": "2560px",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                "gray-08": "hsl(var(--gray-08))",
                "gray-10": "hsl(var(--gray-10))",
                "gray-15": "hsl(var(--gray-15))",
                "gray-20": "hsl(var(--gray-20))",
                "gray-30": "hsl(var(--gray-30))",
                "gray-40": "hsl(var(--gray-40))",
                "gray-50": "hsl(var(--gray-50))",
                "gray-60": "hsl(var(--gray-60))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            backgroundImage: {
                "gradient-130": "linear-gradient(130deg, var(--tw-gradient-stops) 40%)",
                "gradient-test":
                    "linear-gradient(-45deg, hsl(263.4, 70%, 50.4%), hsl(263.4, 70%, 60.4%), hsl(263.4, 70%, 40.4%))",
            },
            gridTemplateRows: {
                gallery: "150px 1fr",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                background: {
                    "0%": {
                        backgroundPosition: "0% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                    },
                    "100%": {
                        backgroundPosition: "0% 50%",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                background: "background 4s ease infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), paragraph],
} satisfies Config;

export default config;
