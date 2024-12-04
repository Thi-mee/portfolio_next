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
        deepBlue: "#1E3A8A",
        slateGray: "#64748B",
        accent: "#F43F5E", // Umbrella accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg2.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
