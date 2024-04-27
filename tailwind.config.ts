import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "custom-black": "#000112",
        "custom-red": "#EA5555",
        "custom-red-hover": "#FF9898",
        "dark-grey": "#2B2C37",
        "light-grey": "#F4F7FD",
        "lines-dark": "#3E3F4E",
        "lines-light": "#E4EBFA",
        "main-purple": "#635FC7",
        "main-purple-hover": "#A8A4FF",
        "medium-grey": "#828FA3",
        "very-dark-grey": "#20212C",
      },
    },
  },
  plugins: [],
};
export default config;
