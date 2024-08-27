/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        midnightBlue: "#05050A",
        slateBlue: "#1F2B35",
        lightSlateGray: "#D9D9D9",
        adminLightSlateGray: "#BABBBB",
        oceanBlue: "#2765BD",
        teal: "#76ABAE",
        hotPink: "#88089C",
        oceanBlue: "#08299C",
        adminGray: "#1D1D1E",
        highlightGreen: "#1DD270",
        highlightOragen: "#E6A82A",
        highlightRed: "#810000",
        lavender: "#7966FF",
        darkLavander: "#493D99",
        charcoalBlack: "#0E0E0F",
        primaryblue: "#145CA6",
      },
    },
  },
  plugins: [],
};
