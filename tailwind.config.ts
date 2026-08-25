import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-navy": "#071A3D",
        "corporate-navy": "#0D2A5C",
        "octolabs-blue": "#123F7A",
        "tech-cyan": "#12A8C4",
        "bright-cyan": "#22C7DF",
        "light-bg": "#F6F8FB",
        "text-gray": "#667085",
        "dark-bg": "#050B18",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(18,168,196,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(18,168,196,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
