import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const nextFont = Poppins({
  weight: ["400"],
  subsets: ["devanagari"],
});

const theme = extendTheme({
  colors: {
    brand: {
      500: "#05740c",
    },
    typography: {
      black: "#000000",
      gray: "#8D8D8D",
      lightGray: "#e0dede",
      white: "#ffffff",
      offWhite: "#f8f8f8",
      mediumWhite: "#f3f2f2",
      darkGreen: "#072A36",
      green: "#05740c",
      lightGreen: "#0aa515",
      mediumGreen: "#10dc6c",
      lighterGreen: "#DFF3D9",
      transGreen: "hsla(124, 89%, 34%, 0.7)",
      red: "#aa1e38",
      lightRed: "#F5C9C9",
    },
  },
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
});

export default theme;
