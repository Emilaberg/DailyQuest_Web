/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import textShadow from "tailwindcss-textshadow";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        around: "0 0px 40px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ['"inter"', ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        "2xl": "5px 5px 10px rgba(0, 0, 0, 0.75)", // Even larger shadow
        "3xl": "7px 7px 15px rgba(0, 0, 0, 0.75)", // More pronounced shadow
        "4xl": "10px 10px 20px rgba(0, 0, 0, 0.85)", // Extreme shadow
      },
      backgroundImage: (theme) => ({
        "gradient-primaryBlue": `linear-gradient(to right, ${theme(
          "colors.hotPink"
        )}, ${theme("colors.oceanBlue")})`,
      }),
      colors: {
        midnightBlue: "#05050A",
        midnightBlue_V2: "#0C101F",
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
        hoverBlueHelp: "#122E57",
      },
      backgroundImage: (theme) => ({
        "gradient-border": `linear-gradient(to right, ${theme(
          "colors.teal"
        )}, ${theme("colors.hotPink")})`,
        "gradient-primary": `linear-gradient(to top, ${theme(
          "colors.darkLavander"
        )}, ${theme("colors.lavender")})`,
      }),
    },
  },
  plugins: [textShadow],
};
