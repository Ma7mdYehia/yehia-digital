import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Brand palette is applied via arbitrary values (e.g. text-[#E8EDF2])
      // and CSS custom properties in globals.css. Named color keys are
      // intentionally omitted: a key named "base" would collide with the
      // built-in `.text-base` font-size utility.
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
