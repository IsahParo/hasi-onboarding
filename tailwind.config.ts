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
        "hasi-bg": "#212224",
        "hasi-cyan": "#0cc0df",
        "hasi-orange": "#f76307",
        "hasi-purple": "#8c52ff",
        cream: "#fffbf0",
        "spotify-green": "#1DB954",
        "whatsapp-green": "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
