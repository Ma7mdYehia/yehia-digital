import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shell: "#0F1724",      // dark charcoal-navy app background
        surface: "#1B2433",    // elevated dark surface
        card: "#F8FAF9",       // light off-white cards
        sage: "#3DBA8C",       // primary accent
        "sage-soft": "#4ADE80",
        amber: "#E0A458",      // secondary accent / caution
        ink: "#0B1220",
        muted: "#64748B",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(15,23,36,0.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
