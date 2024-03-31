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
        bgPrimary: "#3B413C",
        bgSecondary: "#9DB5B2",
        textPrimary: "#fff",
        bgBtnPrimary: "#94D1BE",
      },
    },
  },
  plugins: [],
};
export default config;
