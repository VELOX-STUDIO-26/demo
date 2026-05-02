import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        secondary: "#1A3C6E",
        accent: "#00A6FB",
        ice: "#F0F6FF",
        body: "#0F172A",
        muted: "#94A3B8",
        caption: "#64748B",
        border: "#DBEAFE",
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
    },
  },
  plugins: [],
};

export default config;
