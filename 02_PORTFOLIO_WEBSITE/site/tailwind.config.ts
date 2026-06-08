import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B1220",
        surface: "#0F1724",
        accent: "#3DBA8C",
        amber: "#E0A458",
        "text-primary": "#E8EDF2",
        "text-secondary": "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};

export default config;
