import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        mint: "#CFE3DF",
        beige: "#EFE4D8",
        orange: "#FF6A2A",
        teal: "#1B7F79",
        lavender: "#E7DFF0",
        lightGray: "#F6F6F6",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
