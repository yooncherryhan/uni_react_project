/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          sm: "1rem",
          md: "2rem",
          lg: "2.5rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
      colors: {
        color: {
          1: "#F74780",
          2: "#FFA7C3",
        },
        n: {
          1: "#FFFFFF",
          2: "#83869A",
          3: "#666CA3",
          4: "#13183F",
        },
      },
      fontFamily: {
        jakarta: ["var(--font-jakarta)", ...fontFamily.serif],
      },
      boxShadow: {
        card: "0 25px 50px 0px rgba(6, 22, 141, 4.42%)",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(0deg, rgba(240,42,166,1) 0%, rgba(255,111,72,1) 100%)",
        "gradient-2":
          "linear-gradient(0deg, rgba(240,42,166,1) 0%, rgba(72,81,255,1) 100%)",
        "gradient-3":
          " linear-gradient(0deg, rgba(255,255,255,.5), rgba(255,255,255,.5)), linear-gradient(to bottom, rgba(72,81,255,1), rgba(240,42,166,1))",
        "gradient-bg":
          "linear-gradient(0deg, rgba(240,241,255,1) 0%, rgba(255,255,255,1) 100%);",
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          "@apply max-w-[74.375rem] mx-auto px-4 md:px-10": {},
        },
        ".headingXL": {
          "@apply font-jakarta font-extrabold text-[3.5rem] leading-[4.375rem]":
            {},
        },
        ".headingL": {
          "@apply font-jakarta font-extrabold text-[2.5rem] leading-[3.188rem]":
            {},
        },
        ".headingM": {
          "@apply font-jakarta font-extrabold text-[2rem] leading-[2.5rem]": {},
        },
        ".headingS": {
          "@apply font-jakarta font-extrabold text-[1.5rem] leading-[1.75rem]":
            {},
        },
        ".bodyM": {
          "@apply font-jakarta font-medium text-lg": {},
        },
        ".bodyS": {
          "@apply font-jakarta font-medium text-base leading-[1.625rem]": {},
        },
        ".btn-one": {
          "@apply font-jakarta font-bold text-base lg:text-lg leading-7 text-n-1 rounded-full bg-n-4 px-[23px] lg:px-[33px] py-[10px] lg:py-[15px] z-10 transition-colors duration-300 hover:bg-n-3":
            {},
        },
        ".btn-two": {
          "@apply font-jakarta font-bold text-base lg:text-lg leading-7 text-n-1 rounded-full bg-gradient-1 px-[37px] lg:px-[33px] py-[14px] lg:py-[17px] transition-opacity duration-300 hover:opacity-50":
            {},
        },
        ".btn-three": {
          "@apply font-jakarta font-bold text-base leading-7 lg:text-lg text-n-1 rounded-full bg-gradient-2 px-[23px] py-[10px] lg:py-[13px] lg:px-[30px] transition-colors duration-300 hover:bg-gradient-3":
            {},
        },
      });
    }),
    nextui(),
  ],
};
